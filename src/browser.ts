
interface Product {
    productName: string;
    price: number;
    inStock: boolean;
}

interface DiscountedProduct extends Product {
    discountPercent: number;
}

const products: Product[] = [
    { productName: "Laptop", price: 55000, inStock: true },
    { productName: "Mobile Phone", price: 25000, inStock: true },
    { productName: "Keyboard", price: 2000, inStock: true },
    { productName: "Mouse", price: 1500, inStock: false }
];

function applyDiscountToProducts(
    products: Product[]
): DiscountedProduct[] {
    return products.map((product) => ({
        ...product,
        price: product.price * 0.9,
        discountPercent: 10
    }));
}

const discountedProducts = applyDiscountToProducts(products);

const productList = document.getElementById("productList");

if (productList) {
    discountedProducts.forEach((product) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${product.productName}</h3>
            <p class="price">₹${product.price.toLocaleString("en-IN")}</p>
            <p class="discount">${product.discountPercent}% Discount</p>
            <p>Status: ${product.inStock ? "In Stock" : "Out of Stock"}</p>
        `;

        productList.appendChild(card);
    });
}

console.log("Browser TypeScript is running!");