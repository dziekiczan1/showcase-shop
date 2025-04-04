import Link from 'next/link';
import {products} from '@/app/data/products';
import {ArrowRight} from 'lucide-react';

export default function Home() {
    const featuredProducts = products.slice(0, 3);

    return (<main>
        <section className="relative h-screen flex items-center justify-center mb-24">
            <div className="absolute inset-0 bg-neutral-900/60">
                <img
                    src="/hero.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-80"
                />
            </div>
            <div className="relative z-10 text-center px-4 max-w-3xl">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-tighter">
                    Timeless Essentials for Modern Living
                </h1>
                <p className="text-lg md:text-xl text-white mb-8 max-w-lg mx-auto">
                    Thoughtfully designed pieces that blend comfort with contemporary style
                </p>
                <Link
                    href="/products"
                    className="inline-block bg-neutral-800 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-neutral-700 transition-colors"
                >
                    Shop Collection
                </Link>
            </div>
        </section>

        <section className="container mx-auto px-4 mb-24">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-light">New Arrivals</h2>
                <Link
                    href="/products"
                    className="flex items-center text-sm hover:opacity-70 transition-opacity"
                >
                    View All <ArrowRight size={16} className="ml-2"/>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {featuredProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`} className="group">
                        <div className="mb-4 overflow-hidden bg-neutral-100">
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="font-light text-lg mb-2">{product.name}</h3>
                        <p className="text-neutral-500">${product.price.toFixed(2)}</p>
                    </Link>))}
            </div>
        </section>

        <section className="container mx-auto px-4 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="relative h-96 md:h-auto bg-neutral-100 group overflow-hidden">
                    <img
                        src="/hero.jpg"
                        alt="Women's collection"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/80 backdrop-blur-sm px-10 py-8 text-center">
                            <h3 className="text-2xl mb-4 tracking-tight">Essentials Collection</h3>
                            <Link
                                href="/products"
                                className="inline-block border-b border-black pb-1 hover:opacity-70 transition-opacity"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative h-96 md:h-auto bg-neutral-100 group overflow-hidden">
                    <img
                        src="/hero.jpg"
                        alt="Men's collection"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/80 backdrop-blur-sm px-10 py-8 text-center">
                            <h3 className="text-2xl mb-4 tracking-tight">Autumn Collection</h3>
                            <Link
                                href="/products"
                                className="inline-block border-b border-black pb-1 hover:opacity-70 transition-opacity"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-neutral-900 py-24 mb-24">
            <div className="container mx-auto px-4 max-w-xl text-center">
                <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                    Join Our Community
                </h2>
                <p className="text-neutral-400 mb-8">
                    Subscribe to receive updates on new collections, exclusive offers, and styling inspiration.
                </p>
                <div className="flex flex-col md:flex-row max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow border border-neutral-600 bg-neutral-800 text-white px-4 py-3 mb-3 md:mb-0 focus:outline-none text-sm"
                    />
                    <button
                        className="bg-neutral-800 text-white px-6 py-3 md:ml-4 text-sm uppercase tracking-wider hover:bg-neutral-700 transition-colors"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    </main>);
}
