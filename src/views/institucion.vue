<template>
<div class="cuadro">
    <div class="header">
        <img src="@/assets/imagenes/nosotros.jpeg" alt="Academic" class="imagen-academica" @mouseover="zoomIn" @mouseleave="zoomOut" />
    </div>
    <div class="content">
        <p class="contenido">Nos complace darles la más cordial bienvenida a nuestra plataforma
            virtual, un espacio dedicado a la democratización del conocimiento y el
            acceso a la educación en áreas clave para el siglo XXI: programación,
            emprendimiento, marketing, TIC, ofimática, diseño, programacion avanzada, robótica
            basica y vacacional de robatica.

            Sabemos que el conocimiento es la llave que puede abrir puertas a
            nuevas oportunidades. Nuestra plataforma está diseñada para
            brindarles las herramientas y recursos necesarios para construir un
            camino hacia el empleo y el éxito en este mundo tan dinámico y
            tecnológico. Queremos ser su compañero en este emocionante viaje
            de aprendizaje y desarrollo personal y profesional.

            En Academic, creemos en la igualdad de oportunidades y en el poder
            transformador de la educación. Trabajamos incansablemente para
            asegurarnos de que cada uno de ustedes tenga acceso a entrenamientos de
            calidad que les ayudarán a desarrollar las habilidades esenciales para
            el siglo XXI.</p>
    </div>
    <div class="linea-color" @click="changeColor"></div>
    <div class="feature-list">
        <h2 class="subtitulo">Misión</h2>
        <p class="contenido">
            Nuestra misión es empoderar a ciudadanos que busquen una
            oportunidad para fortalecer o aprender sus conocimientos en los
            entrenamientos que ofrecemos, sin importar su ubicación o recursos
            económicos, brindándoles formación asequible en áreas esenciales
            como programación, Diseño, Marketing, TIC, Ofimática,
            emprendimiento, programación avanzada, robótica básica y como
            complemento un vacacional de robótica. Nos comprometemos a
            proporcionar oportunidades de aprendizaje que abran las puertas al
            empleo y al éxito en un mundo digital en constante evolución.
            Inspiramos el cambio, capacitamos a través del conocimiento y
            construimos puentes hacia un futuro brillante en la era digital,
            promoviendo la igualdad de oportunidades y el progreso personal en
            cada paso del camino.
        </p>
    </div>
    <div class="linea-color"></div>
    <div class="quality-policy">
        <h2 class="subtitulo">Visión</h2>
        <div class="quality-item" @click="expandQualityItem">
            <p class="contenido">
                Nuestra visión es ser el catalizador que transforme vidas a través de la
                educación en línea. Visualizamos un futuro en el que cualquier persona,
                en cualquier lugar, pueda acceder a entrenamientos de alta calidad que
                les permitan desarrollar habilidades esenciales para el siglo XXI y
                adaptarse a las nuevas tendencias y necesidades del mercado.
                Queremos ser reconocidos como líderes en la entrega de conocimiento
                en línea, y ser la plataforma preferida por aquellos que buscan
                aprender, emprender y prosperar. Al hacerlo, contribuiremos a reducir
                la brecha de habilidades, fomentar el espíritu emprendedor y mejorar
                la empleabilidad a nivel nacional.

            </p>
        </div>
        <!-- Agregar más elementos de calidad aquí -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            qualityItemExpanded: false,
        };
    },
    methods: {
        zoomIn() {
            this.$refs.image.style.transform = 'scale(1.1)';
        },
        zoomOut() {
            this.$refs.image.style.transform = 'scale(1)';
        },
        changeColor() {
            this.$refs.colorLine.style.backgroundColor = '#3498db';
        },
        expandQualityItem() {
            this.qualityItemExpanded = !this.qualityItemExpanded;
        },
    },
};
</script>

<style>
body {
    font-family: Arial, sans-serif;
}

.cuadro {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #3fdf0e;
    border-radius: 5px;
}

/* Header styles */
.header {
    text-align: center;
    margin-bottom: 20px;
}

.subtitulo {
    color: #ff9b04;
    text-align: center;
}

.imagen-academica {
    max-width: 100%;
    width: 100%;
    height: 200px;
    transition: transform 0.3s;
    height: auto;
    /* Transición de transformación en 0.3 segundos */
}

/* Efecto de hover para la imagen */
.imagen-academica:hover {
    transform: scale(1.1);
    /* Aumenta el tamaño en un 10% al pasar el mouse */
}

/* Content styles */
.content {
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 20px;
}

.contenido {
    text-align: justify;
    font-size: 20px;
}

/* Line styles */
.linea-color {
    border-top: 2px solid #63e70b;
    margin: 20px 0;
    cursor: pointer;
}

/* Feature list styles */
.feature-list ul {
    list-style: disc;
    margin-left: 20px;
}

/* Quality policy styles */
.quality-policy .quality-item {
    margin-bottom: 20px;
    cursor: pointer;
}
</style>
