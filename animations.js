const es = document.getElementById('es')
const menuBoxDivs = document.getElementsByClassName('menuboxdiv');
const nav = document.querySelector('nav');
const navWrapper = document.getElementById('navwrapper')
const article = document.querySelector('article')
// const


//animacja menu
document.addEventListener('scroll', ()=>{
 if(article.offsetTop-navWrapper.offsetTop+4<=0)
 {
    es.style.display="block"
    menuBoxDivs[0].classList.remove('onbanner')
    menuBoxDivs[1].classList.remove('onbanner')
    menuBoxDivs[2].classList.remove('onbanner')
    menuBoxDivs[3].classList.remove('onbanner')
    nav.style.justifyContent="flex-end"
    navWrapper.style.background="#2b2b2b"
 }
 else
 {
    es.style.display="none"
    menuBoxDivs[0].classList.add('onbanner')
    menuBoxDivs[1].classList.add('onbanner')
    menuBoxDivs[2].classList.add('onbanner')
    menuBoxDivs[3].classList.add('onbanner')
    nav.style.justifyContent="center"
    navWrapper.style.background="transparent"
 }
})