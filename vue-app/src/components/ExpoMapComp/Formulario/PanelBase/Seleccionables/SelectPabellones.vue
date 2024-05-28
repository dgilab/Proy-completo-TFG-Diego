<template>
    <!-- <div class="SelectPabellones" id="" :data-id="idProp" :data-vari="variMost" v-on:mouseover="eventHover($event)" v-on:mouseleave="eventHover($event)" @click="invertirValorVar($event), invertFlecha($event)" :class="{ 'radiusPSel': despleg }"> -->
    <div class="SelectPabellones" id="" :data-id="idProp" :data-vari="variMost" @click="aplicarInvertir($event), invertFlecha($event)" :class="{ 'radiusPSel': despleg }">
        <div class="t">
            <div class="nomPabe">
                <p>{{ pabProp }}</p>
            </div>
            <div class="contFle" :id="idFlecha" :class="{ 'rotar': despleg }">
                <IconFlechaIzq2 class="flechaPab"/>
            </div>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import IconFlechaIzq2 from '../Iconos/IconFlechaIzq2.vue'

export default {
	name: 'SelectPabellones',
    props: {
        pabProp: String,
        idProp: String,
        variMost: String,
        idFlecha: String,
        despleg: Boolean,
    },
    methods: {
		...mapActions([
            'eventHover',
            'invertirValorVar',
            'invertFlecha',
        ]),
        aplicarInvertir(e){
            if(!this.despleg){
                this.invertirValorVar(e)
            }
        }
	},
    computed: {
        ...mapGetters([

        ])
    },
    components: {
        IconFlechaIzq2
    },

}
</script>

<style lang="scss" scoped>

.SelectPabellones{
    width: 100%;
    padding: 1vh;
    border-radius: 15px;
    background: var(--build-color-light-grey);
    display:pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.1s;
    cursor: pointer;
    pointer-events: auto;
}
.radiusPSel{
	border-radius: 15px 15px 0px 0px;
}
.SelectPabellones:hover{
    box-shadow: 0px 0px 3px 0px black;
}

.t{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    pointer-events: none;
    // background: red;
}
.nomPabe{
    width: 100%;
    font-size: 1.25vw;
    text-align: left;
    // background: blue;
}

.contFle{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .1s;

}

// .flechaPab{
//     // background: yellow; 
    
// }


</style>