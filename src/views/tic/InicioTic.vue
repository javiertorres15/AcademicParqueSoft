<template>
<div>
    <!-- banner -->
    <section class="banner_main">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-7">
                    <div class="text-bg">

                        <h1 v-if="$route.name === 'ciudadano-digital1'">Ciudadano digital 1</h1>
                        <h1 v-if="$route.name === 'ciudadano-digital2'">Ciudadano digital 2</h1>
                        <h1 v-if="$route.name === 'alfabetizacion-digital'">Alfabetización digital</h1>
                        <h1 v-if="$route.name === 'herramientas-comunicativas'">Herramientas comunicativas</h1>
                        <h1 v-if="$route.name === 'competencias-comunicativas'">Competencias comunicativas para docentes</h1>
                        <span>TIC</span>

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
    name: 'InicioTic',
};
</script>

    
<style scoped>
@import '../css/estiloCursos.css';

.banner_main {
    padding: 80px 0 0 0;
    background: url(@/assets/imagenes/encabezado/tic.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>
