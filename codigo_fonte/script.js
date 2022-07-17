document.querySelector('button[type="submit"]').addEventListener('click', function(event){
    event.preventDefault()
    const email = document.getElementById('usuario')
    const senha = document.getElementById('password')
    

        if(!email.value && !senha.value){
            return error()
        } if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            return error_email()
        } if(senha.value == '' ){
            return error_senha()
        }if(senha.value != '123456'){
            return senha_invalida()
        }
        else{
            return sucesso()
        }

})


function error(){
    const errorMessage = document.getElementById('error')
    errorMessage.style.display = "block"
    scroll(0,0)
    hideMessageAfterTimeout(errorMessage)
    return
}

function sucesso(){
    const sucessoMessage = document.getElementById('autenticado')
    sucessoMessage.style.display = "block"
    scroll(0,0)
    hideMessageAfterTimeout(sucessoMessage)
    return
}

function error_email(){
    const errorEmail = document.getElementById('error_email')
    errorEmail.style.display = "block"
    scroll(0,0)
    hideMessageAfterTimeout(errorEmail)
    return
}

function error_senha(){
    const errorSenha = document.getElementById('error_senha')
    errorSenha.style.display = "block"
    scroll(0,0)
    hideMessageAfterTimeout(errorSenha)
    return
}

function senha_invalida(){
    const senha_Invalida = document.getElementById('senha_invalida')
    senha_Invalida.style.display = "block"
    scroll(0,0)
    hideMessageAfterTimeout(senha_Invalida)
    return
}

function hideMessageAfterTimeout(element) {
    setTimeout(function() {
    element.style.display = 'none'
    }, 4000)
}