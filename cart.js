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


function renderCartItem(){
    const cartItemsSection = document.getElementById('cart-items')

    cartItemsSection.innerHTML = ''
    products.forEach(product => {
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
    `;

    cartItemsSection.appendChild(row);
    })
}

document.addEventListener('DOMContentLoaded', renderCartItems)