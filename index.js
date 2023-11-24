const counter = document.querySelector('.counter');
const lodingBarFront = document.querySelector('.lodingBarFront');

let number = 0;


updateNumber();

function updateNumber() {
    counter.textContent = number + '%';
    lodingBarFront.style.width = number + '%';
    number++;

    if (number <= 100) {
        setTimeout(updateNumber,10);
    }
}