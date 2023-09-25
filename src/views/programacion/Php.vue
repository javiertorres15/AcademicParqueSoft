<template>
<div>
    <Inicio />
</div>
<div class="content-section-b">

    <div class="container">

        <div class="row">
            <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">Presentación del curso:<br></h2>
                <p class="lead">En este curso de PHP aprenderás de forma práctica los conceptos
                    básicos, las mejores técnicas, así como las librerías más populares y herramientas
                    necesarias para programar de forma eficiente con este lenguaje de programación.</p>
            </div>
            <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                <div class="row">
                    <div class="col-sm-12 col-xl-4 ">
                        <div class="card">
                            <div class="face front">
                                <img src="@/assets/imagenes/programacion/programacionbasica.png" alt="">
                                <h3>Metodología</h3>
                            </div>

                            <div class="face back">
                                <h3>Metodología</h3>
                                <p>Educación a distancia en modalidad híbrida</p>
                                <div class="link">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- /.container -->

</div>

<a name="services"></a>
<div class="content-section-a">

    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <div class="row">
                    <div class="col-sm-12 col-xl-4 ">
                        <div class="card">
                            <div class="face front">
                                <img src="@/assets/imagenes/programacion/programacionbasica1.png" alt="">
                                <h3>Duración</h3>
                            </div>

                            <div class="face back">
                                <h3>Duración</h3>
                                <p></p>
                                <div class="link">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                <div class="row">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Dirigido a:<br></h2>
                    <p class="lead">En este curso de PHP aprenderás de forma práctica los conceptos básicos, las
                        mejores técnicas, así como las librerías más populares y herramientas necesarias para
                        programar de forma eficiente con este lenguaje de programación.</p>
                </div>
            </div>
        </div>

    </div>
    <!-- /.container -->

</div>

<!-- /.content-section-a -->

<div class="container">
    <h1>Valor</h1>
    <h3>$55.000</h3>
    <div class="" ref="dropdownContainer1"> </div>

</div>

<div id="service" class="service">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="titlepage">
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de programación en PHP</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/programacion/servicios/icon-php.png" alt="#"/>
                    <h3>Unidad 1: Primeros pasos con PHP </h3>
                    <p>1.1. Introducción al curso de PHP.</p>
                    <p>1.2. Instalación y configuración de PHP.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/programacion/servicios/icon-php.png" alt="#"/>
                    <h3>Unidad 2: Variables y operadores en
                        PHP.</h3>
                    <p>2.1. Presentación de la unidad 2. </p>
                    <p>2.2. Primitivas en PHP.</p>
                    <p>2.3. Operadores en PHP. </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/programacion/servicios/icon-php.png" alt="#"/>
                    <h3>Unidad 3: Condicionales y ciclos en
                        PHP.</h3>
                    <p>3.1. Presentación de la unidad 3.</p>
                    <p>3.2. Condicionales en PHP.</p>
                    <p>3.3. Ciclos en PHP.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/programacion/servicios/icon-php.png" alt="#"/>
                    <h3>Unidad 4: Funciones y estructuras de
                        datos en PHP.</h3>
                    <p>4.1. Presentación de la unidad 4.</p>
                    <p>4.2. Funciones en PHP.</p>
                    <p>4.3. Estructuras de datos en PHP.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/programacion/servicios/icon-php.png" alt="#"/>
                    <h3>Unidad 5: Programación orientada a
                        Objetos EN PHP.</h3>
                    <p>5.1. Presentación de la unidad 5. </p>
                    <p>5.2. Programación orientada a objetos. </p>
                    <p>5.3. Conclusión del curso de PHP. </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Inicio from './Inicio.vue';

export default {
    components: {
        Inicio,
    },
    mounted() {
        this.loadMercadoPagoScript(this.$refs.dropdownContainer1);
        this.loadMercadoPagoScript(this.$refs.dropdownContainer2);
        // Puedes cargar el script en más instancias si es necesario
    },
    methods: {
        loadMercadoPagoScript(container) {
            const script = document.createElement("script");
            script.src = "https://www.mercadopago.com.co/integrations/v1/web-payment-checkout.js";
            script.setAttribute("data-preference-id", "165907967-9f6a4af2-5ae1-4d9b-8cca-ab559e79bdb5");
            script.setAttribute("data-source", "button");
            container.appendChild(script);
        }
    }
};
</script>

<style scoped>
@import '../css/estiloCursos.css';

@import '../css/bootstrap.min.css';
</style>
