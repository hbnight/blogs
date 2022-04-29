<template>
  <div class="home-page_container" :style="{backgroundImage:`url(${getUrl('../../../assets/gif/bg.gif')})`}">
    <div class="home-essay-text" :class="{isShow,showColor,isScale}">人与人之间的差异，其实很简单。<br>你在赖床，他在锻炼；你在应付工作，他在用心工作；你在完成今天的计划，他在策划明年的计划。假期总比期待的短，但现在的努力都是为了将来毫不费力。<br>不管现实多惨不忍睹，都要相信自己，这只是黎明前的短暂黑暗。<br>每一天努力，都是为了接近理想的自己。尽管这种努力看似微乎其微，但时间会告诉你，所有的隐忍和坚持，终将成就一个更优秀的你。<br>多少人在异地工作或学习，忍受着孤独寂寞，下雨没人送伞，开心没人可以分享，难过没人可以倾诉……<br>其实，每个人都会有一段异常艰难的时光，没人在乎你怎样在深夜痛哭，别人再怎么感同身受，也只有一瞬间。<br>再苦再累再痛再难熬，只有，也只能自己独自撑过。人生就是这样，耐得住寂寞，才能守得住繁华。<br>你羡慕别人月薪几万，却不知道他日日加班到深夜的辛苦；你看到别人的成绩，却没看到他曾一次次跌倒又爬起。<br>世上没有一份工作不辛苦，没有一次成功不艰辛。天赋异禀者毕竟是少数，相对于不费力的成功，更了不起的，是那些自知微小，却不曾放弃点滴努力的人。<br>学着踏实而务实，坚韧而顽强，你经历的那些艰难，最后都会成为你通往成功的踏脚石。<br>奇迹，弱者认为那是天赐的幸运，强者才会知道，那不过是努力的另一名字而已。<br>要想得到这个世界上最好的东西，就要先把最好的你交给这个世界。<br>今天起，尽最大的努力，做最好的自己！只有努力的人生，才配得上更好的生活。<br></div>
  </div>
</template>
<script>
  import './splitText'
  import './TweenMax'
  export default {
    data(){
      return {
        isShow:false,
        showColor:false,
        isScale:false
      }
    },
    mounted(){
      this.textEl = document.querySelector('.home-essay-text'),
      this.mySplitText = new SplitText(this.textEl, {
        type: "words"
      }),
      this.splitTextTimeline = new TimelineLite();
      setTimeout(()=>{
        this.isShow  = true
        setTimeout(()=>{
          this.showColor = true
          this.handleRuns()
        },700)
      },300)
  },
  methods:{
    getUrl(url){
      return new URL(`../../lib/Carousel/assets/${url}`, import.meta.url).href
    },
    handleRuns(){
      this.mySplitText.split({
        type: "chars, words"
      })
      this.splitTextTimeline.staggerFrom(this.mySplitText.chars, 3, {
        scale: 3,
        autoAlpha: 0,
        rotationZ: -1200,
        rotationY: -1200,
        transformOrigin:"0% 50% -50",
        ease: 'ease-in-out'
      }, 0.01);
    }	
  }
  }
</script>

<style lang="scss">
  html,body,div{
    padding: 0;
    margin: 0;
  }
  .home-page_container{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    background: no-repeat center center/100% 100%;
    .sum-main{
       position: absolute;
       left: 140px;
       top: 0;
       height: 60px;
       width: 1px;
       background: #ccc;
      &:after{
        content: '';
        position: absolute;
        width: 120px;
        height: 120px;
        left: 50%;
        transform: translateX(-50%) rotateX(75deg);
        bottom: -60px;
        border-radius: 60px;
        background : rgb(172, 172, 172);
      }
      &:before{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        left: 50%;
        transform: translateX(-50%) rotateY(30deg);
        bottom: -35px;
        border-radius: 60px;
        background : #fff;
      }
    }
    .home-essay-text{
      font-family: 'fangsong';
      font-weight: bold;
      padding: 20px;
      line-height: 32px;
      font-size: 18px;
      opacity: .8;
      width: 900px;
      height: 550px;
      border: 4px solid #f8b10a;
      background: #fff;
      box-shadow: 60px 60px 22px #221f1f;
      border-radius: 8px;
      position: absolute;
      left: 2280px;
      top: 120px;
      color: transparent;
      transform-origin: left top;
      transform: rotate3d(1, 1, 0.5, 5deg)  scale(1,1);
      &.isShow{
        left: 280px;
        transition: left .5s;
      }
      &.showColor{
        color: #000;
      }
      &.isScale{
        transition: transform .5s;
        transform: rotate3d(1, 1, 0.5, 5deg) scale(.5,1);
      }
    }
  }
</style>