<template>
<div id="launcher">
  <FullscreenHero/>
  
  <section id="launcher-content">
    <div class="container-fluid pt-3">
      <div class="row">
        <div class="col-10 col-lg-6 offset-1 d-flex flex-column">
          <p class="text-white mb-0">
            NFT collection of 10.000 unique pieces.
          </p>
          <p class="text-white">
            Warm-ups are over. Get ready for a puck drop.
          </p>
        </div>
        <div class="col-10 offset-1 col-lg-5 offset-lg-0 col-xl-4">
          <NuxtLink to="/lockerroom"><button class="btn launcher-btn">ENTER THE LOCKER ROOM<Cone :throwCone="throwCone" /></button></NuxtLink>>
        </div>
      </div>
      <div class="row py-3">
        <div class="col text-center">
          <p class="launcher-copyright text-white text-uppercase">
            VERIFIED&nbsp;SMART&nbsp;CONTRACT&nbsp;ADDRESS:&nbsp;
            <a class='contract-link' href='https://etherscan.io/address/0x45307591960C5A8da729521f7761F6978Ef5aC05' target='_blank'>
              https://etherscan.io/address/0x45307591960C5A8da729521f7761F6978Ef5aC05
            </a>
          </p>
        </div>
      </div>
      <div class="row py-3">
        <div class="col text-center">
          <p class="launcher-copyright text-white text-uppercase">
            Copyright&nbsp;2022 • Locker&nbsp;Room&nbsp;Brotherhood • All&nbsp;rights&nbsp;reserved.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="d-none"><img src="/_nuxt/img/lrbh-hero.jpg" /></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      throwCone: false
    }
  },
  methods: {
    goToLockerroom () {
      this.throwCone = true
      this.$router.push('/lockerroom')
    }
  }
}
</script>

<style lang="scss">

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    background-color: #000000;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
    #launcher {

      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: url(./static/main-bg.jpg) center no-repeat;
      background-size: cover;

      @media screen and (min-width: 992px) {
        font-size: clamp(1.2em, 1.625vw, 1.625em);
      }
    
      #launcher-content {
        padding-top: 6vw;
        background: linear-gradient(180deg, rgba(0,0,0,1) 24%, rgba(0,0,0,0.62) 48%, rgba(255,255,255,0) 100%) top no-repeat;//, url(./static/main-ice.png) center no-repeat;
        background-size: 100vw 9.5em, cover;
        min-height: 52vh;
        height: calc(100vh - 68vw);

        @media screen and (min-width: 992px) {
          min-height: unset;
          height: auto;
        }

        p {
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.25em;
          line-height: 1.15;
          font-weight: 500;
          
          &.launcher-story {
            max-width: 15em;
          }

          &.launcher-copyright {
            font-size: .75em;
            font-weight: 400;
            margin-bottom: 2em;

            @media screen and (min-width: 992px) {
              margin-bottom: 3em;
            }
          }
        }

        .btn {
          font-family: Roboto, Helvetica, Arial, sans-serif;
          font-weight: 900;
          font-size: 0.875em;
          color: #000000;
          background: white;
          padding: 0.6789em;
          margin: 3.5em auto 3.5em;
          width: 100%;
          max-width: 16em;
          box-shadow: 0px 0.85em 3.5em rgb(210 50 234 / 60%);
          border-radius: 0.7em;
          position: relative;
          display: block;

          @media screen and (min-width: 768px) {
            margin-left: 0;
          }

          @media screen and (min-width: 992px) {
            font-size: .965em;
            margin: 3.625em 0 3.125em;
            max-width: 18em;
            padding: 0.9em;
          }

          @media screen and (min-width: 1200px) {
            font-size: 1.15em;
            margin: .5em 0 3.5em auto;
            padding: 1.17em;
          }

          .cone {
            top: -3em;
            right: 1em;
            width: 3.21em;
            height: 3.6em;
            pointer-events: none;
            position: absolute;
            display: block;

            @media screen and (min-width: 992px) {
              top: -3.7em;
              width: 4em;
              height: 4.5em;
            }

            @media screen and (min-width: 1440px) {
              top: -5.5em;
              right: 0;
              width: 6.2em;
              height: 7em;
            }
          }
        }

        // .coneTransition-leave-active {
        //   animation: spin .3s, falling-out .6s;
        //   animation-delay: 0, .1s;
        //   animation-iteration-count:  infinite, 1 ;
        //   animation-timing-function: linear, ease-in; 
        // }

        // @keyframes falling-out {
        //   from {
        //       top:0;
        //       width: 100%;
        //   }
        //   to {
        //       top: 80vh;
        //       width: 110vh;
        //   }
        // }
      }
    }
  }

  // .page-leave-active, 
  // .layout-leave-active {
  //   animation: acrossOut .6s ease-in both;
  // }

  // .page-enter-active,
  // .layout-enter-active {
  //   animation: acrossIn .6s ease-out both;
  //   animation-delay: .1s;
  // }

  button:active, .btn:active {
    transform: scale(.95) translateY(5%);
  } 

  // @keyframes acrossIn {
  //   0% {
  //     transform: translate(50%, 100vh);
  //   }
  //   100% {
  //     transform: translate(0, 0);
  //   }
  // }
  // @keyframes acrossOut {
  //   0% {
  //     transform: translate(0, 0);
  //   }
  //   100% {
  //     transform: translate(-50%, -100%);
  //   }
  // }
  .contract-link {
    color: #D232EA !important;
    font-weight: bold;
  }
  @media (max-width: 500px) {
  .contract-link {
    font-size: 9px;
  }
  }
</style>