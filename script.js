const ratings = document.querySelectorAll('.ratings-item');
const ratingsContainer = document.querySelector('.ratings-container');
const submit = document.querySelector('.btn');
const panel = document.querySelector('#panel');

let selectedRating = '';

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('ratings-item')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        if (e.target.nextElementSibling !== null) {
            selectedRating = e.target.nextElementSibling.innerHTML;
        }
        else {
            selectedRating = e.target.innerHTML;
        }
    }
    else if (e.target.classList.contains('ratings-item')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.lastElementChild.textContent;
    }
})

submit.addEventListener('click', () => {
    if (selectedRating === '') {
        alert('Please choose rating option before submitting!')
    }
    else {
        panel.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/210/210545.png" alt="">
    <p><strong>Thank you!</strong></p>
    <br>
    <p>Feedback: ${selectedRating}</p>
    <br>
    <p>We'll use your feedback to improve our customer support!</p>
`
    }
})

function removeActive() {
    for (let item of ratings) {
        item.classList.remove('active');
    }
}
