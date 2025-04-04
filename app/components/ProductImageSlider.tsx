'use client'

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageSliderProps {
    images: string[];
    altText: string;
}

export default function ProductImageSlider({ images, altText }: ProductImageSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="product-slider flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnail navigation */}
            <div className="flex flex-row lg:flex-col gap-2 pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`thumbnail-btn relative w-20 h-20 rounded border-2 cursor-pointer ${
                            index === activeIndex ? 'border-blue-500 active' : 'border-gray-200'
                        }`}
                    >
                        <Image
                            src={image}
                            alt={`${altText} thumbnail ${index + 1}`}
                            fill
                            className="object-cover rounded"
                        />
                    </button>
                ))}
            </div>

            {/* Main image display */}
            <div className={`main-image-container relative aspect-square w-full mb-4 rounded-lg overflow-hidden`}>
                <Image
                    src={images[activeIndex]}
                    alt={altText}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}
