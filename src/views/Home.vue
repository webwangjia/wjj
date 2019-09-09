<template>
    <div class="sectionOne">
        <div class="firstShow firstShowAnimate" v-show="firstShow">
             <p class="firstOne">
                <span class="two">温馨提示</span> 
             </p>
             <p class="twoShow" ref="twoShow"  >请做好心理准备</p>
             <!-- <div class="imgphoto"><img src="../assets/images/onee.png" alt=""></div> -->
             <div class="imgphoto"><img src="../assets/images/onee.png" alt=""></div>
             <p class='name'>新郎：马新想 & 新娘：王佳佳</p>
        </div>
        <div class="secondShow secondShowAnimate" v-show="twoShow" :id="showP?'showPWrao':''">
             <p class="a">这</p>
             <p class="b">是</p>
             <p class="c">一</p>
             <p class="d">份</p>
             <p class="e">邀</p>
             <p class="f">请</p>
             <p class="g" ref="ggg">函</p>
        </div>
        <div  class="thirdlyShow thirdlyShowAnimate"  v-show="threeShow" >
            <div class="three threeA0">纳尼？？？？？？</div>
            <div class="three threeA1">纳尼？？？？？？</div>
            <div class="three threeA2">纳尼？？？？？？</div>
            <div class="three threeA3">纳尼？？？？？？</div>
            <div class="three threeA4">纳尼？？？？？？</div>
            <div class="three threeA5">纳尼？？？？？？</div>
            <div class="three threeA6">纳尼？？？？？？</div>
            <div class="three threeA7">纳尼？？？？？？</div>
            <div class="three threeA8">？？？？？？</div>
            <div class="three threeA9">？？？？？？</div>
            <div class="three threeA10">？？？？？？</div>
            <div class="three threeA11">纳尼？？？？？？</div>
            <div class="three threeA12">纳尼？？？？？？</div>
            <div class="three threeA13">？？？？？？</div>
            <div class="three threeA14">纳尼？？？？？？</div>
            <div class="three threeALast" ref="threeALast">纳尼？？？？？？</div>
            <!-- <div class="imgWrap"><img src="@/assets/what.jpg" alt=""></div> -->
        </div>

        <div  class="fourShow fourShowAnimate" v-show="fourShow" >
            <div class="three threeC"><p>没错</p></div>
            <div class="three threeD"><p>这是一份</p></div>
            <div class="three threeE"><p>真诚的</p></div>
            <div class="three threeF" ref="threeF"><p>婚礼邀请函</p></div>
        </div>


        <div class="fiveShow fiveShowAnimate" v-show="fiveShow">
            <div class="fiveA">新郎</div>
            <div class="fiveB">马新想</div>
            <div class="fiveI">河北保定人</div>
            <div class="fiveC">身高185</div>
            <div class="fiveD">玉树临风</div>
            <div class="fiveE">皮肤白皙</div>
            <div class="fiveF">男神</div>
            <div class="fiveG">优秀到无法形容</div>
            <div class="fiveH" ref="fiveH">这么叼，呵呵</div>
        </div>
        <div class="sixShow sixShowAnimate" v-show="sixShow">
            <div class="fiveA">新娘</div>
            <div class="fiveB">王佳佳</div>
            <div class="fiveI">河北邯郸人</div>
            <div class="fiveC">身高155</div>
            <div class="fiveD">人见人爱</div>
            <div class="fiveE">花见花开</div>
            <div class="fiveF">萌萌达</div>
            <div class="fiveG">小仙女</div>
            <div class="fiveH" ref="sixH">OMG，我滴天</div>
        </div>
        <div class="tuboshuPhoto" v-show="tuboshuPhoto">
            <div class="imgWrap" ref="tuboshuPhoto">
                <img src="@/assets/tuboshu.gif" alt="">
            </div>
        </div>
       
       <!-- 第七屏 -->
        <div class="sevenShow sevenShowAnimate" v-show="sevenShow">
            <div class="sevenA">弹幕来袭</div>
            <div class="sevenB">此时</div>
            <div class="sevenC" ref="sevenC">你们内心的声音</div>
        </div>

         <!-- 第八屏 -->
         <div class="eightShow eightShowAnimate" v-show="eightShow">
            <div class="eightA">玉树临风?</div>
            <div class="eightB">小仙女?</div>
            <div class="eightC">10月一结婚的真多</div>
            <div class="eightD">不要脸</div>
            <div class="eightE">身高185?</div>
            <div class="eightF">吹牛皮呢</div>
            <div class="eightG">脸真大</div>
            <div class="eightH">男神？</div>
            <div class="eightI">人见人爱？</div>
            <div class="eightJ">扯皮呢？</div>
            <div class="eightK">又要参加婚礼</div>
            <div class="eightL">蓝蛤嫫想吃天鹅肉</div>
            <div class="eightM">继续</div>
            <div class="eightN">我不听我不听</div>
            <div class="eightO">啥玩意</div>
            <div class="eightP">祝你们幸福</div>
            <div class="eightQ">终于结婚了</div>
            <div class="eightR" ref="eightR">祝福</div>
            <div class="eightS">可以呀</div>
        </div>

          <!-- 第九屏 -->
         <div class="nineShow nineShowAnimate" v-show="nineShow">
            <div class="nineA">下面是</div>
            <div class="nineB" ref="nineB">辛运大抽奖</div>
        </div>
       <audio src="https://data2.rrxh5.cc/g2/c1/2018/09/16/1537083329759.mp3" autoplay="autoplay"></audio>
       <!-- <audio src="http://cdnringhlt.shoujiduoduo.com/ringres/all/a24/325/9230325.aac" autoplay="autoplay"></audio> -->
    </div>
