<template>
<div>
    <InicioDis />
</div>
<div class="content-section-b">

    <div class="container">

        <div class="row">
            <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">Presentación del curso:<br></h2>
                <p class="lead">En este curso te compartiremos todo el
                    potencial que se puede encontrar para el diseño de presentaciones</p>
            </div>
            <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                <div class="row">
                    <div class="col-sm-12 col-xl-4 ">
                        <div class="card">
                            <div class="face front">
                                <img src="@/assets/imagenes/diseno/diseno1.jpeg" alt="">
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
                                <img src="@/assets/imagenes/diseno/diseno2.jpeg" alt="">
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
                    <p class="lead">Dirigido a emprendedores, personal de ventas, gerentes
                        de proyectos, en general personal que debe montar presentaciones
                        en la empresa.</p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Principios de diseño para presentaciones</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/presentaciones.png" alt="#" />
                    <h3>Unidad 1: Introducción </h3>
                    <p>1.1. ¿De dónde vienen las
                        presentaciones?</p>
                    <p>1.2. Presentación Qué hacer y
                        qué no hacer</p>
                    <p>1.3. Una Cosa por Diapositiva.</p>
                    <p>1.4. Los Títulos Cuentan una
                        Historia.</p>
                    <p>1.5. Material de Apoyo</p>
                    <p>1.6. Uso de Imágenes</p>
                    <p>1.7. Reducir la Complejidad</p>
                    <p>1.8. Tipos de presentaciones</p>
                    <p>1.9. Contenido y narrativa</p>
                    <p>1.10. Estructura del contenido</p>
                    <p>1.11. Guión gráfico</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/presentaciones.png" alt="#"/>
                    <h3>Unidad 2: Power Point</h3>
                    <p>2.1. Todo sobre Power Point </p>
                    <p>2.2. Crea tus propias plantillas</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/presentaciones.png" alt="#" />
                    <h3>Unidad 3: Diseño gráfico de tus
                        presentaciones y más</h3>
                    <p>3.1. Principios de diseño</p>
                    <p>3.2. Acciones</p>
                    <p>3.3. Paleta de Colores</p>
                    <p>3.4. Quitar el Fondo</p>
                    <p>3.5. Carrusel de Imágenes</p>
                    <p>3.6. Gráficos Animados</p>
                    <p>3.7. Efecto Zoom</p>
                    <p>3.8. Texto dentro del Video</p>
                    <p>3.9. Convertir Diapositivas en
                        Video</p>
                    <p>3.10. Disminuir el Tamaño del
                        Archivo</p>
                    <p>3.11. Buen Uso del Encabezado y
                        Pie de Página</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/presentaciones.png" alt="#"/>
                    <h3>Unidad 4: Storytelling enfocado a tus
                        presentaciones</h3>
                   
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InicioDis from './InicioDis.vue';

export default {
    components: {
        InicioDis,
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
