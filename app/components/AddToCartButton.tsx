'use client';

import { useState } from 'react';
import { Product } from '@/app/data/products';
import { ChevronRight } from 'lucide-react';

interface AddToCartButtonProps {
    product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        setAdded(true);

        // In a real app, this would add the item to your cart state/context
        console.log(`Added ${quantity} of ${product.name} to cart`);

        // Reset the button after 2 seconds
        setTimeout(() => {
            setAdded(false);
        }, 2000);
    };

    return (<div>
            <div className="flex items-center border border-neutral-300 mb-4 w-32">
                <button
                    onClick={decreaseQuantity}
                    className="flex-1 py-2 hover:bg-neutral-700 transition-colors text-lg cursor-pointer"
                >
                    −
                </button>
                <div className="flex-1 py-2 text-center text-white">{quantity}</div>
                <button
                    onClick={increaseQuantity}
                    className="flex-1 py-2 hover:bg-neutral-700 transition-colors text-lg cursor-pointer"
                >
                    +
                </button>
            </div>

            <button
                onClick={handleAddToCart}
                disabled={added}
                className={`w-full flex items-center justify-between px-6 py-3 text-sm transition-colors cursor-pointer ${added ? 'bg-green-700 text-white' : 'bg-neutral-700 text-white hover:bg-neutral-800'}`}
            >
        <span className="flex-1 text-center">
          {added ? 'Added to Bag' : 'Add to Bag'}
        </span>
                {!added && <ChevronRight size={18}/>}
            </button>
        </div>);
}
