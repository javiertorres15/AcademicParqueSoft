<template>
<div>
    <!-- banner -->
    <section class="banner_main">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-7">
                    <div class="text-bg">

                        <h1 v-if="$route.name === 'creacion-de-marcas'">Creación de marcas</h1>
                        <h1 v-if="$route.name === 'creacion-tiendas-online'">Creación de tiendas online</h1>
                        <h1 v-if="$route.name === 'economia-domestica'">Economía doméstica</h1>
                        <h1 v-if="$route.name === 'google-ads'">Google Ads</h1>
                        <h1 v-if="$route.name === 'meta-ads'">Facebook e Instagram Ads</h1>
                        <h1 v-if="$route.name === 'maduracion-de-proyectos'">Maduración de proyectos</h1>
                        <h1 v-if="$route.name === 'plan-de-negocios'">Plan de negocios</h1>
                        <h1 v-if="$route.name === 'gestion-procesos'">Gestión de procesos</h1>
                        <span>Emprendimiento</span>

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
    name: 'InicioEmpren',
};
</script>

    
<style scoped>
@import '../css/estiloCursos.css';
.banner_main {
    padding: 80px 0 0 0;
    background: url(@/assets/imagenes/encabezado/emprendimiento.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}



</style>
