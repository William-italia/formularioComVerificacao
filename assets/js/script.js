class ValidaFormulario {
    constructor() {
        this.forms = document.querySelectorAll('.form'); 
        this.events();
    }


    events() {
        this.forms.forEach(form => {
            form.addEventListener('submit', e => this.handleSubmit(e, form));
        });
    }

    handleSubmit(e, form) {
        e.preventDefault();

        const checkFields = this.isValid(form);
        
    }

    isValid(form) {
        let valid = true;

        for(let errorText of form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of form.querySelectorAll('.validar')) {

            const label = campo.nextElementSibling.innerText;

            if(!campo.value) {
                this.createError(campo, `Campo "${label}" não pode estar em branco!`);
                valid = false
            }

            if(campo.classList.contains('user') && campo.value !== '') {
                if(!this.validaUser(campo)) valid = false;
            }

            if(campo.classList.contains('pass') && campo.value !== '') {
                if(!this.validaSenha(campo)) valid = false;
            }   

            if(campo.classList.contains('repeat-pass') && campo.value !== '') {
                if(!this.validaRepetirSenha(campo, form)) valid = false;
            }
        }
        
        return valid;
    }

    validaSenha(campo) {
        const senha = campo.value;

        if(senha.length < 6 || senha.length > 12) {
            this.createError(campo, 'Senha precisa ter entre 6 a 12 caracteres');
            return false;
        }

        return true;
    }

    validaRepetirSenha(campo, form) {
        const senha = form.querySelector('.pass').value;
        
        if(campo.value !== senha) {
            this.createError(campo, 'senhas não coincidem');
            return false;
        }

        return true;
    }

    validaUser(campo) {
        const user = campo.value;

        if(user.length < 3 || user.length > 12) {
            this.createError(campo, 'Usuario precisa conter entre 3 a 12 caracteres');
            return false;
        }
        if(!user.match(/^[a-zA-Z0-9_]+$/g)) {
        this.createError(campo, 'Usuário só pode conter letras e/ou números');
        return false;
    }
    return true;
    }

    createError(campo, msg) {
        const p = document.createElement('p');
        p.innerHTML = msg;
        p.classList.add('error-text');
        campo.insertAdjacentElement('afterend', p);
    }

}

const valida = new ValidaFormulario();