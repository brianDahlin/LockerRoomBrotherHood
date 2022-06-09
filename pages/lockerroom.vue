<template>
<div id="lockerroom">
  <div class="navbar-wrapper">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand to="/">
        LRBH
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <img v-if="expanded" src="../static/ham.svg" alt="Open Menu">
          <img v-else src="../static/ham.svg" alt="Close Menu">
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="#about"><img class="d-none d-lg-block" src="../static/nav-about.svg" alt="About"/><span class="d-lg-none">About</span></b-nav-item>
          <b-nav-item to="#roadmap"><img class="d-none d-lg-block" src="../static/nav-roadmap.svg" alt="Roadmap"/><span class="d-lg-none">Roadmap</span></b-nav-item>
          <b-nav-item to="#socials"><img class="d-none d-lg-block" src="../static/nav-socials.svg" alt="Socials"/><span class="d-lg-none">Socials</span></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <div class="d-flex">
            <b-button to="#lockerroom-mint" size="sm" class="nav-mint-button" type="button">MINT</b-button>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
  <section id="lockerroom-hero">
    <div class="hero-video-wrapper absolute">
      <video class="hero-video" poster="/_nuxt/img/lrbh-hero.jpg" playsInline autoPlay muted loop>
        <source src="../static/lrbh.webm" type="video/webm">
          <source src="../static/lrbh.mp4" type="video/mp4">
        </video>
    </div>
    <div class="container-fluid">
      <div class="row h-100 pt-1">
        <div class="col-12 col-lg-4 offset-lg-2 mt-lg-auto col-xl-6 offset-xl-0 mb-xl-4">
          <ul class="hero-social mt-2 mb-lg-4">
            <li><a href="https://discord.gg/4GYvvreWKm" target="_blank" aria-label="discord"><img src="../static/icons/discord.svg" alt="Discord"/></a></li>
            <li><a href="https://twitter.com/LockerRoomBH" target="_blank" aria-label="twitter"><img src="../static/icons/twitter.svg" alt="Twitter"/></a></li>
            <li><a href="https://instagram.com/lockerroombrotherhood" target="_blank" aria-label="instagram"><img src="../static/icons/insta.svg" alt="Instagram"/></a></li>
            <li><a href="https://opensea.io/collection/locker-room-brotherhood-v2" target="_blank" aria-label="opensea" ><img src="../static/icons/opensea.svg" alt="OpenSea"/></a></li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 mt-auto d-flex">
          <b-button class="hero-mint-button" to="#lockerroom-mint" type="button">MINT</b-button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-10 col-sm-12 offset-1 offset-sm-0 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
          <h1>
            <img src="../static/welcomeLR.svg" alt="Welcome to the brotherhood"/>
          </h1>
        </div>
      </div>
    </div>
  </section>
  <section id="about">
    <div class="row waves-top no-gutters">
      <div class="waves-1 waves col-4">
        <img src="../static/waves1.svg"/>
      </div>
      <div class="waves-2 waves col-4">
        <img src="../static/waves2.svg"/>
      </div>
      <div class="waves-3 waves col-4">
        <img src="../static/waves3.svg"/>
      </div>
    </div>
    <div class="container">
      <div class="row mb-3">
        <div class="col-10 offset-1 col-lg-6 offset-lg-1 col-xl-7 offset-xl-0 d-xl-flex align-items-center">
        <Cone :throwCone="false" />
          <p class="mb-0">
            Locker Room Brotherhood is created by blockchain enthusiasts and hockey fans. First of all, it is a community of people that have a passion for the game of hockey and want to share it in physical and digital world. We believe that good old hockey game brings emotions and great memories to people all over the world. And we want to take our own impact on it. To support the community we release 10.000 hand drawn and randomly generated NFTs with benefits to it’s holders.
          </p>
        </div>
        <div class="col-9 offset-1 col-lg-5 offset-lg-0 col-xl-5">
          <Prepic />
        </div>
      </div>
    </div>
    <div class="row waves-bottom no-gutters">
      <div class="waves-1 waves col-4">
        <img src="../static/waves1.svg"/>
      </div>
      <div class="waves-2 waves col-4">
        <img src="../static/waves2.svg"/>
      </div>
      <div class="waves-3 waves col-4">
        <img src="../static/waves3.svg"/>
      </div>
    </div>
  </section>
  <section id="roadmap" class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1 col-xl-8 offset-xl-0">
          <h2>
            <img src="../static/roadmap.svg" alt="Roadmap"/>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-10 offset-1 col-lg-7 offset-lg-2 col-xl-6 offset-xl-0 period period-1">
          <h3>
            1st period<br/>
            Building the community
          </h3>
          <ul>
            <li>Presale</li>
            <li>Mint date</li>
            <li>Paying back GAS FEES for the first 20% NFTs sold</li>
            <li>Expanding our marketing activities and making technical investments</li>
            <li>We airdrop 10 NFTs back to Locker Room Brotherhood NFT holders</li>
            <li>Merch release exclusively for Locker Room Brotherhood NFT holders</li>
            <li>Hockey charity organizations and youth leagues support to make sport accessible for all</li>
          </ul>
        </div>
        <div class="col-10 offset-1 col-md-8 offset-md-2 col-lg-7 offset-lg-4 col-xl-6 offset-xl-0 period period-2">
          <div class="periods-arrow periods-arrow-1">
            <img src="../static/Arrow1.svg" class="d-xl-none"/>
            <img src="../static/Arrow2.svg" class="d-none d-xl-block"/>
          </div>
          <h3>
            2nd period<br/>
            Training camp
          </h3>
          <ul>
            <li>Training camps release. Every community member will be able to join the team of 6 players and attend 2 week training camp to get experience points/tokens. Training camps will be held every 2 weeks</li>
            <li>We announce token utilities</li>
            <li>NFT upgrade mechanics release. Spend your tokens and make more impact on the rink</li>
            <li>10 NFTs will be airdropped to the community members with the most training camp experience</li>
          </ul>
        </div>
        <div class="col-10 offset-1 col-lg-8 offset-lg-2 offset-xl-1 period period-3">
          <div class="periods-arrow periods-arrow-2">
            <img src="../static/Arrow2.svg" class="d-xl-none"/>
            <img src="../static/Arrow1.svg" class="d-none d-xl-block"/>
          </div>
          <h3>
            3rd period<br/>
            Expanding the network
          </h3>
          <ul>
            <li>Our first Team VS Team online hockey tournament announcement. Make a team with other community members and dominate on the ice to win legendary awards and make your legacy be written in Locker Room Brotherhood history</li>
            <li>Alongside online events we are making IRL activities. Take a part in our IRL events to share the fun -on and offline</li>
            <li>Partnerships with major hockey brands, sponsors and players</li>
            <li>Building a fan-player interaction within LRBH community</li>
            <li>Locker Room Brotherhood “fan package” release. This includes tickets to games, snacks and beverages, best offers for hockey gear and clothing from our partners</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <ZamboniContainer class="zamboni-container">
        <ZamboniElement
          :factor="2.8"
          class="zamboni"
        >
          <img src="../static/zamboni.png" class="zamboni-main" alt="Drunk yeti on a zamboni"/>
        </ZamboniElement>
      </ZamboniContainer>
      </div>
    </div>
  </section>
  <section id="lockerroom-mint">
    <div class="row waves-top no-gutters">
      <div class="waves-1 waves col-4">
        <img src="../static/waves1.svg"/>
      </div>
      <div class="waves-2 waves col-4">
        <img src="../static/waves2.svg"/>
      </div>
      <div class="waves-3 waves col-4">
        <img src="../static/waves3.svg"/>
      </div>
    </div>
    <div class="container mint-container">
      <div class="row">
        <div class="col-10 offset-1 col-xl-8 offset-xl-0">
          <h2>
            <img src="../static/jtb.svg" alt="Join the brotherhood"/>
          </h2>
          <p class="text-uppercase">1 NFT COST 0,08 ETH.</p>
          <p class="text-uppercase">COLLECTION 10.000 NFTs.</p>
        </div>
        <div class="col-12 col-xl-4 offset-xl-0 d-flex flex-wrap align-items-center justify-content-center">
          <div class='mint-counter-button-flex'>
            <div class="mint-counter">
              <button type="button" class="mint-minus" @click="mintQuantity(-1)"><span class="text-white">–</span></button>
              <input class="mint-quantity d-inline-block" max-length="2"
                  :value="quantity"
                  @input="event => inputHandler(event.target.value)"
              />
              <button type="button" class="mint-plus" @click="mintQuantity(1)"><span class="text-white">+</span></button>
            </div>
            <button id="mint-button-pink" @click="mintNft()" class="btn">MINT</button>
          </div>
          <div class="timer">
            <client-only>
              <flip-countdown :labels="labels" deadline="2022-06-08 20:00:00 UTC">
              </flip-countdown>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <div class="row waves-bottom no-gutters">
      <div class="waves-1 waves col-4">
        <img src="../static/waves1.svg"/>
      </div>
      <div class="waves-2 waves col-4">
        <img src="../static/waves2.svg"/>
      </div>
      <div class="waves-3 waves col-4">
        <img src="../static/waves3.svg"/>
      </div>
    </div>
  </section>
  <footer>
    <div class="bench" >
      <img src="../static/bench.png" class="bench-back" alt="fan zone and a bench"/>
      <div class="animations d-none">
          <img src="../static/yeti-1-alive.gif" ref="yetis[0]" rel="preload"/>
          <img src="../static/yeti-2-alive.gif" ref="yetis[1]" rel="preload"/>
          <img src="../static/yeti-3-alive.gif" ref="yetis[2]" rel="preload"/>
          <img src="../static/yeti-4-alive.gif" ref="yetis[3]" rel="preload"/>
      </div>
      <div class="animations w-100">
          <img src="../static/yeti-1-alive.gif" v-if="yetiAlive[0]"/>
          <img src="../static/yeti-2-alive.gif" v-if="yetiAlive[1]"/>
          <img src="../static/yeti-3-alive.gif" v-if="yetiAlive[2]"/>
          <img src="../static/yeti-4-alive.gif" v-if="yetiAlive[3]"/>
      </div>
      <div class="players">
        <figure class="yeti" id="yeti-3" v-if="!yetiAlive[3]" @click="hitYeti(3)">
          <img src="../static/yeti-4.png"/>
        </figure>
        <figure class="yeti" id="yeti-2" v-if="!yetiAlive[2]" @click="hitYeti(2)">
          <img src="../static/yeti-3.png"/>
        </figure>
        <figure class="yeti" id="yeti-1" v-if="!yetiAlive[1]" @click="hitYeti(1)">
          <img src="../static/yeti-2.png"/>
        </figure>
        <figure class="yeti" id="yeti-0" v-if="!yetiAlive[0]" @click="hitYeti(0)">
          <img src="../static/yeti-1.png"/>
        </figure>
        <div class="checkScreen" v-b-visible.once="firstYetiIsOnScreen"></div>
      </div>
    </div>
    <div class="container">
      <div class="row our-socials" id="socials">
        <div class="col-10 offset-1 col-lg-4 offset-xl-0 socials-left">
          <h2><img src="../static/our_socials.svg" alt="Our socials"/></h2>
          <div class="row">
            <div class="col-6 col-lg-12">
              <a href="https://discord.gg/4GYvvreWKm" target="_blank" aria-label="discord" class="discord"><img src="../static/icons/discordL.svg" alt="Discord"/><span>Discord</span></a>
              <a href="https://twitter.com/LockerRoomBH" target="_blank" aria-label="twitter" class="twitter"><img src="../static/icons/twitterL.svg" alt="Twitter"/><span>Twitter</span></a>
            </div>
            <div class="col-6 col-lg-12">
              <a href="https://instagram.com/lockerroombrotherhood" target="_blank" aria-label="instagram" class="instagram"><img src="../static/icons/instaL.svg" alt="Instagram"/><span>Instagram</span></a>
              <a href="https://opensea.io/collection/locker-room-brotherhood-v2" target="_blank" aria-label="opensea" class="opensea"><img src="../static/icons/openseaL.svg" alt="OpenSea"/><span>OpenSea</span></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5 offset-lg-2 offset-xl-3 socials-right">
          <h2><img src="../static/featured_on.svg" alt="Featured on"/></h2>
          <div class="logos text-center">
            <a href="https://nftdesire.io/" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nft_desire.png" alt="NFT Desire"/></a>
            <a href="https://www.benzinga.com" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/benzinga.png" alt="Benzinga"/></a>
            <a href="https://nfsea.tools/upcoming" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nfsea_tools.png" alt="NFSea Tools" class="mx-3"/></a>
            <a href="https://raritysniper.com/nft-drops-calendar?saleDate=2022-06-08" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/rarity_sniper.png" alt="Rarity Sniper" class="mx-3"/></a>
            <a href="http://upcomingnft.net/" class="mb-2 d-inline-block" target="_blank"><img src="../static/logos/upcoming.png" alt="Upcoming NFT" class="mx-3"/></a>
            <a href="https://rarity.tools/upcoming" class="mb-2 d-inline-block" target="_blank"><img src="../static/logos/rt.png" alt="Rarity Tools" class="mx-3"/></a>
            <a href="https://www.nftdroplist.co.uk/nft-drop-calendar/" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nftdroplist.png" alt="NFT Droplist" class="mx-3"/></a>
            <a href="https://www.nftfigure.org" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nft_figure.png" alt="NFT Figure" class="mx-3"/></a>
            <a href="https://nftheaven.site/nft/locker-room-brotherhood/" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nft_heaven.png" alt="NFT Heaven" class="mx-3"/></a>
            <a href="https://nftevening.com/event/first-worldwide-hockey-nft-project/" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nft_evening.png" alt="NFT evening" class="mx-3"/></a>
            <a href="https://dappradar.com/nft/sales" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/dapp_radar.png" alt="Dappradar" class="mx-3"/></a>
            <a href="https://upcomingnft.art/locker-room-brotherhood/" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/upcoming_nft_art.png" alt="UpcomingNft art" class="mx-3"/></a>
            <a href="https://nftcalendar.io/event/locker-room-brotherhood/" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nft_calendar.png" alt="NFT Calendar.io" class="mx-3"/></a>
            <a href="https://raritysniffer.com/upcoming/locker-room-brotherhood" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/rarity_sniffer.png" alt="Rarity sniffer" class="mx-3"/></a>
            <a href="https://www.nftdropscalendar.com/nft-drops/locker-room-brotherhood" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nft_drop_calendar.png" alt="NFTDropcalendar" class="mx-3"/></a>
            <a href="https://niftydrops.io/nft-drops/locker-room-brotherhod" class="mx-2 mb-2 d-inline-block" target="_blank"><img src="../static/logos/nifty_drops.png" alt="Niftydrops" class="mx-3"/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <section id="lockerroom-copyright">
    <div class="row pb-3 waves-top no-gutters">
      <div class="waves-1 waves col-4 p-0">
        <img src="../static/waves1.svg"/>
      </div>
      <div class="waves-2 waves col-4 p-0">
        <img src="../static/waves2.svg"/>
      </div>
      <div class="waves-3 waves col-4 p-0">
        <img src="../static/waves3.svg"/>
      </div>
    </div>
    <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <p class="launcher-copyright text-white text-uppercase mt-3 view-contract">
              VERIFIED&nbsp;SMART&nbsp;CONTRACT&nbsp;ADDRESS:&nbsp;
              <a class='contract-link' href='https://etherscan.io/address/0x45307591960C5A8da729521f7761F6978Ef5aC05' target='_blank'>
                https://etherscan.io/address/0x45307591960C5A8da729521f7761F6978Ef5aC05
              </a>
            </p>
            <div class="goalie-mask">
              <img src="../static/mask.png"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <p class="launcher-copyright text-white text-uppercase mt-3">
              Copyright&nbsp;2022 • Locker&nbsp;Room&nbsp;Brotherhood • All&nbsp;rights&nbsp;reserved.
            </p>
            <div class="goalie-mask">
              <img src="../static/mask.png"/>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown'
