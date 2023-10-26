<template>
<div class="cuadro-principal">
    <!-- INICIO CARRUSEL -->
    <div class="carrusel" id="myCarousel">
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
                        <source src="@/assets/imagenes/imagenprincipal.mp4" type="video/mp4">
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
                <div class="carousel-item">
                    <router-link to="/inscripcion">
                        <img src="@/assets/imagenes/bannerInicio.png" class="d-block w-100 img-fluid" alt="Imagen">
                    </router-link>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/imagenes/O1.png" class="d-block w-100 img-fluid" alt="Imagen">
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
    <!-- FIN CARRUSEL -->

    <div class="title-cards">
        <h2>Entrenamientos</h2>
    </div>

    <!--   Tarjetas-->
    <div class="container-card">

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/programacion.png" alt="programacion">
            </figure>
            <div class="contenido-card">
                <h3>Programación</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Entrenamiento disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/java" @click="scrollToTop">Java</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/net" @click="scrollToTop">Net</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/php" @click="scrollToTop">PHP</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/python" @click="scrollToTop">Python</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/javascript" @click="scrollToTop">JavaScript</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/node" @click="scrollToTop">Node.js</router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/diseno.jpg" alt="diseno">
            </figure>
            <div class="contenido-card">
                <h3>Diseño</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Entrenamientos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/metodologia-canvas" @click="scrollToTop">Metodología canvas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/diseno-publicitario" @click="scrollToTop">Diseño publicitario</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/diseno-UxUis" @click="scrollToTop">Diseño UX/UI</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/diseno-presentaciones" @click="scrollToTop">Principios de diseño para presentaciones</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/illustrator" @click="scrollToTop">Basic Illustrator</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/photoshop" @click="scrollToTop">Basic Photoshop</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/afterEffects" @click="scrollToTop">Basic after effects</router-link>
                    </div>
                </div>
            </div>
        </div>


        

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/marketing.jpg" alt="marketing">
            </figure>
            <div class="contenido-card">
                <h3>Marketing</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Entrenamientos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/community-manager" @click="scrollToTop">Community Manager</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/habilidades-sociales" @click="scrollToTop">Habilidades sociales</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/instagram" @click="scrollToTop">Instagram para el desarrollo de marcas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/internet-rs-dg" @click="scrollToTop">Internet, redes sociales y dispositivos digitales</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/marketing-digital" @click="scrollToTop">Marketing digital</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/posicionamiento-buscadores" @click="scrollToTop">Posicionamiento en buscadores</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/posicionamientos-marcas" @click="scrollToTop">Posicionamientos de marcas</router-link>
                    </div>
                </div>
            </div>
        </div>

        

        

    </div>
    <!--   Fin Tarjetas-->
    <div class="container-card">

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/tic02.jpg" alt="tic">
            </figure>
            <div class="contenido-card">
                <h3>TIC</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Entrenamientos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/ciudadano-digital1" @click="scrollToTop">Ciudadano digital nivel 1</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/ciudadano-digital2" @click="scrollToTop">Ciudadano digital nivel 2</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/alfabetizacion-digital" @click="scrollToTop">Alfabetización digital</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/herramientas-comunicativas" @click="scrollToTop">Herramientas comunicativas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/competencias-comunicativas" @click="scrollToTop">Competencias comunicativas para docentes</router-link>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/ofimatica.jpg" alt="ofimatica">
            </figure>
            <div class="contenido-card">
                <h3>Ofimática</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Entrenamientos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/word-basico" @click="scrollToTop">Word Básico</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/word-intermedio" @click="scrollToTop">Word Intermedio</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/word-avanzado" @click="scrollToTop">Word Avanzando</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/excel-basico" @click="scrollToTop">Excel Básico</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/excel-intermedio" @click="scrollToTop">Excel Intermedio</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/excel-avanzado" @click="scrollToTop">Excel Avanzando</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/power-point-bsc" @click="scrollToTop">Power Point Básico</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/power-point-intermedio" @click="scrollToTop">Power Point Intermedio</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/power-point-avanzado" @click="scrollToTop">Power Point Avanzando</router-link>
                    </div>
                </div>
            </div>
        </div>
       

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="emprendimiento">
            </figure>
            <div class="contenido-card">
                <h3>Emprendimiento</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Entrenamientos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/creacion-de-marcas" @click="scrollToTop">Creación de marcas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/creacion-tiendas-online" @click="scrollToTop">Creación de tiendas online</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/economia-domestica" @click="scrollToTop">Economía doméstica</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/google-ads" @click="scrollToTop">Google Ads</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/meta-ads" @click="scrollToTop">Facebook e Instagram Ads</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/maduracion-de-proyectos" @click="scrollToTop">Maduración de proyectos</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/plan-de-negocios" @click="scrollToTop">Plan de negocios</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/gestion-procesos" @click="scrollToTop">Gestión de procesos</router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!--  Fin Tarjetas-->

    <!--   Tarjetas-->
    <div class="container-card">

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/programacion-a.png" alt="pro-avanzada">
            </figure>
            <div class="contenido-card">
                <h4>Programación Avanzada</h4>
                <br>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <router-link class="nav-link active" aria-current="page" to="/programacion-avanzada" @click="scrollToTop">
                        <button class="cssbuttons-io-button">Vamos
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                            </div>
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="cinta">Próximamente</div>
        </div>

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/Robota_B.jpg" alt="robo-basica">
            </figure>
            <div class="contenido-card">
                <h3>Robótica básica</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <router-link class="nav-link active" aria-current="page" to="/robotica-basica" @click="scrollToTop">
                        <button class="cssbuttons-io-button">Vamos
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                            </div>
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="cinta">Próximamente</div>
        </div>
        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/Robotica_A.jpg" alt="robo-avanzada">
            </figure>
            <div class="contenido-card">
                <h3>Vacacional de Robotica</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <router-link class="nav-link active" aria-current="page" to="/robotica-avanzada" @click="scrollToTop">
                        <button class="cssbuttons-io-button">Vamos
                            <div class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                </svg>
                            </div>
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="cinta">Próximamente</div>
        </div>

    </div>
