function showStore(products) {
    let productTag = "";
    for (let i = 0; i < products.length; i++) {
      productTag += `<div class="col-6 col-md-3">
                            <div class="card">
                               <div>
                               <div class="float-end m-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                               <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg></div><img src="${products[i].image}" class="card-img-top" alt="Iphone"></div> 
                                <div class="card-body">
                                    <p class="card-title">${products[i].title}</p>
                                    <h3>₹ ${products[i].price}.00</h3>
                                    
                                </div>
                            </div>
                        </div>`;
    }

    document.getElementById("storeDiv").innerHTML = productTag;
  }

  function loadProducts() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      if (xhttp.status === 200) {
        let products = JSON.parse(xhttp.responseText);
        showStore(products);
      } else {
        console.error("Failed to fetch products:", xhttp.status);
      }
    };
    xhttp.open("GET", "https://fakestoreapi.com/products");
    xhttp.send();
  }

  // Use DOMContentLoaded event and event listener to load products when the page is ready
  document.addEventListener("DOMContentLoaded", loadProducts);
