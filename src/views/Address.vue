<template>
    <div class="wrap">
        <p class="title">我们结婚啦！</p>
        <p class='name'>新郎：马新想 & 新娘：王佳佳</p>
        <p class="invite ts">诚邀你们参加我们的婚礼</p>
        <p class="ts address">地址：保定市定兴县沽酒村新郎马新想家</p>
        <p class="ts time" ref="time">时间：2019.10.07(阴历：2019.09.09)</p>
        <div class="tc" v-if="showImg">
            <div class="off" @click="off"></div>
           <div class="over"></div>
        </div>
        <audio src="http://cdnringhlt.shoujiduoduo.com/ringres/all/a24/668/9538668.aac" loop="loop" autoplay="autoplay"></audio>
    </div>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
    data(){
        return {
         showImg:false,
        }
    },
    created(){
      
    },
    mounted(){
        this.$refs.time.addEventListener('animationend', ()=>{
           this.timer =  setTimeout(()=>{
               this.showImg = true;
              clearTimeout(this.timer)
          },2000)
       });
    },
    methods:{
       off(){
           this.showImg = false;
       }
    },
 
}
</script>

<style lang="less" scoped>
@import "../theme/base.less";
@import "../theme/animate.less";
.wrap{
    width: 100%;
    height: 100%;
    background: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2879179697,378328197&fm=26&gp=0.jpg") no-repeat center center;
    background-size: 100% 100%;
    padding-top:40px;
    p{
        width: 100%;
        text-align: center;
    }
    .title{
       width: 100%;
       text-align: center;
       color: #fff;
       animation:zoomBigIn 0.8s 0.1s ease-in forwards;
       opacity: 1;
    }
    .name{
        width: 100%;
        text-align: center;
        color:rgba(246, 250, 3, 0.945);
        font-size: 20px;
        margin-top: 60px;
        animation:zoomBigIn 2.0s 0.1s ease-in forwards;
        opacity: 1;
    }
    .ts{
        color: #fff;
        font-size: 16px;
        line-height: 25px;
    }
    .invite{
        margin-top:310px;
        animation:zoomBigIn 3.0s 0.1s ease-in forwards;
        opacity: 1;
    }
    .address{
        animation:zoomBigIn 4.0s 0.1s ease-in forwards;
        opacity: 1;
    }
    .time{
        animation:zoomBigIn 5.0s 0.1s ease-in forwards;
        opacity: 1;
    }
    .tc{
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height:100%;
        background: rgba(7, 7, 2, 0.9);
        .off{
            width: 30px;
            height: 30px;
            // text-align: center;
            // line-height: 40px;
            // border: 2px solid #fff;
            // color: #fff;
            // border-radius: 50%;
            background: url("../assets/images/off.png") no-repeat center center;
            background-size: 100% 100%;
            margin-top:150px;
            margin-left: 180px;
        }
        .over{
            width: 100%;
            height: 350px;
            background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567934125141&di=b25cf957ed27daa857b81787482c6fce&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F0dd7912397dda144c46ca11fb9b7d0a20cf48632.jpg") no-repeat center center;
            background-size:100% 100%;
            margin-top: 50px;
        }
    }
}
</style>