export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    colors: string[];
    sizes: string[];
}

export const products: Product[] = [
    {
        id: "1",
        name: "Oversized Cotton T-Shirt",
        description: "Premium quality oversized cotton t-shirt with a relaxed fit. Made from 100% organic cotton for ultimate comfort and sustainability.",
        price: 49.99,
        images: ["/oversized-red.png","/oversized-yellow.png"],
        category: "tops",
        colors: ["Black", "White", "Oatmeal"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "2",
        name: "High-Waisted Wide Leg Pants",
        description: "Elegant high-waisted pants with a wide leg silhouette. Features a comfortable elastic waistband and premium linen blend fabric.",
        price: 89.99,
        images: ["/oversized-red.png","/oversized-yellow.png"],
        category: "bottoms",
        colors: ["Ivory", "Black", "Olive"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "3",
        name: "Linen Blend Blazer",
        description: "Lightweight linen blend blazer perfect for both casual and formal occasions. Features a sleek cut with minimal detailing for a timeless look.",
        price: 129.99,
        images: ["/oversized-red.png","/oversized-yellow.png"],
        category: "outerwear",
        colors: ["Beige", "Navy", "Black"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "4",
        name: "Merino Wool Sweater",
        description: "Ultra-soft merino wool sweater with ribbed details. Naturally temperature regulating and perfect for layering in any season.",
        price: 79.99,
        images: ["/oversized-red.png","/oversized-yellow.png"],
        category: "tops",
        colors: ["Camel", "Grey", "Black"],
        sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: "5",
        name: "Minimalist Canvas Tote Bag",
        description: "Durable canvas tote with clean lines and ample storage. Features inner pockets and sturdy handles for everyday use.",
        price: 59.99,
        images: ["/oversized-red.png","/oversized-yellow.png"],
        category: "accessories",
        colors: ["Natural", "Black", "Sage"],
        sizes: ["One Size"]
    }
];

export function getProductById(id: string): Product | undefined {
    return products.find(product => product.id === id);
}