import {
    infuraId,
    RPCProvider,
    netId,
    chainId,
    contract_address,
    contract_scan,
    tokenSymbol,
    mintPrice,
} from '../assets/js/config.js'
import {
    initWeb3,
} from '../assets/js/connect.js'
import {
    mint,
} from '../assets/js/mint.js'
import "toastify-js/src/toastify.css"


export default {
  components: { FlipCountdown },
  data () {
    return {
      labels: { days: 'Days', hours: 'Hrs', minutes: 'Min', seconds: 'Sec', },
      yetiAlive: [false, false, false, false],
      yetiAliveDuration: [960, 1080, 930, 1230],
      quantity: 1,
      web3: null,
      provider: null,
      account: null,
    }
  },
  mounted() {
  },
  methods : {
    hitYeti(yeti) {
      this.yetiAlive.splice(yeti, 1, true)
      let src = this.$refs["yetis["+yeti+"]"].src
      document.querySelector("#yeti-"+(yeti)+" img").setAttribute('src', src)
      setTimeout( () =>  this.yetiAlive.splice(yeti, 1, false), this.yetiAliveDuration[yeti])
    },
    firstYetiIsOnScreen(ohReally) {
      if (ohReally) this.hitYeti(0)
    },
    inputHandler(value) {
      console.log(value)
      let number = value.replace(/\D/g, "")
      if(Number(number)<1&&value!=''){
        this.quantity = ''
        this.quantity = 1
      } else if (Number(value)>20) {
        this.quantity = ''
        this.quantity = 20
      } else {
        this.quantity = ''
        this.quantity = number
      }
      console.log(this.quantity)
      
    },
    mintQuantity(q) {
      if ((this.quantity + q) < 21 && (this.quantity + q) > 0 ) this.quantity += q
    },
    async mintNft() {
    if(!this.web3 || !this.provider){
      console.log('connect')
      const res = await initWeb3()
      if(!res) return
      this.web3 = res.web3 
      this.provider = res.provider
      this.account = res.account
    }
    console.log('this',this.web3, this.provider)
    this.quantity = Number(this.quantity)>0? this.quantity : 1
    await mint(this.web3, this.account, this.quantity)
    }
  }
}
</script>

