const questions = document.querySelectorAll('.question')

questions.forEach((question, index) => {
    const button = question.querySelector('.question-expand-button');
    const text = question.querySelector('.question p')

    if (index == 0) {
        button.classList.remove('plus-icon-button');
        button.classList.add('minus-icon-button')
        text.style.display = 'block';
    }

    button.addEventListener('click', () => {
        if(text.style.display == 'none' || text.style.display == '') {
            text.style.display = 'block'
            button.classList.remove('plus-icon-button')
            button.classList.add('minus-icon-button');
        } else {
            text.style.display = 'none'
            button.classList.remove('minus-icon-button')
            button.classList.add('plus-icon-button');
        }
    })
})

