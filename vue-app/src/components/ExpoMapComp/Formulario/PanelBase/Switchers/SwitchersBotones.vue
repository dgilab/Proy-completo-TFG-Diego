<template>
	<div class="SwitchersBotones">
        <p class="titSitios">{{ textProp }}</p>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
	name: 'SwitchersBotones',
    props: {
        textProp: String,
    },
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.SwitchersBotones{
    max-width: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    // border: 0.5px solid red;
}

.titSitios{
    margin: 0;
    font-size: 1.15vw;
    padding-inline-start: 2vh;
}

</style>