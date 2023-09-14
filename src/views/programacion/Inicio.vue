<template>
<div>
    <!-- banner -->
    <section class="banner_main">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-7">
                    <div class="text-bg">
                        
                        <h1 v-if="$route.name === 'java'">Java</h1>
                        <h1 v-if="$route.name === 'javascript'">JavaScript</h1>
                        <h1 v-if="$route.name === 'net'">.Net</h1>
                        <h1 v-if="$route.name === 'node'">Node.js</h1>
                        <h1 v-if="$route.name === 'php'">.Php</h1>
                        <h1 v-if="$route.name === 'python'">Python</h1>
                        <h1 v-if="$route.name === 'red'">.Red</h1>
                        <span> Programación </span>
                        

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
    name: 'Inicio',
};
</script>

<style scoped>
@import '../css/estiloCursos.css';

.banner_main {
    padding: 80px 0 0 0;
    background: url(@/assets/imagenes/encabezado/programacion.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}

</style>
