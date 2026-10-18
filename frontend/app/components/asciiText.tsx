import figlet from 'figlet';
import dosRebel from 'figlet/fonts/DOS Rebel';
import AsciiArt from './asciiArt';

interface AsciiTextProps {
    text: string;
    font?: string;
    isAnimated?: boolean;
}

// Server component: the FIGlet text is rendered at build/request time so neither figlet nor the font ships to the client
const parsedFonts = new Map<string, string>();

function fontName(data: string) {
    let name = parsedFonts.get(data);
    if (!name) {
        name = `font-${parsedFonts.size}`;
        figlet.parseFont(name, data);
        parsedFonts.set(data, name);
    }
    return name;
}

export default function AsciiText({ text, font = dosRebel, isAnimated = false }: AsciiTextProps) {
    const lines = figlet.textSync(text, { font: fontName(font) }).split('\n');
    // Rows below the baseline are only used by descenders, so drop them when they're blank
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();

    return <AsciiArt text={text} lines={lines} isAnimated={isAnimated} />;
}
