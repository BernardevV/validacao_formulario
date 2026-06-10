let form = document.getElementById("form");


form.addEventListener("submit", function(e){

    
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let msg = document.getElementById("msg");


    msg.style.color = "red";

    if(nome === "" || email === "" || senha === ""){
        msg.innerText = "Preencha todos os campos";
        return;
    }


    if(senha.length < 6){
        msg.innerText = "Senha deve ter no mínimo 6 caracteres";
        return;
    }

    
    if(!email.includes("@") || !email.includes(".")){
        msg.innerText = "Email inválido";
        return;
    }

    msg.style.color = "green";
    msg.innerText = "Cadastro realizado com sucesso!";

    form.reset();
});