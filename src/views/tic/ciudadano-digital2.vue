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
                <p class="lead"> El curso de Ciudadano Digital Nivel 2 es una continuación de los
                    conceptos aprendidos en el Nivel 1 y está diseñado para aquellos que
                    desean profundizar su comprensión y habilidades en el mundo digital. En
                    este nivel, nos enfocaremos en cuestiones más avanzadas de ciudadanía
                    digital, ética en línea y participación cívica digital.</p>
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
                    <p class="lead">Ciudadano Digital Avanzado, está dirigido a aquellos que han completado
                        el Nivel 1 o que ya poseen un conocimiento básico de la ciudadanía
                        digital. Este nivel está diseñado para personas que desean profundizar su
                        comprensión y participar de manera más activa en cuestiones avanzadas
                        de ética en línea, participación cívica digital y pensamiento crítico en
                        línea. Es ideal para aquellos interesados en la toma de decisiones
                        informadas y la participación activa en la sociedad digital.</p>
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
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#" />
                    <h3>Unidad 1: Ética en Línea Avanzada </h3>
                    <p>1.1. Comportamiento ético en redes sociales y comunidades en línea.</p>
                    <p>1.2. Ética en la publicidad y el marketing en línea.</p>
                    <p>1.3. Responsabilidad por contenido compartido en línea.</p>
                    <p>1.4. Participación Cívica Digital</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 2: Activismo en línea. </h3>
                    <p>2.1. Política y votación en línea. </p>
                    <p>2.2. Iniciativas ciudadanas en la era digital.</p>
                    <p>2.3. Pensamiento Crítico en Línea.</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 3: Evaluación de fuentes y argumentos en línea. </h3>
                    <p>3.1. Lucha contra la desinformación y la polarización.</p>
                    <p>3.2. Tomar decisiones informadas en línea.</p>
                    <p>3.3. Impacto de la Tecnología en la Sociedad</p>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div id="ho_color" class="service_box">
                    <img src="@/assets/imagenes/tic/iconos/ciudadano-digital.png" alt="#"/>
                    <h3>Unidad 4: Automatización y empleo. </h3>
                    <p>4.1. Privacidad en una sociedad digital.</p>
                    <p>4.2. Ética de la inteligencia artificial.</p>
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
