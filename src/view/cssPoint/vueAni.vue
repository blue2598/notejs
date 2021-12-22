<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-22 09:17:26
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-22 15:00:50
 * @FilePath: \notejs\src\view\cssPoint\vueAni.vue
-->
<template>
    <div class="root">
        <button @click="isShowFade=!isShowFade">显示/隐藏</button>
        <transition>
            <div v-show="isShowFade">你好,1!</div>
        </transition>
        <hr>
        <button @click="isShowSlide=!isShowSlide">显示/隐藏</button>
        <!-- 如果写了name  类名的v-需要变成name-  appear是一开始显示的时候就执行进入的动画-->
        <transition name="slide" appear>
            <div v-show="isShowSlide">你好,2</div>
        </transition>
        <button @click="isShowSlideRight=!isShowSlideRight">显示/隐藏</button>
        <transition name="slideRight" appear>
            <div v-show="isShowSlideRight" class="slideRight">你好,3</div>
        </transition>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                isShowFade: true,
                isShowSlide: true,
                isShowSlideRight: true,
            }
        },

        methods: {

        }
    }
</script>

<style scoped>
    button,
    div {
        margin: 10px;
        padding: 5px 9px;
    }

    div>div {
        width: 300px;
        background-color: rgb(200, 240, 57);
    }

    .v-enter-active {
        animation: fade .8s ease-in;
    }

    .v-leave-active {
        animation: fade .8s ease-in reverse;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .slide-enter-active {
        animation: slide .8s ease-in;
    }

    .slide-leave-active {
        animation: slide .5s ease-in reverse;
    }

    @keyframes slide {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(0);
        }
    }

    .slideRight {
        transition: 1s linear;
    }

    /* 进入的起点、离开的终点 */
    .slideRight-enter,
    .slideRight-leave-to {
        transform: translateX(-100%);
    }

    .slideRight-enter-to,
    .slideRight-leave {
        transform: translateX(0);
    }
</style>