<template>
    <div class="contenedor_paneles">
        <PanelCuerpoPabellones/>
        <PanelCuerpoInteres/>
        <!-- <PanelNotificarError/> -->

    </div>
</template>

<script>

import { mapActions } from 'vuex'

import PanelCuerpoPabellones from './Paneles/PanelCuerpoPabellones'
import PanelCuerpoInteres from './Paneles/PanelCuerpoInteres'
// import PanelNotificarError from './Paneles/PanelNotificarError'

export default {
	name: 'ContenedorPaneles',
    components: {
        PanelCuerpoPabellones,
        PanelCuerpoInteres,
        // PanelNotificarError,
	},
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.contenedor_paneles{
    display: block;
    align-items: center;
    justify-content: flex-top;
    height: 95%;
    background: var(--build-color-light-grey);
    border-radius: 15px;
    text-align: center;
    overflow: auto;
    scrollbar-width: thin;
    padding: 5%;
    transition: all 0.5s;
    box-shadow: 0px 0px 3px 0px black

}
</style>