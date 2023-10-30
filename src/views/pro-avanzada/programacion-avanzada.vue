<template>
<!-- Header -->
<header id="header" class="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-container">
                    <div class="countdown">
                        <span id="clock"></span>
                    </div>
                    <h1 style="color: black;">Únete a una experiencia educativa de vanguardia</h1>
                    <p style="color: black;" class="p-large">Clases Online En Vivo, dictadas por expertos en la industria.
                        Inicia desde cero y te certificas en 8 meses.</p>
                    <a class="btn-solid-lg page-scroll" href="#register">Registrate</a>
                </div> <!-- end of text-container -->
            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
    <br>
    <br>
    <br>
    <!-- Image Slider -->
    <div class="outer-container">
        <div class="slider-container">
            <div class="swiper-container image-slider-1">
                <div class="carrusel" hero>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <!-- Video en lugar de imagen -->
                                <video class="d-block w-100" autoplay muted loop>
                                    <source src="/src/assets/Imagenes/programacion-avanzada/proAvanzadaV.mp4" type="video/mp4">

                                </video>
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/Imagenes/programacion-avanzada/ProAvanCarrusel.png" class="d-block w-100 img-fluid" alt="Imagen">
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/Imagenes/programacion-avanzada/ProAvanCarrusel.png" class="d-block w-100 img-fluid" alt="Imagen">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

            </div> <!-- end of swiper-container -->
        </div> <!-- end of slider-container -->
    </div> <!-- end of outer-container -->
    <!-- end of image slider -->

</header> <!-- end of header -->
<!-- end of header -->

<!-- Registration -->
<div id="register" class="form-1">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="text-container">
                    <h2>Inscribete usando el formulario</h2>
                    <p>Es fácil registrarse en el entrenamiento, simplemente complete el formulario y haga clic en enviar.</p>
                </div> <!-- end of text-container -->
            </div> <!-- end of col -->
            <div class="col-lg-6">

                <!-- Registration Form -->
                <div class="form-container">
                    <form @submit="enviarFormulario" method="post" action="">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="rname" name="nombre" placeholder="Nombre" required> <br>
                            <input type="email" class="form-control-input" id="remail" name="correo" placeholder="Correo" required> <br>
                            <input type="number" class="form-control-input" id="rphone" name="telefono" placeholder="Telefono" required>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">Enviar</button>
                        </div>
                    </form>
                    <div v-if="enviando" class="alert alert-info">
                        Espere un momento...
                    </div>
                    <div v-if="envioExitoso" class="alert alert-success">
                        ¡Formulario enviado con éxito! La página se recargará en breve.
                    </div>
                </div> <!-- end of form-container -->
                <!-- end of registration form -->

            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
</div> <!-- end of form-1 -->
<!-- end of registration -->

<!-- Description -->
<div id="description" class="basic-2">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2>¿Qué aprenderás en este entrenamiento?</h2>
            </div> <!-- end of col -->
        </div> <!-- end of row -->
        <div class="row">
            <div class="col-lg-6">
                <ul class="list-unstyled li-space-lg first">
                    <li class="media">
                        <i class="bullet">1</i>
                        <div class="media-body">
                            <h4>Estructuras de Datos Avanzadas</h4>
                            <p style="text-align: justify;">Profundizarás en estructuras de datos como árboles, grafos, pilas,
                                colas, listas enlazadas y tablas hash. Aprenderás cómo elegir la
                                estructura de datos adecuada para diversos problemas.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">2</i>
                        <div class="media-body">
                            <h4>Algoritmos Eficientes</h4>
                            <p style="text-align: justify;">Te sumergirás en la optimización de algoritmos y técnicas avanzadas
                                de programación. Aprenderás a diseñar algoritmos eficientes y a
                                analizar su complejidad.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">3</i>
                        <div class="media-body">
                            <h4>Proyectos Prácticos</h4>
                            <p style="text-align: justify;">A lo largo del entrenamiento, trabajarás en proyectos que aplicarán los
                                conceptos aprendidos, lo que te permitirá adquirir experiencia
                                práctica.</p>
                        </div>
                    </li>
                </ul>
            </div> <!-- end of col -->
            <div class="col-lg-6">
                <ul class="list-unstyled li-space-lg second">
                    <li class="media">
                        <i class="bullet">4</i>
                        <div class="media-body">
                            <h4>Programación en Red y Seguridad</h4>
                            <p style="text-align: justify;">Obtendrás conocimientos sobre comunicación en red, protocolos,
                                seguridad informática y programación segura.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">5</i>
                        <div class="media-body">
                            <h4>Programación Orientada a Objetos Avanzada</h4>
                            <p style="text-align: justify;">Mejorarás tu comprensión de la programación orientada a objetos,
                                incluyendo conceptos como herencia, polimorfismo, encapsulamiento
                                y diseño de clases avanzado.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">6</i>
                        <div class="media-body">
                            <h4>Gestión de Memoria</h4>
                            <p style="text-align: justify;">Comprenderás cómo gestionar eficientemente
                                la memoria en lenguajes de programación de bajo nivel, evitando
                                problemas como fugas de memoria.</p>
                        </div>
                    </li>
                </ul>
            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
