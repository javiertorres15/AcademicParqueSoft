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
                    cálculo Excel, como una herramienta de múltiples aplicaciones en diversos
                    campos laborales y profesionales. El curso aborda los aspectos generales del
                    entorno de la hoja de cálculo, identificación de herramientas, componentes y
                    funciones básicas que le permitirán al participante iniciar un proceso de
                    reconocimiento y proyección funcional de Excel.</p>
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
                    <img src="@/assets/imagenes/ofimatica/iconos/excel.png" alt="#"/>
                    <h3>Unidad 1: Generalidades. </h3>
                    <p>1.1. Descripción del entorno, reconocimiento de columnas, filas, celdas y
                        hojas en excel.</p>
                    <p>1.2. Desplazamiento a través de la plantilla de excel.</p>
                    <p>1.3. Insertar y eliminar columnas y filas en excel.</p>
                    <p>1.4. Manejo de Formatos de celdas, filas y columnas de excel.</p>
                    <p>1.5. Hojas: Inserción, eliminación, mover y asignar nombre a las hojas de
                        excel.</p>
                    <p>1.6. Tipos de datos: Valores, títulos y fórmulas.</p>
                    <p>1.7. Comandos de edición: Copiar, cortar y pegar.</p>
                    <p>1.8. Guardar la plantilla en el disco.</p>
                    <p>1.9. Recuperación de un archivo existente de Excel.</p>
                    <p>1.10. Impresión y preparación de una plantilla.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/excel.png" alt="#"/>
                    <h3>Unidad 2: Fórmulas Básicas. </h3>
                    <p>2.1. Qué es una fórmula y su importancia. </p>
                    <p>2.2. Jerarquía de operaciones dentro de una expresión.</p>
                    <p>2.3. Pasos para desarrollar una fórmula.</p>
                    <p>2.4. Creación de fórmulas sencillas y combinadas.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/excel.png" alt="#"/>
                    <h3>Unidad 3: Funciones Básicas. </h3>
                    <p>3.1. Estadísticas.</p>
                    <p>3.2. Matemáticas.</p>
                    <p>3.3. Qué es un gráfico.</p>
                    <p>3.4. Creación de un gráfico incrustado en una hoja de cálculo de excel.</p>
                    <p>3.5. Activación de un gráfico para modificarlo.</p>
                    <p>3.6. Diferentes elementos de un gráfico.</p>
                    <p>3.7. Series de datos, rótulos de datos, títulos, ejes, rótulos de las abscisas y
                        leyendas.</p>
                    <p>3.8. El área del gráfico y el área de trazado.</p>
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
