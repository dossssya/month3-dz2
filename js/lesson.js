// PHONE CHACKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () =>{
    if (regExp.test(phoneInput.value.trim())) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    } else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

// TAB SLIDER
const tabContent = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentIndex = 0;
let intervalId;

const hideTabContent = () => {
    tabContent.forEach((content) => {
        content.style.display = 'none';
    });
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const nextTab = () => {
    hideTabContent();
    currentIndex = (currentIndex + 1) % tabContent.length;
    showTabContent(currentIndex);
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                currentIndex = tabIndex;
                showTabContent(tabIndex);
            }
        });
    }
};


const startAutoSlide = () => {
    intervalId = setInterval(nextTab, 3000);
};

const stopAutoSlide = () => {
    clearInterval(intervalId);
};

startAutoSlide();


tabsParent.addEventListener('click', stopAutoSlide);


tabs.forEach((tab) => {
    tab.addEventListener('click', startAutoSlide);
});



// converter
const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement1, targetElement2, current, data) => {
    element.oninput = () => {
        switch (current) {
            case 'som':
                targetElement1.value = (element.value * data.som_to_usd).toFixed(2);
                targetElement2.value = (element.value * data.som_to_eur).toFixed(2);
                break;
            case 'usd':
                targetElement1.value = (element.value * data.usd_to_eur).toFixed(2);
                targetElement2.value = (element.value * data.usd_to_som).toFixed(2);
                break;
            case 'eur':
                targetElement1.value = (element.value * data.eur_to_usd).toFixed(2);
                targetElement2.value = (element.value * data.eur_to_som).toFixed(2);
                break;
            default:
                break;
        }
        element.value === '' && (targetElement1.value = targetElement2.value = '');
    };
};

const request = new XMLHttpRequest();
request.open('GET', '../data/converter.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);
    converter(somInput, usdInput, eurInput, 'som', data);
    converter(usdInput, eurInput, somInput, 'usd', data);
    converter(eurInput, usdInput, somInput, 'eur', data);
};




