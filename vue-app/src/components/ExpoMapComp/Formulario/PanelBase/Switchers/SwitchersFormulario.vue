<template>
	<div class="switch-boton">
		<input @click="mostrarInteres($event)" type="checkbox" name="switch-boton" :id="idProp" class="switch-boton__checkbox">
		<label :for="idProp" class="switch-boton__label"></label>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'SwitcherComponente',
    props: {
        idProp: String,
    },
        methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>


// Basado en https://programadorwebvalencia.com/sencillo-boton-on-off-html-y-css/

.switch-boton {
    display: inline-block;

}
.switch-boton .switch-boton__checkbox {
    display: none;
    
}
.switch-boton .switch-boton__label {
    background-color: var(--build-color-azul-verdoso);
    width: 4rem;
    height: 1.5rem;
    border-radius: 3rem;
    display: inline-block;
    position: relative;
    cursor: pointer;
}
.switch-boton .switch-boton__label:before {
    transition: .2s;
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-color: var(--build-color-azul-claro);
    content: '';
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 1px var(--build-color-azul-morado);
}
.switch-boton .switch-boton__checkbox:checked + .switch-boton__label {
    background-color: var(--build-color-morado-floral);
}
.switch-boton .switch-boton__checkbox:checked + .switch-boton__label:before {
    transform: translateX(2.5rem);
}

</style>