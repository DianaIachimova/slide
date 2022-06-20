const images = [ 'images/firstDog.jpeg', 'images/secondDog.jpeg', 'images/thirdDog.jpeg', 'images/fortDog.jpg'];
const surface = document.getElementById('slide-container');
const next = document.getElementById('right');
const prev = document.getElementById('left');
const toSave = [];

let current=0;

// create images on surface
for(let i=0; i<images.length; i++)
{
    let img = document.createElement('img');
    img.src=images[i];
    if(i===0)
    {
        img.style.display='block';
    }
    surface.appendChild(img);
    img.classList.add('aboutImages');
    toSave.push(img);
}


const nextClick = () => {
    if (current == toSave.length-1) current = 0;
    else current ++;
    moveSlide();
}


const prevClick = () => {
    if (current == 0) current = toSave.length-1;
    else current --;
    moveSlide();
}

const moveSlide = () => {
    for(let i=0; i<toSave.length; i++)
    { 
        toSave[i].style.display = "none";
    }

    toSave[current].style.display = "block";
}

let x= setInterval(nextClick, 4000);

next.addEventListener('click', () =>{
    clearInterval(x);
    nextClick()
    x= setInterval(nextClick, 4000);
});


prev.addEventListener('click', () =>{
    clearInterval(x);
    prevClick();
    x= setInterval(prevClick, 4000);
});


window.onload= x;