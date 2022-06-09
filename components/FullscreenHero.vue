<template>
<section id="launcher-hero">
  <div class="hero-video-wrapper">
    <video class="hero-video" poster="/_nuxt/img/hero.jpg" playsInline autoPlay muted loop>
        <source src="../static/hero.webm" type="video/webm">
        <source src="../static/hero.mp4" type="video/mp4">
      </video>
  </div>
  <div class="container-fluid">
    <div class="row h-100 pt-1 pt-md-3">
      <div class="col-12 pl-3">
        <ul class="hero-social">
          <li><a href="https://discord.gg/4GYvvreWKm" target="_blank" aria-label="discord"><img src="../static/icons/discord.svg" alt="Discord"/></a></li>
          <li><a href="https://twitter.com/LockerRoomBH" target="_blank" aria-label="twitter"><img src="../static/icons/twitter.svg" alt="Twitter"/></a></li>
          <li><a href="https://instagram.com/lockerroombrotherhood" target="_blank" aria-label="instagram"><img src="../static/icons/insta.svg" alt="Instagram"/></a></li>
          <li><a href="https://opensea.io/collection/locker-room-brotherhood-v2" target="_blank" aria-label="opensea"><img src="../static/icons/opensea.svg" alt="OpenSea"/></a></li>
        </ul>
      </div>
      <div class="col offset-lg-1 align-self-end">
        <h1>
          <img src="../static/welcome.svg" alt="Welcome to the brotherhood"/>
        </h1>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
  #launcher-hero {

    .hero-video-wrapper {
      position: absolute;
      top: 2.5em;
      left:0;
      right:0;
      height: calc(68vw - 2.5em);
      max-height: calc(48vh - 2.5em);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 768px) {
        left: 8.333333%;
        right: 8.333333%;
        height: calc(47vw - 2.5em);
        max-height: calc(100vh - 2.5em);
      }

      video {
        height: 100%;
        position: absolute;
        object-fit: cover;
        object-position: center;
      }

    }
    .container-fluid {
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.62) 16%, rgba(255,255,255,0) 100%) bottom no-repeat;
      background-size: 100vw 9.5em;
      height: 68vw;
      max-height: 48vh;
      position: relative;

      @media screen and (min-width: 768px) {
        height: 47vw;
        max-height: 100vh;
        margin-top: 1.5em;
      }

      @media screen and (min-width: 768px) {
        height: calc(47vw - 1.45em);
        max-height: calc(100vh - 1.5em);
      }
    
      ul.hero-social {
        width: 50vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;

        @media screen and (min-width: 768px) {
          width: calc(8.333333% - 15px);
        }

        @media screen and (min-width: 992px) {
          width: 60px;
        }

        li {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;

          @media screen and (min-width: 768px) {
            justify-content: end;
            width: 100%;
          }

          a {
            color: #fff;
            text-align: center;
            width: 30px;

            @media screen and (min-width: 768px) {
              margin-bottom: 30px;
              margin-right: 20px;
            }

            img {
              width: 100%;
            }
          }
        }
      }

      h1 {
        text-align: center;

        img { 
          width: 81.6vw;
          max-width: 100%;
          bottom: -5vw;
          position: relative;
        }

        @media screen and (min-width: 992px) {
          text-align: left;

          img {
            width: 60vw;
            bottom: -1vw;
          }
        }
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 25vw;
      width: 100%;
      height: 18vw;
      transform: scaleY(2);
      background: radial-gradient(circle, rgb(14, 27, 12) 0, transparent 9vw) left -42vw center no-repeat, radial-gradient(circle, rgb(27, 9, 55) 0, transparent 9vw) right -42vw center no-repeat;
    }
  }
</style>