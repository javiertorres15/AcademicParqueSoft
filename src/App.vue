<template>
<div id="app">

    <router-view />

</div>

<!-- INICIO NAVBAR -->
<header class="arriba">
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand scroll-logo" href="/"><img src="@/assets/imagenes/academiclogo2p.png" alt="image"></a>

            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span><i><img class="casa" src="@/assets/imagenes/Casa.png" alt=""></i></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Bievenidos a Academic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/programacion">Descarga tu certificado de Startup week</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/pqrs">Buzón de PSQR</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/bienestar">Bienestar intitucional</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/ayuda">Ayuda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Entidad
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/mision">Misión y visión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
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
</style>
