const pass1 = document.querySelector('.pass1');
const pass2 = document.querySelector('.pass2');
pass1.addEventListener('input', checkPass);
pass2.addEventListener('input', checkPass);


let focused = false;
pass1.addEventListener('focus', () => focused = true);
pass2.addEventListener('focus', () => focused = true);
pass1.addEventListener('blur', () => focused = false);
pass2.addEventListener('blur', () => focused = false);
pass1.addEventListener('blur', checkPass);
pass2.addEventListener('focus', checkPass);
pass1.addEventListener('focus', checkPass);
pass2.addEventListener('blur', checkPass);

const passPattern = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/;

function checkPass() {
    console.log(focused)
    if(focused === false && pass1.value === pass2.value) {
        pass1.classList.remove('not-valid', 'valid')
        pass2.classList.remove('not-valid', 'valid')
    }
    if(pass1.value !== "" && pass2.value !== "") {
        if(pass1.value === pass2.value && focused === true && passPattern.test(pass1.value) === true) {
            pass1.classList.remove('not-valid');
            pass1.classList.add('valid');
            pass2.classList.remove('not-valid');
            pass2.classList.add('valid');
        }
        if(pass1.value !== pass2.value) {
            if(passPattern.test(pass1.value)){
                pass1.classList.add('valid');
                pass1.classList.remove('not-valid');
            } else {
                pass1.classList.add('not-valid');
                pass1.classList.remove('valid');
            }
            pass2.classList.remove('valid');
            pass2.classList.add('not-valid');
        }
    }
    if(pass1.value !== "" && pass2.value === "" ) {
        pass1.classList.add('not-valid');
        if(passPattern.test(pass1.value)){
            pass1.classList.remove('not-valid');
            pass1.classList.add('valid');
        }
    }
    if(pass1.value === "" && pass2.value !== "") {
        pass2.classList.add('not-valid');
    }
}