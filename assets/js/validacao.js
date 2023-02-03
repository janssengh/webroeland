const validar_formulario = () => {

    const descricao = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const preco = document.getElementById('preco').value;
    const quantidade = document.getElementById('quantidade').value;

    if (!descricao) {             
        alerta_erro('Faltou campo descrição!');
        return false;
    } else if (!preco || preco <= 0){
        alerta_erro('Preço inválido ou não preenchido!');
        return false;    
    } else if (!quantidade || quantidade <=0){
        alerta_erro('Quantidade inválida ou não preenchido!');
        return false;
    }
    return true;
}
