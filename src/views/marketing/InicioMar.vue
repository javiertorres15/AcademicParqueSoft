<template>
<div>
    <!-- banner -->
    <section class="banner_main">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-7">
                    <div class="text-bg">

                        <h1 v-if="$route.name === 'community-manager'">Community Manager</h1>
                        <h1 v-if="$route.name === 'marketing-digital'">Marketing digital</h1>
                        <h1 v-if="$route.name === 'habilidades-sociales'">Habilidades sociales</h1>
                        <h1 v-if="$route.name === 'instagram'">Instagram para el desarrollo de marcas</h1>
                        <h1 v-if="$route.name === 'posicionamientos-marcas'">Posicionamientos de marcas</h1>
                        <h1 v-if="$route.name === 'internet-rs-dg'">Internet, redes sociales y dispositivos digitales</h1>
                        <h1 v-if="$route.name === 'posicionamiento-buscadores'">Posicionamiento en buscadores</h1>
                        <span>Marketing</span>
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
    name: 'InicioMar',
};
</script>

    
<style scoped>
@import '../css/estiloCursos.css';
.banner_main {
    padding: 80px 0 0 0;
    background: url(@/assets/imagenes/encabezado/marketing.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

</style>
