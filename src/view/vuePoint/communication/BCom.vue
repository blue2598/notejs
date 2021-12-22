<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-19 09:17:40
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 17:23:17
 * @FilePath: \notejs\src\view\vuePoint\communication\BCom.vue
-->
<template>
    <div class="demo bdemo">这里是B组件
        <button @click="sendToA">通过时间总线给A发消息</button></div>
</template>

<script>
    import pubsub from "pubsub-js"
    export default {
        data() {
            return {
                subId: null,
            }
        },
        mounted() {
            // 订阅消息
            // 每次订阅消息的id都不同
            this.subId = pubsub.subscribe("fromA", (eventName, data) => {
                console.log("我接受到了我订阅的事件fromA，这是数据", data);
            })
        },
        methods: {
            sendToA() {
                this.$bus.$emit('fromB', 666)
            }

        },
        beforeDestroy() {
            // 取消订阅需要通过返回的id
            pubsub.unsubscribe(this.subId)
        }
    }
</script>

<style>
    .bdemo {
        background-color: rgb(216, 171, 25);
    }
</style>