</template>

<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
    data(){
        return {
           firstShow:true, // true
           twoShow:false,  // false
           showP:false,
           threeShow:false,
           fourShow:false,
           fiveShow:false,
           sixShow:false,
           tuboshuPhoto:false,
           sevenShow:false,
           eightShow:false,
           nineShow:false,
           tuboshuPhotoSum:0, // 土拨鼠出现次数
           timer:null,
        }
    },
    create(){

    },
    mounted(){
      // 监听动画
      this.$refs.twoShow.addEventListener('animationend', ()=>{
          this.firstShow =  false;
          this.twoShow =  true;
      });
      // 第二屏
      this.$refs.ggg.addEventListener('animationend', ()=>{
          setTimeout(()=>{
             this.showP = true;
          },200)
          this.timer = setTimeout(()=>{
              this.twoShow = false;
              this.threeShow = true;
              clearTimeout(this.timer)
          },1000)
      });
      // 第三屏
      this.$refs.threeALast.addEventListener('animationend', ()=>{
         this.timer =  setTimeout(()=>{
              this.showP = true;
              this.threeShow = false;
              this.fourShow = true;
              clearTimeout(this.timer)
          },400)
      });
      // 第四屏
      this.$refs.threeF.addEventListener('animationend', ()=>{
          this.timer = setTimeout(()=>{
              this.fourShow = false;
              this.fiveShow = true;
              clearTimeout(this.timer)
          },400)
      });
       // 第五屏
      this.$refs.fiveH.addEventListener('animationend', ()=>{
         this.timer =  setTimeout(()=>{
              this.fiveShow = false;
              this.tuboshuPhoto = true;
              this.tuboshuPhotoSum += 1
              clearTimeout(this.timer)
          },400)
      });
       // 第六屏
      this.$refs.sixH.addEventListener('animationend', ()=>{
         this.timer =  setTimeout(()=>{
              this.sixShow = false;
              this.tuboshuPhoto = true;
              this.tuboshuPhotoSum += 1
              clearTimeout(this.timer)
          },400)
      });
        // 土拨鼠
      this.$refs.tuboshuPhoto.addEventListener('animationend', ()=>{
          if(this.tuboshuPhotoSum === 1){ // 介绍mxx完成
               this.timer =  setTimeout(()=>{
                    this.tuboshuPhoto = false;
                    this.sixShow = true;
                    clearTimeout(this.timer)
                },400)
          }else{ // 介绍wjj完成
               this.timer =  setTimeout(()=>{
                    this.tuboshuPhoto = false;
                    this.sevenShow = true;
                    clearTimeout(this.timer)
                },400)
          }
         
      });
       // 第七屏
      this.$refs.sevenC.addEventListener('animationend', ()=>{
         this.timer =  setTimeout(()=>{
              this.sevenShow = false;
              this.eightShow = true;
              clearTimeout(this.timer)
          },400)
      });
      //第八屏
       this.$refs.eightR.addEventListener('animationend', ()=>{
         this.timer =  setTimeout(()=>{
              this.eightShow = false;
              this.nineShow =true;
              clearTimeout(this.timer)
          },400)
      });
      //第九屏
        this.$refs.nineB.addEventListener('animationend', ()=>{
         this.timer =  setTimeout(()=>{
              setTimeout(()=>{
              this.nineShow = false;
               this.$router.push('/lottery')
              },1000)
              clearTimeout(this.timer)
          },400)
      });
    },
    methods:{
        loadSource(){
            let aryImg = ['one3.jpg'];
            let baseUrl = "httts://www.webxiaoma.com/img"

            for(let i = 0,len= aryImg.length;i<len;i++){
                let img = document.createElement("img");
                img.src = `${baseUrl}/${baseUrl[i]}`;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../theme/base.less";
@import "../theme/animate.less";

.sectionOne{
   width:100%;
   height:100%;
   font-size:20px;
   overflow: hidden;
   .firstShow{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       background: url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181595,3649644733&fm=15&gp=0.jpg") no-repeat center center;
       background-size:100% 100%;
       color: #fff;
       font-weight: 9999;
       font-size: 25px;
       .two{
           color: red;
       }
       .firstOne{
        z-index: 999;
       }
       .twoShow{
        z-index: 999;
       }
   }
   .imgphoto{
       position: fixed;
       top: 250px;
       width: 250px;
       height: 250px;
       img{
           width: 100%;
           height: 100%;
           border-radius: 50%;
       }
   }
   .name{
       position: fixed;
       bottom: 40px;
       color: #fff;
       font-size: 12px;
   }


   .secondShow{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       color: #fff;
    //    background:#ff5f45;
       background: url("../assets/love.png") no-repeat center center;
       background-size:100% 100%;
       p{
           font-size:28px;
       }
   }
   #showPWrao{
       background: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3798087763,4233509802&fm=26&gp=0.jpg") no-repeat center center;
       background-size:100% 100%;
       >p{
           opacity: 1;
       }
   }

// 第三屏
   .thirdlyShow{
       width:100%;
       height:100%;
       color: #fff;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
    //    background:#0798ec;
       background: url("http://img03.sogoucdn.com/app/a/200678/148793012362531.gif") no-repeat center center;
       background-size:100% 100%;
       .three{
        //    opacity: 0;
           position: absolute;
           z-index: 9;
       }
   }


   // 第一屏动画
   .firstShowAnimate{
       .firstOne{
          opacity: 0;
          animation:bounceIn 1s 1s linear forwards;
       }
        .twoShow{
          opacity: 0;
          animation:rotateIn 2.5s 2s linear forwards;
       }
   }

   // 第二屏动画
   .secondShowAnimate{
       >p{
           opacity: 0;
       }
       .a{
         animation:bounceInSecond 0.4s .1s ease-in forwards;
       }
       .b{
         animation:bounceInSecond 0.4s .3s ease-in forwards;
       }
        .c{
         animation:bounceInSecond 0.4s  .6s ease-in forwards;
       }
        .d{
         animation:bounceInSecond 0.4s .9s ease-in forwards;
       }
        .e{
         animation:bounceInSecond 0.4s 1.2s ease-in forwards;
       }
       .f{
         animation:bounceInSecond 0.4s 1.5s ease-in forwards;
       }
       .g{
         animation:bounceInSecond 0.4s 1.8s ease-in forwards;
       }
       .h{
          animation:rotateIn 0.2s 2s ease-in forwards;
       }

   }

   // 第三屏动画
   .thirdlyShowAnimate{
      .threeA0{
         transform: rotateZ(50deg)  translate3d(-160px,-190px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA1{
         transform: rotateZ(20deg)  translate3d(-100px,-140px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA2{
          transform: rotateZ(-20deg)  translate3d(100px,-110px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA3{
          transform: rotateZ(20deg)  translate3d(30px,200px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA4{
         transform: rotateZ(-20deg)  translate3d(-120px,50px,20px);
         animation:zoomInshowOpationDown 1.2s .1s linear forwards;
      }
      .threeA5{
          transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA6{
          transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA7{
         transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
       .threeA8{
          transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
       .threeA9{
          transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA10{
          transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeA11{
          transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
       .threeA12{
         transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s .1s linear forwards;
      }
      .threeALast{
         transform: rotateZ(-40deg)  translate3d(-100px,220px,20px);
         animation:showOpation 1.2s 1s linear forwards;
      }
      .imgWrap{
          position: relative;
          animation:rubberBand 1.2s .1s linear forwards;
          img{
              width:180px;
          }
      }
   }

   // 第四屏
   .fourShow{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
    //    background:#0798ec;
       color: #fff;
       background: url("../assets/love.png") no-repeat center center;
       background-size:100% 100%;
       font-size:32px;
       .three{
           position: absolute;
           p{
             opacity: 0;
           }
       }
        .threeC{
            transform: rotate(20deg);
            p{
              animation:zoomIn 0.2s .1s ease-in forwards;
            }
        }
        .threeD{
            transform: rotate(-20deg);
             p{
               animation:zoomIn 0.2s .6s ease-in forwards;
             }
        }
        .threeE{
            transform: rotate(20deg);
             p{
               animation:zoomIn 0.2s 0.9s ease-in forwards;
             }
        }
        .threeF{
            p{
              animation:zoomIn 0.9s 1.3s ease-in forwards;
            }
        }
   }
   // 土拨鼠
   .tuboshuPhoto{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       background:#202020;
       background: url("http://img2.biaoqingjia.com/biaoqing/201807/fb49094ab3b9f91f8cc99411cbaedd4b.gif") no-repeat center center;
       background-size: 100% 100%;
       font-size:32px;
       .imgWrap{
           opacity: 1;
           animation:showOpation 2.2s  ease forwards;
           img{
              width:200px;
           }
       }
   }
   //第五屏
   .fiveShow{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       color: rgb(44, 16, 145);
    //    background:#0798ec;
       background: url("http://images.17173.com/2016/news/2016/03/18/cb0318db03s.gif") no-repeat center center;
       background-size:100% 100%;
       font-size:32px;
       >div{
           position: absolute;
           opacity: 0;
       }
       .fiveA{
            animation:zoomBigIn 0.3s 0.1s ease-in forwards;
            opacity: 1;
            transform: translateY(-180px);
       }
       .fiveB{
            // color:#fff;
            animation:zoomBigIn  0.8s 1.0s ease-in forwards;
       }
       .fiveC{
            animation:zoomBigIn  0.8s  2.0s ease-in forwards;
       }
       .fiveD{
            animation:zoomBigIn  0.8s  3.0s ease-in forwards;
       }
       .fiveE{
            animation:zoomBigIn  0.8s  4.0s ease-in forwards;
       }
       .fiveF{
            animation:zoomBigIn  0.8s 5.0s ease-in forwards;
       }
       .fiveG{
            animation:zoomBigIn  0.8s  6.0s ease-in forwards;
       }
       .fiveH{
            animation:zoomBigIn  0.8s  7.0s ease-in forwards;
       }
        .fiveI{
            animation:zoomBigIn  0.8s   8.0s ease-in forwards;
       }
       .tuboshuPhoto{

       }
   }

   // 第六层
   .sixShow{
       .fiveShow;
       background: url("http://i1.073img.com/allimg/170428/1554261k1-0.gif") no-repeat center center;
       color: rgb(69, 170, 228);
       background-size:100% 100%;
   }
   .sevenShow{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       background:url("http://5b0988e595225.cdn.sohucs.com/images/20171031/9e5f8e0ebe2d4683a5ae4f1ec4384b2e.gif") no-repeat center center;
       background-size: 100% 100%;
       font-size:32px;
       color: rgb(238, 6, 6);
       >div{
           position: absolute;
       }
       .sevenA{
             opacity: 0;
             animation:zoomInLeft  1.2s 0.2s linear forwards;
       }
       .sevenB{
            opacity: 0;
            animation:lightSpeedIn  1.2s 1.4s linear forwards;
       }
       .sevenC{
           opacity: 0;
           animation:flip  1s 2.6s linear forwards;
       }
   }
   .eightShow{
       width:100%;
       height:100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
    //    background:#00ac09;
       color: #fff;
       background:url("http://tc.sinaimg.cn/maxwidth.800/tc.service.weibo.com/gw_alicdn_com/2c9ad7caabdaca9e8d459ea33a003d84.gif") no-repeat center center;
       background-size: 100% 100%;
       font-size:22px;
       >div{
           position: absolute;
       }
       .eightA{
           top:20px;
           left: 20px;
           animation:zoomBigIn 0.3s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightB{
           top:40px;
           right: 20px;
           animation:zoomBigIn 0.6s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightC{
           top:70px;
           left: 30px;
           animation:zoomInDown 0.6s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightD{
           top:120px;
           right: 70px;
           animation:zoomInDown 0.8s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightE{
           top:180px;
           left: 35px;
           animation:rubberBand 1.0s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightF{
           top:210px;
           right: 35px;
           animation:rubberBand 1.2s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightG{
           bottom:50px;
           left: 20px;
         animation:zoomInDown 1.4s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightH{
           bottom:200px;
           left: 20px;
            animation:zoomInDown 1.6s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightI{
           bottom:180px;
           right: 20px;
        animation:zoomInDown 1.2s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightG{
           bottom:80px;
           left: 20px; 
            animation:zoomInDown 1.8s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightK{
           bottom:280px;
           right: 20px;
            animation:zoomInDown 2.0s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightL{
           bottom:370px;
           left: 50px;
            animation:zoomInDown 2.2s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightM{
           bottom:10px;
           right: 20px;
            animation:zoomInDown 2.4s 0.1s ease-in forwards;
           opacity: 1;
       }  
        .eightJ{
           bottom:10px;
           right: 90px;
           animation:zoomInDown 2.4s 0.1s ease-in forwards;
           opacity: 1;
       } 
       .eightN{
           bottom:300px;
           left: 20px;
            animation:zoomInDown 2.6s 0.1s ease-in forwards;
           opacity: 1;
       }
        .eightO{
           bottom:350px;
           right: 50px;
            animation:zoomInDown 2.8s 0.1s ease-in forwards;
           opacity: 1;
       }
        .eightP{
           bottom:80px;
           right: 50px;
            animation:rubberBand 3.0s 0.1s ease-in forwards;
           opacity: 1;
       }
        .eightQ{
           bottom:140px;
           right: 30px;
            animation:zoomInDown 3.2s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightR{
           bottom:140px;
           right: 300px;
            animation:zoomInDown 3.0s 0.1s ease-in forwards;
           opacity: 1;
       }
       .eightS{
           bottom:180px;
           right: 200px;
            animation:zoomInDown 1.2s 0.1s ease-in forwards;
           opacity: 1;
       }
   }
   // 第九层
   .nineShow{
       width:100%;
       height: 100%;
       text-align: center;
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;
       background: url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3798087763,4233509802&fm=26&gp=0.jpg") no-repeat center center;
       background-size:100% 100%;
       color: #fff;
        .nineA{
            animation:zoomBigIn 1.0s 0.3s ease-in forwards;
            opacity: 0;
            transform: translateY(-180px);
       }
       .nineB{
            color:rgba(246, 250, 3, 0.945);
            font-weight: bold;
            font-size: 30px;
            animation:zoomBigIn  0.4s 0.5s ease-in forwards;
       }
   }
}

</style>