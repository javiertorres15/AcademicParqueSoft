<template>
<div class="container mt-4">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3>PQRS</h3> <br />
            <!-- Usamos @submit para escuchar el evento de envío del formulario -->
            <form @submit="enviarFormulario" method="post" action="https://script.google.com/macros/s/AKfycbxtMHtciQrnNpbp7bADVi7CsgxcETJV7Q-hMDx8Ka3lDfcLS8qVYgovOCZ5Yq6SzycP/exec">
                <div class="form-group">
                    <label for="full_name_id" class="control-label">Nombre completo</label>
                    <input type="text" class="form-control" id="full_name_id" name="nombre" required>
                    <label for="full_name_id" class="control-label">Apellidos</label>
                    <input type="text" class="form-control" id="full_name_id" name="apellido" required>
                    <label for="full_name_id" class="control-label">Correo electronico</label>
                    <input type="email" class="form-control" id="full_name_id" name="correo" required>
                    <label for="gender_id" class="control-label">Tipo</label>
                    <select class="form-control" id="gender_id" name="tipo">
                        <option value="">Seleciona un tipo</option>
                        <option value="peticion">Petición</option>
                        <option value="queja">Queja</option>
                        <option value="reclamo">Reclamo</option>
                        <option value="sugerencia">Sugerencia</option>
                    </select>
                    <label for="full_name_id" class="control-label">Asunto</label>
                    <input type="text" class="form-control" id="full_name_id" name="asunto" required placeholder="Escriba aquí">
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
            fetch('https://script.google.com/macros/s/AKfycbxtMHtciQrnNpbp7bADVi7CsgxcETJV7Q-hMDx8Ka3lDfcLS8qVYgovOCZ5Yq6SzycP/exec', {
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
                });
        },
    },
};
</script>
