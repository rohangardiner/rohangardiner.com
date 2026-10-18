'use client'

import { useEffect, useRef, useState } from 'react';

interface AsciiArtProps {
    text: string;
    lines: string[];
    isAnimated: boolean;
}

const FRAME_MS = 20;
const DENSE_CHARS = "▒░█";
const SPARSE_CHARS = "▒ ░ █";

function noise(line: string, chars: string) {
    return line.replace(/\S/g, () => chars[Math.floor(Math.random() * chars.length)]);
}

// Reveal top to bottom: each line with ink appears first as sparse noise, then dense noise, then settles into the final text
function createFrames(lines: string[]) {
    const frames: string[] = [];
    lines.forEach((line, i) => {
        if (!line.trim()) return;
        const above = lines.slice(0, i);
        const below = lines.slice(i + 1).map(l => ' '.repeat(l.length));
        frames.push([...above, noise(line, SPARSE_CHARS), ...below].join('\n'));
        frames.push([...above, noise(line, DENSE_CHARS), ...below].join('\n'));
    });
    frames.push(lines.join('\n'));
    return frames;
}

export default function AsciiArt({ text, lines, isAnimated }: AsciiArtProps) {
    const art = lines.join('\n');
    const wrapRef = useRef<HTMLDivElement>(null);
    const preRef = useRef<HTMLPreElement>(null);

    // Play the animation by writing frames straight into the <pre>, bypassing React renders
    useEffect(() => {
        const pre = preRef.current;
        if (!pre || !isAnimated || matchMedia('(prefers-reduced-motion: reduce)').matches) {
            if (pre) pre.textContent = art;
            return;
        }

        const frames = createFrames(lines);
        let index = 0;
        let last = 0;
        let frameId = requestAnimationFrame(function step(time) {
            if (time - last >= FRAME_MS) {
                last = time;
                pre.textContent = frames[index++];
                if (index === frames.length) return;
            }
            frameId = requestAnimationFrame(step);
        });
        return () => cancelAnimationFrame(frameId);
    }, [art, lines, isAnimated]);

    // Shrink the font so the widest line fits the container on narrow screens; never scale up.
    // Every frame has the same dimensions, so this only needs to rerun when the container resizes
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const wrap = wrapRef.current;
        const pre = preRef.current;
        if (!wrap || !pre) return;

        let current = 1;
        const fit = () => {
            const naturalWidth = pre.getBoundingClientRect().width / current;
            if (!naturalWidth) return;
            const next = Math.floor(Math.min(1, wrap.clientWidth / naturalWidth) * 1000) / 1000;
            if (next !== current) {
                current = next;
                setScale(next);
            }
        };

        const resizeObserver = new ResizeObserver(fit);
        resizeObserver.observe(wrap);
        return () => resizeObserver.disconnect();
    }, []);

    // When animated, server-render blank lines of the right size so layout is final before the animation starts
    const initial = isAnimated ? lines.map(l => ' '.repeat(l.length)).join('\n') : art;

    return (
        <div ref={wrapRef} role="img" aria-label={text} className="overflow-hidden">
            <pre ref={preRef} aria-hidden="true" className="text-brand dark:text-brand-strong leading-[1.25] overflow-hidden w-max" style={{ height: `${lines.length}lh`, fontSize: `${scale}em` }}>
                {initial}
            </pre>
        </div>
    );
}
