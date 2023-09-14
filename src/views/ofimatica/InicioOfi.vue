<template>
    <div>
        <!-- banner -->
        <section class="banner_main">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-lg-7">
                        <div class="text-bg">
    
                            <h1 v-if="$route.name === 'excel-basico'">Excel basico</h1>
                            <h1 v-if="$route.name === 'excel-intermedio'">Excel intermedio</h1>
                            <h1 v-if="$route.name === 'excel-avanzado'">Excel avanzado</h1>
                            <h1 v-if="$route.name === 'word-basico'">Word basico</h1>
                            <h1 v-if="$route.name === 'word-intermedio'">Word intermedio</h1>
                            <h1 v-if="$route.name === 'word-avanzado'">Word avanzado</h1>
                            <h1 v-if="$route.name === 'power-point-bsc'">PowerPoint basico</h1>
                            <h1 v-if="$route.name === 'power-point-intermedio'">PowerPoint intermedio</h1>
                            <h1 v-if="$route.name === 'power-point-avanzado'">PowerPoint avanzado</h1>
                            <span>Ofimatica</span>
    
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
        <!-- end banner -->
    
    </div>
    </template>
    
        
    <script>
    export default {
        name: 'InicioOfi',
    };
    </script>
    
        
    <style scoped>
    @import '../css/estiloCursos.css';
    .banner_main {
    padding: 80px 0 0 0;
    background: url(@/assets/imagenes/encabezado/ofimatica.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
    </style>
    