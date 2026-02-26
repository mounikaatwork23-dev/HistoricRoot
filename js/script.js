const products = [
  {
    id: 1,
    name: "Traditiona Rice Health mix - 300g",
    price: 229,
    rating: 4,
    stock: true,
    discount: "20%",
    image: "assets/images/packet_300g.png"
  },
  {
    id: 2,
    name: "Traditiona Rice Health mix - 500g",
    price: 339,
    rating: 5,
    stock: true,
    discount: "20%",
    image: "assets/images/packet_300g.png"
  },
  {
    id: 3,
    name: "Traditiona Rice Health mix - 1kg",
    price: 649,
    rating: 4,
    stock: false,
    discount: "15%",
    image: "assets/images/packet_300g.png"
  }
];

const container = document.getElementById("productContainer");
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const inStockCheckbox = document.getElementById("inStock");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");

function renderProducts() {
  let filtered = [...products];

  const maxPrice = parseInt(priceRange.value);
  filtered = filtered.filter(p => p.price <= maxPrice);

  if (inStockCheckbox.checked) {
    filtered = filtered.filter(p => p.stock);
  }

  const searchText = searchInput.value.toLowerCase();
  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchText)
  );

  if (sortSelect.value === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  container.innerHTML = "";

  filtered.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <span class="badge">Save ${p.discount}</span>
        <img src="${p.image}" />
        <h4>${p.name}</h4>
        <p class="price">₹${p.price}</p>
        <p class="rating">${"★".repeat(p.rating)}</p>
        <button onclick="orderWhatsApp('${p.name}', ${p.price})">
          Order via WhatsApp
        </button>
      </div>
    `;
  });
}

function orderWhatsApp(name, price) {
  const message = encodeURIComponent(
    `Hello, I want to order:\nProduct: ${name}\nPrice: ₹${price}`
  );

  window.open(
    `https://wa.me/9986155316?text=${message}`,
    "_blank"
  );
}

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  renderProducts();
});

inStockCheckbox.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
searchInput.addEventListener("input", renderProducts);

renderProducts();
