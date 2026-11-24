const DISHES = [
  {
    id: 1,
    code: "01",
    name: "Dragon Cyber Roll",
    jpName: "サイバー・ドラゴンロール",
    category: "Maki & Rolls",
    price: 19,
    image: "images/dish_01_dragon_cyber_roll.jpg",
    shortDesc: "Tempura de langostino tigre, aguacate cremoso, anguila flambeada, tobiko azul yuzu e hilos de chile rojo sobre pizarra volcánica.",
    ingredients: ["Langostino tigre", "Anguila unagi", "Aguacate Hass", "Tobiko azul yuzu", "Hilos de chile rojo", "Salsa tare ahumada"],
    pairing: "Yuzu & Sansho Highball con whisky japonés Nikka",
    tags: ["Chef's Choice", "Picante suave", "Marisco"]
  },
  {
    id: 2,
    code: "02",
    name: "Nigiri de Otoro Eléctrico",
    jpName: "炙り大トロ・エレクトリック",
    category: "Nigiri",
    price: 16,
    image: "images/dish_02_otoro_electrico.jpg",
    shortDesc: "Ventresca de atún rojo madurado 14 días, sopleteada con mantequilla de yuzu, lámina de oro comestible y sal negra volcánica (2 piezas).",
    ingredients: ["Atún rojo Otoro", "Arroz akazu", "Mantequilla de yuzu", "Oro comestible 24k", "Sal negra volcánica"],
    pairing: "Sake Junmai Daiginjo servido a 8°C",
    tags: ["Chef's Choice", "Sin Gluten", "Pescado crudo"]
  },
  {
    id: 3,
    code: "03",
    name: "Sashimi de Salmón Sakura Neón",
    jpName: "桜ネオン・サーモン刺身",
    category: "Sashimi",
    price: 18,
    image: "images/dish_03_salmon_sakura.jpg",
    shortDesc: "Cortes gruesos de salmón escocés curado en flor de cerezo y remolacha, acompañado de perlas de ponzu cítrico y flores comestibles.",
    ingredients: ["Salmón escocés Loch Duart", "Curado de sakura", "Perlas de ponzu", "Flores comestibles", "Hielo picado aromático"],
    pairing: "Sakura Gin Tonic con shiso fresco",
    tags: ["Sin Gluten", "Fresco", "Pescado"]
  },
  {
    id: 4,
    code: "04",
    name: "Uramaki Koi Dorado",
    jpName: "黄金錦鯉・裏巻き",
    category: "Maki & Rolls",
    price: 21,
    image: "images/dish_04_koi_dorado.jpg",
    shortDesc: "Cangrejo real, mango maduro y pepino envueltos en lámina de hamachi, caviar de trufa negra y mayonesa picante de shichimi.",
    ingredients: ["Cangrejo real", "Hamachi (pez limón)", "Mango Alphonso", "Caviar de trufa negra", "Mayonesa shichimi"],
    pairing: "Champagne Blanc de Blancs Brut Nature",
    tags: ["Chef's Choice", "Marisco", "Picante suave"]
  },
  {
    id: 5,
    code: "05",
    name: "Gunkan de Uni & Trufa de Soho",
    jpName: "ソーホー雲丹トリュフ軍艦",
    category: "Nigiri",
    price: 22,
    image: "images/dish_05_gunkan_uni_trufa.jpg",
    shortDesc: "Erizo de mar cremoso de Hokkaido sobre arroz tibio de vinagre rojo akazu, coronado con láminas de trufa negra de invierno (2 piezas).",
    ingredients: ["Uni de Hokkaido", "Trufa negra laminada", "Alga nori tostada", "Arroz akazu tibio", "Micro cebollino"],
    pairing: "Sake Kimoto envejecido en ánfora",
    tags: ["Edición Limitada", "Marisco"]
  },
  {
    id: 6,
    code: "06",
    name: "Ramen Kuro Shoyu Neón",
    jpName: "ネオン黒醤油ラーメン",
    category: "Platos Calientes",
    price: 17,
    image: "images/dish_06_ramen_kuro.jpg",
    shortDesc: "Caldo negro de ajo asado y soja fermentada 48h, panceta chashu caramelizada, huevo ajitama de yema ámbar, narutomaki y aceite picante.",
    ingredients: ["Caldo kuro shoyu 48h", "Fideos artesanales", "Chashu glaseado", "Huevo ajitama", "Aceite de sésamo picante"],
    pairing: "Cerveza artesanal japonesa Hitachino Nest",
    tags: ["Caliente", "Picante"]
  },
  {
    id: 7,
    code: "07",
    name: "Gyozas de Wagyu & Carbón Activo",
    jpName: "黒炭和牛餃子",
    category: "Platos Calientes",
    price: 15,
    image: "images/dish_07_gyozas_wagyu.jpg",
    shortDesc: "Cinco empanadillas negras crujientes rellenas de ternera Wagyu A5 y setas shiitake, con encaje crujiente hanetsuki y aceite de chile ahumado.",
    ingredients: ["Ternera Wagyu A5", "Masa de carbón activo", "Setas shiitake", "Encaje crujiente hanetsuki", "Chile ahumado rayu"],
    pairing: "Cóctel Smoked Plum Negroni",
    tags: ["Chef's Choice", "Picante", "Caliente"]
  },
  {
    id: 8,
    code: "08",
    name: "Tataki de Atún Plasma Ponzu",
    jpName: "プラズマ鮪タタキ",
    category: "Sashimi",
    price: 20,
    image: "images/dish_08_tataki_atun.jpg",
    shortDesc: "Lomo de atún rojo sellado en costra de sésamo tostado, servido sobre espejo de gelatina de ponzu cítrico, rábano sandía y brotes de shiso.",
    ingredients: ["Lomo de atún rojo", "Sésamo blanco y negro", "Espejo de ponzu", "Rábano sandía", "Shiso púrpura"],
    pairing: "Vino blanco Koshu seco de Yamanashi",
    tags: ["Sin Gluten", "Sésamo", "Fresco"]
  },
  {
    id: 9,
    code: "09",
    name: "Tempura de Cangrejo de Cáscara Blanda",
    jpName: "ソフトシェルクラブ天ぷら",
    category: "Platos Calientes",
    price: 18,
    image: "images/dish_09_tempura_cangrejo.jpg",
    shortDesc: "Cangrejo entero ultracrujiente en tempura ligera de cerveza japonesa, acompañado de emulsión de wasabi fresco y lima quemada.",
    ingredients: ["Cangrejo de cáscara blanda", "Tempura de cerveza Asahi", "Emulsión de wasabi fresco", "Lima quemada", "Sal en escamas"],
    pairing: "Sapporo Draft bien fría o Gin Tonic de Yuzu",
    tags: ["Crujiente", "Marisco", "Caliente"]
  },
  {
    id: 10,
    code: "10",
    name: "Mochi Galaxia de Matcha & Yuzu",
    jpName: "銀河抹茶ゆず餅",
    category: "Postres",
    price: 12,
    image: "images/dish_10_mochi_galaxia.jpg",
    shortDesc: "Trío de mochis artesanales con glaseado galáctico índigo y rosa, rellenos de ganache de matcha ceremonial de Uji y corazón líquido de yuzu.",
    ingredients: ["Masa de arroz glutinoso", "Matcha ceremonial de Uji", "Corazón líquido de yuzu", "Glaseado galaxia comestible"],
    pairing: "Té Genmaicha tostado o Umeshu frío con hielo",
    tags: ["Vegetariano", "Sin Gluten", "Dulce"]
  }
];

