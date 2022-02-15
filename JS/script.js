const h1Text  =document.querySelector('.title');
h1Text.onclick = function(){
    h1Text.textContent='Очень рады вас видеть'
}
const imgItem = document.querySelector('.imgs');
imgItem.onclick = function(){
    let mySrc = imgItem.getAttribute('src');
    if(mySrc === '../img/like.png'){
        imgItem.setAttribute ('src','../img/dislike.png')
    }else{
        imgItem.setAttribute ('src','../img/like.png');
    }
}
let i=0,
    promoText = '6 Rue de I Amiral de Colingy,Paris',
    speed = 80;
const WritePromo = document.querySelector ('.btn-promo');
function PromoWriter (){
    if (i < promoText.length){
        document.querySelector ('.adres').innerHTML += promoText.charAt(i);
        i++;
        setTimeout (PromoWriter,speed);
    }
}
WritePromo.addEventListener ('click',PromoWriter);
const teaText = document.querySelector('.tea');
taming()
function taming(){
    setTimeout (One,1000);
    setTimeout (Two,3000);
    setTimeout (Three,5000);
}
function One(){
    teaText.innerHTML='Февральская акция';
}
function Two(){
    teaText.innerHTML='-30% на стоимость билетов';
}
function Three(){
    teaText.innerHTML='успейте приобрести по акции.';
}