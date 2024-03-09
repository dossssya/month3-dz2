//DZ1 part1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-z\d._%+-]*[a-z\d]{3,}[a-z\d._%+-]*@gmail\.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value.trim())) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})
//DZ1 part2
const childBlock = document.querySelector('.child_block');
let distance = 0;

function animate() {
    distance += 2;
    childBlock.style.left = distance + 'px';

    if (distance < 447) {
        requestAnimationFrame(animate);
    }
}
requestAnimationFrame(animate);














// let count = 0
// const recursionCount = () => {
//     count++
//     console.log(count)
//
//     if (count < 500){
//         recursionCount()
//     } else {
//         console.log('все конец! парапарапам')
//     }
//
// }
// recursionCount()