<style lang="scss">

#lockerroom {
    background-color: #D9FBFF;

    &:not(.page-enter-active) {
    overflow: hidden;
      #about {
        overflow: hidden;
      }
    }

  .navbar-wrapper {
    position: relative;
    z-index: 1;

    .navbar {
      padding: 0;
      padding-left: 1em;

      @media screen and (min-width: 992px) {
        padding: .5625em 0 1.05em .8em;
      }

      @media screen and (min-width: 1024px) {
        padding: .5em 0 .5em 5em;
      }

      @media screen and (min-width: 1200px) {
        padding: .5em 0 .5em 6em;
      }

      .navbar-brand {
        margin:0;
        padding: 0;
        font-size: 1.25em;
        font-weight: 900;
        color: #DC1BE0;
        text-shadow: -.1em 0 0 #4A1452;

        @media screen and (min-width: 992px) {
          font-size: 1.5em;
          line-height: 1;
        }

        @media screen and (min-width: 1024px) {
          font-size: 3em;
        }
      }

      .navbar-toggler {
        border: none;
        padding: 0;
      }

      .navbar-collapse {
        @media screen and (min-width: 992px) {
          justify-content: space-around
        }

        .navbar-nav {

          .nav-link {
            font-size: 1em;
            font-weight: 900;
            text-transform: uppercase;
            color: #D232EA;
            text-align: center;
          }

          @media screen and (min-width: 992px) {
            min-width: 30em;
            justify-content: space-around;
          }

          @media screen and (min-width: 1200px) {
            margin-left: 15em;
          }
        }

        .nav-mint-button {
          box-shadow: 0px 1px 1em #43bcdd;
          background: white;
          border: none;
          width: 5.655em;
          line-height: 1.2em;
          margin: 1.8em auto 4em;
          font-size: 1.05em;
          font-weight: 900;
          color: #43BCDD;
          text-shadow: 0px 0px 0.6875em #43bcdd;

          @media screen and (min-width: 992px) {
            margin: 0 0 0 auto;
          }

          @media screen and (min-width: 1024px) {
            line-height: 2.1435;
            width: 8.8695em;
          }

          @media screen and (min-width: 1200px) {
            margin-right: 5em;
          }
        }
      }
    }

    &::before {
      content: '';
      width: 100%;
      height: 5em;
      background: url(../static/nav-bottom.svg) center no-repeat;
      background-size: cover;
      display: block;
      position: absolute;
      bottom: -4.7em;
      pointer-events: none;

      @media screen and (min-width: 1920px) {
        height: 5vw;
        bottom: -4.7vw;
      }
    }
  }

  #lockerroom-hero {

    @media screen and (min-width: 1200px) {
      background: url(../static/wtf.svg) center no-repeat;
      background-size: contain;
    }

    .hero-video-wrapper {
      position: absolute;
      left:0;
      right:0;
      height: 56.25vw;
      max-height: calc(100vh - 6em);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      video {
        height: 100%;
        position: absolute;
        object-fit: cover;
        object-position: center;
      }

      @media screen and (min-width: 1200px) {
        height: calc(100vh - 8.5em);    
        max-height: unset;
      }
    }
    
    .container-fluid {
      // background: linear-gradient(180deg, rgba(38, 52, 56, 0) 0%, rgba(10, 64, 79, 0.693) 81.25%, rgba(20, 108, 132, 0.9) 100%) bottom no-repeat;
      // background-size: 100% 4.5em;
      height: 56.25vw;
      max-height: calc(100vh - 6em);
      position: relative;

      // @media screen and (min-width: 992px) {
      //   background-size: 100% 14em; 
      // }

      @media screen and (min-width: 1200px) {
        height: calc(100vh - 8.5em);
        max-height: unset;
        // background: none;
      }
    
      ul.hero-social {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
            -ms-flex-direction: row;
                flex-direction: row;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        -webkit-box-pack: space-around;
            -ms-flex-pack: space-around;
                justify-content: space-around;
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        top: -3.2em;
        width: 50%;
        left: 25%;
        z-index: 100;

        @media screen and (min-width: 992px) {
          position: relative;
          width: 30px;
          left: auto;
          top: auto;
        }

        @media screen and (min-width: 1200px) {
          margin-left: 1.5em;
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
          a {
            text-align: center;
            width: 30px;

            img {
              width: 100%;
            }
            
            @media screen and (min-width: 992px) {
              margin-bottom: 30px !important;
            }
          }
        }
      }

      .hero-mint-button {
        background: url(../static/mint-button-bg.png) bottom center no-repeat;
        background-color: #43BCDD;
        background-size: cover;
        padding: .9375vw 9.26vw;
        font-weight: 700;
        font-size: clamp(1em, 5vw, 1.8em);
        color: white;
        margin: auto auto 1.6875em;
        border: none;
        border-radius: 1px;
        box-shadow: 0px 1px 17px #43BCDD;

        @media screen and (min-width: 992px) {
          padding: 0.2625em 2.2em;
          font-size: 2.5em;
        }

        @media screen and (min-width: 1200px) {
          margin-bottom: 18vh;
          font-size: 4.5vh;
          margin-left: 30vh;
        }
      }
    }
  }

  h1 {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -9vw;
    margin: 0;
    z-index: 1;

    img { 
      width: 100%;
    }

    @media screen and (min-width: 576px) {
      bottom: -1.367em;
    }

    @media screen and (min-width: 768px) {
      bottom: -1.825em;
    }

    @media screen and (min-width: 992px) {
      bottom: -2em;
    }

    @media screen and (min-width: 1200px) {
      bottom: -1.6em;
    }
  }

  h2 {
    height: clamp(0.825em, 7.8125vw, 1.6875em);
    margin-bottom: 0.825em;
    text-align: center;

    @media screen and (min-width: 992px) {
      height: 1.6875em;
    }

    @media screen and (min-width: 1200px) {
      height: 2.28125em;
      text-align: left;
    }

    img {
      height: 100%;
      width: auto;
      max-width: 100%;
    }
  }

  #about, #lockerroom-mint {
    background: radial-gradient(30.69% 47.81% at 57.18% 33.44%, #68D1EA 0%, #1D8CB2 100%) no-repeat;
    background-color: #1D8CB2;
    // border-top: solid 1px black;
    margin-top: -1px;
    position: relative;

    // @media screen and (min-width: 1600px) {
    //   border-top: none;
    // }

    &::before, &::after {
      content: "";
      width: 100%;
      height: 16.425vw;
      background: url(../static/ice-top.svg) bottom center no-repeat;
      background-size: cover;
      display: block;
      position: absolute;

      @media screen and (min-width: 1200px) {
        height: 13.425vw;
      }
    }

    &::after {
      transform: scaleY(-1);
      position: relative;
      top: 1px;
    }

    .waves-top, .waves-bottom {
      height: 20vw;
      overflow: hidden;
      pointer-events: none;

      @media screen and (min-width: 1200px) {
        height: 16vw;
      }

      .waves img{
        max-width: 100%;
        width: 100%;
        margin-top: 12.5vw;
        display: block;
        animation: wavin 1s ease-in-out infinite;

        @media screen and (min-width: 1200px) {
        margin-top: 8.5vw;
        }
      }

      .waves-1 img {
        margin-left: -1vw;
      }

      .waves-2 img {
        animation-delay: .5s;
      }

      .waves-3 img {
        margin-left: 4vw;
      }
    }

    .cone {
      pointer-events: none;
      position: absolute;
      display: block;
      width: 10vw;
      height: 10.1vw;
      left: calc(1.25em - 10vw);
      animation: floating 1s infinite;

      @media screen and (min-width: 576px) {
        width: 3.6em;
        height: 3.636em;
        left: -2.35em;
      }

      @media screen and (min-width: 992px) {
        width: 5em;
        height: 5.25em;
        left: -4.5em;
      }

      @media screen and (min-width: 1200px) {
        width: 6em;
        height: 6.75em;
        left: -2.5em;
        margin-top: -4em;
      }

      &::after {
        content: "";
        width: 150%;
        height: 110%;
        position: absolute;
        background: url(../static/waves-cone.svg) bottom right no-repeat;
        background-size: contain;
        left: -25%;
        animation: wavin .628s infinite
      }
    }

    p {
      font-family: Aldrich;
      font-weight: 400;
      font-size: clamp(0.75em, 3.75vw, 1.265625em);
      color: white;
      line-height: 1;
      position: relative;
    }

    .waves-bottom {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      transform: scaleY(-1);
    }
  }

  #about p {
    @media screen and (min-width: 992px) {
      font-size: 1.5em;
    }
  }

  #roadmap {
    // overflow: hidden;

    background: url(../static/periods-bg.jpg) center no-repeat;
    background-size: cover;

    h2 {
      margin-top: -2em;    
      z-index: 1;
      position: relative;
    }

    .period {
      padding: 20vw 0;

      @media screen and (min-width: 576px) {
        padding: 7em 0;      
      }

      h3 {
        font-size: 0.875em;
        font-size: clamp(0.875em, 4.375vw, 1.476562em);
        color: #329DEA;
        font-weight: 700;
        position: relative;
        text-transform: uppercase;
        margin-bottom: .6em;

        @media screen and (min-width: 992px) {
          font-size: 1.875em;
        }
      }

      ul {
        padding-left: 15px;
      }

      p, li {
        font-family: Aldrich;
        font-size: 0.75em;
        font-size: clamp(0.75em, 3.75vw, 1.265625em);
        font-weight: 600;
        position: relative;
        line-height: 1.1;
        margin-bottom: 0;

        @media screen and (min-width: 992px) {
          font-size: 1.0625em;
          font-weight: 400;
        }
      }

      .periods-arrow {
        position: absolute;
        top: -15vw;
        left: 7vw;
        width: 43.4375vw;

        @media screen and (min-width: 576px) {
          top: -5.4em;
          left: 2.52em;
          width: 15.625em;
        }

        @media screen and (min-width: 992px) {
          left: -5em;
        }
        
        img {
          width: 100%;
        }

        &.periods-arrow-1 {
          @media screen and (min-width: 1200px) {
            transform: rotate(285deg);
            left: 0;
            top: -1em;
            width: 17.1875em;
          }
        }

        &.periods-arrow-2 {
          top: -10vw;
          right: 0;
          left: auto;
          width: 34vw;

          @media screen and (min-width: 576px) {
            top: -3.6em;
            width: 12.25em;
          }

          @media screen and (min-width: 992px) {
            width: 24em;
            right: 6em;
          }

          @media screen and (min-width: 1200px) {
            transform: rotate(60deg);
            width: 20em;
            top: 0;
            right: auto;
            left: 15.5em;
          }
        }
      }

      &.period-1 {
        margin-top: -2em;

        @media screen and (min-width: 992px) {
          padding: 12em 0 6em;
          margin-top: -6em;
        }

        @media screen and (min-width: 1200px) {
          padding: 11em 0 0;
        }

        h3 {
          @media screen and (min-width: 768px) and ( max-width: 992px) {
            max-width: 22.286em;
            margin-left: 0.85em;
          }
        }


        ul {
          @media screen and (min-width: 768px) {
            max-width: 26em;
            margin-left: 1em;
          }

          @media screen and (min-width: 992px) {
            max-width: 31em;
          }
        }
      }

      &::before {
        content: "";
        position: absolute;
        width: 100vw;
        height: 100%;
        left: calc(50% - 50vw);
        top: 0;
        background: url(../static/period1.png) center top no-repeat;
        background-size: cover;

        @media screen and (min-width: 768px) {
          width: 768px;
          left: -84px;
        }

        @media screen and (min-width: 992px) {
          width: 730px;
          left: -120px;
          background-image: url(../static/period1-dt.png);
        }

        @media screen and (min-width: 1200px) {
          width: 716px;
          left: -107px;
          background-size: contain;
        }
      }

      &.period-2 {
        padding-top: 30vw;

        @media screen and (min-width: 576px) {
          padding-top: 10.8em;
        }

        @media screen and (min-width: 992px) {
          padding-top: 15em;
        }

        ul {
          @media screen and (min-width: 992px) {
            max-width: 29em;
          }

          @media screen and (min-width: 1200px) {
            max-width: 30em;
            margin-left: auto;
          }
        }

        h3 {
          @media screen and (min-width: 1200px) {
            max-width: 16em;
            margin-left: auto;
          }
        }

        &::before {
          background-image: url(../static/period2.png);

          @media screen and (min-width: 768px) {
            left: -144px;
          }

          @media screen and (min-width: 992px) {
            width: 725px;
            left: -120px;
            background-image: url(../static/period2-dt.png);
          }

          @media screen and (min-width: 1200px) {
            left: -35px;
          }
        }
      }

      &.period-3 {
        padding-bottom:45vw;

        @media screen and (min-width: 576px) {
          padding-bottom: 16.2em;
        }

        @media screen and (min-width: 768px) {
          padding-top: 5em;
          padding-bottom: 12.2em;
        }

        @media screen and (min-width: 992px) {
          padding-top: 18em;
          padding-bottom: 15em;
        }

        @media screen and (min-width: 1200px) {
          margin-top: -11.5em;
          padding-top: 19em;
        }

        ul {
          @media screen and (min-width: 992px) {
            font-size: 1em;
          }
          
          @media screen and (min-width: 1200px) {
            max-width: 38em;
            margin-left: 5em;
          }
        }

        h3 {
          @media screen and (min-width: 1200px) {
            max-width: 20.266667em;
            margin-left: 2.666667em;
          }
        }
        
        &::before {
          background-image: url(../static/period3.png);

          @media screen and (min-width: 768px) {
            width: 100vw;
            left: calc(50% - 50vw);
          }

          @media screen and (min-width: 992px) {
            width: 920px;
            left: -162px;
            background-image: url(../static/period3-dt.png);
          }

          @media screen and (min-width: 1200px) {
            width: 855px;
            left: -66px;
          }
        }
      }
    }

    .zamboni-container {
      width: 100%;
      position: relative;
    }

    .zamboni {
      position: relative;
      width: 77.5vw;
      margin: -42vw 0 0 -1.5em;
      z-index: 1;

      @media screen and (min-width: 576px) {
        width: 27.875em;
        margin-top: -15em;
      }

      @media screen and (min-width: 768px) {
        width: 37.16666em;
        margin-top: -11em;
      }

      @media screen and (min-width: 992px) {
        width: 29.75em;
        margin-top: -9em;
      }

      @media screen and (min-width: 1200px) {
        width: 40em;
        margin-top: -9em;
        margin-bottom: 1em;
      }
      
      img {
        width: 100%;
      }

      .zamboni-wheel {
          position: absolute;
          bottom: 0px;
          width: 13vw;
          left: 52.75vw;

        @media screen and (min-width: 576px) {
          width: 4.7em;
          left: 19em;
        }

        @media screen and (min-width: 768px) {
          width: 6.25em;
          left: 25.3em;
        }

        @media screen and (min-width: 992px) {
          width: 5em;
          left: 20.25em;
        }

        @media screen and (min-width: 1200px) {
          width: 6.75em;
          left: 27.25em;
        }

        &.wheel-1 {
          left: 21vw;

          @media screen and (min-width: 576px) {
            left: 7.5em;
          }

          @media screen and (min-width: 768px) {
            left: 10em;
          }

          @media screen and (min-width: 992px) {
            left: 8em;
          }

          @media screen and (min-width: 1200px) {
            left: 10.75em;
          }
        }
      }
    }

    &::after {
      @media screen and (min-width: 1200px) {
        content: "";
        width: 100%;
        height: 2.5625em;
        margin-top: -2.5em;
        left: 0;
        position: absolute;
        background: url(../static/ice.png) center bottom no-repeat;
        background-size: cover;
        z-index: 0;
      }
    }
  }

  #lockerroom-mint {
    background-image: radial-gradient(84.69% 59.81% at 57.18% 33.44%, #68D1EA 0%, #1D8CB2 100%);
    border: none;
    overflow: hidden;

    .mint-container {
        
      @media screen and (min-width: 1200px) {
        margin-top: -3em;
      }

      p {
        text-align: center;
        
        @media screen and (min-width: 1200px) {
          text-align: left;
        }
      } 
    }

    h2 {
      position: relative;
      bottom: auto;
      @media screen and (min-width: 1200px) {
        max-width: 19.125em;
      }
    }

    p {
      @media screen and (min-width: 992px) {
        font-size: 1.8em;
      }
    }

    .mint-counter {
      margin: 0 0 0 auto;
      display: flex;
      flex-wrap:nowrap;
      align-items: center;
      gap:5px;
      .mint-minus, .mint-plus{
        border: 0;
        background: 0;
        margin: 0;
        padding: 0;

        span {
          font-size: 2.5rem;
          font-weight: 500;
        }
      }

      .mint-quantity {
        font-size:2.5em;
        font-weight: 500;
        width: 1.5em;
        padding: 0 0.2em;
        border-radius: 0.15em;
        border: white;
      }
    }

    .btn {
      font-size: clamp(1.5em, 7.5vw, 2.4375em);
      font-weight: 900;
      line-height: 2;
      color:#D232EA;
      text-shadow: 0px 0px 0.6875em rgba(255, 8, 186, 0.85);
      margin: 1em auto 1em .75em;
      padding: 0 2.2em;
      background: white;
      box-shadow: 0px 1px 1em rgba(255, 8, 186, 0.87);
      border: none;

      @media screen and (min-width: 1200px) {
        line-height: 2.1;
        padding: 0 1.35em;
        margin: 0.5em auto 0.5em 0.75em;
      }
    }

    .timer {

      .container {
        padding: 0;
      }

      .flip-card {
        box-shadow: 0 2em 3em 1em #00000028;
      }

      .flip-card__top, .flip-card__bottom, .flip-card__back-bottom, .flip-card__back::before, .flip-card__back::after {
        color: #4a1452;
        background-color: #fafafa;
        width: 16.6vw;
        
        @media screen and (min-width: 576px) {
          width: 2.397778em;
        }
        
        @media screen and (min-width: 1200px) {
          width: 1.55em;
        }
      }

      .flip .flip-card__bottom, .flip .flip-card__bottom-4digits, .flip-card__back-bottom {
        background-color: white;
      }

      .flip-clock__slot {
        margin-top: 0.666667em;
        text-transform: uppercase;
        font-size: clamp(.75em, 3.75vw, 1.21875em);
        font-weight: bold;
        font-family: 'Aldrich';
        color: white;
        position: relative;
      }

      .flip-clock__piece {
        margin: 1.2vw;

        @media screen and (min-width: 576px) {
          margin-top: 0.4em;
        }

        @media screen and (min-width: 1200px) {
          margin: 0.4em;
        }
      }

      .flip-clock__piece:not(:last-child) .flip-card:after {
        content: ':';
        position: absolute;
        right: -2vw;
        top: 1vw;

        @media screen and (min-width: 576px) {
          right: -0.24em;
          top: 0.1em;
        }
      }
    }
    
    .waves-bottom {
      transform: scale(-1);
    }

    &::after {
      transform: scale(-1);
    }
  }

  footer {

    .bench {
      position: relative;
      margin-top: -15vw;

      @media screen and (min-width: 1200px) {
        margin-top: -5vw;
      }
      
      img {
        width: 100%;
      }

      .bench-back {
        position: relative;
      }

      .animations {
        position: absolute;
        top: 0;

        img {
          position: absolute;
        }
      }

      .players {
        position: absolute;
        bottom: 52.75vw;

        .yeti {
          display: block;
          margin: 0;
          position: absolute;
          cursor: pointer;

          // &::after{
          //   content: "";
          //   width: 100%;
          //   height: 3vw;
          //   background: url(../static/click.svg) center center no-repeat;
          //   background-size: contain;
          //   position: absolute;
          //   left:0;
          //   bottom: 1vw;
          // }

          &#yeti-0 {
            width: 28.35vw;
            left: 7.85vw;

            // &::after {
            //   width: 28.35vw;
            //   bottom: 8vw;
            // }
          }
          &#yeti-1 {
            width: 19vw;
            left: 33.75vw;

            // &::after {
            //   width: 19vw;
            // }
          }
          &#yeti-2 {
            width: 23.4vw;
            left: 54.5vw;

            // &::after {
            //   width: 23.4vw;
            // }
          }
          &#yeti-3 {
            width: 26vw;
            left: 73.9vw;

            // &::after {
            //   width: 26vw;
            // }
          }
        }

        .checkScreen {
          position: absolute;
          bottom: -35vw;
        }
      }
    }

    .our-socials {
      padding-top: 13.125vw;
      background: url(../static/gee-gee.png) center bottom no-repeat;
      background-size: 45vw;

      @media screen and (min-width: 576px) {
        padding-top: 4.265625em;
        padding-bottom: 4em;
        margin-bottom: -4em;
        position: relative;
        z-index: 1;
      }

      @media screen and (min-width: 768px) {
        padding-bottom: 5.5em;
        margin-bottom: -5.5em;
      }

      @media screen and (min-width: 992px) {
        padding-bottom: 4em;
        margin-bottom: -8em;
        background-size: 22.875em;
      }

      @media screen and (min-width: 1200px) {
        padding-bottom: 5.5em;
        margin-bottom: -10.5em;
        background-size: 26.375em;
        padding-top: 6.5em;
      }

      h2 {
        position: relative;
        bottom: auto;
        margin-bottom: 10vw;
        
        @media screen and (min-width: 576px) {
          margin-bottom: 1.2em;
        }

        @media screen and (min-width: 1200px) {
          text-align: center;
        }
      }

      .socials-left a {
        border-radius: 999px;
        font-family: 'Aldrich';
        font-size: clamp(.625em, 3.125vw, 1em);
        line-height: 2.8;
        color: white;
        text-transform: uppercase;
        padding: 0 1em;
        margin: 0 auto 0.7em;
        display: flex;
        max-width: 10.5em;
        
        @media screen and (min-width: 992px) {
          font-size: 1.25em;
          max-width: 14.5em;
          line-height: 1.85;
          padding: 0 1em;
        }
        
        @media screen and (min-width: 1200px) {
          font-size: 1.875em;
          max-width: 11.666667em;
        }

        img {
          width: 1.25em;
          vertical-align: middle;
          margin-right: auto;
        }

        span {
            margin-right: auto;
        }

        &.discord {
          background-color: #555FE6;
        }
        
        &.twitter {
          background-color: #4B9AE4;
        }
        
        &.instagram {
          background: linear-gradient(180deg, #713FA3 0%, #A63D87 29.17%, #D1604F 57.81%, #ECBE68 94.27%);
        }
        
        &.opensea {
          background: linear-gradient(180deg, #396DB0 0%, #4B70DD 25.52%, #4D8EDD 55.21%, #58ABA0 100%);

          img{
            margin-top: .775em;
            height: 1.25em;
        
            @media screen and (min-width: 992px) {
              margin-top: .3em;
            }
          }
        }
      }
    }
  }

  #lockerroom-copyright {
    background: radial-gradient(30.69% 47.81% at 57.18% 33.44%, #68D1EA 0%, #1D8CB2 100%) no-repeat;
    background-color: #1D8CB2;
    padding-bottom: 5vw;
    overflow: hidden;
      
      @media screen and (min-width: 576px) {
        padding-bottom: 3em;
      }
      
      @media screen and (min-width: 1200px) {
        padding-bottom: 5em;
      }

    &::before {
      content: "";
      width: 100%;
      height: 16.425vw;
      background: url(../static/ice-top.svg) bottom center no-repeat;
      background-size: cover;
      display: block;
      position: absolute;
      margin-top: -1px;
    }

    .top-waves{ 
      position: relative;
      overflow: hidden;
    }

    p {
      font-size: 3.125vw;
      position: relative;
      z-index: 1;
      
      @media screen and (min-width: 576px) {
        font-size: 1em;
      }
      
      @media screen and (min-width: 996px) {
        font-size: 1.25em;
      }
    }

    .waves img{
      max-width: 100%;
      width: 100%;
      margin-top: 12.5vw;
      display: block;
      animation: wavin 1s ease-in-out infinite;
    }

    .waves-1 img {
      margin-left: -1vw;
    }

    .waves-2 img {
      animation-delay: .5s;
    }

    .waves-3 img {
      margin-left: 4vw;
    }

    .goalie-mask {
      pointer-events: none;
      position: absolute;
      display: block;
      width: 10vw;
      height: 9.5vw;    
      right: 2vw;
      margin-top: 1em;
      animation: floating 1s infinite;

      @media screen and (min-width: 576px) {
        right: 0;
      }

      @media screen and (min-width: 992px) {
        margin-top: 0;
      }

      @media screen and (min-width: 1200px) {
        right: -2.5vw;
        margin-top: -2em;
        width: 11vw;
        height: 10.5vw;
      }

      img {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
        top: 0;
      }

      &::after {
        content: "";
        width: 150%;
        height: 110%;
        position: absolute;
        background: url(../static/waves-cone.svg) bottom right no-repeat;
        background-size: contain;
        left: -25%;
        animation: wavin .628s infinite
      }
    }
  }

  // &.page-enter-active {
  //   overflow: visible;

  //   #about {
  //     overflow: visible;
    
  //     .cone {

  //       animation: none;
  //       z-index: 100;
        
  //       &::after {
  //         display: none;
  //       }

  //       img {
  //         animation: spin .3s, falling-in .6s;
  //         animation-iteration-count:  infinite, 1;
  //         animation-timing-function: linear;
  //       }
  //     }
  //   }
  // }

  // @keyframes falling-in {
  //   0% {
  //     top:-200vh;
  //     left: -50vw;
  //     width: 110vw;
  //   }
  //   100% {
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //   }
  // }

  @keyframes wavin {
    0% {
      top:0;
      transform: scale(1, 1.1)
    }
    50% {
      top: 1vw;
      transform: scale(1.0125, .9)
    }
    100% {
      top:0;
      transform: scale(1, 1.1)
    }
  }

  @keyframes floating {
    0% {
      top:0;
      transform: rotate(0)
    }
    50% {
      top: 1vw;
      transform: rotate(5deg)
    }
    100% {
      top:0;
      transform: rotate(0)
    }
  }
}

.mint-counter-button-flex{
  display: flex;
  flex-wrap: nowrap !important;
}
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