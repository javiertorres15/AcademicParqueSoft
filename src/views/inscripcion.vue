<template>
<section class=" galery container">
    <img src="@/assets/Imagenes/bienestar-institucional/0.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/5.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/7.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/9.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/emprendimiento.png" alt="#">
    <img src="@/assets/Imagenes/bienestar-institucional/programacion1.png" alt="#">
</section>
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Formulario de inscripción</h3> <br />
            <!-- Usamos @submit para escuchar el evento de envío del formulario -->
            <form @submit="enviarFormulario" method="post" action="https://script.google.com/macros/s/AKfycbyWht783PrUix-Zk-vIRZGW5EjRI6LDlvfsFz1RKHft0kJmDyhUnVUTS9MiUEC_z4fiuw/exec">
                <div class="form-group">
                    <label for="full_name_id" class="control-label">Nombres completos</label>
                    <input type="text" class="form-control" id="full_name_id" name="nombre" required>
                    <label for="full_name_id" class="control-label">Apellidos</label>
                    <input type="text" class="form-control" id="full_name_id" name="apellido" required>
                    <label for="full_name_id" class="control-label">Correo electronico</label>
                    <input type="email" class="form-control" id="full_name_id" name="correo" required>
                    <label for="full_name_id" class="control-label">Telefono</label>
                    <input type="tel" class="form-control" id="full_name_id" name="telefono" required pattern="\3[0-9]{9}">
                    <label for="gender_id" class="control-label">Género</label>
                    <select class="form-control" id="gender_id" name="genero">
                        <option value="">Seleciona un genero</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                    <label for="category_id" class="control-label">Categoría</label>
                    <select class="form-control" id="category_id" name="categoria">
                        <option value="">Seleciona una categoria</option>
                        <option value="robotica">Entrenamiento en Robótica</option>
                        <option value="programacion">Entrenamiento en Programación</option>
                        <option value="ofimatica">Entrenamiento en Ofimática</option>
                        <option value="tic">Entrenamiento en TIC</option>
                        <option value="diseno">Entrenamiento en Diseño grafico</option>
                        <option value="marketing">Entrenamiento en Marketing digital</option>
                        <option value="emprendimiento">Emprendimiento</option>
                    </select>
                    <!-- Agrega el segundo select dinámico -->
                    <label for="subcategory_id" class="control-label">Entrenamiento</label>
                    <select class="form-control" id="subcategory_id" name="curso" disabled>
                        <option value="">Selecciona un entrenamiento</option>
                    </select>
                </div>

                <div class="form-group mt-4">
                    <button type="submit" class="btn btn-primary">Enviar</button> 
                </div>
            </form>
            <div class="mt-4"></div>
            <div v-if="enviando" class="alert alert-info">
                Espere un momento...
            </div>
            <!-- Mostrar el mensaje de envío exitoso si envioExitoso es verdadero -->
            <div v-if="envioExitoso" class="alert alert-success">
                ¡Formulario enviado con éxito! La página se recargará en breve.
            </div>
        </div>
    </div>
</div>
</template>

<style>
    input:invalid {
        border: 1px solid red;
    }

    input:invalid::after {
        content: "Este campo es obligatorio";
        color: red;
        font-size: 12px;
    }
</style>


<script>
import $ from 'jquery';

$(document).ready(function () {
    // Define un objeto JSON con las opciones para el segundo select
    var subcategories = {
        programacion: ["Java", "Net", "PHP", "Python", "JavaScript", "Node.js"],
        emprendimiento: ["Creación de marcas", "Creación de tiendas online", "Economía doméstica", "Google Ads", "Facebook e Instagram Ads", "Maduración de proyectos", "Plan de negocios", "Gestión de procesos"],
        tic: ["Ciudadano digital nivel 1", "Ciudadano digital nivel 2", "Alfabetización digital", "Herramientas comunicativas", "Competencias comunicativas para docentes"],
        diseno: ["Metodología canvas", "Diseño publicitario", "Diseño UX/UI", "Principios de diseño para presentaciones", "Basic Illustrator", "Basic Photoshop", "Basic after effects"],
        marketing: ["Community Manager", "Habilidades sociales", "Instagram para el desarrollo de marcas", "Internet, redes sociales y dispositivos digitales", "Marketing digital", "Posicionamiento en buscadores", "Posicionamientos de marcas"],
        ofimatica: ["Word Básico", "Word Intermedio", "Word Avanzando", "Excel Básico", "Excel Intermedio", "Excel Avanzando", "Power Point Básico", "Power Point Intermedio", "Power Point Avanzando"],
        robotica: ["Vacacional", "Entrenamiento intensivo"]
    };

    // Cuando cambia la selección en el primer select
    $("#category_id").on("change", function () {
        var selectedCategory = $(this).val();
        var $subcategorySelect = $("#subcategory_id");

        // Habilita el segundo select
        $subcategorySelect.prop("disabled", false);

        // Limpia las opciones anteriores
        $subcategorySelect.empty();

        // Llena el segundo select con las opciones correspondientes
        $.each(subcategories[selectedCategory], function (index, value) {
            $subcategorySelect.append($("<option>").text(value).val(value));
        });
    });
});

export default {
    data() {
        return {
            enviando: false, // Inicialmente, no se está enviando el formulario
            envioExitoso: false, // Inicialmente, el envío no es exitoso
        };
    },
    methods: {
        enviarFormulario(e) {
            e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
            this.enviando = true; // Establecer enviando en true

            // Agregar aquí el código para enviar el formulario (por ejemplo, usando fetch)
            // Una vez que se haya enviado con éxito el formulario, establece envioExitoso en true
            // y luego recarga la página después de un breve retraso
            fetch('https://script.google.com/macros/s/AKfycbyWht783PrUix-Zk-vIRZGW5EjRI6LDlvfsFz1RKHft0kJmDyhUnVUTS9MiUEC_z4fiuw/exec', {
                    method: 'POST',
                    body: new FormData(e.target),
                })
                .then(() => {
                    this.envioExitoso = true; // Establecer envioExitoso en verdadero
                    setTimeout(() => {
                        window.location.href = '/'; // Redirigir a una página en específico
                    }, 2000); // 2000 milisegundos = 2 segundos
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