</div>
<!--Fin   Tarjetas-->
</template>

<style>
.cinta {
    position: absolute;
    top: 40px;
    /* Ajusta la distancia desde la parte superior según tus necesidades */
    right: -5px;
    /* Ajusta la distancia desde la derecha según tus necesidades */
    background-color: #FF5733;
    /* Color de fondo de la cinta */
    color: white;
    /* Color del texto de la cinta */
    padding: 5px 10px;
    /* Espaciado interior de la cinta */
    font-weight: bold;
    /* Estilo de fuente en negrita */
    transform: rotate(45deg);
    /* Girar la cinta 45 grados */
    white-space: nowrap;
    /* Evitar que el texto se divida en varias líneas */
}

.cssbuttons-io-button {
    background: #04954A;
    color: white;
    font-family: inherit;
    padding: 0.35em;
    padding-left: 1.2em;
    font-size: 17px;
    font-weight: 500;
    border-radius: 0.9em;
    border: none;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 1.6em -0.6em #04954A;
    overflow: hidden;
    position: relative;
    height: 2.8em;
    padding-right: 3.3em;
}

.cssbuttons-io-button .icon {
    background: white;
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2em;
    width: 2.2em;
    border-radius: 0.7em;
    box-shadow: 0.1em 0.1em 0.6em 0.2em #04954A;
    right: 0.3em;
    transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
    width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
    width: 1.1em;
    transition: transform 0.3s;
    color: #04954A;
}

.cssbuttons-io-button:hover .icon svg {
    transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
    transform: scale(0.95);
}

/* Estilo para el botón del dropdown */
.dropdown-btn {

    color: #333;
    padding: 10px;
    border: none;
    cursor: pointer;
}

/* Estilo del menú desplegable */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

/* Estilo de los enlaces del menú */
.dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: #333;
    animation: fadeInDown 0.3s ease-in-out;
    width: 300px;
    top: 440%;
}

/* Cambiar el color del enlace cuando se pasa el cursor por encima */
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Mostrar el menú desplegable cuando se pasa el cursor por encima del botón */
.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content a:hover {
    background-color: gainsboro;
}

/* Animación de entrada */
@keyframes fadeInDown {
    0% {
        transform: translateY(-10px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>

<script>
export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0); // Desplazar la página hacia la parte superior
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
