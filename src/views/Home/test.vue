<template>
  <div class="box">
    <div class="list">
      <div class="item" @click="handleAppend" :class="{isActive:item.isActive}" v-for="(item,i) in dataList" :key="i">{{i}}</div>
    </div>
  </div>
</template>

<script>
  import gsap from 'gsap'
  export default {
    data(){
      return {
        dataList:Array(20).fill('').map((v,i)=>{return {
            isActive:true
          }}),
          index:0
      }
    },
    mounted(){
      this.runs()
    },
    methods:{
      handleAppend(){
        this.dataList.push(...Array(20).fill('').map((v,i)=>{
          return {
            isActive:true
          }
        }))
        this.$nextTick(()=>{
          this.runs()
        })
      },
      runs(){
        gsap.set('.list .isActive', {
           alpha: 0,
           x:-300,
           y:-200
         });
        this.tl = gsap.to('.list .isActive', {
          duration: 0.5,
          alpha: 1,
          x:0,
          y:0,
          stagger: 0.1,
          ease:'esaeOut',
          completerAll:this.completer
        });
      },
      completer(el){
         this.dataList[this.index+el].isActive = false
         if(el===19){
           this.index = this.index+el+1
         }
        console.log(el)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    padding: 30px;
    background: #eee;
    .list{
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item{
        width: 22%;
        text-align: center;
        height: 140px;
        line-height: 140px;
        padding: 0 20px;
        margin-bottom: 10px;
        background: #fffe;
      }
    }
  }
</style>