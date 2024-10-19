var products = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1729283814187-9b3d09e4ee32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    name: "Furniture-1",
    headline: "Nice & Good",
    price: "40,000",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    name: "Furniture-2",
    headline: "Nice & Good",
    price: "32,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    name: "Furniture-3",
    headline: "Nice & Good",
    price: "10,000",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVybml0dXJlfGVufDB8fDB8fHww",
    name: "Furniture-4",
    headline: "Nice & Good",
    price: "29,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Furniture-5",
    headline: "Nice & Good",
    price: "25,000",
  },
];

var cart = [];

var popular = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Furniture-1",
    headline: "Nice & Good",
    price: "40,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Furniture-2",
    headline: "Nice & Good",
    price: "32,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489269637500-aa0e75768394?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Furniture-3",
    headline: "Nice & Good",
    price: "10,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590075633056-de7a19338adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Furniture-4",
    headline: "Nice & Good",
    price: "29,000",
  },
  {
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Furniture-5",
    headline: "Nice & Good",
    price: "25,000",
  },
];

function addProducts() {
  var clutter = "";
  products.forEach((product, idx) => {
    clutter += `   <div class="product w-fit rounded-xl p-2 bg-white">
          <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                <img  class="image w-full h-full object-cover  rounded overflow-hidden"  src= "${product.image}" />
          </div>
          <div class="data w-full px-2 py-5">
            <h1 class="font-semibold text-xl leading-none tracking-tight">
              ${product.name}
            </h1>
            <div class="flex justify-between w-full items-center mt-2">
              <div class="w-1/2">
                <h3 class="font-semibold opacity-20">${product.headline}</h3>
                <h4 class="font-semibold mt-2"> &#8377; ${product.price}</h4>
              </div>
              <button data-index =${idx}  class="add w-10 h-10 rounded-full shader text-yellow-400">
                <i    data-index =${idx}    class=" add ri-add-line"></i>
              </button>
            </div>
          </div>
        </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  var clutter = "";
  popular.forEach((product) => {
    clutter += `  <div
            class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
          >
            <div
              class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
            >
              <img
                class="w-full h-full object-cover"
                src="${product.image}"
                alt=""
              />
            </div>
            <div class="data py-2 w-full">
              <h1 class="leading-none font-semibold">${product.headline}</h1>
              <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
              ${product.price}
              </h4>
              <h4 class="mt-3 font-semibold text-zinc-500"> &#8377; ${product.price}</h4>
            </div>
          </div>`;
  });

  document.querySelector(".populars").innerHTML = clutter;
}

function addToCart() {
  document.querySelector(".products").addEventListener("click", (details) => {
    if (details.target.classList.contains("add")) {
      cart.push(products[details.target.dataset.index]);
      console.log(cart);
    }
  });
}

function showCart() {
  document.querySelector(".carticon").addEventListener("click", () => {
    const cartElement = document.querySelector(".cartexpnd");

    // Check if the cart is currently displayed
    if (cartElement.style.display === "block") {
      // If it's displayed, hide it
      cartElement.style.display = "none";
    } else {
      // If it's hidden, display it and populate with cart items
      cartElement.style.display = "block";

      var clutter = "";
      cart.forEach((prod, idx) => {
        clutter += `<div id=${idx} class="box">
                            <div class="bg-red">
                                <img src="${prod.image}" alt="" />
                            </div>
                            <div class="vert-text">
                                <h3>Name: ${prod.name}</h3>
                                <h4>Price: &#8377; ${prod.price}</h4>
                            </div>
                      </div>`;
      });

      cartElement.innerHTML = clutter;
    }
  });
}

addProducts();
addPopularProducts();
addToCart();
showCart();
