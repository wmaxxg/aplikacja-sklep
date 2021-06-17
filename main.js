//stałe z elementami


const article = document.querySelector('article')
const es = document.getElementById('es')
const menuBoxDivs = document.getElementsByClassName('menuboxdiv');
const nav = document.querySelector('nav');
const navWrapper = document.getElementById('navwrapper')
const dialogWindow = document.getElementById("oknodialogowe");
const dialogcontent = document.getElementsByClassName('productbuy')[0]
const cartContent = document.getElementsByClassName('cart')[0]
const home = document.getElementById("katalog")
const ostronie = document.getElementById("ostronie")

//zmienne

let CenaCalosciowa
let koszyk = []
let OrderTable = []

//animacja menu

document.addEventListener('scroll', ()=>{
   if(article.offsetTop-navWrapper.offsetTop+4<=0)
   {
      es.style.display="block"
      nav.style.justifyContent="flex-end"
      navWrapper.style.background="#202020"
      for(i=0;i<4;i++)
         menuBoxDivs[i].classList.remove('onbanner');

   }
   else
   {
      es.style.display="none"
      nav.style.justifyContent="center"
      navWrapper.style.background="transparent"
      for(i=0;i<4;i++)
      menuBoxDivs[i].classList.add('onbanner');
   }
})

//wyświetlanie okna dialogowego zamówienia

productList.addEventListener('click', (event)=>{
   if(event.target.tagName=='DIV' && event.target.className=="productdiv")
   {
      product = event.target
   }
   else if(event.target.parentNode.className=="productdiv")
   {
      product = event.target.parentNode
   }
   else
      return 0;
   const infodiv = document.createElement('div')
   infodiv.id="id"
   infodiv.className="infodiv"
   infodiv.innerHTML=product.innerHTML
   const controldiv = document.createElement('div')
   controldiv.id="cd"
   controldiv.className="controldiv"
   controldiv.innerHTML=`<p>Cena za 1 ${product.unit}: ${product.price}zł</p><input placeholder="ile ${product.unit}"
   onchange="changeMainPrice(this.value, ${product.price})" type="number" min="1"><p class="cc"></p>
   <button class="addtocart" name="${product.id}">Dodaj do koszyka</button>`
   dialogcontent.appendChild(infodiv)
   dialogcontent.appendChild(controldiv)
   dialogWindow.style.display="block"
})


//wyświetlenie okna dialogowego koszyka

function showCart()
{
   i=0
   koszyk.forEach(cartElement =>
   {
      console.log(cartElement)
      const div = document.createElement('div')
      div.className="cartelement"
      div.innerHTML=`<p>${cartElement.id}, Cena: ${cartElement.price}</p><span onclick="koszyk.splice(${i},1)" class='removefromcart'>&#9842;</span>`
      cartContent.appendChild(div)
      i++
   })
   const button = document.createElement('button')
   button.className="order"
   button.innerHTML="Złóż zamówienie"
   cartContent.appendChild(button)
   dialogWindow.style.display="block"
}

//funkcjonalność okna dialogowego


dialogWindow.addEventListener('click', async (event)=>{
   elementclass=event.target.className
   switch(elementclass)
   {
      case 'close':
         if(dialogcontent.innerHTML!="")
         {
            dialogcontent.removeChild(dialogcontent.firstChild)
            dialogcontent.removeChild(dialogcontent.lastChild)
            dialogWindow.style.display="none"
         }
         else
            cartContent.innerHTML=""
            dialogWindow.style.display="none"
         break;
      case 'addtocart':
         koszyk.push({
         id:event.target.name,
         price:cenacalosciowa
         })
         console.log(koszyk)
         dialogcontent.removeChild(dialogcontent.firstChild)
         dialogcontent.removeChild(dialogcontent.lastChild)
         dialogWindow.style.display="none"
      case 'removefromcart':
         if(event.target.parentNode.parentNode)
         {
            event.target.parentNode.parentNode.removeChild(event.target.parentNode);
         }
         break;
      case 'order':
         console.log(koszyk)
         if(koszyk.length==0)
            alert('twój koszyk jest pusty, najpierw coś zamów')
         else
         {
            min = Math.ceil(1);
            max = Math.floor(10000);
            do
               orderId = Math.floor(Math.random() * (max - min)) + min;
            while(OrderTable.find(order => order==orderId))
            OrderTable.push(orderId)
            alert(`Nr twojego zamówienia to ${orderId}`)
            console.log(OrderTable)
         }
         break; 
      default:break;
   }
})
function changeMainPrice(amount, price) 
{
   const fullPrice = document.getElementsByClassName('cc')[0]
   cenacalosciowa = (amount*price).toFixed(2)
   fullPrice.innerHTML=`Cena całościowa: ${cenacalosciowa} zł`
}