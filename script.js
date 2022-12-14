const form = document.getElementById('form');
const username = document.getElementById('usuario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('correo');
const celular = document.getElementById('celular');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const validoDisplay = inputControl.querySelector('.valido');

    errorDisplay.innerText = ' ';
    validoDisplay.innerText = ' ';
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('valido')
}

const setSuccess = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const validoDisplay = inputControl.querySelector('.valido');

    errorDisplay.innerText = ' ';
    validoDisplay.innerText = ' ';
    validoDisplay.innerText = message;
    inputControl.classList.remove('error');
    inputControl.classList.add('valido');
    
};

const validarcorreo = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validarcelular = celular =>{
    const te= /^9[0-9]{8}$/;
    return te.test(celular)
}

const validarUsername = username =>{
    const us= /^[a-zA-Z0-9\_\-]{4,16}$/
    return us.test(String(username).toLowerCase())
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const nombreValue = nombre.value.trim();
    const celularValue = celular.value.trim();
    //validando usuario
    
    if(usernameValue === '') {
        setError(username, 'Se requiere un usuario');
    } else if (!validarUsername(usernameValue)) {
        setError(username, 'El usuario tiene que ser de 4 a 16 d??gitos y solo puede contener n??meros, letras y gui??n bajo')
    }
    else {
        setSuccess(username, '??Datos Correctos!');
    }

    //validando nombre
    if(nombreValue === '') {
        setError(nombre, 'Se requiere nombre completo');
    } else if (nombreValue.length > 30 ) {
        setError(nombre, 'Ingrese un nombre v??lido')
    }
    else {
        setSuccess(nombre, '??Datos Correctos!');
    }

    //validando correo
    if(emailValue === '') {
        setError(email, 'Se requiere un correo');
    } else if (!validarcorreo(emailValue)) {
        setError(email, 'El correo debe ser uno v??lido');
    } else {
        setSuccess(email,'??Datos Correctos!');
    }

    //validando celular
    if(celularValue === '') {
        setError(celular, 'Se requiere un n??mero de celular');
    } else if (!validarcelular(celularValue)) {
        setError(celular, 'El n??mero no es v??lido');
    } else {
        setSuccess(celular,'??Datos Correctos!');
    }

    //validando contrase??a
    if(passwordValue === '') {
        setError(password, 'Se requiere una contrase??a');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'La contrase??a debe tener al menos 8 d??gitos')
    } else {
        setSuccess(password,'??Datos Correctos!');
    }

    //validando contrase??a repetida
    if(password2Value === '') {
        setError(password2, 'Por favor confirme contrase??a');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Ambas contrase??as deben coincidir");
    } else {
        setSuccess(password2,'??Datos Correctos!');
    }

};
