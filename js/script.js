const products = {
  "Health Mix": [  
  {
    id: 1,
    name: "Traditiona Rice Health mix - 300g",
    price: 199,
    rating: 4,
    stock: true,
    discount: "20%",
    image: "assets/images/packet_300g.png"
  },
  {
    id: 2,
    name: "Traditiona Rice Health mix - 500g",
    price: 299,
    rating: 5,
    stock: true,
    discount: "20%",
    image: "assets/images/packet_300g.png"
  },
  {
    id: 3,
    name: "Traditiona Rice Health mix - 1kg",
    price: 569,
    rating: 4,
    stock: true,
    discount: "15%",
    image: "assets/images/packet_300g.png"
  }
],
  "Kitchen Essentials": [
    {
      id: 1,
      name: "Puliyogare Mix - 200g",
      price: 118,
      rating: 4,
      stock: true,
      discount: "10%",
      image: "assets/images/puliyogare.png"
    },
   {
      id: 1,
      name: "Sambar powder - 200g",
      price: 126,
      rating: 4,
      stock: true,
      discount: "10%",
      image: "assets/images/sambar_powder.png"
    },
   {
      id: 1,
      name: "Rasam powder - 200g",
      price: 132,
      rating: 4,
      stock: true,
      discount: "10%",
      image: "assets/images/rasam_powder.png"
    }, {
      id: 1,
      name: "Sweet pickle - 100g",
      price: 150,
      rating: 4,
      stock: false,
      discount: "10%",
      image: "assets/images/sweet_pickle.png"
    }],
     "Body Care": [
    {
      id: 1,
      name: "Soap",
      price: 55,
      rating: 4,
      stock: true,
      discount: "10%",
      image: "assets/images/product_soap.png"
    }]
}

const product_kitchen_essentials = [
  {
    id: 1,
    name: "Traditiona Rice Health mix - 300g",
    price: 199,
    rating: 4,
    stock: true,
    discount: "20%",
    image: "assets/images/packet_300g.png"
  },
  {
    id: 2,
    name: "Traditiona Rice Health mix - 500g",
    price: 299,
    rating: 5,
    stock: true,
    discount: "20%",
    image: "assets/images/packet_300g.png"
  },
  {
    id: 3,
    name: "Traditiona Rice Health mix - 1kg",
    price: 569,
    rating: 4,
    stock: false,
    discount: "15%",
    image: "assets/images/packet_300g.png"
  }
];

const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");


function orderWhatsApp(name, price) {
  const message = encodeURIComponent(
    `Hello, I want to order:\nProduct: ${name}\nPrice: ₹${price}`
  );

  window.open(
    `https://wa.me/9986155316?text=${message}`,
    "_blank"
  );
}


// // Initial render
// renderProducts();

// function renderProducts() {

//   container.innerHTML = "";

//   for (const category in products) {

//     // Category title
//     container.innerHTML += `
//       <h2 class="category-title">${category}</h2>
//       <div class="product-grid" id="grid-${category.replace(/\s/g, "")}"></div>
//     `;

//     const grid = document.getElementById(
//       `grid-${category.replace(/\s/g, "")}`
//     );

  
//     products[category].forEach(p => {
//     grid.innerHTML += `
//       <div class="card">
//         <span class="badge">Save ${p.discount}</span>
//         <img src="${p.image}" />
//         <h4>${p.name}</h4>
//         <p class="price">₹${p.price}</p>
//         <p class="rating">${"★".repeat(p.rating)}</p>

//         ${
//           p.stock
//             ? `<button onclick="orderWhatsApp('${p.name}', ${p.price})">
//                 Order via WhatsApp
//               </button>`
//             : `<button disabled class="out">Out of Stock</button>`
//         }
//       </div>
//     `;
//   });

//   }
// }

function renderProducts() {

  const searchText = searchInput.value.toLowerCase();
  container.innerHTML = "";

  for (const category in products) {

    // Filter products inside category
    const filteredProducts = products[category].filter(p =>
      p.name.toLowerCase().includes(searchText)
    );

    // Skip category if no products match
    if (filteredProducts.length === 0) continue;

    // Add category title
    container.innerHTML += `
      <h2 class="category-title">${category}</h2>
      <div class="product-grid" id="grid-${category.replace(/\s/g, "")}"></div>
    `;

    const grid = document.getElementById(
      `grid-${category.replace(/\s/g, "")}`
    );

    // Render filtered products
    filteredProducts.forEach(p => {
      grid.innerHTML += `
        <div class="card">
          <span class="badge">Save ${p.discount}</span>
          <img src="${p.image}" />
          <h4>${p.name}</h4>
          <p class="price">₹${p.price}</p>
          <p class="rating">${"★".repeat(p.rating)}</p>

          ${
            p.stock
              ? `<button onclick="orderWhatsApp('${p.name}', ${p.price})">
                   Order via WhatsApp
                 </button>`
              : `<button disabled class="out">Out of Stock</button>`
          }
        </div>
      `;
    });

  }
}

searchInput.addEventListener("input", renderProducts);

renderProducts();