import './globals.css';
import Link from 'next/link';
import { ShoppingBag, Search, User } from 'lucide-react';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="font-sans text-gray-800 bg-neutral-50">
        <header className="border-b border-neutral-200 sticky top-0 bg-black/80 backdrop-blur-md z-20">
            <div className="container mx-auto px-4 py-5">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        MINIMAL
                    </Link>

                    <nav className="hidden md:flex space-x-10">
                        <Link href="/"
                              className="text-white hover:text-neutral-300 transition text-sm uppercase tracking-wide cursor-pointer">
                            Home
                        </Link>
                        <Link href="/products"
                              className="text-white hover:text-neutral-300 transition text-sm uppercase tracking-wide cursor-pointer">
                            Shop
                        </Link>
                        <Link href="/products"
                              className="text-white hover:text-neutral-300 transition text-sm uppercase tracking-wide cursor-pointer">
                            New Arrivals
                        </Link>
                        <Link href="/products"
                              className="text-white hover:text-neutral-300 transition text-sm uppercase tracking-wide cursor-pointer">
                            Collections
                        </Link>
                    </nav>

                    <div className="flex items-center gap-5">
                        <button className="text-white hover:text-neutral-300 transition cursor-pointer">
                            <Search size={20}/>
                        </button>
                        <button className="text-white hover:text-neutral-300 transition cursor-pointer">
                            <User size={20}/>
                        </button>
                        <button className="relative text-white hover:text-neutral-300 transition cursor-pointer">
                            <ShoppingBag size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <main>
            {children}
        </main>

        <footer className="bg-neutral-900 text-neutral-200 mt-24">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 tracking-tighter">MINIMAL</h3>
                        <p className="text-neutral-400 text-sm">
                            Contemporary, minimal and beautifully crafted clothing for the modern individual.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm uppercase tracking-wider font-medium mb-6">Shop</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/products" className="text-neutral-400 hover:text-white transition text-sm">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-neutral-400 hover:text-white transition text-sm">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-neutral-400 hover:text-white transition text-sm">
                                    Bestsellers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm uppercase tracking-wider font-medium mb-6">Help</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-neutral-400 hover:text-white transition text-sm">
                                    Shipping
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-neutral-400 hover:text-white transition text-sm">
                                    Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-neutral-400 hover:text-white transition text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm uppercase tracking-wider font-medium mb-6">Newsletter</h3>
                        <p className="text-neutral-400 text-sm mb-4">
                            Sign up for exclusive offers, new arrivals, and style inspiration.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-neutral-800 text-white px-4 py-2 text-sm flex-grow border-none outline-none"
                            />
                            <button className="bg-white text-neutral-900 px-4 py-2 text-xs font-medium">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
                    <p>© {new Date().getFullYear()} MINIMAL. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}
