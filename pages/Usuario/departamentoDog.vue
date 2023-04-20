<template>
    <div>
    <v-card-actions>
        <v-btn
            class="ms-20"
            variant="outlined"
            size="small" 
            href="/home"
        >
            Voltar
        </v-btn>
    </v-card-actions>
    <div style="display: flex; align-content: center; align-items: center; justify-content: center; gap:5%">
        <h1 >Itens para cães</h1>
        <v-card-actions>
        <v-btn href="/">
            <i class="fa fa-shopping-cart" style="font-size:24px"></i>
        </v-btn>
        </v-card-actions>
    </div>
    <hr>
    <div id="search-container" class="col-md-12" 
    style="display: flex; align-content: center; align-items: center; justify-content: center; gap:5%">
    <head>
    <title>Font Awesome Icons</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    </div>
    <div class="d-flex justify-center mb-6 bg-surface-variant">
      <v-sheet
        class="ma-2 pa-2"
      >
      <div style="display: flex; align-content: center; align-items: center; justify-content: center; gap:40">
        <v-card-actions>
          <v-spacer class="d-flex justify-center mb-6 bg-surface-variant">
          <div class="d-flex justify-space-between ma-6 bg-surface-variant">
            <v-sheet
              class="ma-2 pa-2"
            >
              <v-btn 
                class="animation-on-hover"
                color="info"
                nuxt
                to="/Usuario/setores/racaoDog"
              >
                Ração
              </v-btn>
            </v-sheet>
          </div> 
          </v-spacer>
        </v-card-actions> 
        </div>
    </v-sheet>
    <v-sheet
        class="ma-2 pa-2"
      >
      <div style="display: flex; align-content: center; align-items: center; justify-content: center; gap:40">
        <v-card-actions>
          <v-spacer class="d-flex justify-center mb-6 bg-surface-variant">
          <div class="d-flex justify-space-between ma-6 bg-surface-variant">
            <v-sheet
              class="ma-2 pa-2"
            >
              <v-btn 
                class="animation-on-hover"
                color="info"
                nuxt
                to="/Usuario/setores/brinquedosDog"
              >
                Brinquedos
              </v-btn>
            </v-sheet>
          </div> 
          </v-spacer>
        </v-card-actions> 
        </div>
    </v-sheet>
    <v-sheet
        class="ma-2 pa-2"
      >
      <div style="display: flex; align-content: center; align-items: center; justify-content: center; gap:40">
        <v-card-actions>
          <v-spacer class="d-flex justify-center mb-6 bg-surface-variant">
          <div class="d-flex justify-space-between ma-6 bg-surface-variant">
            <v-sheet
              class="ma-2 pa-2"
            >
              <v-btn 
                class="animation-on-hover"
                color="info"
                nuxt
                to="/Usuario/setores/medicamentosDog"
              >
                Medicamentos
              </v-btn>
            </v-sheet>
          </div> 
          </v-spacer>
        </v-card-actions> 
        </div>
    </v-sheet>
    </div>
  </div>
  </template>