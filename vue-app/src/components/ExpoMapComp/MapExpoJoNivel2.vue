<template>
	<div class="MEJN2">
		<GlobalLayer/>
		<GlobalForm class="formularioMapa"/>
	</div>
</template>

<script>

import GlobalLayer from './Layers/GlobalLayer.vue'
import GlobalForm from './Formulario/GlobalForm.vue'

export default {
	name: "MapaExpojoveNivel2",
	components: {
		GlobalLayer,
		GlobalForm
	}
}
</script>

<style lang="scss" scoped>
.MEJN2{
	display: flex;
	flex-direction: row;
	align-items: space-between;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}

.formularioMapa{
	z-index: 999 !important;
}
</style>