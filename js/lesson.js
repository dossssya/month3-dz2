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








