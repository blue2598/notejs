<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-09-08 14:09:12
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-09-08 14:46:35
 * @FilePath: \vue-js-point\src\view\cssPoint\animation.vue
-->
<template>
  <div class="logo">
    使用css结合js创建动画
  </div>
</template>

<script>
  export default {
    mounted() {
      this.addAnimation();
    },
    methods: {
      addAnimation() {
        let div = document.querySelector("div.logo");
        let divText = [...div.textContent];
        divText.reduce(function (pre, cur, index) {
          pre == index && (div.innerHTML = "")
          let span = document.createElement("span");
          span.innerHTML = cur;
          div.appendChild(span);
          span.addEventListener("mousemove", function () {
            this.classList.add("color-change")
          })
          span.addEventListener("animationend", function () {
            this.classList.remove("color-change")
          })
        }, 0)
      }
    }
  }

</script>

<style>
  .logo {
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .logo span {
    display: inline-block;
    min-width: 10px;
    font-size: 3em;
    cursor: pointer;
  }

  .color-change {
    animation: color .5s linear alternate;
  }

  @keyframes color {
    50% {
      color: #1ABC9C;
      transform: scale(2);
    }

    to {
      color: red;
      transform: scale(.5);
    }
  }

</style>
