const firstNameError = document.querySelector('.first')
const lastNameError = document.querySelector('.last')
const emailError = document.querySelector('.email')
const passwordError = document.querySelector('.pass')

const submitBtn = document.querySelector('.submit')


function checkEmail() {
    var firstName = document.getElementById('first-name-input')
    var lastName = document.getElementById('last-name-input')
    var password = document.getElementById('pass-input')
    var email = document.getElementById('mail-input')
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    if (!filter.test(email.value)) {
        emailError.classList.add('error-message')
        email.classList.add('error-icon')
        email.style.border = '1px solid var(--clr-red)'
        email.style.color = 'red'
        document.getElementsByName('mail')[0].placeholder=''

    }

    if (firstName.value === null || firstName.value === '') {
        firstNameError.classList.add('error-message')
        firstName.classList.add('error-icon')
        firstName.style.border = '1px solid var(--clr-red)'
        document.getElementsByName('first-name')[0].placeholder=''

    }
    
    if (lastName.value === null || lastName.value === '') {
        lastNameError.classList.add('error-message')
        lastName.classList.add('error-icon')
        lastName.style.border = '1px solid var(--clr-red)'
        document.getElementsByName('last-name')[0].placeholder=''
    }

    if (password.value === null || password.value === '') {
        passwordError.classList.add('error-message')
        password.classList.add('error-icon')
        password.style.border = '1px solid var(--clr-red)'
        document.getElementsByName('password')[0].placeholder=''
    }
}

submitBtn.addEventListener('click', checkEmail)