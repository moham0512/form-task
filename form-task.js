function onLoad() {
    const signupButton = document.querySelector('#topButton .signup');
    const loginButton = document.querySelector('#topButton .login');
    const signup = document.getElementById('signup');
    const login = document.getElementById('login');

    login.classList.add('hidden');
    signupButton.classList.add('bck-green');

    signupButton.addEventListener('click', signupPage);

    function signupPage() {
        signup.classList.remove('hidden');
        login.classList.add('hidden');
        signupButton.classList.add('bck-green');
        loginButton.classList.remove('bck-green');
    }

    loginButton.addEventListener('click', loginPage);

    function loginPage() {
        login.classList.remove('hidden');
        signup.classList.add('hidden');
        loginButton.classList.add('bck-green');
        signupButton.classList.remove('bck-green');
    }
}

document.addEventListener('DOMContentLoaded', onLoad);