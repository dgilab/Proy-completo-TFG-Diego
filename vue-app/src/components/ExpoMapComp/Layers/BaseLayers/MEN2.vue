<template>
    <g id="MEN2">
        <BaseMapa/>
        <BaseMapaInterior/>
        <DGLayer/>
        <N2Pabellones/>
    </g>
</template>

<script>

// Base
import BaseMapa from './Base/BaseMapa.vue'
import BaseMapaInterior from './Base/BaseMapaInterior.vue'

// Detalles
import DGLayer from './Detalles/DGLayer.vue'

// Pabellones
import N2Pabellones from './Pabellones/N2Pabellones.vue'


export default {
	name: "MEN2",
	components: {

        // Base        
		BaseMapa,
        BaseMapaInterior,

        // Detalles
        DGLayer,

        // Pabellones
        N2Pabellones,
	}
}
</script>

<style>

</style>