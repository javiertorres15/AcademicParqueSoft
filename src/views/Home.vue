<template>
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
                    <router-link class="nav-link active" aria-current="page" to="/java">Java</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/net">Net</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/php">PHP</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/python">Python</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/javascript">JavaScript</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/node">Node.js</router-link>
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
                    <router-link class="nav-link active" aria-current="page" to="/creacion-de-marcas">Creación de marcas</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/creacion-tiendas-online">Creación de tiendas online</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/economia-domestica">Economía doméstica</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/google-ads">Google Ads</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/meta-ads">Facebook e Instagram Ads</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/maduracion-de-proyectos">Maduración de proyectos</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/plan-de-negocios">Plan de negocios</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/gestion-procesos">Gestión de procesos</router-link>
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
                    <router-link class="nav-link active" aria-current="page" to="/word-basico">Word Básico</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/word-intermedio">Word Intermedio</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/word-avanzado">Word Avanzando</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/excel-basico">Excel Básico</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/excel-intermedio">Excel Intermedio</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/excel-avanzado">Excel Avanzando</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/power-point-bsc">Power Point Básico</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/power-point-intermedio">Power Point Intermedio</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/epower-point-avanzado">Power Point Avanzando</router-link>
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
                    <router-link class="nav-link active" aria-current="page" to="/ciudadano-digital1">Ciudadano digital nivel 1</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/ciudadano-digital1">Ciudadano digital nivel 2</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/alfabetizacion-digital">Alfabetización digital</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/herramientas-comunicativas">Herramientas comunicativas</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/competencias-comunicativas">Competencias comunicativas para docentes</router-link>
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
                    <router-link class="nav-link active" aria-current="page" to="/metodologia-canvas">Metodología canvas</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/diseno-publicitario">Diseño publicitario</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/diseno-UxUis">Diseño UX/UI</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/diseno-presentaciones">Principios de diseño para presentaciones</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/illustrator">Basic Illustrator</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/photoshop">Basic Photoshop</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/afterEffects">Basic after effects</router-link>
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
                    <router-link class="nav-link active" aria-current="page" to="/community-manager">Community Manager</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/marketing-digital">Marketing digital</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/habilidades-sociales">Habilidades sociales</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/instagram">Instagram para el desarrollo de marcas</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/posicionamientos-marcas">Posicionamientos de marcas</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/internet-rs-dg">Internet, redes sociales y dispositivos digitales</router-link>
                    <router-link class="nav-link active" aria-current="page" to="/posicionamiento-buscadores">Posicionamiento en buscadores</router-link>
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
