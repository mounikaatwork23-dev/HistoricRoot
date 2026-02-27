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
    stock: false,
    discount: "15%",
    image: "assets/images/packet_300g.png"
  }
],
  "Kitchen Essentials": [
    {
      id: 1,
      name: "Soap",
      price: 55,
      rating: 4,
      stock: true,
      discount: "10%",
      image: "assets/images/product_soap.png"
    },
   {
      id: 1,
      name: "Soap",
      price: 55,
      rating: 4,
      stock: true,
      discount: "10%",
      image: "assets/images/product_soap.png"
    },
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

// function renderProducts() {
//   const searchText = searchInput.value.toLowerCase();

//   const filtered = products.filter(p =>
//     p.name.toLowerCase().includes(searchText)
//   );

//   container.innerHTML = "";

//   filtered.forEach(p => {
//     container.innerHTML += `
//       <div class="card">
//         <span class="badge">Save ${p.discount}</span>
//         <img src="${p.image}" />
//         <h4>${p.name}</h4>
//         <p class="price">₹${p.price}</p>
//         <p class="rating">${"★".repeat(p.rating)}</p>

//         ${
//           p.stock
//             ? `<button onclick="orderWhatsApp('${p.name}', ${p.price})">
//                  Order via WhatsApp
//                </button>`
//             : `<button disabled class="out">Out of Stock</button>`
//         }
//       </div>
//     `;
//   });
// }

function orderWhatsApp(name, price) {
  const message = encodeURIComponent(
    `Hello, I want to order:\nProduct: ${name}\nPrice: ₹${price}`
  );

  window.open(
    `https://wa.me/9986155316?text=${message}`,
    "_blank"
  );
}

// Search input event
searchInput.addEventListener("input", renderProducts);

// // Initial render
// renderProducts();

function renderProducts() {

  container.innerHTML = "";

  for (const category in products) {

    // Category title
    container.innerHTML += `
      <h2 class="category-title">${category}</h2>
      <div class="product-grid" id="grid-${category.replace(/\s/g, "")}"></div>
    `;

    const grid = document.getElementById(
      `grid-${category.replace(/\s/g, "")}`
    );

    // Loop products inside category
    // products[category].forEach(p => {
    //   grid.innerHTML += `
    //     <div class="card">
    //       <span class="badge">Save ${p.discount}</span>
    //       <img src="${p.image}" />
    //       <h4>${p.name}</h4>
    //       <p class="price">₹${p.price}</p>
    //       <p class="rating">${"★".repeat(p.rating)}</p>

    //       ${
    //         p.stock
    //           ? `<button onclick="orderWhatsApp('${p.name}', ${p.price})">
    //                Order via WhatsApp
    //              </button>`
    //           : `<button disabled class="out">Out of Stock</button>`
    //       }
    //     </div>
    //   `;
    // });
    products[category].forEach(p => {
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

renderProducts();