</div> <!-- end of basic-2 -->
<!-- end of description -->

<!-- Details Lightbox -->
<div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
    <div class="container">
        <div class="row">
            <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
            <div class="col-lg-8">
                <div class="image-container">
                    <img class="img-fluid" src="@/assets/Imagenes/programacion-avanzada/ProAcom.png" alt="alternative">
                    <br><br>
                    <p>¡Esperamos que se unan a nosotros en este entrenamiento de programación
                        avanzada!</p>
                </div> <!-- end of image-container -->
            </div> <!-- end of col -->
            <div class="col-lg-4">
                <h3>Metodologías de las clases del entrenamiento:</h3>
                <hr>
                <h5>Estimados interesados en el entrenamiento de Programación Avanzada,</h5>
                <p style="text-align: justify;">Este entrenamiento se realizará de forma virtual y se centrará en la práctica. A
                    través de componentes prácticos y proyectos, afianzarán sus
                    conocimientos de programación de manera efectiva. A pesar de ser
                    en línea, tendrán la oportunidad de aplicar lo que aprendan en
                    desafíos del mundo real. Estamos emocionados de contar con su
                    participación activa en esta experiencia de aprendizaje
                    enriquecedora.</p>

                    <a class="btn-solid-reg mfp-close page-scroll" target="_blank" href="https://drive.google.com/file/d/1WM7uXg1lJo8ce5C9wqdKSYMtMgbpCLna/view?usp=sharing">
                    Programa academico
                </a>

            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
</div> <!-- end of lightbox-basic -->
<!-- end of details lightbox -->
</template>

<script>
import PDF from '@/assets/archivos/Pensum.pdf'; // Asegúrate de ajustar la ruta según la estructura de tu proyecto

// Luego, puedes usar la variable PDF en tu plantilla HTML.

export default {
    data() {
        return {
            envioExitoso: false,
            enviando: false, // Inicialmente, no se está enviando el formulario
        };
    },
    methods: {
        enviarFormulario(e) {
            e.preventDefault();
            this.enviando = true; // Establecer enviando en true

            fetch('https://script.google.com/macros/s/AKfycbxGuCo5MxTzm_Blt64bt5N4r_y1HxwfUfJmAE6i8XsR8M89npAXpe9s3SuAcYkyvyRR/exec', {
                    method: 'POST',
                    body: new FormData(e.target),
                })
                .then(() => {
                    this.envioExitoso = true;
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                })
                .catch((error) => {
                    console.error('Error!', error.message);
                })
                .finally(() => {
                    this.enviando = false; // Establecer enviando en false después de completar el envío
                });
        },
    },

};
</script>

<style scoped>
@import '../pro-avanzada/css/swiper.css';
@import '../pro-avanzada/css/styles.css';
@import '../pro-avanzada/css/bootstrap.css';
</style>
