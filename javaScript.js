document.getElementById('miFormulario').addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const dni = document.getElementById('dni').value;
    const celular = document.getElementById('celular').value;
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    const nombreError = document.getElementById('nombreError');
    const correoError = document.getElementById('correoError');
    const dniError = document.getElementById('dniError');
    const celularError = document.getElementById('celularError');
    const passwordError = document.getElementById('passwordError');
    const confirmarPasswordError = document.getElementById('confirmarPasswordError');
    let esValido = true;

    // Nombre
    const nombreReguex = /^[a-zA-Z]{4,10}$/;
    if(nombre === ''){
        nombreError.textContent = 'El campo es obligatorio';
        esValido = false;
    }else if(!nombreReguex.test(nombre)){
        nombreError.textContent = 'Solo letras y debe de tener mas de 2 caracteres'
        esValido = false;
    }

    // Correo Electronico

    const correoReguex = /^[a-zA-Z0-9_]{4,16}$/;
    if(correo === ""){
        correoError.textContent = 'El campo es obligatorio';
        esValido = false;
    }else if(correoReguex.test(correo)){
        correoError.textContent = 'Ingrese un correo valido con números y caracteres.';
        esValido = false;
    }

    // DNI

    const dniReguex = /^[0-9]{8}$/;
    if(dni === ''){
        dniError.textContent = 'Campo obligatorio';
        esValido = false;
    }else if(!dniReguex.test(dni)){
        dniError.textContent = 'Debe de tener 8 números'
        esValido = false;
    }

    // celular

    const celularReguex = /^[0-9]{9}$/;
    if(celular === ''){
        celularError.textContent = 'Campo Obligatorio';
        esValido = false;
    }else if(!celularReguex.test(celular)){
        celularError.textContent = 'Debe de tener 9 números'
        esValido = false;
    }



    // Validar Contraseña

    if(password === ''){
        passwordError.textContent = 'Campo Obligatorio';
        esValido = false;
    } else if (password === confirmarPassword) {
        passwordError.textContent = 'Las contraseñas coinciden.';
    } else {
        passwordError.textContent = 'Las contraseñas no coinciden. Por favor, inténtalo de nuevo.';
        esValido = false;
    }

    if(confirmarPassword === ''){
        confirmarPasswordError.textContent = 'Campo Obligatorio';
        esValido = false;
    }

    if(esValido == true){
        alert('Bienvenida');
        miFormulario.reset();
        window.location.href = "inicio.html";

    }

    console.log('hola');

}