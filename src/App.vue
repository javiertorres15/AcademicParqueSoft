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
                <img src="@/assets/imagenes/academiclogo2p.png" alt="..." width="150">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <button class="custom-button">
                            <router-link class="nav-link" :class="{ 'active-link': $route.path === '/institucion' }" to="/institucion" @click="scrollToTop">Nosotros</router-link>
                            <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="custom-button">
                            <router-link class="nav-link" :class="{ 'active-link': $route.path === '/inscripcion' }" to="/inscripcion" @click="scrollToTop">Inscribete</router-link>
                            <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="custom-button">
                            <router-link class="nav-link" :class="{ 'active-link': $route.path === '/pqrs' }" to="/pqrs" @click="scrollToTop">PQRS</router-link>
                            <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="custom-button">
                            <router-link class="nav-link" :class="{ 'active-link': $route.path === '/ayuda' }" to="/ayuda" @click="scrollToTop">Ayuda</router-link>
                            <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            </svg>
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="custom-button-2" >
                            <a class="link-sin-estilo" href="">Aula virtual</a>
                        </button>
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
        <div class="grupo-2" style="background-color: white;">
            <img src="@/assets/imagenes/footer.png" alt="" style="width: 30%; height: auto;">
        </div>
        <div class="grupo-1">
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p style="text-align: justify;">¡Aprende, crece y prospera con nosotros! En academic, estamos comprometidosen brindarte la mejor experiencia de aprendizaje en linea. 
                    Descubre una amplia gama de cursos de calidad impartidos por expertos en sus campos. Tu exito es nuestra proridad. ¡Comienza tu viaje 
                    de aprendizaje hoy mismo y construye un futuro brillante!</p>

            </div>
            <div class="box">
                <h2>Contáctenos</h2>
                <p><strong>Correo:</strong> academic.asistente@parquesoft.com</p>
                <p><strong>Horario:</strong> Lunea a Viernes</p>
                <p>8:00 am - 12:00 pm</p>
                <p>2:00 pm - 6:00 pm</p>
                <p><strong>Telefono:</strong> +57 3235223064</p>
                <p><strong>Dirección:</strong> Cra 20#27-80 piso 3 </p>

            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="https://www.facebook.com/people/ParqueSoft-Sucre" class="fab fa-facebook" target="_blank"></a>
                    <a href="https://www.instagram.com/parquesoftsucre" class="fab fa-instagram" target="_blank"></a>
                    <a href="#" class="fab fa-tiktok"></a>

                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; 2023 <b></b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
    <!--::::Fin Pie de Pagina::::::-->
</div>
</template>

<style>
.link-sin-estilo {
    text-decoration: none; /* Elimina el subrayado del enlace */
    color: inherit; /* Utiliza el color de texto heredado del elemento padre (por defecto) */
    cursor: default; /* Cambia el cursor al predeterminado, que es generalmente una flecha */
}

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

/* Estilos específicos para el botón personalizado */
.custom-button {
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    --primary-color: #111;
    --hovered-color: #04954A;
    position: relative;
    display: flex;
    font-weight: 600;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;
}

.custom-button p {
    margin: 0;
    position: relative;
    font-size: 20px;
    color: var(--primary-color);
}

.custom-button::after {
    position: absolute;
    content: "";
    width: 0;
    left: 0;
    bottom: -7px;
    background: var(--hovered-color);
    height: 2px;
    transition: 0.3s ease-out;
}

.custom-button p::before {
    position: absolute;
    content: "Subscribe";
    width: 0%;
    inset: 0;
    color: var(--hovered-color);
    overflow: hidden;
    transition: 0.3s ease-out;
}

.custom-button:hover::after {
    width: 100%;
}

.custom-button:hover p::before {
    width: 100%;
}

.custom-button:hover svg {
    transform: translateX(4px);
    color: var(--hovered-color);
}

.custom-button svg {
    color: var(--primary-color);
    transition: 0.2s;
    position: relative;
    width: 15px;
    transition-delay: 0.2s;
}
/* Estilos específicos para el segundo botón personalizado */
.custom-button-2 {
  position: relative;
  padding: 10px 20px;
  border-radius: 7px;
  border: 1px solid #04954A;
  font-size: 16px; /* Cambié el tamaño de fuente a 16px para el segundo botón */
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  background: transparent;
  color: black;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.custom-button-2:hover {
  background: #04954A;
  box-shadow: 0 0 30px 5px #04954A;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.custom-button-2:hover::before {
  -webkit-animation: sh02 0.5s 0s linear;
  -moz-animation: sh02 0.5s 0s linear;
  animation: sh02 0.5s 0s linear;
}

.custom-button-2::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  -webkit-transform: skewX(-20deg);
  -moz-transform: skewX(-20deg);
  -ms-transform: skewX(-20deg);
  -o-transform: skewX(-20deg);
  transform: skewX(-20deg);
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
    left: 100%;
  }
}

.custom-button-2:active {
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: box-shadow 0.2s ease-in;
  -moz-transition: box-shadow 0.2s ease-in;
  transition: box-shadow 0.2s ease-in;
}


</style>

<script>
export default {
    mounted() {
        // Agregar un event listener para los clics en el documento
        document.addEventListener("click", this.handleClickOutside);
    },
    destroyed() {
        // Eliminar el event listener cuando el componente se destruye
        document.removeEventListener("click", this.handleClickOutside);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0); // Desplazar la página hacia la parte superior
        },
        handleClickOutside(event) {
            // Verificar si el objetivo del clic no está dentro del área del navbar
            const navbar = document.querySelector(".navbar");
            if (navbar && !navbar.contains(event.target)) {
                // Cerrar el menú si está abierto (puedes usar un método para hacer esto)
                this.closeMenu();
            }
        },
        closeMenu() {
            // Aquí debes implementar la lógica para cerrar el menú
            // Puedes cambiar las clases, establecer variables de estado, etc.
            // Por ejemplo, si usas Bootstrap, puedes cerrar el menú de esta manera:
            const navbarToggle = document.querySelector(".navbar-toggler");
            const navbarCollapse = document.querySelector(".navbar-collapse");

            if (navbarToggle && navbarCollapse) {
                navbarToggle.classList.add("collapsed");
                navbarCollapse.classList.remove("show");
            }
        },
    },
};
</script>
