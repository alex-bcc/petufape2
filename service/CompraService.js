import http from "@/common/http";

class CompraService {
    create(data) {
        console.log(data);
        return http.post("/compra", data);
    }
    list() {
        return http.get("/compra");
    }
}
export default new CompraService();