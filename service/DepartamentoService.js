import http from "@/common/http";

class DepartamentoService {
    create(data) {
        console.log(data);
        return http.post("/departamento", data);
    }
    list() {
        return http.get("/departamento");
    }
    load(id) {
        return http.get("/departamento/" + id);
    }
}
export default new DepartamentoService();