const state = {
  category: "Todos",
  search: "",
  cart: new Map(),
  activeDishId: null
};

// Elements
const menuGrid = document.getElementById("menuGrid");
const filterBar = document.getElementById("filterBar");
const menuSearch = document.getElementById("menuSearch");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const cartServiceEl = document.getElementById("cartService");
const cartTotalEl = document.getElementById("cartTotal");
const cartFooterEl = document.getElementById("cartFooter");
const dishModal = document.getElementById("dishModal");
const toastEl = document.getElementById("toast");

let toastTimer = null;

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("is-visible");
  }, 2800);
}

function formatGBP(amount) {
  return `£${amount.toFixed(2)}`;
}

function getFilteredDishes() {
  const query = state.search.trim().toLowerCase();
  return DISHES.filter((dish) => {
    const matchesCategory = state.category === "Todos" || dish.category === state.category;
    if (!matchesCategory) return false;
    if (!query) return true;
    const haystack = [
      dish.name,
      dish.jpName,
      dish.category,
      dish.shortDesc,
      ...dish.ingredients,
      ...dish.tags
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });
}

function renderMenu() {
  const dishes = getFilteredDishes();
  if (!dishes.length) {
    menuGrid.innerHTML = `
      <div class="empty-state">
        <p>No encontramos platos que coincidan con "<strong>${escapeHtml(state.search)}</strong>".</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = dishes
    .map((dish) => {
      const tagsHtml = dish.tags
        .map((tag) => {
          let cls = "tag";
          if (tag.toLowerCase().includes("picante")) cls += " tag--hot";
          if (tag.includes("Chef") || tag.includes("Edición")) cls += " tag--chef";
          return `<span class="${cls}">${tag}</span>`;
        })
        .join("");

      return `
        <article class="dish-card" data-dish-id="${dish.id}">
          <div class="dish-card__media" data-open-detail="${dish.id}">
            <img src="${dish.image}" alt="${dish.name}" class="dish-card__img" loading="lazy" />
            <span class="dish-card__cat">${dish.category}</span>
            <span class="dish-card__num">#${dish.code}</span>
          </div>
          <div class="dish-card__body">
            <div class="dish-card__top">
              <div>
                <span class="dish-jp">${dish.jpName}</span>
                <h3 class="dish-card__title">${dish.name}</h3>
              </div>
              <span class="dish-card__price">£${dish.price}</span>
            </div>
            <p class="dish-card__desc">${dish.shortDesc}</p>
            <div class="tag-row">${tagsHtml}</div>
            <div class="dish-card__actions">
              <button class="btn btn--ghost btn--sm" type="button" data-open-detail="${dish.id}">Ver detalle</button>
              <button class="btn btn--primary btn--sm" type="button" data-add-cart="${dish.id}">+ Añadir</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

// Dish Detail Modal
function openDishModal(dishId) {
  const dish = DISHES.find((d) => d.id === Number(dishId));
  if (!dish) return;
  state.activeDishId = dish.id;

  document.getElementById("modalImg").src = dish.image;
  document.getElementById("modalImg").alt = dish.name;
  document.getElementById("modalCategory").textContent = dish.category;
  document.getElementById("modalJp").textContent = dish.jpName;
  document.getElementById("modalTitle").textContent = dish.name;
  document.getElementById("modalPrice").textContent = `£${dish.price}`;
  document.getElementById("modalDesc").textContent = dish.shortDesc;
  document.getElementById("modalPairing").textContent = `🍶 ${dish.pairing}`;
  document.getElementById("modalIngredients").innerHTML = dish.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("");
  document.getElementById("modalTags").innerHTML = dish.tags
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  dishModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDishModal() {
  dishModal.hidden = true;
  document.body.style.overflow = "";
}

// Cart / Comanda
function addToCart(dishId) {
  const dish = DISHES.find((d) => d.id === Number(dishId));
  if (!dish) return;
  const current = state.cart.get(dish.id) || 0;
  state.cart.set(dish.id, current + 1);
  renderCart();
  showToast(`Añadido: ${dish.name} (£${dish.price})`);
}

function updateCartQty(dishId, delta) {
  const current = state.cart.get(dishId) || 0;
  const next = current + delta;
  if (next <= 0) {
    state.cart.delete(dishId);
  } else {
    state.cart.set(dishId, next);
  }
  renderCart();
}

function renderCart() {
  let totalItems = 0;
  let subtotal = 0;

  for (const [id, qty] of state.cart.entries()) {
    const dish = DISHES.find((d) => d.id === id);
    if (!dish) continue;
    totalItems += qty;
    subtotal += dish.price * qty;
  }

  cartCount.textContent = String(totalItems);

  if (totalItems === 0) {
    cartItemsEl.innerHTML = `
      <div class="cart-empty">
        <p>Tu bandeja de degustación está vacía.</p>
        <p>Explora los 10 platos y añade tus favoritos.</p>
      </div>
    `;
    cartFooterEl.style.opacity = "0.55";
  } else {
    cartFooterEl.style.opacity = "1";
    const itemsHtml = [];
    for (const [id, qty] of state.cart.entries()) {
      const dish = DISHES.find((d) => d.id === id);
      if (!dish) continue;
      itemsHtml.push(`
        <div class="cart-item">
          <img src="${dish.image}" alt="${dish.name}" />
          <div>
            <div class="cart-item__name">${dish.name}</div>
            <div class="cart-item__unit">£${dish.price} · Subtotal £${dish.price * qty}</div>
          </div>
          <div class="qty-controls">
            <button type="button" data-qty-minus="${dish.id}" aria-label="Quitar uno">−</button>
            <span>${qty}</span>
            <button type="button" data-qty-plus="${dish.id}" aria-label="Añadir uno">+</button>
          </div>
        </div>
      `);
    }
    cartItemsEl.innerHTML = itemsHtml.join("");
  }

  const service = subtotal * 0.125;
  const total = subtotal + service;
  cartSubtotalEl.textContent = formatGBP(subtotal);
  cartServiceEl.textContent = formatGBP(service);
  cartTotalEl.textContent = formatGBP(total);
}

function openCart() {
  cartDrawer.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.hidden = true;
  document.body.style.overflow = "";
}

// Event Listeners
filterBar.addEventListener("click", (e) => {
  const pill = e.target.closest("[data-category]");
  if (!pill) return;
  state.category = pill.dataset.category;
  filterBar.querySelectorAll(".filter-pill").forEach((btn) => {
    btn.classList.toggle("is-active", btn === pill);
  });
  renderMenu();
});

menuSearch.addEventListener("input", (e) => {
  state.search = e.target.value;
  renderMenu();
});

menuGrid.addEventListener("click", (e) => {
  const detailTrigger = e.target.closest("[data-open-detail]");
  if (detailTrigger) {
    openDishModal(detailTrigger.dataset.openDetail);
    return;
  }
  const addTrigger = e.target.closest("[data-add-cart]");
  if (addTrigger) {
    addToCart(addTrigger.dataset.addCart);
  }
});

dishModal.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-close-modal")) {
    closeDishModal();
  }
});

document.getElementById("modalAddBtn").addEventListener("click", () => {
  if (state.activeDishId) {
    addToCart(state.activeDishId);
    closeDishModal();
  }
});

document.getElementById("openCartBtn").addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
document.getElementById("closeCartBackdrop").addEventListener("click", closeCart);

cartItemsEl.addEventListener("click", (e) => {
  const minus = e.target.closest("[data-qty-minus]");
  if (minus) {
    updateCartQty(Number(minus.dataset.qtyMinus), -1);
    return;
  }
  const plus = e.target.closest("[data-qty-plus]");
  if (plus) {
    updateCartQty(Number(plus.dataset.qtyPlus), 1);
  }
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (state.cart.size === 0) {
    showToast("Añade al menos un plato antes de enviar la comanda.");
    return;
  }
  const orderId = `KSN-${Math.floor(1000 + Math.random() * 9000)}`;
  state.cart.clear();
  renderCart();
  closeCart();
  showToast(`Comanda ${orderId} enviada a la barra de Soho 🍣`);
});

// Copy Address
document.getElementById("copyAddressBtn").addEventListener("click", async () => {
  const text = "KŌSEN Neon Sushi Bar, 42 Electric Lantern Alley, Soho, London W1F 8NX, United Kingdom";
  try {
    await navigator.clipboard.writeText(text);
    showToast("Dirección copiada al portapapeles 📍");
  } catch {
    showToast("42 Electric Lantern Alley, Soho, London W1F 8NX");
  }
});

// Reservation Form
const resDateInput = document.getElementById("resDate");
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
resDateInput.value = tomorrow.toISOString().split("T")[0];
resDateInput.min = new Date().toISOString().split("T")[0];

const reservationForm = document.getElementById("reservationForm");
const reservationConfirmed = document.getElementById("reservationConfirmed");

reservationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(reservationForm);
  const code = `KSN-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("passCode").textContent = code;
  document.getElementById("passSummary").textContent =
    `${data.get("name")} · ${data.get("guests")} pers. · ${data.get("date")} a las ${data.get("time")} · ${data.get("seating")}`;
  reservationConfirmed.hidden = false;
  reservationConfirmed.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast(`Reserva confirmada: ${code}`);
});

document.getElementById("newReservationBtn").addEventListener("click", () => {
  reservationForm.reset();
  resDateInput.value = tomorrow.toISOString().split("T")[0];
  reservationConfirmed.hidden = true;
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!dishModal.hidden) closeDishModal();
    if (!cartDrawer.hidden) closeCart();
  }
});

// Initial Render
renderMenu();
renderCart();
