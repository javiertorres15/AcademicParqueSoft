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
                <img src="@/assets/imagenes/O1.jfif" class="d-block w-100 img-fluid" alt="Imagen">
            </div>
            <div class="carousel-item">
                <img src="@/assets/imagenes/O1.jfif" class="d-block w-100 img-fluid" alt="Imagen">
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
            <img src="@/assets/Imagenes/Cabeceras/programacion.png">
        </figure>
        <div class="contenido-card">
            <h3>Programación</h3>
        </div>
        <div class="card-footer">
            <div class="dropdown">
                <button class="dropdown-btn">Cursos disponibles ▼</button>
                <div class="dropdown-content">
                    <a href="/java">Java</a>
                    <a href="/net">.Net</a>
                    <a href="/php">.PHP</a>
                    <a href="/python">Python</a>
                    <a href="/javascript">JavaScript</a>
                    <a href="/node">Node.js</a>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <figure class="imagen_card">
            <img src="@/assets/Imagenes/Cabeceras/emprendimiento.jpg">
        </figure>
        <div class="contenido-card">
            <h3>Emprendimiento</h3>
        </div>
        <div class="card-footer">
            <div class="dropdown">
                <button class="dropdown-btn">Cursos disponibles ▼</button>
                <div class="dropdown-content">
                    <a href="/creacion-de-marcas">Creación de marcas</a>
                    <a href="/creacion-tiendas-online">Creación de tiendas online</a>
                    <a href="/economia-domestica">Economía doméstica</a>
                    <a href="/google-ads">Google Ads</a>
                    <a href="/meta-ads">Facebook e Instagram Ads</a>
                    <a href="/maduracion-de-proyectos">Maduración de proyectos</a>
                    <a href="/plan-de-negocios">Plan de negocios</a>
                    <a href="/gestion-procesos">Gestión de procesos</a>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <figure class="imagen_card">
            <img src="@/assets/Imagenes/Cabeceras/ofimatica.jpg">
        </figure>
        <div class="contenido-card">
            <h3>Ofimática</h3>
        </div>
        <div class="card-footer">
            <div class="dropdown">
                <button class="dropdown-btn">Cursos disponibles ▼</button>
                <div class="dropdown-content">
                    <a href="/word-basico">Word Básico</a>
                    <a href="/word-intermedio">Word Intermedio</a>
                    <a href="/word-avanzado">Word Avanzando</a>
                    <a href="/excel-basico">Excel Básico</a>
                    <a href="/excel-intermedio">Excel Intermedio</a>
                    <a href="/excel-avanzado">Excel Avanzado</a>
                    <a href="/power-point-bsc">Power Point Básico</a>
                    <a href="/power-point-intermedio">Power Point Intermedio</a>
                    <a href="/power-point-avanzado">Power Point Avanzado</a>
                </div>
            </div>
        </div>
    </div>

</div>
<!--   Fin Tarjetas-->
<div class="container-card">

    <div class="card">
        <figure class="imagen_card">
            <img src="@/assets/Imagenes/Cabeceras/tic02.jpg">
        </figure>
        <div class="contenido-card">
            <h3>TIC</h3>
        </div>
        <div class="card-footer">
            <div class="dropdown">
                <button class="dropdown-btn">Cursos disponibles ▼</button>
                <div class="dropdown-content">
                    <a href="/ciudadano-digital1">Ciudadano digital nivel 1</a>
                    <a href="/ciudadano-digital2">Ciudadano digital nivel 2</a>
                    <a href="/alfabetizacion-digital">Alfabetización digital</a>
                    <a href="/herramientas-comunicativas">Herramientas comunicativas</a>
                    <a href="/competencias-comunicativas">Competencias comunicativas para docentes</a>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <figure class="imagen_card">
            <img src="@/assets/Imagenes/Cabeceras/diseno.jpg">
        </figure>
        <div class="contenido-card">
            <h3>Diseño</h3>
        </div>
        <div class="card-footer">
            <div class="dropdown">
                <button class="dropdown-btn">Cursos disponibles ▼</button>
                <div class="dropdown-content">
                    <a href="/metodologia-canvas">Metodología canvas </a>
                    <a href="/imagen-marcas">Imagen y Marcas </a>
                    <a href="/diseno-publicitario">Diseño publicitario </a>
                    <a href="/diseno-UxUis">Diseño UX/UI</a>
                    <a href="/diseno-presentaciones">Principios de diseño para presentaciones</a>
                    <a href="/illustrator">Basic Illustrator</a>
                    <a href="/photoshop">Basic Photoshop</a>
                    <a href="/afterEffects">Basic after effects</a>
                </div>
            </div>
        </div>
    </div>

    <div class="card">
        <figure class="imagen_card">
            <img src="@/assets/Imagenes/Cabeceras/marketing.jpg">
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
                    <a href="/community-manager">Community Manager</a>
                    <a href="/marketing-digital">Marketing digital</a>
                    <a href="/habilidades-sociales">Habilidades sociales</a>
                    <a href="/instagram">Instagram para el desarrollo de marcas</a>
                    <a href="/posicionamientos-marcas">Posicionamientos de marcas</a>
                    <a href="/internet-rs-dg">Internet, redes sociales y dispositivos digitales</a>
                    <a href="/posicionamiento-buscadores">Posicionamiento en buscadores</a>
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
            <img src="@/assets/Imagenes/Cabeceras/programacion-a.png">
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
            <img src="@/assets/Imagenes/Cabeceras/Robota_B.jpg">
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
            <img src="@/assets/Imagenes/Cabeceras/Robotica_A.jpg">
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
