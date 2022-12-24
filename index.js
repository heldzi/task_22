
const btnswitch = document.querySelector('.btn');
const iconswitch = document.querySelector('#Icons');
const icons2switch = document.querySelector('#Icons2');
var find1 = true;


btnswitch.addEventListener('click', () => {
    if(find1) {
        iconswitch.classList.add('icon');
        icons2switch.classList.remove('icon');
        find1 = false;
    } else {
        icons2switch.classList.add('icon');
        iconswitch.classList.remove('icon');
        find1 = true;
    }
});

