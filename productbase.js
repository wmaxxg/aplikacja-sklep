const productList = document.getElementById('productlist')
fetch("produkty.json")
.then(response => {
   return response.json();
})
.then(data => {
    data.forEach(product => {
    const div = document.createElement('div')
    div.className="productdiv"
    div.id=product.name
    div.innerHTML=`<img src="${product.picloc}"><p>${product.name}</p>`
    div.price=product.price
    div.unit=product.unit
    productList.appendChild(div)
    });
});

//zamiast tego równie mogłaby być baza danych podpięta