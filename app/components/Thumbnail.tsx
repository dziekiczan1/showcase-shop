import Image from 'next/image';

interface ThumbnailProps {
    image: string;
    altText: string;
    isActive: boolean;
    onClick: () => void;
}

export default function Thumbnail({ image, altText, isActive, onClick }: ThumbnailProps) {
    return (
        <button
            onClick={onClick}
            className={`thumbnail-btn relative w-20 h-20 rounded border-2 ${
                isActive ? 'border-blue-500 active' : 'border-gray-200'
            }`}
        >
            <Image
                src={image}
                alt={altText}
                fill
                className="object-cover rounded"
            />
        </button>
    );
}
