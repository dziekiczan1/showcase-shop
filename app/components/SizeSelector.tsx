'use client'

import { useState } from 'react';

interface SizeSelectorProps {
    sizes: string[];
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    return (
        <div className="mb-8">
            <h2 className="font-medium text-sm uppercase tracking-wider mb-3">Size</h2>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => handleSizeClick(size)}
                        className={`min-w-14 py-2 px-3 border text-sm transition-colors cursor-pointer ${
                            selectedSize === size
                                ? 'border-black bg-neutral-800 text-white'
                                : 'border-neutral-300 hover:border-black'
                        }`}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SizeSelector;
