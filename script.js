let heartsEnabled = false;
const textHeart = document.getElementById('textHeart');
const heartButton = document.getElementById('heartButton');
const overlay = document.getElementById('overlay');
const message = document.getElementById('message');
const closeBtn = document.getElementById('closeBtn');


setTimeout(() => {
    heartsEnabled = true;
}, 9000);

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("class", "heart-shape");
svg.setAttribute("viewBox", "0 0 500 500");

const fillPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
fillPath.setAttribute("class", "heart-fill");
fillPath.setAttribute("d", "M250,420 C140,365 40,250 40,140 C40,85 70,30 130,30 C180,30 230,80 250,140 C270,80 320,30 370,30 C430,30 460,85 460,140 C460,250 360,365 250,420 Z");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("class", "heart-outline");
path.setAttribute("d", "M250,420 C140,365 40,250 40,140 C40,85 70,30 130,30 C180,30 230,80 250,140 C270,80 320,30 370,30 C430,30 460,85 460,140 C460,250 360,365 250,420 Z");

svg.appendChild(fillPath);
svg.appendChild(path);
textHeart.appendChild(svg);

const textContainer = document.createElement('div');
textContainer.className = 'heart-text-container';
textHeart.appendChild(textContainer);

const fullText = "Para la que le da\ncolor a mi días";
const lines = fullText.split('\n');

let letterDelay = 4500; 
const delayPerLetter = 100; 

lines.forEach((line, lineIndex) => {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'heart-text';
    
    const letters = line.split('');
    letters.forEach((letter, letterIndex) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Preservar espacios
        span.style.animationDelay = `${letterDelay}ms`;
        lineDiv.appendChild(span);
        letterDelay += delayPerLetter;
    });
    
    textContainer.appendChild(lineDiv);
});

function createHeart() {
    if (!heartsEnabled) return;
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 300);

function showMessage() {
    overlay.classList.add('active');
    message.style.display = 'block';
    
    for(let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 100);
    }
}

function closeMessage() {
    overlay.classList.remove('active');
    message.style.display = 'none';
}

heartButton.addEventListener('click', showMessage);
closeBtn.addEventListener('click', closeMessage);
overlay.addEventListener('click', closeMessage);