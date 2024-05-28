<template>
	<g id="Nivel2Pabellones" class="cls_19">
		<Pabellon1Layer/>
		<Pabellon2Layer/>
		<Pabellon3Layer/>
		<Pabellon4Layer/>
	</g>
</template>

<script>

import Pabellon1Layer from './N2Pabellon1/Pabellon1Layer'
import Pabellon2Layer from './N2Pabellon2/Pabellon2Layer'
import Pabellon3Layer from './N2Pabellon3/Pabellon3Layer'
import Pabellon4Layer from './N2Pabellon4/Pabellon4Layer'



export default {
	name: 'N2Pabellones',
	components: {
		Pabellon1Layer,
		Pabellon2Layer,
		Pabellon3Layer,
		Pabellon4Layer,

	}
}
</script>

<style>

</style>