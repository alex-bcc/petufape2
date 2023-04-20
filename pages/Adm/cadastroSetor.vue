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
            <h1>Cadastro de Setores</h1>
                <v-text-field
                    v-model="setor.nome"
                    type="text"
                    label="Nome do Setor"
                ></v-text-field>

            <v-btn @click="save">Cadastrar</v-btn>
        </v-form>
        </div>

    </div>
</template>

<script setup>
import  SetorService from '@/service/SetorService';
import { reactive } from 'vue'

const setor = reactive({
    nome: ""
 });

function save() {
    console.log(setor)
    SetorService.create(setor).then(
       response => { console.log(response.status); }
    )
}

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
background: #fceeec;
border-radius: 10px;
box-shadow: 2px 2px 2px 2px rgba(128, 128, 128, 0.7);
width: 600px;
height: 300px;
margin-bottom: 20px;
}
form h1, .field {
margin: 0 0 24px 0;
}
.btn {
color: #f1eced;
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