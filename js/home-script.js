const add1 = document.querySelector('.left1');
const like1 = document.querySelector('.like1');
const num1 = document.querySelector('.num1');
const add2 = document.querySelector('.left2');
const like2 = document.querySelector('.like2');
const num2 = document.querySelector('.num2');
const add3 = document.querySelector('.left3');
const like3 = document.querySelector('.like3');
const num3 = document.querySelector('.num3');
const add4 = document.querySelector('.left4');
const like4 = document.querySelector('.like4');
const num4 = document.querySelector('.num4');
const add5 = document.querySelector('.left5');
const like5 = document.querySelector('.like5');
const num5 = document.querySelector('.num5');
const add6 = document.querySelector('.left6');
const like6 = document.querySelector('.like6');
const num6 = document.querySelector('.num6');


add1.addEventListener("click", function () {
    if (like1.classList.contains('liked')) {
        
    } else {
        let result = Number(num1.innerText) + 1;
        num1.innerText = result;
        like1.classList.add('liked');
    }
})

add3.addEventListener("click", function () {
    if (like3.classList.contains('liked')) {
        
    } else {
        let result = Number(num3.innerText) + 1;
        num3.innerText = result;
        like3.classList.add('liked');
    }
})

add2.addEventListener("click", function () {
    if (like2.classList.contains('liked')) {
        
    } else {
        let result = Number(num2.innerText) + 1;
        num2.innerText = result;
        like2.classList.add('liked');
    }
})

add4.addEventListener("click", function () {
    if (like4.classList.contains('liked')) {
        
    } else {
        let result = Number(num4.innerText) + 1;
        num4.innerText = result;
        like4.classList.add('liked');
    }
})

add5.addEventListener("click", function () {
    if (like5.classList.contains('liked')) {
        
    } else {
        let result = Number(num5.innerText) + 1;
        num5.innerText = result;
        like5.classList.add('liked');
    }
})

add6.addEventListener("click", function () {
    if (like6.classList.contains('liked')) {
        
    } else {
        let result = Number(num6.innerText) + 1;
        num6.innerText = result;
        like6.classList.add('liked');
    }
})