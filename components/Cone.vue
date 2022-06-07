<template>
<div class="cone">
  <transition name="coneTransition">
    <img v-show="!throwCone" src="../static/cone.png"/>
  </transition>
</div>
</template>

<script>
  export default ({
    props:['throwCone']
  })
</script>


<style lang="scss">
  .cone img {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }

  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
  }
</style>
