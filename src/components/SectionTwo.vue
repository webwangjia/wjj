<template>
    <div class="sectionOne">
        <div class="photo">
             <!-- <img src="../assets/images/one.jpg" alt=""> -->
             <div class="img1">
                 <img src="../assets/images/one3.jpg" alt="">
             </div>
             <!-- <div class="img2">
                <img src="../assets/images/one3.jpg" alt="">
             </div> -->
        </div>
        <div class="jiantou">
            <img src="../assets/images/bottom.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    mounted(){
   
    },
}
</script>

<style lang="less" scoped>
  .sectionOne{
      position: relative;
      width: 100%;
      height: 100%;
      .photo{
        width: 100%;
        height: 100%;
        // display: flex;
        .img1{
            // display: inline-block;
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
            }
        }
      }
      .jiantou{
          position: absolute;
          bottom: 20px;
          left: 170px;
          width: 40px;
          z-index: 999;
          color: #fff;
          font-size: 50px;
        //   background:red;
          transform: translateY(-100px);
          animation: jump 1s linear infinite;
          img{
              width:100%;
              transform: rotate(-90deg);

          }
      }
     
  }
  @keyframes jump {
      to{
          transform: translateY(0px)
      }
      from{
         transform: translateY(-20px)
      }
      
  }
</style>