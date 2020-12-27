$(document).ready(function(){
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  centerPadding: '20px',
  focusOnSelect: true,
  nextArrow: '<img src=".././img/shop/next.svg" class="next" alt="1">',
  prevArrow: '<img src=".././img/shop/prev.svg" class="prev" alt="2">',
});
});

const subTotal = (count) =>{
  let price = Number(count.querySelector('.price').dataset.price);
  let quantity = Number(count.querySelector('.input').value);
  let toglePprice = Number(count.querySelector('.--active')
      .dataset.price);
  let priceItem = price + toglePprice;
  let subTotalPrice = priceItem  * quantity;
  count.querySelector('.price').
    textContent = `${priceItem} р`;

  count.querySelector('.subtotal').
    textContent = `${subTotalPrice}`;
    summa();
}
const summa = () =>{
  let sum = 0;
  document.querySelectorAll('.subtotal').forEach
  ((item) => 
   sum += Number(item.innerHTML));
   console.log(sum); 
   document.querySelector('.summa').textContent = `${sum} Р`;
   if( sum !=0){
    document.querySelector('.total').
    classList.add('active');}
    else {
      document.querySelector('.total').
    classList.remove('active');
    }
   
   
}




const calculateSeparateItem = (count, action) =>{
  let total = 0;
  const input = count.querySelector('.input');
  switch(action){
    case 'plus':
    input.value++;
    subTotal(event.target.closest('.basket__item'));
    break;
    case 'minus':
    if (input.value != 0){
    input.value--;
    subTotal(event.target.closest('.basket__item'));
    }
    break;
  }
};
document.getElementById('basket')
.addEventListener('click', (event) => {
  if(event.target.classList.contains('minus')){
    calculateSeparateItem(
      event.target.closest('.basket__item'),'minus');
    
  }
  if(event.target.classList.contains('plus')){
    calculateSeparateItem(
      event.target.closest('.basket__item'),'plus');
    
  }
});
document.querySelectorAll('.triger__item').
forEach((item) => item.addEventListener('click', function(e){
  e.preventDefault();
  let itemTab = event.target.closest('.basket__item');
  itemTab.querySelectorAll('.triger__item').
forEach((child) => child.classList.remove('--active'));

 item.classList.add('--active');
 subTotal(event.target.closest('.basket__item'));
})
);





// const subTotal = () =>{
//   let total = 0;
//   [...document.querySelectorAll('.count')].
//   forEach((count) =>{
//      total = Number(count.querySelector('.input').value) *
//      Number(count.querySelector('.input').dataset.price);
//      document.querySelector('.subtotal').
//      textContent = total;
//   });

// };
// const calculateSeparateItem = (count, action) =>{
//   let total = 0;
//   const input = count.querySelector('.input');
//   switch(action){
//     case 'plus':
//     input.value++;
//     total = input.value * Number(input.dataset.price);
//     count.querySelector('.subtotal').
//     textContent = total;
//     break;
//     case 'minus':
//     if (input.value != 0){
//     input.value--;
//     total = input.value * Number(input.dataset.price);
//     count.querySelector('.subtotal').
//     textContent = total;
//     }
//     break;
//   }
// };
// document.getElementById('basket')
// .addEventListener('click', (event) => {
//   if(event.target.classList.contains('minus')){
//     calculateSeparateItem(
//       event.target.closest('.basket__item'),'minus');
    
//   }
//   if(event.target.classList.contains('plus')){
//     calculateSeparateItem(
//       event.target.closest('.basket__item'),'plus');
    
//   }
// });
// document.querySelectorAll('.triger__item').
// forEach((item) => item.addEventListener('click', function(e){
//   e.preventDefault();
//   document.querySelectorAll('.triger__item').
// forEach((child) => child.classList.remove('--active'));

//  item.classList.add('--active');
//  console.log(item.dataset.price);
// })
// );
