import http from "@/common/http";

class ProdutoService {
    create(data) {
        console.log(data);
        return http.post("/produto", data);
    }
    update(produto) {
        console.log(produto);
        return http.post("/produto/reporEstoque",produto);
    }
    list(departamento, setor) {
        return http.get("/produto/departamento/setor", departamento, setor);
    }
    list() {
        return http.get("/produto/setor");
    }
    list() {
        return http.get("/produto");
    }
    load(produtoNome) {
        return http.get("/produto/" + produtoNome);
    }
}
export default new ProdutoService();