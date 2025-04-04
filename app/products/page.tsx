import Link from 'next/link';
import { products } from '@/app/data/products';
import { Filter, ChevronDown } from 'lucide-react';

export default function ProductsPage() {
    const categories = [...new Set(products.map(product => product.category))];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Page Header */}
            <div className="mb-10 text-center">
                <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">Shop All</h1>
                <p className="text-neutral-500 max-w-xl mx-auto">
                    Our carefully curated collection of timeless pieces designed for versatility and comfort.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center justify-between pb-8 mb-8 border-b border-neutral-200">
                <div className="flex items-center mb-4 md:mb-0">
                    <button className="flex items-center text-sm mr-8">
                        <Filter size={16} className="mr-2" />
                        Filters
                    </button>

                    <div className="hidden md:flex space-x-6">
                        {categories.map(category => (
                            <button key={category} className="text-sm capitalize hover:text-neutral-500 transition">
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center">
                    <button className="flex items-center text-sm">
                        Sort by: Newest
                        <ChevronDown size={16} className="ml-2" />
                    </button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                {products.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`} className="group">
                        <div className="mb-4 overflow-hidden bg-neutral-100">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="font-light text-base mb-2">{product.name}</h3>
                        <p className="text-neutral-500 mb-2">${product.price.toFixed(2)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
