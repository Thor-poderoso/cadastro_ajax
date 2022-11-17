$("#btn-cadastrar").on("click", () => {

let inputName = $("#inputName").val()
let inputEmail = $("#inputEmail").val()
let inputCel = $("#inputCel").val()
let inputTel = $("#inputTel").val()
let assunto = $("#assunto").val()
let inputMSN = $("#inputMSN").val()


    $.ajax({
        url: "http://10.24.77.21:1234/contato",
        type: "POST",
        data:{ 
        nome: inputName,
        telefone: inputTel,
        celular: inputCel,
        email: inputEmail,
        assunto: assunto,
        mensagem: inputMSN,
    },
        dataType: "JSON",
        success: (response) => {
            if (response == "Ok") {
                msgSucesso()
            }
        }
    })
    return false
})


function msgSucesso() {
  alert("Enviou!");
}
