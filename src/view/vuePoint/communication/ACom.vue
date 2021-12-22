<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-19 09:17:36
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-25 16:15:05
 * @FilePath: \notejs\src\view\vuePoint\communication\ACom.vue
-->
<template>
    <div class="demo ademo">这里是A组件<button @click="sendToB">通过消息者订阅模式给b发送消息</button></div>
</template>

<script>
    import pubsub from "pubsub-js";
    export default {
        mounted() {
            // 全局注册了$bus
            this.$bus.$on("fromB", data => {
                console.log("我接受到了b触发了自定义事件fromB：这是数据", data);
            });;

        },
        methods: {
            sendToB() {
                // 通过 npm i pubsub-js安装插件，引入使用pubsub.publish(),发布消息
                pubsub.publish('fromA', 888)
            }
        },
        beforeDestroy() {
            this.$bus.$off('fromB');
        }
    }
</script>

<style>
    .demo {
        width: calc(50% - 40px);
        padding: 20px;
        display: inline-block;
        margin: 10px 0;
    }

    .ademo {
        background-color: skyblue;
    }
</style>