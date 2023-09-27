<template>
<div class="cuadro-principal">
    <!-- INICIO CARRUSEL -->
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
                        <source src="@/assets/imagenes/imagenprincipal.mp4" type="video/mp4">
                        Tu navegador no admite el elemento de video.
                    </video>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/imagenes/O1.png" class="d-block w-100 img-fluid" alt="Imagen">
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
        <h2>Categorías</h2>
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
                    <button class="dropdown-btn">Cursos disponibles ▼</button>
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
                <img src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg" alt="emprendimiento">
            </figure>
            <div class="contenido-card">
                <h3>Emprendimiento</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Cursos disponibles ▼</button>
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

        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/ofimatica.jpg" alt="ofimatica">
            </figure>
            <div class="contenido-card">
                <h3>Ofimática</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">Cursos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/word-basico" @click="scrollToTop">Word Básico</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/word-intermedio" @click="scrollToTop">Word Intermedio</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/word-avanzado" @click="scrollToTop">Word Avanzando</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/excel-basico" @click="scrollToTop">Excel Básico</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/excel-intermedio" @click="scrollToTop">Excel Intermedio</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/excel-avanzado" @click="scrollToTop">Excel Avanzando</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/power-point-bsc" @click="scrollToTop">Power Point Básico</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/power-point-intermedio" @click="scrollToTop">Power Point Intermedio</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/epower-point-avanzado" @click="scrollToTop">Power Point Avanzando</router-link>
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
                    <button class="dropdown-btn">Cursos disponibles ▼</button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/ciudadano-digital1" @click="scrollToTop">Ciudadano digital nivel 1</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/ciudadano-digital1" @click="scrollToTop">Ciudadano digital nivel 2</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/alfabetizacion-digital" @click="scrollToTop">Alfabetización digital</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/herramientas-comunicativas" @click="scrollToTop">Herramientas comunicativas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/competencias-comunicativas" @click="scrollToTop">Competencias comunicativas para docentes</router-link>
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
                    <button class="dropdown-btn">Cursos disponibles ▼</button>
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
                    <button class="dropdown-btn">
                        Cursos disponibles ▼

                    </button>
                    <div class="dropdown-content">
                        <router-link class="nav-link active" aria-current="page" to="/community-manager" @click="scrollToTop">Community Manager</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/marketing-digital" @click="scrollToTop">Marketing digital</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/habilidades-sociales" @click="scrollToTop">Habilidades sociales</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/instagram" @click="scrollToTop">Instagram para el desarrollo de marcas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/posicionamientos-marcas" @click="scrollToTop">Posicionamientos de marcas</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/internet-rs-dg" @click="scrollToTop">Internet, redes sociales y dispositivos digitales</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/posicionamiento-buscadores" @click="scrollToTop">Posicionamiento en buscadores</router-link>
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
                <h4>Programación avanzada</h4>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">
                        Cursos disponibles ▼

                    </button>
                    <!-- <div class="dropdown-content">
                        <a href="/community-manager">Community Manager</a>
                        <a href="/marketing-digital">Marketing digital</a>
                        <a href="/habilidades-sociales">Habilidades sociales</a>
                        <a href="/instagram">Instagram para el desarrollo de marcas</a>
                        <a href="/posicionamientos-marcas">Posicionamientos de marcas</a>
                        <a href="/internet-rs-dg">Internet, redes sociales y dispositivos digitales</a>
                    </div> -->
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
                    <button class="dropdown-btn">
                        Cursos disponibles ▼

                    </button>
                    <!-- <div class="dropdown-content">
                        <a href="/community-manager">Community Manager</a>
                        <a href="/marketing-digital">Marketing digital</a>
                        <a href="/habilidades-sociales">Habilidades sociales</a>
                        <a href="/instagram">Instagram para el desarrollo de marcas</a>
                        <a href="/posicionamientos-marcas">Posicionamientos de marcas</a>
                        <a href="/internet-rs-dg">Internet, redes sociales y dispositivos digitales</a>
                    </div> -->
                </div>
            </div>
            <div class="cinta">Próximamente</div>
        </div>
        <div class="card">
            <figure class="imagen_card">
                <img src="@/assets/Imagenes/Cabeceras/Robotica_A.jpg" alt="robo-avanzada">
            </figure>
            <div class="contenido-card">
                <h3>Robótica avanzada</h3>
            </div>
            <div class="card-footer">
                <div class="dropdown">
                    <button class="dropdown-btn">
                        Cursos disponibles ▼

                    </button>
                    <!-- <div class="dropdown-content">
                        <a href="/community-manager">Community Manager</a>
                        <a href="/marketing-digital">Marketing digital</a>
                        <a href="/habilidades-sociales">Habilidades sociales</a>
                        <a href="/instagram">Instagram para el desarrollo de marcas</a>
                        <a href="/posicionamientos-marcas">Posicionamientos de marcas</a>
                        <a href="/internet-rs-dg">Internet, redes sociales y dispositivos digitales</a>
                    </div> -->
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
</style>


<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0); // Desplazar la página hacia la parte superior
    },
  },
};
</script>