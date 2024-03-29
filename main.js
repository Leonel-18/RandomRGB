
function rgbCode(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgbCode = `rgb(${red},${green},${blue})`;
    return rgbCode
}

const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    const randomColor = rgbCode();
    const mostrarColor = document.getElementById('mostrarColor');
    const card  = document.querySelector('.card');
    const title  = document.querySelector('.title');

    document.body.style.backgroundColor = randomColor;
    btn.style.backgroundColor = randomColor
    mostrarColor.textContent = randomColor;
    card.style.backgroundColor = randomColor;
    title.style.color = randomColor;

});