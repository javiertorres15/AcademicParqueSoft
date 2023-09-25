<template>
<div>
    <InicioOfi />
</div>

<div class="content-section-b">

    <div class="container">

        <div class="row">
            <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">Presentación del curso:<br></h2>
                <p class="lead">Este curso Microsoft Word Intermedio brinda conocer
                    herramientas de trabajo aplicados en los diferentes roles laborales y
                    profesionales. El participante manipulara las diferentes funciones para crear
                    documentos con calidad, de forma que el usuario pueda conseguir dar formatos
                    complejos a sus documentos y aumentar su rendimiento y productividad al
                    trabajar con ellos.</p>
            </div>
            <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                <div class="row">
                    <div class="col-sm-12 col-xl-4 ">
                        <div class="card">
                            <div class="face front">
                                <img src="@/assets/imagenes/ofimatica/ofimatica3.jpeg" alt="">
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
                                <img src="@/assets/imagenes/ofimatica/ofimatica1.jpeg" alt="">
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
                    <p class="lead">Este curso está dirigido a quienes necesiten o deseen aprender y
                        potencializar el manejo de Microsoft Word de forma simple y efectiva, para
                        poder elaborar sus hojas de texto de forma correcta, optimizando al máximo el
                        tiempo en la realización de documentos.</p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de Word Intermedio</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 1: Funciones Insertar. </h3>
                    <p>1.1. Ecuaciones en Word.</p>
                    <p>1.2. Símbolos o caracteres.</p>
                    <p>1.3. Numeración y viñetas.</p>
                    <p>1.4. Letra capital.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 2: Smartart y Referencias. </h3>
                    <p>2.1. Organigramas. </p>
                    <p>2.2. Marcadores y referencias cruzadas.</p>
                    <p>2.3. Formato párrafo</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 3: Web con Word. </h3>
                    <p>3.1. Word online.</p>
                    <p>3.2. Páginas web con Word.</p>
                    <p>3.3. Combinar correspondencia.</p>
                    <p>3.4. Restringir y proteger.</p>
                    <p>3.5. Herramienta resaltar.</p>
                    <p>3.6. Control de cambios.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InicioOfi from './InicioOfi.vue';

export default {
    components: {
        InicioOfi,
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
