app.controller('produtoCtrl', produtoController);

function produtoController(produtoService, $scope, $location){
  $scope.produto = {};

  $scope.salvaProduto = function salvar(produto) {
        produtoService.saveProdutos(produto);
        $location.path('/');
    }

  $scope.excluirProduto = function excluir(ind){
    produtoService.excluirProdutos(ind);
    alert("Excluído com sucesso.");
  }

  function listar() {
        var produtos = produtoService.getProdutos();
        $scope.listaDeProdutos = produtos;
    }

    listar();

}

