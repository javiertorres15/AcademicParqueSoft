<template>
<div id="app">

    <router-view />

</div>

<!-- INICIO NAVBAR -->
<header class="arriba">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-white bg-white static-top">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="@/assets/imagenes/academiclogo2p.png" alt="..." height="36">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/" @click="scrollToTop">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/institucion" @click="scrollToTop">Bienestar intitucional</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/ayuda" @click="scrollToTop">Ayuda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/pqrs" @click="scrollToTop">PQRS</router-link>
                    </li>
                    <li class="nav-item custom-dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown1" role="button" data-bs-toggle="collapse" data-bs-target="#certificadosMenu" aria-expanded="false">
                            Certificados
                        </a>
                        <div class="collapse" id="certificadosMenu">
                            <router-link class="nav-link active" to="/" @click="scrollToTop">Descarga tu certificado de Startup week </router-link>
                        </div>
                    </li>
                    <li class="nav-item custom-dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown2" role="button" data-bs-toggle="collapse" data-bs-target="#entidadMenu" aria-expanded="false">
                            Entidad
                        </a>
                        <div class="collapse" id="entidadMenu">
                            <router-link class="nav-link active" to="/mision" @click="scrollToTop">Misión y Visión</router-link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="/holAA" class="btn btn-outline-info" style="text-decoration: none; color: whitesmoke;">Aula virtual</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

<div class="text-center">
    <a class="whatsapp-float" href="https://api.whatsapp.com/send?phone=+573235223064>&text=Bienvenidos Academic, para cualquier duda que presente escriba a continuación: " target="_blank">
        <img src="@/assets/Imagenes/descarga.png" alt="WhatsApp"> <i class="fa fa-whatsapp"></i>

    </a>
</div>

<div class="footer">
    <!--::::Pie de Pagina::::::-->
    <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>

            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>

            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="#" class="fab fa-facebook"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-tiktok"></a>

                </div>
            </div>
        </div>
        <div class="grupo-2" style="background-color: white;">
            <img src="@/assets/imagenes/footer.png" alt="" style="width: 30%; height: auto;">
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b></b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    <!--::::Fin Pie de Pagina::::::-->
</div>
</template>

<style>
.whatsapp-float {
    position: fixed;
    width: 60px;
    /* Ancho de la imagen para dispositivos móviles */
    height: 60px;
    /* Alto de la imagen para dispositivos móviles */
    bottom: 40px;
    right: 40px;
    background-color: white;
    border-radius: 50px;
    text-align: center;
    font-size: 0;
    /* Elimina el espacio en blanco entre las imágenes */
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
}

.whatsapp-float img {
    display: block;
    width: 100%;
    height: auto;
}

.whatsapp-float:hover {

    transform: scale(1.1);
}

/* navbar */
.arriba {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #ff0000;
    /* Color de fondo de la barra de navegación */
    z-index: 1000;
    /* Asegura que la barra esté por encima de otros elementos */
}

.custom-dropdown {
    position: relative;
    /* Importante para el posicionamiento relativo */
}

.custom-dropdown .dropdown-menu {
    position: absolute;
    top: 100%;
    /* Coloca el menú debajo del elemento padre */
    left: 50%;
    /* Centra horizontalmente */
    transform: translateX(-50%);
    /* Centra horizontalmente */
    min-width: auto;
    /* Opcional: ajusta el ancho según sea necesario */
}

/* Reducir el tamaño de fuente del texto dentro del menú */
.custom-dropdown .dropdown-menu li a {
    font-size: 80%;
    /* Ajusta el tamaño de fuente según sea necesario */
}

@media (max-width: 768px) {
    .custom-dropdown .dropdown-menu {
        position: relative;
        width: 100%;
        /* Ajusta el ancho del menú desplegable al 100% del contenedor */
        left: 0;
        right: 0;
        text-align: center;
        /* Centra el texto en el menú desplegable */
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
</script>
