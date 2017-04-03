app.factory('produtoService',produtoService);

function produtoService(){
  var produtos = [];

  function getProdutos(){
    return produtos;
  }

  function saveProdutos(produto){
    produtos.push(produto);
  }

  function excluirProdutos(ind){
    produtos.splice(ind,1);
  }

  return{
    getProdutos: getProdutos,
    saveProdutos: saveProdutos,
    excluirProdutos: excluirProdutos
  }
}