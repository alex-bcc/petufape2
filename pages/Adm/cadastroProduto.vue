<template>
    <div>
        <v-card-actions>
            <v-btn
                class="ms-2"
                variant="outlined"
                size="small" 
                href="/cadastro"
            >
                Voltar
            </v-btn>
        </v-card-actions>
        <div class="container">
        <v-form @submit.prevent>
            <h1>Cadastro de Produto</h1>
            <div class="field">
                <label for="name">Departamento:</label>
                <select v-model="produto.departamento.id"
                style="background: black; box-shadow: 50px 50px 70px rgba(0, 0, 0, 1.80) display: inline-block;
                            border-radius: 90px; color: #FFFFFF; border: black; font-style: normal; font-weight: 400; font-size: 24px;
                            line-height: 29px; text-align: center; padding: 5px 15px;">
                    <option v-for="departamento in listaDepartamento" :key="departamento.id" :value="departamento.id">
                      {{ departamento.nome }}
                    </option>
                </select>
                <br>
            </div>
            <div class="field" >
                <label for="name">Setor:</label>
                <select v-model="produto.setor.id"
                style="background: black; box-shadow: 50px 50px 70px rgba(0, 0, 0, 1.80) display: inline-block;
                            border-radius: 90px; color: #FFFFFF; border: black; font-style: normal; font-weight: 100px; font-size: 24px;
                            line-height: 29px; text-align: center; padding: 5px 15px;">
                    <option v-for="setor in listaSetor" :key="setor.id" :value="setor.id">
                      {{ setor.nome }}
                    </option>
                </select>

            </div>
            <div class="field" >
                <v-text-field
                    v-model="produto.nome"
                    type="text"
                    label="Nome do Produto"
                ></v-text-field>
                <v-text-field
                    v-model="produto.descricao"
                    type="text"
                    label="Descrição do Produto"
                ></v-text-field>
                <v-text-field
                    v-model="produto.estoque"
                    type="number"
                    label="Quantidade no estoque"
                ></v-text-field>
                <v-text-field
                    v-model="produto.preco"
                    type="number"
                    label="Preço do Produto"
                ></v-text-field>
            </div>
            <v-btn @click="save">Cadastrar</v-btn>
        </v-form>
        </div>

    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { reactive } from 'vue'
    import { onMounted } from 'vue';
    import DepartamentoService from '~/service/DepartamentoService';
    import SetorService from '~/service/SetorService';
    import ProdutoService from '~/service/ProdutoService';

    const listaDepartamento = ref([])
    const listaSetor = ref([])
    const produto = reactive({
        nome: "",
        setor:
            {
                id:0
            },
        departamento:
            {
                id:0
            },
        descricao: "",
        estoque: 0,
        preco: 0
    });

    function loadAllDepartamento() {
        DepartamentoService.list(null).then (
            response => {
                listaDepartamento.value = response.data;
            }
        );
    }

    function loadAllSetor() {
        SetorService.list(null).then (
            response => {
                listaSetor.value = response.data;
            }
        );
    }
    function save() {
        console.log(produto)
        ProdutoService.create(produto).then(
        response => { console.log(response.status); }
        )
    }

    onMounted(
        () => {loadAllDepartamento()
                loadAllSetor();} 
    )

</script>



<style scoped>
h1 {
font-family: 'Montserrat', Arial, sans-serif;
display: block;
font-weight: 400;
text-align: center;
}
.container {
color: black;
display: flex;
justify-content: center;
align-items: center;
min-height: 82vh;

}
form {
display: flex;
flex-direction: column;
padding: 50px 40px;
background: #eceffc;
border-radius: 10px;
box-shadow: 2px 2px 2px 2px rgba(128, 128, 128, 0.7);
width: flex;
height: flex;
margin-bottom: 20px;
}
form h1, .field {
margin: 0 0 24px 0;
}
.btn {
color: #ECF0F1;
background-color: #50D18D;
padding: 10px;
border-radius: 1.25rem;
cursor: pointer;
border: none;
font-weight: 400;
font-size: 50px;

}
input, textarea, .btn {
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
width: 100%;
}
textarea {
min-height: 180px;    
}
input, textarea {
padding: 10px 20px 10px 20px;
}
label {
font-size: 19px;
}
</style>