import http from "@/common/http";

class SetorService {
    create(data) {
        console.log(data);
        return http.post("/setor", data);
    }
    list() {
        return http.get("/setor");
    }
    load(setor) {
        return http.get("/setor/" + setor);
    }
}
export default new SetorService();