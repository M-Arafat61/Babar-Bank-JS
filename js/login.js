document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('email-field')
    const emailValue = emailField.value;
    const passwordField = document.getElementById('password-field')
    const passwordValue = passwordField.value;
    if (emailValue === 'sontan@baba.com' && passwordValue === 'secret') {
        window.location.href='bank.html'
    } else {
        return alert ('It is very dissappointing from you!')
    }
})