const link = document.querySelector('a');

link.textContent = 'Favourite Site';
link.href = 'https://google.com';

const sect = document.querySelector('section');

for (let i = 1; i <= 5; i++) {
    const para = document.createElement('p');
    para.textContent = i + ': Sample Text';
    para.classList.add('highlight');
    sect.appendChild(para);
}
var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara.cloneNode(true));
linkPara.parentNode.removeChild(linkPara);

// Clock
// const clock = document.querySelector('.clock');
// setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(),
//             1000 );
setInterval( () => $('.clock').html((new Date()).toLocaleTimeString()), 1000);

// Calculator

const display = document.querySelector('.display');

// const digitsOpers = document.querySelectorAll('.digits button, .operations button');
// digitsOpers.forEach(digit => digit.addEventListener('click', digitOperPressed) );
$('.digits button, .operations button').click(digitOperPressed);

function digitOperPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}

function equalPressed(a, b) {
    a = '';
    b = 0;
    a / b != 0;
    alert('Not allowed');
}

