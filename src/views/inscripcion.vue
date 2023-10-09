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
                    <label for="full_name_id" class="control-label">Nombre completo</label>
                    <input type="text" class="form-control" id="full_name_id" name="nombre" required>
                    <label for="full_name_id" class="control-label">Apellidos</label>
                    <input type="text" class="form-control" id="full_name_id" name="apellido" required>
                    <label for="full_name_id" class="control-label">Correo electronico</label>
                    <input type="email" class="form-control" id="full_name_id" name="correo" required>
                    <label for="full_name_id" class="control-label">Telefono</label>
                    <input type="number" class="form-control" id="full_name_id" name="telefono" required>
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
                        <option value="programacion">Programación</option>
                        <option value="emprendimiento">Emprendimiento</option>
                        <option value="ofimatica">Ofimática</option>
                        <option value="tic">TIC</option>
                        <option value="diseno">Diseño</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>

                <div class="form-group mt-4">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </form>
            <div class="mt-4"></div>
            <!-- Mostrar el mensaje de envío exitoso si envioExitoso es verdadero -->
            <div v-if="envioExitoso" class="alert alert-success">
                ¡Formulario enviado con éxito! La página se recargará en breve.
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            envioExitoso: false, // Inicialmente, el envío no es exitoso
        };
    },
    methods: {
        enviarFormulario(e) {
            e.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

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
                        window.location.reload(); // Recargar la página después de un breve retraso
                    }, 2000); // 2000 milisegundos = 2 segundos
                })
                .catch((error) => {
                    console.error('Error!', error.message);
                });
        },
    },
};
</script>
