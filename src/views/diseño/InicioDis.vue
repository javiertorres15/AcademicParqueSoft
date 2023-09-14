<template>
    <div>
        <!-- banner -->
        <section class="banner_main">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-lg-7">
                        <div class="text-bg">
    
                            <h1 v-if="$route.name === 'metodologia-canvas'">Metodología canvas</h1>
                            <h1 v-if="$route.name === 'imagen-marcas'">Imagen y Marcas</h1>
                            <h1 v-if="$route.name === 'diseno-publicitario'">Diseño publicitario</h1>
                            <h1 v-if="$route.name === 'diseno-UxUis'">Diseño UX/UI</h1>
                            <h1 v-if="$route.name === 'diseno-presentaciones'">Principios de diseño para presentaciones</h1>
                            <h1 v-if="$route.name === 'illustrator'">Basic Illustrators</h1>
                            <h1 v-if="$route.name === 'photoshop'">Basic Photoshop</h1>
                            <h1 v-if="$route.name === 'afterEffects'">Basic AfterEffects</h1>
                            <span>Diseño</span>
    
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
        name: 'InicioDis',
    };
    </script>
    
        
    <style scoped>
    @import '../css/estiloCursos.css';
    .banner_main {
    padding: 80px 0 0 0;
    background: url(@/assets/imagenes/encabezado/diseno.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

    </style>
    