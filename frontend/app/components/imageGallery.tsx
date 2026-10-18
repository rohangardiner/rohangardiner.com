"use client";

import Image from "next/image";
import { useState } from "react";

export interface GalleryImage {
	src: string;
	alt: string;
	caption?: string;
}

interface ImageGalleryProps {
	images: GalleryImage[];
	className?: string;
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	if (images.length === 0) return null;

	const active = images[activeIndex];

	return (
		<div className={`flex w-full flex-col gap-2 ${className}`}>
			<figure className="relative border border-border rounded overflow-hidden">
				<Image
					src={active.src}
					alt={active.alt}
					width={0}
					height={0}
					sizes="1024px"
					style={{ width: "100%", height: "auto" }}
					className="block"
				/>
				{active.caption && (
					<figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-4 md:px-8 pb-3 md:pb-6 pt-10 text-sm text-white leading-[1.25]">
						{active.caption}
					</figcaption>
				)}
			</figure>

			{images.length > 1 && (
				<div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
					{images.map((image, index) => {
						const isActive = index === activeIndex;
						return (
							<button
								key={image.src}
								type="button"
								onClick={() => setActiveIndex(index)}
								aria-label={`Show ${image.alt}`}
								aria-pressed={isActive}
								className={`relative aspect-square cursor-pointer rounded overflow-hidden border-2 transition-opacity ${
									isActive ? "border-brand" : "border-transparent opacity-60 hover:opacity-100"
								}`}
							>
								<Image src={image.src} alt="" fill sizes="160px" className="object-cover" />
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
}
