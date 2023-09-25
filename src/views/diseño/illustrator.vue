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
                <p class="lead">En el Curso de Adobe Illustrator básico, aprenderás a usar este software de dibujo vectorial líder. Dominarás la interfaz, herramientas, atajos y técnicas esenciales para crear diseños digitales, ideales para redes sociales y proyectos editoriales. También podrás llevar a cabo un proyecto de aprendizaje opcional al finalizar el curso.</p>
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
                    <p class="lead">Público en general, interesados en ilustración y diseño gráfico</p>

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
                    <h2><strong class="yellow">Contenidos</strong><br>Basic Illustrator </h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/illustrator.png" alt="#"/>
                    <h3>Unidad 1: Uso e implementación de herramientas (trazo y pluma),
                        formas, colores y contornos. </h3>
                    <p>1.1. Uso básico del programa.</p>
                    <p>1.2. Formas básicas, colores de relleno, contornos.</p>
                    <p>1.3. Herramienta Unión, Recortar e Intersección (Busca Trazos).</p>
                    <p>1.4. Herramienta pluma (Añadir, Eliminar, Convertir o Seleccionar punto de
                        ancla).</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/illustrator.png" alt="#" />
                    <h3>Unidad 2: Uso e implementación de herramientas (Texto, rellenos
                        y capas)</h3>
                    <p>2.1. Herramientas, texto y columna. </p>
                    <p>2.2. Trazos, rellenos y degradados.</p>
                    <p>2.3. Capas y herramienta malla. </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/diseno/iconos/illustrator.png" alt="#"/>
                    <h3>Unidad 3: Herramientas avanzadas y exportación de archivos
                        según el formato</h3>
                    <p>3.1. Calcar imagen o vectorización automática.</p>
                    <p>3.2. Cómo exportar para imprimir y pantallas (RGB Y CMYK).</p>
                    <p>3.3. RGB – CMYK.</p>
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
