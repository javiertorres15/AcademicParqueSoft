<template>
<section class=" galery container">
    <img src="@/assets/Imagenes/bienestar-institucional/0.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/5.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/7.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/9.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/emprendimiento (1).png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/programacion1.png" alt="#">
</section>
<br>
<h1 class="text-center">Bienestar Institucional</h1>

<div>
    <div class="container">
        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>01</h2>
                    <h3>¡Bienvenidos a Academic!</h3>
                    <p>En Academic, creemos en el poder de la educación para transformar
                        vidas y comunidades. Nuestra plataforma virtual ha sido diseñada con
                        un propósito claro: hacer que la educación sea accesible para todos,
                        sin importar la distancia, la edad o el género. Aquí, todos son
                        bienvenidos y tienen la oportunidad de aprender, crecer y alcanzar sus
                        metas académicas.

                        Nuestro compromiso es brindarte una experiencia de
                        ENTRENAMIENTOS educativos en línea de llena de recursos, cursos
                        y herramientas que te ayudarán a alcanzar tus objetivos de
                        aprendizaje. Ya sea que desees mejorar tus habilidades, adquirir
                        nuevos conocimientos o explorar nuevos horizontes educativos,
                        Academic está aquí para apoyarte en cada paso del camino.

                        En Academic, la diversidad es nuestra fortaleza, y creemos que cada
                        individuo tiene un papel fundamental en la construcción de un mundo
                        más educado y equitativo. Únete a nuestra comunidad global de
                        estudiantes, instructores y amantes del conocimiento, y juntos
                        construyamos un futuro en el que el aprendizaje esté al alcance de
                        todos.</p>
                    <a href="#">Leer mas</a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>02</h2>
                    <h3>Te damos la bienvenida a Academic, tu puerta de entrada al mundo del
                        aprendizaje virtual. ¡Explora, descubre y crece con nosotros!</h3>
                    <p>
                        <p>Orientación y Asesoramiento Académico, Apoyo Técnico, Orientación en el uso de herramientas tecnológicas, Sesiones de tutoría individual y grupal, Seminarios y talleres, Apoyo psicológico, Programas de mentoría, Monitoreo del proceso académico, Encuestas de satisfacción, Apoyo en la búsqueda de empleo, Actualización continua.</p>
                    </p>
                    <a href="#">Leer mas</a>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="box">
                <div class="content">
                    <h2>03</h2>
                    <h3>Política de calidad</h3>
                    <p>Asegurar la calidad educativa implica mantener el contenido preciso, actualizado y relevante, con revisiones periódicas. Además, es fundamental garantizar la accesibilidad para personas con discapacidades y proporcionar un sólido sistema de soporte al estudiante, incluyendo orientación y recursos para el éxito. La plataforma debe funcionar eficientemente y ser segura, minimizando interrupciones técnicas y garantizando la integridad de los datos. La retroalimentación constante de los estudiantes guía mejoras tanto en los cursos como en la experiencia del usuario.

                        El desarrollo de cursos debe cumplir con estándares rigurosos, mientras que la transparencia en precios y políticas de reembolso es esencial para que los estudiantes sepan qué esperar. La actualización continua del contenido en respuesta a las tendencias y avances tecnológicos es clave. La medición del progreso estudiantil ayuda a perfeccionar la calidad educativa, y todo debe llevarse a cabo dentro de un marco ético y legal, cumpliendo con regulaciones y promoviendo una cultura ética en la plataforma.</p>
                    <a href="#">Leer mas</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
p {
    text-align: justify;
}

.galery.container {
    /* Establece un ancho máximo para el elemento y lo centra horizontalmente en el centro del contenedor principal. */
    max-width: 800px;
    /* Puedes ajustar este valor según tus necesidades */
    margin: 0 auto;
    /* Centra horizontalmente el elemento */
}

body .container .card {
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;
    transition: 0.5s;
}

body .container .card:nth-child(1) .box .content a {
    background: #2196f3;
}

body .container .card:nth-child(2) .box .content a {
    background: #e91e63;
}

body .container .card:nth-child(3) .box .content a {
    background: #23c186;
}

body .container .card .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #64A873;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
}

body .container .card .box:hover {
    transform: translateY(-50px);
}

body .container .card .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
}

body .container .card .box .content {
    padding: 20px;
    text-align: center;
}

body .container .card .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
}

body .container .card .box .content h3 {
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
}

body .container .card .box .content p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
}

body .container .card .box .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
}

body .container .card .box .content a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
}
</style>
