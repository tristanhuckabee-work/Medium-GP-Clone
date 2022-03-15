window.addEventListener("load", (event) => {
    const logIn = document.querySelector('.login');
    const loginForm = document.querySelector('.login-form')
    logIn.addEventListener('click', e => {
        loginForm.style.display = 'block';
    })
})