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
                <p class="lead">Este curso se centra en enseñarte a mejorar
                    tus presentaciones en Microsoft PowerPoint mediante la incorporación
                    de elementos como formas, gráficos y funciones avanzadas, incluyendo la
                    creación de gráficos con Microsoft Excel.</p>
                <p class="lead">
                    Este curso de PowerPoint Intermedio es ideal tanto para principiantes como para usuarios intermedios. Aprenderás a trabajar con plantillas, usar formas y gráficos para destacar contenido, insertar elementos de productos de Microsoft y preparar tus diapositivas para presentaciones completas.
                </p>
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
                    <p class="lead">Profesionales, estudiantes y público en general.</p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de PowePoint Intermedio</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/powerpoint.png" alt="#"/>
                    <h3>Unidad 1: INTERFAZ DE POWERPOINT </h3>
                    <p>1.1.¿Cuál es la interfaz de
                        Power Point?.</p>
                    <p>1.2. Estructura de la
                        interfaz de Power Point.</p>
                    <p>1.3. Personalización de la
                        cinta de opciones.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/powerpoint.png" alt="#"/>
                    <h3>Unidad 2: VISTAS DE
                        POWERPOINT </h3>
                    <p>2.1. ¿Qué son las vistas de
                        Power Point?. </p>
                    <p>2.2. Vistas de Power Point.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/powerpoint.png" alt="#"/>
                    <h3>Unidad 3: DISEÑO DE POWER
                        POINT </h3>
                    <p>3.1. Aplicar un tema.</p>
                    <p>3.2. Combinación de
                        colores.</p>
                    <p>3.3. Fuentes.</p>
                    <p>3.4. Formato de fondos.</p>
                    <p>3.5. Numeración de
                        diapositivas. </p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/powerpoint.png" alt="#"/>
                    <h3>Unidad 4: TRABAJAR CON
                        GRÁFICOS</h3>
                    <p>4.1. Trabajar con gráficos.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/powerpoint.png" alt="#"/>
                    <h3>Unidad 5: PATRÓN DE
                        DIAPOSITIVAS</h3>
                    <p>5.1. ¿Para qué sirve un
                        patrón de diapositivas?.</p>
                    <p>5.2. Patrón de diapositiva. .</p>
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
