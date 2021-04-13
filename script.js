let request = new XMLHttpRequest();

var products;

url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1';
request.open('GET', url, true);

request.onload = function (){
    products = JSON.parse(this.response);
    let output = '';
    for (var i = 0; i < products.products.length; i++){
        output += 
        '<div class="product">' 
            + '<div class="p_img"><img src="https:'+ products.products[i].image + '"></div>'
            + '<div class="p_descript">'
                + '<h1 id="name">' + products.products[i].name + '</h1>'
                + '<p class="desc">' + products.products[i].description + '</p>'
                + '<p id="oldPrice">De: R$' + products.products[i].oldPrice + '</p>'
                + '<h2 id="price">Por: R$' + products.products[i].price + '</h2>'
                + '<p id="divPrice">ou 2x de R$' + (products.products[i].price) / 2 + '</p>'
                + '<button class="p_btn">' + 'Comprar' + '</button>'
            + '</div>'
        + '</div>';
    }
    document.getElementById('resultado').innerHTML += output;

    var i = products.nextPage;
    console.log(i);
}

request.send();

function nextPage()
{
    url = 'https://' + products.nextPage;
    request.open('GET', url, true);

    request.onload = function (){
        products = JSON.parse(this.response);
        let output = '';
        for (var i = 0; i < products.products.length; i++){
            output += 
            '<div class="product">' 
                + '<div class="p_img"><img src="https:'+ products.products[i].image + '"></div>'
                + '<div class="p_descript">'
                    + '<h1 id="name">' + products.products[i].name + '</h1>'
                    + '<p class="desc">' + products.products[i].description + '</p>'
                    + '<p id="oldPrice">De: R$' + products.products[i].oldPrice + '</p>'
                    + '<h2 id="price">Por: R$' + products.products[i].price + '</h2>'
                    + '<p id="divPrice">ou 2x de R$' + (products.products[i].price) / 2 + '</p>'
                    + '<button class="p_btn">' + 'Comprar' + '</button>'
                + '</div>'
            + '</div>';
        }
        document.getElementById('resultado').innerHTML += output;

        var i = products.nextPage;
        console.log(i);
    }
    request.send();
}
