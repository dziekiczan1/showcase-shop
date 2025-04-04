import Link from 'next/link';
import {getProductById, products} from '@/app/data/products';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/app/components/AddToCartButton';
import { ArrowLeft } from 'lucide-react';
import ProductImageSlider from "@/app/components/ProductImageSlider";
import SizeSelector from "@/app/components/SizeSelector";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const resolvedParams = await params;
    const product = await getProductById(resolvedParams.id);

    if (!product) {
        notFound();
    }



    return (
        <div className="container mx-auto px-4 py-12">
            <Link href="/products" className="inline-flex items-center text-sm hover:underline mb-8">
                <ArrowLeft size={16} className="mr-2" /> Back to products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                    <ProductImageSlider
                        images={product.images}
                        altText={product.name}
                    />
                </div>

                <div className="pt-4">
                    <h1 className="text-2xl font-light mb-2 tracking-tight">{product.name}</h1>
                    <p className="text-xl mb-6">${product.price.toFixed(2)}</p>

                    <SizeSelector sizes={product.sizes} />

                    <div className="mb-8">
                        <AddToCartButton product={product}/>
                    </div>

                    <div className="border-t border-neutral-200 pt-8">
                        <div className="mb-6">
                            <h2 className="font-medium text-sm uppercase tracking-wider mb-3">Details</h2>
                            <p className="text-neutral-600 leading-relaxed">{product.description}</p>
                        </div>

                        <div>
                            <h2 className="font-medium text-sm uppercase tracking-wider mb-3">Shipping & Returns</h2>
                            <p className="text-neutral-600 leading-relaxed">
                                Free shipping on orders over $100. Free returns within 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <section className="mt-24">
                <h2 className="text-2xl font-light mb-8">You May Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products
                    .filter(p => p.id !== product.id)
                    .slice(0, 4)
                    .map((relatedProduct) => (
                        <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                            <div className="mb-4 overflow-hidden bg-neutral-100">
                                <img
                                    src={relatedProduct.images[0]}
                                    alt={relatedProduct.name}
                                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="font-light text-base mb-2">{relatedProduct.name}</h3>
                            <p className="text-neutral-500">${relatedProduct.price.toFixed(2)}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
