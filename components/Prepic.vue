<template>
<div class="green_one">
  <img src="../static/prepic_bg.png" class="prepic-bg" />
  <img v-if="pic === 1" src="../static/prepics/1.jpg" class="the_prepic" />
  <img v-else-if="pic === 2" src="../static/prepics/2.jpg" class="the_prepic" />  
  <img v-else-if="pic === 3" src="../static/prepics/3.jpg" class="the_prepic" />  
  <img v-else-if="pic === 4" src="../static/prepics/4.jpg" class="the_prepic" />  
  <img v-else-if="pic === 5" src="../static/prepics/5.jpg" class="the_prepic" />  
  <img v-else-if="pic === 6" src="../static/prepics/6.jpg" class="the_prepic" />  
  <img v-else-if="pic === 7" src="../static/prepics/7.jpg" class="the_prepic" />  
  <img v-else-if="pic === 8" src="../static/prepics/8.jpg" class="the_prepic" />  
  <img v-else-if="pic === 9" src="../static/prepics/9.jpg" class="the_prepic" />
  <img v-else-if="pic === 10" src="../static/prepics/10.jpg" class="the_prepic" />
  <img src="../static/prepic_over.png" class="prepic-over" />
  <button class="push-me-btn btn" id="push-me" type="button" @click="pic < 10 ? pic++ : pic = 1"><img src="../static/push_me.svg" alt="Push me"/></button>
</div>
</template>

<script>
  export default ({
    data() {
      return {
        pic: 1,
      }
    },
  })
</script>

<style lang="scss">
  .green_one {
      position: relative;

      .prepic-bg {
        position: relative;
        width: 100%;
        max-width: 100%;
      }

      .the_prepic {
        position: absolute;
        width: 55%;
        top: 9%;
        left: 30%;
      }

      .prepic-over {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
      }

      button {
        margin: -10vw 28vw 0;
        padding: 0;
        border: none;
        background: none;
        display: block;
        width: 20.8125vw;
        position: relative;

        @media screen and (min-width: 576px) {
          width: 6.8em;
          margin: -16% 41% 0;
        }
        @media screen and (min-width: 768px) {
          width: 9.2em;
        }
        @media screen and (min-width: 992px) {
          width: 6.8em;
          margin: -16% 41% 0;
        }
        @media screen and (min-width: 1200px) {
          width: 8.4em;
          margin: -16% 41% 0;
        }

        img {
          width: 100%;
          box-shadow: 0px .25em 2em rgba(0, 0, 0, 0.45);
        }
      }
    }
</style>
