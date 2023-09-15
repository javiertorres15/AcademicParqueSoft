<template>
<div>
    <InicioMar />
</div>
<div class="content-section-b">

    <div class="container">

        <div class="row">
            <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr class="section-heading-spacer">
                <div class="clearfix"></div>
                <h2 class="section-heading">Presentación del curso:<br></h2>
                <p class="lead"> El diplomado en Posicionamiento en Buscadores ofrece herramientas técnicas para mejorar la visibilidad de una marca en motores de búsqueda como Google y Bing. Estas estrategias buscan mejorar la posición de una página web en los resultados de búsqueda, ya que cada vez más personas utilizan la web para buscar información.</p>
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
                    <p class="lead"> </p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de Excel Basico</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/marketing/iconos/psc-buscadores.png" />
                    <h3>Unidad 1: Posicionamiento en Buscadores. </h3>
                    <p>1.1. ¿Cómo funcionan los grandes motores de búsqueda?.</p>
                    <p>1.2. Estrategias para la asociación de nuestra URL a un término de búsqueda.</p>
                    <p>1.3. Compitiendo en la lista (estrategias de popularidad).</p>
                    <p>1.4. Cosas que jamás hay que hacer.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/marketing/iconos/psc-buscadores.png" />
                    <h3>Unidad 2: SEO. </h3>
                    <p>2.1. ¿Cómo adaptar el SEO a cada CMS?. </p>
                    <p>2.2. Tutorial de posicionamiento web desde cero.</p>
                    <p>2.3. Penalidades de Google.</p>
                    <p>2.4. El plan de marketing o plan estratégico</p>
                    <p>2.5. Glosario básico de SEO</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/marketing/iconos/psc-buscadores.png" />
                    <h3>Unidad 3: Google AdWords. </h3>
                    <p>3.1. Google AdWords.</p>
                    <p>3.2. Fundamentos de AdWords.</p>
                    <p>3.3. Tipos de Campañas de AdWords.</p>
                    <p>3.4. Estructura del negocio online.</p>
                    <p>3.5. Opciones para móviles y tablets en las campañas “Solo para la Red de
                        Display”.</p>
                    <p>3.6. Segmentación por idioma.</p>
                    <p>3.7. Cómo segmentar los anuncios a ubicaciones geográficas.</p>
                    <p>3.8. Cómo utilizar la información de subasta para comparar el rendimiento.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import InicioMar from './InicioMar.vue';

export default {
    components: {
        InicioMar,
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
