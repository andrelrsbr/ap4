function Enviar() {

    var nome = document.getElementById("nomeid");

    var fone = document.getElementById("foneid");

    var email = document.getElementById("emailid");

    if (nome.value != "") {
        alert('Você digitou:\n' + 'Nome: ' + nome.value + '\nTelefone: ' + fone.value + '\nEmail: ' + email.value + '\n\nMensagem enviada com sucesso!');
    }
}