function logar() {

    if (!validar_formulario())
        return false;    

    const dados = {
        descricao : document.getElementById('ds_email').value,
        categoria : document.getElementById('ds_senha').value       
    }

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados),
    
    // converte a resposta do servidor em objeto json
    }).then((res) => res.json()
    
    // pega objeto json retornado (são os dados) e ...
    ).then((data) => {
        console.log(data);
        
    }).then(() => {
        console.log('Sucesso ao cadastrar senha');
        location.href = 'gerenciar.html';

    }).catch((erro) => {
        alert('Erro ao cadastrar senha ' + erro);
        // falta algo
    });

    return;
}


    