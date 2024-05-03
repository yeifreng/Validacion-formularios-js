document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //Validar el campo nombre
    let nombre = document.getElementById('name')
    let nombreError = document.getElementById('nameError')

    if(nombre.value.trim() === ''){
        nombreError.textContent = 'por favor, ingresa un nombre'
        nombreError.classList.add('error-message')
    }else{
        nombreError.textContent = ''
        nombreError.classList.remove('error-message')

    }

     //Validar el campo email

    let email = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPatron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPatron.test(email.value)){
        emailError.textContent = 'por favor, ingresa un correo valido'
        emailError.classList.add('error-message')
    }else{
              
        emailError.textContent = ''
        emailError.classList.remove('error-message') 
    }

    //Validar la contraseña

    let pwd = document.getElementById('password')
    let pwdError = document.getElementById('passwordError')

    if(pwd.value.length < 8){
        pwdError.textContent = 'la contrasea debe tener al menos 8 caracteres'
        pwdError.classList.add('error-message')
    }else{
        pwdError.textContent = ''
        pwdError.classList.remove('error-message')

    }

    //si todos los campos son validos

    if(!nombreError.textContent && !emailError.textContent && !pwdError.textContent){
        alert('Formulario enviado con exito')
        document.getElementById('formulario').reset();
    }

})