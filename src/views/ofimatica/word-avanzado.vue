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
                <p class="lead">Este curso Microsoft Word Avanzado proporciona la
                    información necesaria para que el estudiante adquiera conocimientos
                    relevantes y los ponga en práctica. Las herramientas que aprende son
                    fundamentales para lograr un óptimo uso del programa, a través de la
                    aplicación en sus proyectos. El tener los conceptos claros permite optimizar las
                    actividades que se lleven a cabo en este programa, así como utilizar todas las
                    herramientas disponibles.</p>
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
                    <p class="lead">Este curso va dirigido a funcionarios de cualquier nivel de las áreas
                        de administración, auditoria, finanzas, tesorería, recursos humanos, ventas,
                        marketing, etc., así como para asistentes, recepcionistas o secretarias que
                        necesitan aplicar las opciones avanzadas de Word y realizar Macros dentro de
                        esta aplicación.</p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de Word Avanzado</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 1: Plantillas y Esquemas. </h3>
                    <p>1.1. Utilizar plantillas.</p>
                    <p>1.2. Modificar plantillas.</p>
                    <p>1.3. Esquemas.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 2: Documentos Maestros y Glosarios. </h3>
                    <p>2.1. Crear documentos maestros. </p>
                    <p>2.2. Manipular un documento maestro.</p>
                    <p>2.3. Crear un glosario.</p>
                    <p>2.4. Comparar documentos.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/word.png" alt="#"/>
                    <h3>Unidad 3: Comentarios y Macros. </h3>
                    <p>3.1. Insertar comentarios.</p>
                    <p>3.2. Comentarios.</p>
                    <p>3.3. Crear una macro.</p>
                    <p>3.4. Citas bibliográficas.</p>
                    <p>3.5. OneDrive.</p>
                    <p>3.6. WordApp.</p>
                    <p>3.7. Publicar en un blog.</p>
                    <p>3.8. Voz a texto y texto a voz.</p>
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
