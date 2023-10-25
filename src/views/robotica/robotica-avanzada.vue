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
                    <h1 style="color: black">Vacacional de Robótica</h1>
                    <p style="color: black;" class="p-large">Clases Online En Vivo, dictadas por expertos en la industria.
                        </p>
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
                                <img src="/src/assets/Imagenes/robotica/vacacionalCarrusel1.jpg" class="d-block w-100 img-fluid" alt="Imagen">
                            </div>
                            <div class="carousel-item">
                                <img src="/src/assets/Imagenes/robotica/vacacionalCarrusel2.jpg" class="d-block w-100 img-fluid" alt="Imagen">
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
                    <p>Es fácil registrarse en el vacacional, simplemente complete el formulario y haga clic en enviar.</p>
                </div> <!-- end of text-container -->
            </div> <!-- end of col -->
            <div class="col-lg-6">

                <!-- Registration Form -->
                <div class="form-container">
                    <form id="registrationForm" @submit="enviarFormulario" data-toggle="validator" data-focus="false" method="post" action="">
                        <div class="form-group">
                            <input type="text" placeholder="Nombre completo" class="form-control-input" id="rname" name="nombre" required>

                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Correo electronico" class="form-control-input" id="remail" name="correo" required>

                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Numero de telefono" class="form-control-input" id="rphone" name="telefono" required>

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
                <h2>¿Qué aprenderás con este Vacacional?</h2>
            </div> <!-- end of col -->
        </div> <!-- end of row -->
        <div class="row">
            <div class="col-lg-6">
                <ul class="list-unstyled li-space-lg first">
                    <li class="media">
                        <i class="bullet">1</i>
                        <div class="media-body">
                            <h4>Programación de Robots:</h4>
                            <p style="text-align: justify;">Aprenderán a programar robots
                                para realizar tareas específicas, utilizando lenguajes de
                                programación adaptados a la robótica, lo que les permitirá
                                controlar y automatizar movimientos y acciones.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">2</i>
                        <div class="media-body">
                            <h4>Diseño de Robots:</h4>
                            <p style="text-align: justify;">Explorarán los conceptos de diseño de
                                robots, desde la mecánica y la electrónica hasta la ingeniería de
                                control, y trabajarán en la creación de prototipos de robots
                                funcionales.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">3</i>
                        <div class="media-body">
                            <h4>Inteligencia Artificial y Aprendizaje Automático:</h4>
                            <p style="text-align: justify;">Comprenderán cómo la inteligencia artificial y el aprendizaje
                                automático se aplican en la robótica, permitiendo a los robots
                                tomar decisiones autónomas y aprender de su entorno.</p>
                        </div>
                    </li>
                </ul>
            </div> <!-- end of col -->
            <div class="col-lg-6">
                <ul class="list-unstyled li-space-lg second">
                    <li class="media">
                        <i class="bullet">4</i>
                        <div class="media-body">
                            <h4>Visión por Computadora:</h4>
                            <p style="text-align: justify;">Aprenderán a utilizar la visión por
                                computadora para que los robots puedan interpretar y
                                responder a su entorno utilizando cámaras y sensores.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">5</i>
                        <div class="media-body">
                            <h4>Robótica Móvil:</h4>
                            <p style="text-align: justify;">Explorarán la robótica móvil, que incluye la
                                navegación autónoma de robots en entornos reales, como
                                vehículos autónomos y drones.</p>
                        </div>
                    </li>
                    <li class="media">
                        <i class="bullet">6</i>
                        <div class="media-body">
                            <h4>Colaboración en Equipo:</h4>
                            <p style="text-align: justify;">Trabajarán en proyectos de equipo,
                                lo que les permitirá desarrollar habilidades de colaboración y
                                comunicación.</p>
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
                    <img class="img-fluid" src="/src/assets/Imagenes/robotica/roboticaavanzada.png" alt="alternative">
                </div> <!-- end of image-container -->
                <br><br>
                <p>¡Esperamos que se unan a nosotros en este vacacional de Robotica!</p>
            </div> <!-- end of col -->
            <div class="col-lg-4">
                <h3>Metodología de las clases del vacacional:</h3>
                <hr>
                <p>Es un placer darles la bienvenida a este emocionante vacacional de
                    Robótica, que se llevará a cabo de manera presencial.
                    Queremos que tengan una comprensión clara de cómo será su
                    formación a lo largo del vacacional, por lo que aquí les proporcionamos
                    una visión general de lo que pueden esperar:</p>
                <ul class="list-unstyled li-space-lg">
                    <li class="media">
                        <i class="fas fa-square"></i>
                        
                        <div class="media-body">Clases Presenciales</div>
                    </li>
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Teoría y Práctica</div>
                    </li>
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Equipos y Colaboración</div>
                    </li>
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Proyectos Significativos</div>
                    </li>
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Supervisión y Apoyo</div>
                    </li>
                    <li class="media">
                        <i class="fas fa-square"></i>
                        <div class="media-body">Evaluación Continua</div>
                    </li>
                </ul>
                <a class="btn-solid-reg mfp-close page-scroll" href="#register">Malla Curricular</a>
            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
</div> <!-- end of lightbox-basic -->
<!-- end of details lightbox -->
</template>

<script>
export default {
    data() {
        return {
            envioExitoso: false,
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
            fetch('https://script.google.com/macros/s/AKfycbz1jhIiZ0gbtorwcIfopOAVll7i9emCA1dHmO-VlAFggMfLiKJgU5iGtCV-WiOLm5s6/exec', {
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
