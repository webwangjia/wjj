<template>
    <div class="homeWrap">
         <div class="center">
             <full-page ref="fullpage" :options="options" id="fullpage">
                <div class="section">
                   <SectionOne></SectionOne>
                </div>
                <div class="section">
                   <SectionTwo></SectionTwo>
                </div>
                <div class="section">
                   <SectionThree></SectionThree>
                </div>
            </full-page>
         </div>
        <audio src="http://cdnringhlt.shoujiduoduo.com/ringres/all/a24/325/9230325.aac" loop="loop" autoplay="autoplay"></audio>

    </div>
</template>

<script>
import  {SectionOne,SectionTwo,SectionThree} from '@/components'

export default {
    data(){
        return {
            options: {
                scrollingSpeed: 700,
                afterLoad: this.afterLoad,
                // menu: '#menu',
                // anchors: ['page1', 'page2', 'page3'],
                // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
                 afterChange: function (prev, next) {
                   console.log(prev,next)
                 }
            },
        }
    },
    created(){
       console.log()
    },
  
    methods:{
        afterLoad(e) {
          console.log("滚动完成");
          console.log(e.index);
          if(e.index == 1){
             this.timer =  setTimeout(()=>{
              this.$router.push("/shipinOne")
              clearTimeout(this.timer)
             },1000)
          }
        }
    },
    components: {
        SectionOne,
        SectionTwo,
        SectionThree,
    },
}
</script>

<style lang="less" scoped>
.homeWrap{
   height:100vh;
   .center{

   }
  
}
</style>