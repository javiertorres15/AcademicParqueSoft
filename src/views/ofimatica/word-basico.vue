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
                <p class="lead">Este curso es para incursionar en el manejo básico de la hoja de
                    word, como una herramienta de múltiples aplicaciones en diversos campos
                    laborales y profesionales. El curso aborda los aspectos generales del entorno
                    de la hoja de word, identificación de herramientas, componentes y funciones
                    básicas que le permitirán al participante iniciar un proceso de reconocimiento y
                    proyección funcional de Word.</p>
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
                    <p class="lead">Estudiantes, egresados, docentes, empleados y personas de
                        diversas áreas profesionales y laborales, que deseen explorar e identificar los
                        componentes básicos del word como herramienta de trabajo.</p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de Word Basico</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 1: Generalidades. </h3>
                    <p>1.1. Conceptos básicos.</p>
                    <p>1.2. Espacios.</p>
                    <p>1.3. Insertar.</p>
                    <p>1.4. Pestaña diseño de página.</p>
                    <p>1.5. Índice en Word automático.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 2: Uso de Pestañas. </h3>
                    <p>2.1. Pestaña insertar: smart art, hipervínculos, encabezados, pie de página,
                        número de página, cuadro de texto y word art. </p>
                    <p>2.2. Pestaña diseño de página; temas: colores, fuentes, efectos, márgenes,
                        orientación, tamaño, columnas, marca de agua, color de página, bordes
                        de página.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 3: Tablas y Formulas. </h3>
                    <p>3.1. Revisando opciones.</p>
                    <p>3.2. Tablas, columnas, filas, celdas.</p>
                    <p>3.3. Trabajo con fórmulas básicas.</p>
                    <p>3.4. Elaboración de factura.</p>
                    <p>3.5. Poner una página horizontal y otra en vertical.</p>
                    <p>3.6. Bordes y marcos de página personalizados.</p>
                    <p>3.7. Encabezado o pie de página diferente en la primera página.</p>
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
