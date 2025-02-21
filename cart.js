const products =[

    {
        id: 1,
        name: 'Teclado Mecânico',
        category: "Periféricos",
        price: 100,
        image: "./images/teclado-mecanico.jpg",
        quantidy: 2
    },
    {
        id: 2,
        name: 'Cadeira Gamer',
        category: "Acessórios",
        price: 500,
        image: "./images/cadeira-gamer.jpg",
        quantidy: 1
    },
    {
        id: 3,
        name: 'Headset',
        category: "Periféricos",
        price: 350,
        image: "./images/cadeira-gamer.jpg",
        quantidy: 8
    },

]

function decreaseQuantity(product){
  if (product.quantidy > 0){
    product.quantidy--
  }
  renderCartItems()
}


function renderCartItems(){
    const cartItemsSection = document.getElementById('cart-items')

    const subtotalArea = document.getElementById('sub-total')

    const freteArea = document.getElementById('frete')
    let fretePrice = 0.00

    const totalPriceArea = document.getElementById('totalPrice')

    let subtotal = 0.00

    cartItemsSection.innerHTML = ''
    products.forEach(product => {

        const itemTotal = product.price * product.quantidy

        subtotal += itemTotal

        if(fretePrice == 0.00){
          freteStatus = "Gratuito"
        } else {
          freteStatus = `R$ ${fretePrice.toFixed(2)}`
        }


        const row = document.createElement('tr')

        row.innerHTML = `
        <td>
        <div class="product">
          <img 
            src="${product.image}" 
            height="100" 
            width="100" 
            alt="${product.name}" 
          />
          <div class="info">
            <div class="name">${product.name}</div>
            <div class="category">${product.category}</div>
          </div>
        </div>
      </td>
      <td>R$ ${product.price.toFixed(2)}</td>
       <td>
          <div class="quantity">
          <button onclick="decreaseQuantity(${product.quantidy})">
              <i class="bx bx-minus"></i>
          </button>
          <span>${product.quantidy}</span>
          <button onclick="increaseQuantity(${product.id})">
              <i class="bx bx-plus"></i>
          </button>
          </div>
      </td>

      <td>R$ ${itemTotal.toFixed(2)}</td>

      <td>
        <button class="remove" onclick="removeProduct(${product.id})">
          <i class="bx bx-x"></i>
        </button>
      </td>
    `;
    let totalPrice = subtotal + fretePrice

    cartItemsSection.appendChild(row);
    subtotalArea.innerHTML = `R$ ${subtotal.toFixed(2)}`;
    freteArea.innerHTML = `${freteStatus}`
    totalPriceArea.innerHTML = `R$ ${totalPrice.toFixed(2)}`
    })


}

document.addEventListener('DOMContentLoaded', renderCartItems)