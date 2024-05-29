
$(function()  {

    $("#telefone").mask("(00) 00000-0000")
    $("#email").mask("A", {
        translation: {
            "A":{pattern: /[\w@\-.+]/, recursive: true}
        }
    })

    $("form").validate({
        rules: {
            name: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
        },
        messages: {
            name:"Por favor, insira seu nome",
            email:"Digite seu email corretamente",
            telefone:"insira seu telefone corretamente",
        }

    })
});