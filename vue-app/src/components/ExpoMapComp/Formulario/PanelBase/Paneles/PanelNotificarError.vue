<template>
	<div class="Panel_not_error">
        <div class="Cont_compo">
            <div class="Pnoti">
                <!-- <div class="TituloPanelInteres">
                    <h1>Incidencia</h1>
                </div> -->
                <button>Notificar Error</button>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'


export default {
	name: 'PanelNotificarError',
    data () {
        return {
        }
    },
    components: {
	},
    computed: {
		...mapGetters([
		]),
	},
    methods: {
		...mapActions([])
	}

}
</script>

<style lang="scss" scoped>
.Panel_not_error{
    padding-block-end: 5%;
    width: 100%;
}
.Cont_compo{
    border-radius: 15px;
    background: var(--build-color-white);
    display: block;
    padding: 3%;
}

.Pnoti{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.TituloPanelInteres{
    h1{
        text-align: center;
        font-size: 2vw;
        font-weight: bold;
    }
}

</style>