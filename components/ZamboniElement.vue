<template>
  <div
    :style="{ transform: `translate3d(${offset}px, 0, 0)`, }"
    class="ZamboniElement"
  >
    <slot/>
    <div class="zamboni-wheel wheel-1" :style="{ transform: `rotate(${offset}deg)`, }" >
      <img src="../static/wheel.png" />
    </div>
    <div class="zamboni-wheel wheel-2" :style="{ transform: `rotate(${offset}deg)`, }" >
      <img src="../static/wheel.png" />
    </div>
    <div class="zamboni-eyes" >
      <img src="../static/eyes_close.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZamboniElement',
  inject: ['zamboniContainer'],
  props: {
    factor: {
      default: 0.25,
      type: Number,
    },
  },
  computed: {
    offset() {
      const { height, scrollFactor } = this.zamboniContainer;
      // The offset is relative to the height of
      // the element. This means, if the factor is
      // 0.5, the element is moved half its height
      // over the full scroll distance of the viewport.
      return scrollFactor * height * this.factor;
    },
  },
};
</script>

<style lang="scss" scoped>



  .zamboni-eyes {
    width: 100%;
    height: 0;
    top:0;
    left: 0;
    position: absolute;
    animation: blink 10s infinite;
    overflow: hidden;
  }

@keyframes blink {
          0% {
              height: 0;
          }
          25% {
              height: 0;
          }
          27% {
              height: 100%;
          }
          29% {
              height: 0;
          }
          48% {
              height: 0;
          }
          49% {
              height: 100%;
          }
          50% {
              height: 0;
          }
          98% {
              height: 0;
          }
          99% {
              height: 100%;
          }
          100% {
              height: 0;
          }
        }
</style>