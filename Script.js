let products = [
  {
    id: 1,
    name: "Apple",
    category: "fruits",
    image: "https://5.imimg.com/data5/AK/RA/MY-68428614/apple.jpg",
    price: 160,
    discount: "15% OFF",
  },
  {
    id: 2,
    name: "Carrot",
    category: "vegetables",
    image:
      "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc=",
    price: 40,
    discount: "5% OFF",
  },
  {
    id: 3,
    name: "Chips",
    category: "snacks",
    image:
      "https://ganguram.com/cdn/shop/files/masala-potato-chips.jpg?v=1756974094&width=480",
    price: 30,
    discount: "2% OFF",
  },
  {
    id: 4,
    name: "Mango",
    category: "fruits",
    image:
      "https://www.earthytales.in/uploads/products/3x/e3faabd5eae9df6ff66a21be273a00cf.jpg?v=16092025043",
    price: 200,
    discount: "25% OFF",
  },
  {
    id: 5,
    name: "Tomato",
    category: "vegetables",
    image:
      "https://www.fervalle.com/wp-content/uploads/2022/07/580b57fcd9996e24bc43c23b-1024x982.png",
    price: 30,
    discount: "10% OFF",
  },
  {
    id: 6,
    name: "Ice Cream",
    category: "snacks",
    image:
      "https://tiimg.tistatic.com/fp/3/007/832/sterilized-family-pack-yummy-amul-real-flavored-chocolate-brownie-ice-cream--203.jpg",
    price: 300,
    discount: "20% OFF",
  },
  {
    id: 7,
    name: "Watermelon",
    category: "fruits",
    image:
      "https://png.pngtree.com/png-clipart/20250419/original/pngtree-watermelon-png-image_20797634.png",
    price: 25,
    discount: "5% OFF",
  },
  {
    id: 8,
    name: "Onion",
    category: "vegetables",
    image:
      "https://static.vecteezy.com/system/resources/previews/046/439/096/non_2x/onion-isolated-on-a-transparent-background-png.png",
    price: 20,
    discount: "5% OFF",
  },
  {
    id: 9,
    name: "7Up",
    category: "snacks",
    image:
      "https://media.istockphoto.com/id/531417466/photo/can-of-7up.jpg?s=612x612&w=0&k=20&c=BDzgqR0ty5_b4V8ttg77l190hyY07jbo30vBwnBGOVU=",
    price: 40,
    discount: "3% OFF",
  },
  {
    id: 10,
    name: "Papaya",
    category: "fruits",
    image: "https://m.media-amazon.com/images/I/61CuiyI4aBL.jpg",
    price: 30,
    discount: "15% OFF",
  },
  {
    id: 11,
    name: "Beetroot",
    category: "vegetables",
    image: "https://m.media-amazon.com/images/I/71XsyPm+xZL.jpg",
    price: 40,
    discount: "10% OFF",
  },
  {
    id: 12,
    name: "Coca Cola",
    category: "snacks",
    image:
      "https://lascampanasdeflorenciacuarte.com/71-medium_default/coca-cola-33-cl.jpg",
    price: 300,
    discount: "20% OFF",
  },
];


console.log(products);

let ProductsList = document.getElementById("ProductsList");
console.log(ProductsList);

//! FilteredData
if (ProductsList) {
  displayProducts(products);
  let FilterButton = document.querySelectorAll(".FilterButton");
  console.log(FilterButton);
  FilterButton.forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", (e) => {
      // console.log("Button Clicked");
      let category = e.target.dataset.category;
      console.log(category);
      if (category === "all") {
        displayProducts(products);
      } else {
        let FilteredData = products.filter((p) => {
          return p.category === category;
        });
        console.log(FilteredData);
        displayProducts(FilteredData);
      }
    });
  })
}

//! Displaying the Products on UI
function displayProducts(item) {
  ProductsList.innerHTML = item.map((p) => {
    console.log(p);
    return `
         <aside class="Products">
        <img src="${p.image}" alt="" />
        <h3>${p.name}</h3>
        <p>₹ ${p.price} /- 
        <br><p style="color: red;">${p.discount}</p></p>
        <button onclick="addToCart(${p.id})">Add to cart</button>
      </aside>
        `;
  }).join("");
}

//! add to cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let ProductsData = products.find((p) => {
    return p.id === id;
  });
  cart.push(ProductsData);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${ProductsData.name} added to cart`);
  console.log(cart);
  updateCartItems();
}

//! updating the cart
function updateCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTotal = document.getElementById("cartTotal");
  console.log(cartTotal);
  cartTotal.textContent = `${cart.length}`;
}
updateCartItems();


//! Cart Page Container Code
let cartItems = document.getElementById("cartItems");
console.log(cartItems);
if (cartItems) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cartItems.innerHTML = cart
    .map((item) => {
      total += item.price;
      console.log(total);
      return `<article>${item.name}   ₹ ${item.price} /-</article>`;
    })
    .join("");

  let totalBill = document.getElementById("totalBill");
  totalBill.textContent = `Total Bill : ₹${total}/-`;

  //! Clear Cart
  let clearCart = document.getElementById("clearCart");
  console.log(clearCart);
  clearCart.onclick = () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "HomeAfterLogin.html";
  };

  //! Check out

  let checkout=document.getElementById('checkout');
  console.log(checkout);
  checkout.onclick=()=>{
    alert(`Thank You For Shopping ,Your Total Bill is ₹ ${total}/-  Vist Again!!!`)
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "HomeAfterLogin.html";
  }
}

