import { ReactNode } from "react"

interface PageSectionProps {
    children: ReactNode;
    border?: boolean;
}

const HORIZONTAL = "-".repeat(400);
const VERTICAL = "|\n".repeat(200);

// Shared styling for every border character, so dashes, pipes and corners line up
const borderClass = "font-mono leading-none text-muted select-none";

function Corner() {
    return <span aria-hidden="true" className={borderClass}>+</span>;
}

function HorizontalEdge() {
    return (
        <span aria-hidden="true" className={`${borderClass} overflow-hidden whitespace-nowrap`}>
            {HORIZONTAL}
        </span>
    );
}

function VerticalEdge() {
    // Absolutely positioned so the pipes fill the row's height without adding to it
    return (
        <span aria-hidden="true" className={`${borderClass} relative overflow-hidden`}>
            <span className="absolute inset-0 whitespace-pre">{VERTICAL}</span>
        </span>
    );
}

export default function PageSection({ children, border = true }: PageSectionProps) {
    // When the border is off, hide the edge characters but keep them in the layout so sizing is unchanged
    const borderVisibility = border ? "" : "[&>[aria-hidden]]:invisible";

    return (
        <section className={`grid w-full grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[auto_1fr_auto] ${borderVisibility}`}>
            <Corner /><HorizontalEdge /><Corner />
            <VerticalEdge />
            <div className="p-4 md:p-6">{children}</div>
            <VerticalEdge />
            <Corner /><HorizontalEdge /><Corner />
        </section>
    )
}
