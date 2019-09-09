<template>
    <div class="wrap">
        <img src="../assets/images/shipin.png" alt="">
        <div class="pass" @click="pass"></div>
        <audio src="https://assets.rrxh5.cc/plugin/2656aa70a9a74f781deb952ef3f33ecd/10/assets/defaultRing.mp3" loop="loop" autoplay="autoplay"></audio>
    </div>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
    data(){
        return {
        }
    },
    created(){
      
    },
    mounted(){

    },
    methods:{
       pass(){
           this.$router.push("/address")
       }
    },
 
}
</script>

<style lang="less" scoped>
@import "../theme/base.less";
@import "../theme/animate.less";
.wrap{
    position: relative;
    width:100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
    .pass{
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 100px;
        height: 100px;
        // background: red;
    }
}
</style>