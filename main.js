console.log('test')

let popupBq = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

console.log(popupBq)
console.log(popup)
console.log(openPopupButtons)
console.log(closePopupButton)

openPopupButtons.forEach((button) =>{
    button.addEventListener('click', (e) => {
            e.preventDefault();
            popupBq.classList.add('active');
            popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click' ,() => {
    popupBq.classList.remove('active');
    popup.classList.remove('active');
});

const pushbar = new Pushbar({
    blur:true,
    overlay:true,
  });