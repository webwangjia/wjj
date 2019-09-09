<template>
    <div class="wrap">
        <p class="firstOne">亲爱的朋友</p>
        <p class="twoShow" ref="shipin">请接听视频</p>
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
          this.$refs.shipin.addEventListener('animationend', ()=>{
           this.timer =  setTimeout(()=>{
               this.$router.push("/shipinTwo")
              clearTimeout(this.timer)
          },1500)
      });
    },
    methods:{
       
    },
 
}
</script>

<style lang="less" scoped>
@import "../theme/base.less";
@import "../theme/animate.less";
     .wrap{
         width: 100%;
         height: 100%;
         background: url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2053640623,679411487&fm=26&gp=0.jpg") no-repeat center center;
         background-size: 100% 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         p{
             color:rgb(253, 228, 6);
             line-height: 40px;
         }
         .firstOne{
           animation:zoomBigIn 0.3s 0.1s ease-in forwards;
           opacity: 1;
       }
        .twoShow{
            color:rgba(246, 250, 3, 0.945);
            animation:zoomBigIn 0.8s 0.5s ease-in forwards;
            opacity: 1;
       }
     }
</style>