<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <PetLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline justify-center">
          Bem-vindo ao Pet Shop UFAPE !
        </v-card-title>
        <v-card-text>
          <p>Pet Shop UFAPE é uma loja virtual criada para proporcionar grandes 
            ofertas para o cuidado do seu pet. Nela você encontrará opções de ração, 
            medicamentos e muitos brinquedos para a felicidade do seu pet.</p>
          <hr class="my-3">
          <p>Acesse ao nosso site: </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="btn v-flex">
            <v-btn 
              class="animation-on-hover"
              color="info"
              nuxt
              to="/home"
            >
              Usuário
            </v-btn>

            <v-btn
              class="animation-on-hover"
              color="primary"
              nuxt
              to="/cadastro"
            >
              Administrador
            </v-btn>
          </div> 
        </v-card-actions> 
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>