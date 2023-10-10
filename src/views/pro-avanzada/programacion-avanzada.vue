<template>
<div class="card">
    <img src="@/assets/Imagenes/Cabeceras/diseno.jpg" alt="diseno">
    <h3>Título de la Tarjeta 1</h3>
    <select>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
    </select>
</div>

<div class="card">
    <img src="@/assets/Imagenes/Cabeceras/diseno.jpg" alt="diseno">
    <h3>Título de la Tarjeta 2</h3>
    <select>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
    </select>
</div>

<div class="card">
    <img src="@/assets/Imagenes/Cabeceras/diseno.jpg" alt="diseno">
    <h3>Título de la Tarjeta 3</h3>
    <select>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
    </select>
</div>
</template>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.card {
    width: calc(33.33% - 20px);
    /* Para que haya espacio entre las tarjetas */
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
}

img {
    max-width: 100%;
}

select {
    width: 100%;
}

@media (max-width: 768px) {
    .card {
        width: calc(50% - 20px);
    }
}
</style>
