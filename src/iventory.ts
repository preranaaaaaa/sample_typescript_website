
// =====================================
// 1. BASIC TYPES AND VARIABLES
// =====================================

let productName: string = "Laptop";
let price: number = 55000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer", "Laptop"];
let productId: number | string = 101;

// Display inventory details
console.log("Product Name:", productName);
console.log("Price:", price);
console.log("In Stock:", inStock);
console.log("Tags:", tags);
console.log("Product ID:", productId);


// =====================================
// 2. FUNCTION TO PRINT PRODUCT INFO
// =====================================

function printProductInfo(): void {
    console.log(
        `Product ID: ${productId}, Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}`
    );
}

printProductInfo();


// =====================================
// 3. USING ANY AND REFACTORING
// =====================================

// Using any
let productInfo: any = "Laptop";

// Refactored to a specific type
let productInfoRefactored: string = "Laptop";

console.log(productInfoRefactored);


// =====================================
// 4. FUNCTIONS AND SCOPE
// =====================================

// Function with default parameter
function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));


// Applying bulk discount using map()
function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {
    return prices.map((price: number): number => {
        return price - (price * discountRate / 100);
    });
}

let prices: number[] = [1000, 2000, 3000];

let discountedPrices: number[] =
    applyBulkDiscount(prices, 10);

console.log("Discounted Prices:", discountedPrices);


// =====================================
// 5. BLOCK SCOPE AND FUNCTION SCOPE
// =====================================

function scopeExample(): void {

    // Function-scoped variable
    let functionVariable: string = "I am inside the function";

    for (let i: number = 0; i < 3; i++) {

        // Block-scoped variable
        let blockVariable: string = "I am inside the loop";

        console.log(blockVariable);
    }

    console.log(functionVariable);

    // Error: blockVariable cannot be accessed here
    // console.log(blockVariable);
}

scopeExample();


// =====================================
// 6. INTERFACES AND OBJECTS
// =====================================

// 6.1 Define Product interface

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    tags?: string[];
}


// 6.2 Create an array of Product objects

let products: Product[] = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        inStock: true,
        tags: ["Electronics", "Computer"]
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 25000,
        inStock: true,
        tags: ["Electronics", "Mobile"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        inStock: false,
        tags: ["Audio", "Accessories"]
    },
    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        inStock: true
    }
];


// 6.3 Function to get available products

function getAvailableProducts(
    products: Product[]
): Product[] {

    return products.filter(
        (product: Product): boolean => product.inStock
    );
}

// Calling the function
let availableProducts: Product[] =
    getAvailableProducts(products);

console.log("Available Products:");
console.log(availableProducts);


// 6.4 Extend Product interface

interface DiscountedProduct extends Product {
    discountPercent: number;
}


// Apply discount to products

function applyDiscountToProducts(
    products: Product[]
): DiscountedProduct[] {

    const discountPercent: number = 10;

    return products.map(
        (product: Product): DiscountedProduct => ({
            ...product,
            price: product.price -
                (product.price * discountPercent / 100),
            discountPercent: discountPercent
        })
    );
}


// Calling the function

let discountedProducts: DiscountedProduct[] =
    applyDiscountToProducts(products);

console.log("Discounted Products:");
console.log(discountedProducts);
export {};