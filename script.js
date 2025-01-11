let Data = {
  price: [
    133.09, 39.92, 138.45, 26.74, 124.27, 130.92, 66.14, 65.67, 144.33, 25.01,
    101.05, 83.98, 125.26, 141.51, 34.47, 40.5, 80.75, 34.93, 105.59, 143.79,
    91.3, 95.61, 36.63, 111.21, 42.89, 138.28, 62.49, 43.51, 30.2, 55.0, 76.62,
    116.85, 121.29, 134.61, 88.42, 34.17, 77.57, 45.48, 40.84, 98.2, 27.6,
    89.19, 129.56, 38.68, 89.75, 98.34, 134.81, 58.82, 122.6,
  ],
  title: [
    "Speedster Pro",
    "Urban Comfort",
    "Elite Performance",
    "Budget Boost",
    "Power Grip",
    "Sleek Motion",
    "Trendsetter X",
    "All-Day Flex",
    "Aero Glide",
    "City Explorer",
    "Dynamic Stride",
    "Cushion Comfort",
    "Premium Edge",
    "Versatile Pro",
    "Daily Drive",
    "Sport Luxe",
    "Essential Flex",
    "High-Performance",
    "Classic Style",
    "Urban Trend",
    "Comfort Tech",
    "Lightweight Power",
    "Endurance Max",
    "Eco Flex",
    "Quick Step",
    "Precision Grip",
    "Urban Luxe",
    "Comfort Edge",
    "Freedom Walk",
    "Street Style",
    "Power Lift",
    "All-Terrain Grip",
    "Performance Edge",
    "Daily Performance",
    "Quick Move",
    "Precision Fit",
    "Eco Drive",
    "Comfort Flow",
    "Stylish Stride",
    "All-Terrain Pro",
    "Dynamic Walk",
    "High-Tech Flex",
    "Elite Stride",
    "Ultra Grip",
    "Lightweight Fit",
    "Urban Sport",
    "Comfort Luxe",
    "Endurance Lite",
    "Sleek Stride",
    "Precision Comfort",
    "Active Move",
    "Urban Balance",
    "Power Drive",
  ],
  description: [
    "High-performance running shoes with great cushioning.",
    "Affordable sneakers designed for comfort and style.",
    "Premium athletic shoes built for durability and support.",
    "Budget-friendly sneakers with a trendy design.",
    "Sleek running shoes, perfect for both training and casual wear.",
    "Stylish and comfortable sneakers for all-day wear.",
    "Versatile shoes ideal for both sports and everyday use.",
    "Trendsetting sneakers offering both comfort and support.",
    "High-end sneakers with advanced technology.",
    "Comfortable shoes for city walking and commuting.",
    "Lightweight shoes designed for speed and agility.",
    "Cushioned sneakers for long hours of wear.",
    "Durable shoes built for tough conditions.",
    "Trendy sneakers perfect for any occasion.",
    "Supportive shoes ideal for workouts and runs.",
    "Comfortable and easy-to-wear sneakers.",
    "Stylish and affordable athletic shoes.",
    "Versatile shoes with excellent grip.",
    "Classic design sneakers with modern updates.",
    "All-day comfort for busy lifestyles.",
    "Shoes designed for endurance and stability.",
    "Affordable sneakers for everyday use.",
    "Shoes built for maximum flexibility.",
    "Lightweight shoes with superior comfort.",
    "Stylish athletic shoes for daily wear.",
    "Shoes with a sleek and modern look.",
    "All-terrain sneakers with enhanced support.",
    "Comfortable running shoes with breathable materials.",
    "Durable and stylish sneakers for sports.",
    "Comfortable shoes with good shock absorption.",
    "Trendy sneakers ideal for casual outings.",
    "Shoes designed for quick and agile movements.",
    "Stylish sneakers with excellent traction.",
    "Shoes with a focus on comfort and fit.",
    "Lightweight shoes for faster performance.",
    "All-purpose sneakers suitable for any activity.",
    "Shoes built for maximum comfort and support.",
    "Fashion-forward sneakers with functional design.",
    "Durable sneakers with long-lasting comfort.",
    "Shoes with a modern aesthetic and premium feel.",
    "Comfortable shoes with good arch support.",
    "Trendy sneakers perfect for urban settings.",
    "Shoes with a minimalist design and high quality.",
    "Stylish athletic shoes with practical features.",
  ],
};

function Product(imageNum, title, paragraph, price) {
  return `<div class="card">
          <div class="image-container">
            <img src="Assets/Images/Assets${imageNum}.jpeg" alt="" />
          </div>
          <div class="text-container">
            <h2 class="title">${title}</h2>
            <p>
              Lorem ipsum ${paragraph}
            </p>
            <div class="price-and-quantity">
              <h1 class="price">$${price}</h1>
              <div class="quantity-container">
                <button onclick="remove1(this)">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="quantity">1</span>
                <button onclick="add1(this)">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <button onclick="add(this)" class="add">Add</button>
          </div>
        </div>`;
}
function checkedProduct(
  imagChecked,
  titleChecked,
  priceChecked,
  quantityChecked,
  singleTotalChecked
) {
  return `<div class="checked">
            <div class="image-container">
              <img src="${imagChecked}" alt="" />
            </div>
            <div class="text-container">
              <h3>${titleChecked}</h3>
              <h5><span class="checkedPriceClass">${priceChecked}</span> $</h5>
              <div class="single-quantity-and-total">
                <h5>Quantity <span class="quantity">${quantityChecked}</span></h5>
                <h5>Total <span class="single-total">$${singleTotalChecked}</span></h5>
              </div>
            </div>
            <button class="remove-from-list" onclick="ramoveFromlist(this)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>`;
}

