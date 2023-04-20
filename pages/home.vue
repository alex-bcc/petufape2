<template>
  <div>
  <h1 style="display: flex; align-content: center; align-items: center; justify-content: center; gap:5%">Bem-vindo a Loja Virtual</h1>
  <hr>
  <div id="search-container" class="col-md-12" 
  style="display: flex; align-content: center; align-items: center; justify-content: center; gap:5%">
  <head>
  <title>Font Awesome Icons</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
    <form action="/" method="GET">
        <input type="text" id="search" 
        name="search" class="form-control"
        placeholder="Procurar..." 
        style="background: #34A853; box-shadow: 50px 50px 70px rgba(0, 0, 0, 1.80) display: inline-block;
                            border-radius: 90px; color: #FFFFFF; border: #34A853; font-style: normal; font-weight: 400; font-size: 24px;
                            line-height: 29px; text-align: center; padding: 5px 15px;">
    </form>
    <v-card-actions>
      <v-btn href="/">
        <i class="fa fa-shopping-cart" style="font-size:24px"></i>
      </v-btn>
    </v-card-actions>
    <v-card-actions>
        <v-btn
            class="ms-20"
            variant="outlined"
            size="small" 
            href="/"
        >
            Sair
        </v-btn>
    </v-card-actions>
  </div>
  <v-container
    class="spacing-playground ma-60"
  >
    <div style="display: flex; align-content: center; align-items: center; justify-content: center; gap:40">
      <v-card-actions>
        <v-spacer class="ma-6"></v-spacer>
        <div class="d-flex justify-space-between ma-6 bg-surface-variant">
          <v-sheet
            class="ma-2 pa-2"
          >
            <v-btn 
              class="animation-on-hover"
              color="info"
              nuxt
              to="/Usuario/departamentoDog"
            >
              Cachorro
            </v-btn>

            <v-btn
              class="animation-on-hover"
              color="primary"
              nuxt
              to="/Usuario/departamentoCat"
            >
              Gato
            </v-btn>
          </v-sheet>
        </div> 
      </v-card-actions> 
    </div>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
