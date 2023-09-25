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
                <p class="lead">Este curso, brinda los conocimientos y habilidades que le
                    permitirán al participante adquirir un amplio dominio en el análisis, diseño,
                    organización y presentación de información administrativa de oficina, cruce de
                    información y análisis de los datos.</p>
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
                    <p class="lead"></p>
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
                    <h2><strong class="yellow">Contenidos</strong><br>Curso de Excel Avanzado</h2>
                </div>
            </div>
        </div>

        <br><br>
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/excel.png" alt="#"/>
                    <h3>Unidad 1: Funciones Especiales de Excel. </h3>
                    <p>1.1. Preparación bases de datos.</p>
                    <p>1.2. Limpieza de datos.</p>
                    <p>1.3. Análisis de datos.</p>
                    <p>1.4. Creación de un Dashboard.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/excel.png" alt="#"/>
                    <h3>Unidad 2: Programación en VBA. </h3>
                    <p>2.1. Introducción a macros BVA.</p>
                    <p>2.2. Panel BVA.</p>
                    <p>2.3. Funciones y subrutinas.</p>
                    <p>2.4. Conclusiones.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/ofimatica/iconos/excel.png" alt="#"/>
                    <h3>Unidad 3: Funciones Básicas. </h3>
                    <p>3.1. Business Intelligence con Power BI. </p>
                    <p>3.2. Preparación de datos.</p>
                    <p>3.3. Modelado de datos.</p>
                    <p>3.4. Visualización de datos.</p>
                    <p>3.5. Análisis de datos (Power BI/Phyton).</p>
                    <p>3.6. Entrega de datos.</p>
                    <p>3.7. Fórmulas para Modelos financieros.</p>
                    <p>3.8. Tablas dinámicas.</p>
                    <p>3.9. Time value of money.</p>
                    <p>3.10. Estados financieros.</p>
                    <p>3.11. Escenarios y proyección de los estados financieros para valoración.</p>
                    <p>3.12. Gráfico Avanzado.</p>
                    <p>3.13. Caso Practico.</p>
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