var cards = document.querySelector(".cards");

for (let i = 1; i < 49; i++) {
  if (i < 10) {
    cards.innerHTML += Product(
      "0" + i,
      Data.title[i],
      Data.description[i],
      Data.price[i]
    );
  }
  //
  else {
    cards.innerHTML += Product(
      i,
      Data.title[i],
      Data.description[i],
      Data.price[i]
    );
  }
}

function add1(target) {
  var span = target.previousElementSibling;
  var singleProduct = target.closest(".card");

  if (span.textContent < 10) {
    span.textContent++;
    // navNotification.textContent++;
  }
}
function remove1(target) {
  var span = target.nextElementSibling;
  if (span.textContent > 1) {
    span.textContent--;
    // navNotification.textContent--;
  }
}

var navNotification = document.querySelector("nav .nav-notification");
var cartCount = document.querySelector(".cart-count");
var totalPriceClass = document.querySelector(".total-price");
var checkedContainer = document.querySelector(".checked-container");
let checkedProducts = [];

function add(target) {
  var singleProduct = target.closest(".card");
  var targetedtitle = singleProduct.querySelector(".title").textContent;
  var targetedprice = singleProduct.querySelector(".price").textContent;
  var targetedimg = singleProduct.querySelector("img").src;
  var targetedquantity = singleProduct.querySelector(".quantity").textContent;

  checkedContainer.innerHTML += checkedProduct(
    targetedimg,
    targetedtitle,
    targetedprice,
    targetedquantity,
    (
      parseFloat(targetedquantity) * parseFloat(targetedprice.replace("$", ""))
    ).toFixed(2)
  );

  checkedProducts.push(checkedContainer.innerHTML);
  navNotification.textContent = checkedProducts.length;
  cartCount.textContent = checkedProducts.length;

  let pricesArray = [];
  document
    .querySelectorAll(".checked-container .single-total")
    .forEach((element) => {
      pricesArray.push(parseFloat(element.textContent.replace("$", "")));
    });

  let calculTotal = pricesArray.reduce((a, b) => a + b);

  totalPriceClass.textContent = calculTotal.toFixed(2);
}

function ramoveFromlist(target) {
  var singleProduct = target.closest(".checked");
  singleProduct.remove();

  const remainingItems = document.querySelectorAll(
    ".checked-container .checked"
  );

  navNotification.textContent = remainingItems.length;
  cartCount.textContent = remainingItems.length;

  let pricesArray = [];
  document
    .querySelectorAll(".checked-container .single-total")
    .forEach((element) => {
      pricesArray.push(parseFloat(element.textContent.replace("$", "")));
    });

  const calculTotal =
    pricesArray.length > 0 ? pricesArray.reduce((a, b) => a + b) : 0;
  totalPriceClass.textContent = calculTotal.toFixed(2);
}

var list = document.querySelector(".list");
var cartNavIcon = document.querySelector(".cart-nav-icon");
function navCart(target) {
  list.classList.toggle("show");
  cartNavIcon.classList.toggle("fa-xmark");
}

// Custom Cursor
var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.pageX}px`;
  cursor.style.top = `${event.pageY}px`;

  document.querySelectorAll("button , nav").forEach((button) => {
    button.addEventListener("mousemove", () => {
      cursor.style.setProperty("width", "20px");
      cursor.style.setProperty("height", "20px");
      cursor.style.setProperty("background-color", "white");
    });
    button.addEventListener("mouseleave", () => {
      cursor.style.removeProperty("width");
      cursor.style.removeProperty("height");
      cursor.style.removeProperty("background-color");
    });
  });
  document.querySelectorAll("h1 , h2 , h3 , h4 , p , span").forEach((texts) => {
    texts.addEventListener("mousemove", () => {
      cursor.style.setProperty("width", "5px");
      cursor.style.setProperty("height", "15px");
      cursor.style.setProperty("border-radius", "10px");
    });
    texts.addEventListener("mouseleave", () => {
      cursor.style.removeProperty("width");
      cursor.style.removeProperty("height");
      cursor.style.removeProperty("border-radius");
    });
  });

  // Remove Cursor Whe Over On Footer
  document.querySelector("footer").addEventListener("mousemove", () => {
    cursor.style.setProperty("visibility", "hidden");
  });
  document.querySelector("footer").addEventListener("mouseleave", () => {
    cursor.style.removeProperty("visibility");
  });

  document.querySelector("nav").addEventListener("mousemove", () => {
    cursor.style.setProperty("background-color", "var(--primary)");
    cursor.style.setProperty("mix-blend-mode", "screen");
    cursor.style.setProperty("opacity", "50%");
  });
  document.querySelector("nav").addEventListener("mouseleave", () => {
    cursor.style.removeProperty("background-color");
    cursor.style.removeProperty("mix-blend-mode");
    cursor.style.removeProperty("opacity");
  });
});

// Hide Nav OnScroll
var nav = document.querySelector("nav");
var list = document.querySelector(".list");

window.onscroll = function () {
  if (window.scrollY > 0) {
    nav.style.setProperty("height", "0px");
    nav.style.setProperty("padding-block", "0px");
    list.style.setProperty("top", "0px");
  } else {
    nav.style.removeProperty("height");
    nav.style.removeProperty("padding-block");
    list.style.removeProperty("top");
    list.style.removeProperty("top");
  }
};
