<template>
<div>
    <InicioTic />
</div>

<div class="content-section-b">

    <div class="container">

        <div class="row">
            <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">Presentación del curso:<br></h2>
                <p class="lead"> El curso de Ciudadano Digital Nivel 1 es un programa esencial para todos
                    aquellos que desean navegar con éxito en el mundo digital y ser
                    ciudadanos responsables en línea. En este curso, explicaremos los
                    conceptos fundamentales de ciudadanía digital, seguridad en línea y la
                    importancia de la ética en el ciberespacio.</p>
            </div>
            <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                <div class="row">
                    <div class="col-sm-12 col-xl-4 ">
                        <div class="card">
                            <div class="face front">
                                <img src="@/assets/imagenes/ofimatica/metodologia.png" alt="">
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
                                <img src="@/assets/imagenes/ofimatica/dirigido.png" alt="">
                                <h3>Duración</h3>
                            </div>

                            <div class="face back">
                                <h3>Duración</h3>
                                <p>Duración: 3 semanas</p>
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
                    <p class="lead">El curso de Ciudadano Digital Nivel 1 está dirigido a personas de todas las
                        edades que deseen adquirir una comprensión fundamental de la
                        ciudadanía digital, seguridad en línea y ética en el ciberespacio. Es
                        adecuado para estudiantes, profesionales, padres de familia y cualquier
                        individuo interesado en navegar de manera segura y ética en el mundo
                        digital.</p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Ciudadano digital nivel 1</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 1: Introducción a la Ciudadanía Digital </h3>
                    <p>1.1. Definición y relevancia.</p>
                    <p>1.2. Beneficios y desafíos.</p>
                    <p>1.3. Seguridad en Línea.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 2: Contraseñas seguras y gestión de cuentas. </h3>
                    <p>2.1. Amenazas cibernéticas comunes. </p>
                    <p>2.2. Privacidad en línea.</p>
                    <p>2.3. Evaluación de la Información en Internet.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 3: Identificación de noticias falsas y desinformación. </h3>
                    <p>3.1. Fuentes confiables.</p>
                    <p>3.2. Técnicas de verificación de hechos.</p>
                    <p>3.3. Redes Sociales Responsables.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 4: Comportamiento ético en redes sociales. </h3>
                    <p>4.1. Acoso cibernético y su prevención.</p>
                    <p>4.2. Uso responsable de datos personales.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InicioTic from './InicioTic.vue';

export default {
    components: {
        InicioTic,
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
