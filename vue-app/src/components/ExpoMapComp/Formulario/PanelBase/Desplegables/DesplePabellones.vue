<template>
	<div class="DesplePabellones">
        <div class="VerEnMapaDes" :data-idRela="idRelacMap" @click="zoomIn(idRelacMap)" :class="{ 'disabled': HayZoomActivo }">
            <p><i class="fa-solid fa-magnifying-glass-plus"></i>  Ampliar</p>
        </div>
        <div class="VerEnMapaDes" :data-idRela="idRelacMap" :data-vari="variMost" @click="zoomOut(idRelacMap), aplicarInvertir($event)" :class="{ 'disabled': !HayZoomActivo }">
            <p><i class="fa-solid fa-magnifying-glass-minus"></i>  Alejar</p>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'DesplePabellones',
    props: {
        idProp: String,
        idRelacMap: String,
        despleg: Boolean,
        variMost: String,
    },
    methods: {
		...mapActions([
            'zoomIn',
            'zoomOut',
            'invertirValorVar',
        ]),
        aplicarInvertir(e){
            if(this.despleg){
                this.invertirValorVar(e)
            }
        }
	},
    computed: {
        ...mapGetters([
            'HayZoomActivo',
        ])
    },
    components: {
    },

}
</script>

<style lang="scss" scoped>

.DesplePabellones{
    border-radius: 0px 0px 15px 15px;
    background: var(--bs-gray-400);
    padding-block: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}
.VerEnMapaDes{
    padding-block: 2%;
    border-radius: 15px;
    cursor: pointer;
    background: var(--bs-gray-200);
    width: 45%;
    transition: all .2s;
}

.disabled{
    opacity: 0.5;
    pointer-events: none;
}

.VerEnMapaDes:hover{
    box-shadow: 0px 0px 3px 0px black;
}


</style>