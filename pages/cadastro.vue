<template>
    <div>
        <div class="container">
            <v-card-actions>
                <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small" 
                    href="/"
                >
                    Voltar
                </v-btn>
            </v-card-actions>
            <h2 align="center">Página de Cadastro</h2>
            <hr class="my-3">
            <p class="subtitle">Escolha o que deseja cadastrar</p>
        </div>
    <template>
        <v-card
            max-width="600"
            class="mx-auto"
        >
            <!-- <v-system-bar
            color="pink darken-2"
            dark
            >
            <v-spacer></v-spacer>

            <v-icon>mdi-window-minimize</v-icon>

            <v-icon>mdi-window-maximize</v-icon>

            <v-icon>mdi-close</v-icon>
            </v-system-bar>

            <v-app-bar
            dark
            color="pink"
            >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>My Music</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            </v-app-bar> -->

            <v-container>
            <v-row dense>
                <v-col cols="12">
                <v-card
                    color="#E24E42"
                    theme="dark"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Departamentos
                        </v-card-title>

                        <v-card-subtitle>Cadastre os departamentos da loja</v-card-subtitle>

                        <v-card-actions>
                        <v-btn class="ms-2" variant="outlined" size="small" href="/Adm/cadastroDepartamento" >
                            ENTRAR
                        </v-btn>
                        </v-card-actions>
                    </div>
                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img src="/cat.png"></v-img>
                    </v-avatar>

                    </div>
                </v-card>
                </v-col>

                <v-col cols="12">
                <v-card
                    color="#E9B000"
                    theme="dark"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Setores
                        </v-card-title>

                        <v-card-subtitle>Cadastre os setores da loja</v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            class="ms-2"
                            variant="outlined"
                            size="small"
                            href="/Adm/cadastroSetor"
                        >
                            ENTRAR
                        </v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img src="/caes-gatos.jpg"></v-img>
                    </v-avatar>
                    </div>
                </v-card>
                </v-col>

                <v-col cols="12">
                <v-card
                    color="#008F95"
                    theme="dark"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Produtos
                        </v-card-title>

                        <v-card-subtitle>Cadastre os produtos da loja</v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            class="ms-2"
                            variant="outlined"
                            size="small" href="/Adm/cadastroProduto"
                        >
                            ENTRAR
                        </v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img src="/produtos.jpg"></v-img>
                    </v-avatar>
                    </div>
                </v-card>
                </v-col>

                <v-col cols="12">
                <v-card
                    color="#304D63"
                    theme="dark"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Estoque
                        </v-card-title>

                        <v-card-subtitle>Renove o estoque dos produtos da loja</v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            class="ms-2"
                            variant="outlined"
                            size="small" href="/Adm/estoque"
                        >
                            ENTRAR
                        </v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img src="/estoque.jpg"></v-img>
                    </v-avatar>
                    </div>
                </v-card>
                </v-col>

                <v-col cols="12">
                <v-card
                    color="#B3093F"
                    theme="dark"
                >
                    <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                        Relatório
                        </v-card-title>

                        <v-card-subtitle>Veja o relatório das vendas da loja</v-card-subtitle>

                        <v-card-actions>
                        <v-btn
                            class="ms-2"
                            variant="outlined"
                            size="small" href="/Adm/relatorio"
                        >
                            ENTRAR
                        </v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar
                        class="ma-3"
                        size="125"
                        rounded="0"
                    >
                        <v-img src="/relatorio.jpg"></v-img>
                    </v-avatar>
                    </div>
                </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </template>
    </div>
</template>