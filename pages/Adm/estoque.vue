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
            <h1>Renovar Estoque</h1>
            <div class="field" >
                <label for="name">Produto:</label>
                <select v-model="produto.id">
                    <option v-for="produto in listaProduto" :key="produto.id" :value="produto.id">
                      {{ produto.nome }}
                    </option>
                </select>

            </div>
            <div class="field">
            <v-text-field
                    v-model="produto.quantidade"
                    type="number"
                    label="Atualizar estoque"
                ></v-text-field>
            </div>
            <v-btn @click="update">Atualizar</v-btn>
        </v-form>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import { reactive } from 'vue'
import { onMounted } from 'vue';
import ProdutoService from '~/service/ProdutoService';

const listaProduto = ref([])
const produto = reactive({
    id: 0,
    quantidade: 0
 });
 


function loadAllProduto() {
    ProdutoService.list(null).then (
        response => {
            listaProduto.value = response.data;
        }
    );
}

function update() {
    console.log(produto)
    ProdutoService.update(produto).then(
    response => { console.log(response.status); }
    )
}

onMounted(
        () => {
            loadAllProduto();
        } 
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
width: 600px;
height: 410px;
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