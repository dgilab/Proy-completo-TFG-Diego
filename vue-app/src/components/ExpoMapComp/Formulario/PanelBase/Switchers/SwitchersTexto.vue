<template>
	<div class="SwitchersTexto">
        <p class="titSitios">{{ textProp }}</p>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'SwitchersTexto',
    props: {
        textProp: String,
    },
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.SwitchersTexto{
    max-width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: top;
    // border: 0.5px solid red;
}

.titSitios{
    margin: 0;
    font-size: 1.10vw;
    padding-inline-start: 2vh;
}

</style>