/**
 * Recibe como parametro un string
 * @param {string} txt 
 * @returns boolean
 * valida que ese campo de texto no sea una cadena vacia
 */
function isNotEmpty(txt){
    return txt.length > 0;
}

/**
 * Recibe como parametro un string
 * @param {string} txt 
 * @returns
 * Valida que ese campo sea igual al nombre de la empresa loggeada 
 */
function isValidNameEmpresa(txt){
    return txt === userLogged.nombre;
}

/**
 * Recibe como parametro un string
 * @param {string} txt 
 * @returns 
 * Valida que se ingrese al menos una mayuscula, al menos una min, al menos un numero, y mas de 5 caracteres
 */
function isValidPass(txt){
    let cantidadMayusculas = 0;
    let cantidadMinusculas = 0;
    let cantidadNumeros = 0;
    let isValid = false;
        for (i = 0; i < txt.length; i++){
            if(txt.charCodeAt(i) >= 65 && txt.charCodeAt(i) <= 90 ){
                cantidadMayusculas++;
            }
            else if(txt.charCodeAt(i) >= 48 && txt.charCodeAt(i) <= 57){
                cantidadNumeros++
            }
            else if(txt.charCodeAt(i) >= 97 && txt.charCodeAt(i) <= 122){
                cantidadMinusculas++
            }
        }
        if(txt.length >= 5 && cantidadMayusculas > 0 && cantidadMinusculas > 0 && cantidadNumeros > 0){
                isValid = true;
        }     
    return isValid;
}

/**
 * Recibe como parametro un numero
 * @param {number} num 
 * @returns 
 * Valida que ese campo ingresado sea un numero
 */
function isValidNumber(num){
    return !isNaN(num);
}

/**
 * Recibe como parametro dos string
 * @param {string} username 
 * @param {string} pass 
 * @returns
 * valida que el nombre de usuario y password sean correctas(EMPRESA)
 */
function findUserLoggedEmpresa(username, pass) {
    let userEmpresa = null;
    empresas.forEach(function(empresa){
        if(empresa.nombreUsuario === username && empresa.pass === pass ){
            userEmpresa = empresa;
        }
    });
    return userEmpresa;
}

/**
 * Recibe como parametro dos string
 * @param {string} username 
 * @param {string} pass 
 * @returns
 * valida que el nombre de usuario y password sean correctas(IMPORTADOR)
 */
function findUserLoggedImportador(username, pass){
    let importadorLogged = null;
    importadores.forEach(function (importador){
        if (importador.nombreUsuario === username && importador.pass === pass){
            importadorLogged = importador;
        }
    });
    return importadorLogged;
}

/**
 * Recibe como parametro un string
 * @param {string} txt 
 * @returns
 * Valida que el nombre de usuario que se ingrese al registrar, sea distinto al de
 * un importador ya creado, o empresa.
 */
function isValidImportador(txt){
    let empresaAndImportador = empresas.concat(importadores)
    let isValid = true;
    empresaAndImportador.forEach(function(entidad){
        if(entidad.nombreUsuario === txt){
            isValid = false;
        }
    });
    return isValid;
}

/**
 * Recibe como parametro un array de objetos
 * @param {array} validations
 * @returns
 * valida el formulario que se quiera validar
 */
function formValidator(validations) {
    let iterador = 0;
    let failedValidation = null;

    while(iterador < validations.length && !failedValidation) {
        const value = document.querySelector(validations[iterador].id).value;
        if (!validations[iterador].fnValidate(value)) {
            failedValidation = validations[iterador];
        }
        iterador++;
    }
    return failedValidation;
}

function validatePicture(){
    const formularioRegistro = document.querySelector('#formRegistro');
    isValidPicture = false;
    for (i = 0; i < formularioRegistro.imagenes; i++){
        if (formularioRegistro.imagenes[i].checked){
            isValidPicture = true;
        }
    }
    return isValidPicture;
}






