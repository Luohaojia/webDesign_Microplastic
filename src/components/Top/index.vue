<template>
  <div id="top">
    <div class="showTab" @mouseover="isShow = true" @mousleave="isShow = false">
      <div class="btn">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.94971 11.9497H39.9497" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.94971 23.9497H39.9497" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M7.94971 35.9497H39.9497" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <ul class="tab" v-show="isShow" @mouseover="isShow = true" @mouseleave="isShow = false">
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('home')
            }
          "
        >
          首页
        </li>
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('part1')
            }
          "
        >
          01.什么是微塑料
        </li>
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('part2')
            }
          "
        >
          02.微塑料足迹
        </li>
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('part3')
            }
          "
        >
          03.为什么不能忽略微塑料
        </li>
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('part4')
            }
          "
        >
          04.限塑令还不能“限速”
        </li>
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('part5')
            }
          "
        >
          05.限塑被什么限了“速”
        </li>
        <li
          @click="
            () => {
              isShow = false
              this.$router.push('part6')
            }
          "
        >
          06.限塑，我们也要行动
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      isShow: false
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
#top {
  // width: 10%;
  position: absolute;
  top: 0px;
  z-index: 200;
  // border: 1px solid red;
  // height: 50px;

  ul {
    margin: 0;
    padding: 0%;
    list-style: none;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 230px;
    height: auto;
    top: 5px;
    left: 5px;
    color: black;
    font-size: 1em;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 3px 3px 2px 2px rgb(113, 112, 112);
    // border: 1px solid black;
  }
  li:first-child {
    line-height: 60px;
    height: 60px;
    text-align: center;
    padding: 0;
    font-size: 1.2em;
    border-bottom: 3px solid rgb(160, 157, 157);
  }
  li {
    // background-color: rgb(255, 255, 255);
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    box-sizing: border-box;
    // border-radius: 10px;
  }
  li:hover {
    background-color: rgb(200, 240, 250);
    cursor: pointer;
  }
}
// ::v-deep {
//   .v-application--wrap {
//     // height: 1vh;
//     min-height: 1vh;
//   }
// }
</style>
