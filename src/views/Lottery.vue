<template>
    <div class="homeWrap">
        <div class="text-wrap">开心刮刮乐<span style="font-size:18px;">(中大奖)</span></div>
        <div class="lottery-wrap">
            <vue-scratch-card 
                element-id='scratchWrap'
                :start-callback="startCallback"
                :clear-callback="clearCallback"
                :ratio=0.5
                :move-radius=50
            />
        </div>
        <div class="tip" v-if="show"><span style="font-size:16px;">温馨提示</span>：奖品为(可查看新郎新娘的婚纱照)</div>
        <p class="look" v-if="show" @click="lookPhoto">点击查看<span style="color:rgb(253, 228, 6)">奖品</span></p>
       <!-- <audio src="https://assets.rrxh5.cc/plugin/2656aa70a9a74f781deb952ef3f33ecd/10/assets/defaultRing.mp3" loop="loop" autoplay="autoplay"></audio> -->

    </div>
</template>

<script>

export default {
    data(){
        return {
           show:false
        }
    },
    created(){
      
    },
  
    methods:{
        startCallback(){
          console.log('抽奖成功！')
        },
        clearCallback(){
          console.log('清除完毕！')
          this.show = true;
        },
        lookPhoto(){//查看奖品
         this.$router.push("/photoShow")
        }
    },
 
}
</script>

<style lang="less" scoped>
     .homeWrap{
         width: 100%;
         height: 100%;
         padding-top: 100px;
         background: url('http://picapi.zhituad.com/photo/31/22/05DFE.jpg') no-repeat center center;
         background-size:100% 100%;
         .text-wrap{
             margin-bottom: 60px;
             text-align: center;
             font-weight: bold;
             font-size:26px;
             color:rgb(253, 228, 6);
         }
         .tip{
             font-size:16px;
             color:rgb(253, 228, 6);
             text-align: center;
             margin-top:40px;
         }
         .look{
             width: 160px;
             height: 40px;
             background:rgb(223, 75, 75);
             margin-left: 100px;
             margin-top:40px;
             border-radius: 25px;
             text-align: center;
             line-height: 40px;
             color:#fff;
             font-size: 16px;
         }
     }
     .scratchCard{
        width: 80%;
        height:150px;
     }
</style>