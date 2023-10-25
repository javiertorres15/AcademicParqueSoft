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
                                    <source src="/src/assets/Imagenes/robotica/roboticavideo.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/Imagenes/robotica/carruselRobotica1.jpg" class="d-block w-100 img-fluid" alt="Imagen">
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/Imagenes/robotica/carruselRobotica2.jpg" class="d-block w-100 img-fluid" alt="Imagen">
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
                    <form @submit="enviarFormulario" method="post" action="https://script.google.com/macros/s/AKfycbxFwHLANRVaXYVzvo_rjG7cxgyb72VioY6LxblMEslDGSlN9xuIv5sFItBoIMx6YU01jQ/exec">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="rname" name="nombre" placeholder="Nombre" required>

                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="remail" name="correo" placeholder="Correo" required>

                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="number" class="form-control-input" id="rphone" name="telefono" placeholder="Telefono" required>

                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">Enviar</button>
                        </div>
                        <div class="form-message">
                            <div id="rmsgSubmit" class="h3 text-center hidden"></div>
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
                            <h4>Introducción a la Robótica</h4>
                            <p>Comprenderás qué es la robótica, su historia y su relevancia en la actualidad.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">2</i>
                        <div class="media-body">
                            <h4>Componentes Básicos</h4>
                            <p>Aprenderás sobre los componentes esenciales de un robot, como motores, sensores, ruedas, y más.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">3</i>
                        <div class="media-body">
                            <h4>Programación de Robots</h4>
                            <p>Te introducirás en la programación de robots utilizando lenguajes y entornos amigables para principiantes.</p>
                        </div>
                    </li>
                </ul>
            </div> <!-- end of col -->
            <div class="col-lg-6">
                <ul class="list-unstyled li-space-lg second">
                    <li class="media">
                        <i class="bullet">4</i>
                        <div class="media-body">
                            <h4>Diseño y Construcción de Robots</h4>
                            <p>Aprenderás a construir robots simples utilizando kits de robótica y entenderás los principios de la ingeniería mecánica.
                            </p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">5</i>
                        <div class="media-body">
                            <h4>Sensores y Actuadores:</h4>
                            <p>Explorarás diferentes tipos de sensores y actuadores y cómo se utilizan para que los robots respondan a su entorno.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">6</i>
                        <div class="media-body">
                            <h4>Control Remoto</h4>
                            <p>Conocerás cómo controlar un robot de forma remota a través de aplicaciones y dispositivos.</p>
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
                    <img class="img-fluid" src="@/assets/imagenes/robotica/imagenRoboticaBasica.png" alt="alternative">
                </div> <!-- end of image-container -->
            </div> <!-- end of col -->
            <div class="col-lg-4">
                <h3>Metodologia del entrenamiento</h3>
                <hr>

                <p>Nuestras clases virtuales de robótica se basan en una metodología interactiva y práctica que combina teoría y aplicación.</p>
                <p>Clases en Vivo: Ofrecemos clases en vivo a través de una plataforma de videoconferencia, donde los instructores presentarán conceptos y responderán preguntas en tiempo real.</p>
                <p>Material Didáctico: Los estudiantes tendrán acceso a material de estudio, tutoriales y recursos en línea para reforzar los conceptos aprendidos.Proyectos Prácticos: Los estudiantes trabajarán en proyectos prácticos a lo largo del entrenamiento, aplicando lo que han aprendido en la construcción y programación de robots reales.</p>
                <a class="btn-solid-reg mfp-close page-scroll" href="#register">SIGN UP</a>
            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
</div> <!-- end of lightbox-basic -->
<!-- end of details lightbox -->
</template>

<style scoped>
@import '../pro-avanzada/css/swiper.css';
@import '../pro-avanzada/css/styles.css';
@import '../pro-avanzada/css/bootstrap.css';


</style>

<script>
export default {
    data() {
        return {
            envioExitoso: false, // Inicialmente, el envío no es exitoso
            enviando: false, // Inicialmente, no se está enviando el formulario
        };
    },
    methods: {
        enviarFormulario(e) {
            e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
            this.enviando = true; // Establecer enviando en true

            // Agregar aquí el código para enviar el formulario (por ejemplo, usando fetch)
            // Una vez que se haya enviado con éxito el formulario, establece envioExitoso en true
            // y luego recarga la página después de un breve retraso
            fetch('https://script.google.com/macros/s/AKfycbxFwHLANRVaXYVzvo_rjG7cxgyb72VioY6LxblMEslDGSlN9xuIv5sFItBoIMx6YU01jQ/exec', {
                    method: 'POST',
                    body: new FormData(e.target),
                })
                .then(() => {
                    this.envioExitoso = true; // Establecer envioExitoso en verdadero
                    setTimeout(() => {
                        window.location.href = '/'; // Redirigir a una página en específico
                    }, 2000); // 2000 milisegundos = 2 segundos
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

document.addEventListener("DOMContentLoaded", function () {
    // Configura el intervalo en milisegundos (10 segundos = 10000 ms)
    const interval = 20000;

    // Selecciona el carrusel por su id
    const carousel = document.getElementById("myCarousel");

    // Inicializa el carrusel de Bootstrap
    const carouselInstance = new bootstrap.Carousel(carousel);

    // Función para avanzar al siguiente elemento del carrusel
    function nextSlide() {
        carouselInstance.next();
    }

    // Inicia el intervalo para cambiar los elementos del carrusel
    const autoChangeInterval = setInterval(nextSlide, interval);

    // Detén el intervalo cuando el mouse entra en el carrusel
    carousel.addEventListener("mouseenter", function () {
        clearInterval(autoChangeInterval);
    });

    // Reanuda el intervalo cuando el mouse sale del carrusel
    carousel.addEventListener("mouseleave", function () {
        autoChangeInterval = setInterval(nextSlide, interval);
    });
});
</script>
