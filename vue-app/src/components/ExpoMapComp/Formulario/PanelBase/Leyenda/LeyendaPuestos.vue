<template>
	<div class="LeyendaPuestos">
        <div class="leTit">
            <p>Leyenda</p>
        </div>
        <div class="cueLeye">
            <div class="leye leStand" v-if="leMost.includes(1)">
                <div class="colorLeStand"></div>
                <div class="textLe">
                    <p> - Stands</p>
                </div>
            </div>
            <div class="leye leCafe" v-if="leMost.includes(2)">
                <div class="colorLeCafe"></div>
                <div class="textLe">
                    <p> - Cafetería</p>
                </div>
            </div>
            <div class="leye leEsce" v-if="leMost.includes(3)">
                <div class="colorLeEsce"></div>
                <div class="textLe">
                    <p> - Escenarios</p>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'LeyendaPuestos',
    props: {
        leMost: Array,
    },
    methods: {
		...mapActions([
        ]),
	},
    computed: {
        ...mapGetters([
        ])
    },
    components: {
    },

}
</script>

<style lang="scss" scoped>

.LeyendaPuestos{
    border-radius: 15px;
    background: var(--build-color-light-grey);
    // padding-block: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.leTit{
    width: 100%;
    font-size: 1.25vw;
    padding-block: 2%;
}

.cueLeye{
    width: 100%;
    border-radius: 0px 0px 15px 15px;
    background: var(--bs-gray-400);
    padding-block: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.leye{
    display: flex;
    flex-direction: row; 
    justify-content: left;
    align-items: center;
    // background: red;
    width: 40%;
}
.colorLeStand{
    background: var(--build-color-stands);
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.colorLeCafe{
    background: var(--build-color-cafeteias);
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.colorLeEsce{
    background: var(--build-color-escenarios);
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
</style>