import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Types for optional gallery support
export type Slide = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};

type RecentWorkProps = {
    imgSrc?: string; // single image (backward compatible)
    images?: Slide[]; // gallery (multiple images)
    alt?: string;
    description?: string;
    tags?: string[];
};

export default function RecentWork({
    imgSrc = "",
    images = [],
    alt = "",
    description = "",
    tags = ["Next.js", "TypeScript", "Prisma"],
}: RecentWorkProps) {
    const [open, setOpen] = React.useState(false);

    // Build slides from either images[] or a single imgSrc
    const slides: Slide[] = React.useMemo(() => {
        if (images && images.length > 0) return images;
        if (imgSrc) return [{ src: imgSrc, alt }];
        return [];
    }, [images, imgSrc, alt]);

    return (
        <div className="group space-y-3">
            <button
                type="button"
                onClick={() => slides.length && setOpen(true)}
                className="block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Open image preview"
            >
                <AspectRatio ratio={16 / 14}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={(slides[0]?.src || imgSrc) ?? ""}
                        alt={slides[0]?.alt || alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] cursor-zoom-in"
                    />
                </AspectRatio>
            </button>

            <p className="text-sm leading-6 text-muted-foreground line-clamp-2">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">
                        {t}
                    </span>
                ))}
            </div>

            {slides.length > 0 && (
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    plugins={[Zoom]}
                    zoom={{
                        maxZoomPixelRatio: 2.5,
                        zoomInMultiplier: 1.3,
                        doubleTapDelay: 250,
                        doubleClickDelay: 300,
                        keyboardMoveDistance: 50,
                    }}
                    carousel={{ finite: true }}
                    animation={{ fade: 300, swipe: 250 }}
                />
            )}
        </div>
    );
}
