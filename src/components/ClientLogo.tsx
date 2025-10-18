import Image from "next/image";

type ClientLogoProps = {
    src: string;
    /** If omitted, we’ll use "Client 01 logo", "Client 02 logo", ... */
    alt?: string;
    index?: number; // used to auto-generate alt like Client 01 logo
    className?: string;
    width?: number;
    height?: number;
    /** Set true if logos are purely decorative (better a11y) */
    decorative?: boolean;
};

export default function ClientLogo({
    src,
    alt,
    index,
    className = "",
    width = 160,
    height = 40,
    decorative = false,
}: ClientLogoProps) {
    const n = typeof index === "number" ? String(index).padStart(2, "0") : undefined;
    const computedAlt = decorative ? "" : alt ?? (n ? `Client ${n} logo` : "Client logo");

    return (
        <div className="flex">
            <Image
                src={src}
                alt={computedAlt}
                width={width}
                height={height}
                loading="lazy"
                sizes="(max-width: 768px) 25vw, (max-width: 1280px) 15vw, 160px"
                className={`mx-auto w-fit dark:invert brightness-0 ${className}`}
            />
        </div>
    );
}
