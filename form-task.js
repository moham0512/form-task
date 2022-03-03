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

    // validation forms

    const signupForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#login form');

    let validateName = /^[a-z ,.'-]+$/i;
    // let validateUser = /^[a-zA-Z\-]+$/;
    let validatePass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const signupFN = document.querySelector('#signup input[name="firstName"]');
    const signupLN = document.querySelector('#signup input[name="lastName"]');
    const signupEmail = document.querySelector('#signup input[type="email"]');
    const signupPass = document.querySelector('#signup input[type="password"]');
    const signupMessage = document.querySelector('#signup .alt-message');


    signupForm.addEventListener('submit' , function(event){
        if(signupFN.value.length < 5){
            signupMessage.textContent = `* نام وارد شده درست نیست!`;
            event.preventDefault();
        }else if(signupLN.value.length < 5){
            signupMessage.textContent = `* نام خانوادگی وارد شده درست نیست!`;
            event.preventDefault();
        }else if(!validateEmail.test(signupEmail.value)){
            signupMessage.textContent = `* لطفا یک ایمیل معتبر وارد کنید!`;
            event.preventDefault();
        }else if(!validatePass.test(signupPass.value)){
            signupMessage.textContent = `* رمز عبور وارد شده باید شامل حداقل یک حرف بزرگ ، یک کاراکتر خاص و اعداد و حروف باشد!`;
            event.preventDefault();
        }
    });

    const loginEmail = document.querySelector('#login input[type="email"]');
    const loginPass = document.querySelector('#login input[type="password"]');
    const loginMessage = document.querySelector('#login .alt-message');

    loginForm.addEventListener('submit' , function(event){
        if(!validateEmail.test(loginEmail.value)){
            loginMessage.textContent = `* ایمیل وارد شده معتبر نمی باشد!`;
            event.preventDefault();
        }else if(!validatePass.test(loginPass.value)){
            loginMessage.textContent = `* کلمه عبور وارد شده معتبر نمی باشد!`;
            event.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', onLoad);