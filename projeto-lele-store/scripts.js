const products = [
    {
        id: 1,
        title: "Achocolatado Italakinho",
        price: 3.99,
        discount: 10,
        image: "https://m.media-amazon.com/images/I/616JRqKDzUL.jpg"
    },
    {
        id: 2,
        title: "Subway B.M.T",
        price: 38.99,
        discount: 15,
        image: "https://sbw-cms.zamp.com.br/foto_desktop_sanduiches_embutidos_bmt_italiano_a0cef6fafc/foto_desktop_sanduiches_embutidos_bmt_italiano_a0cef6fafc.jpg"
    },
    {
        id: 3,
        title: "Sandália Ortopédica",
        price: 45.90,
        discount: 18,
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98r-lls57s353fhz27"
    },
    {
        id: 4,
        title: "Panda de pelúcia Baby Lelê",
        price: 89.90,
        discount: 15,
        image: "https://i.etsystatic.com/31049897/r/il/252121/7120747693/il_570xN.7120747693_ee0s.jpg"
    },
    {
        id: 5,
        title: "Pãozinho doce",
        price: 46.88,
        discount: 10,
        image: "https://listadereceitas.com/wp-content/uploads/2025/08/Receita-de-pao-doce-caseiro-fofinho-facil-de-se-fazer.png"
    },
    {
        id: 6,
        title: "Melatonina Neo Química",
        price: 26.99,
        discount: 10,
        image: "https://www.qualfarma.com.br/cdn-cgi/imagedelivery/YkMPToGQ9rsd5EY3QoxN2w/90bbf1f0-40d4-452a-b9d3-fb703357cf00/public"
    },
    {
        id: 7,
        title: "Cavalo de pelúcia Carlinhos Bangui Bangui",
        price: 2050.00,
        discount: 10,
        image: "https://yasminbaby.com.br/wp-content/uploads/2025/07/cavalo-de-pelucia-bebe-para-enfeite-quarto-infantil.jpg"
    },
];

function formatPrice(price) {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

}

function createProductCard(product) {

    return `
         <div class="product-card">
                    <img src="${product.image}" alt="${product.title}"class="product-image">
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">${formatPrice(product.price)}</div>
                    <div class="product-discount">${product.discount}% OFF</div>
                </div>
    `
}

function renderProducts(products) {
    const grid = document.getElementById('productsGrid')
    grid.innerHTML = products.map(createProductCard).join('')
}

function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase()
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchInput))
    renderProducts(filteredProducts)
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products)
    document.getElementById('searchBtn').addEventListener('click', searchProducts)
})