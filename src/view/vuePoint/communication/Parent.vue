<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-18 10:12:09
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-14 08:47:53
 * @FilePath: \notejs\src\view\vuePoint\communication\Parent.vue
-->
<template>
    <div class="parent">
        <h1>我是父组件</h1>
        <hr>
        <button @click="getChildMethod">调用子组件的方法</button>
        <div>
            <!-- 父传子 -->
            <!-- :msg="msg" -->

            <!-- 子传父 -->
            <!-- 方法一：alertANum 通过父组件给子组件传递函数类型的props实现：子组件向父组件传递数据 -->
            <!-- 方法二：childCommit 通过父组件给子组件绑定一个自定义事件实现：子组件向父组件传递数据 -->
            <!-- 方法三：childCommit 父组件通过ref给子组件绑定一个自定义事件实现：子组件向父组件传递数据（使用ref） -->
            <Child :msg="msg" :number="90" :alertANum="alertANumParent" ref="childComponent"
                @childCommit="handleCommit">
            </Child>
            <!-- 这里有两个组件：A、B -->
            <ACom></ACom>
            <BCom></BCom>
            <!--C、D组件用vuex通信 -->
            <CCom></CCom>
            <DCom></DCom>
        </div>
    </div>
</template>

<script>
    import Child from "./Child.vue";
    import ACom from "./ACom.vue";
    import BCom from "./BCom.vue";
    import CCom from "./CCom.vue";
    import DCom from "./DCom.vue";
    export default {
        components: {
            Child,
            ACom,
            BCom,
            CCom,
            DCom
        },
        data() {
            return {
                msg: "这是父组件里的msg"
            }
        },
        provide() {
            return {
                provideMsg: "hello"
            }
        },
        mounted() {
            // 通过ref给子组件动态绑定事件，可以放在异步处理之后
            // this.$refs.childComponent.$on("childCommit2", this.handleCommit);
            this.$refs.childComponent.$on("childCommit2", function (data) {
                console.log(this); //这里的this指向组件childComponent实例对象
            });
            // $once只触发一次
            // this.$refs.childComponent.$once("childCommit2", this.handleCommit)
        },
        methods: {
            handleCommit(data) {
                console.log(data);
            },
            getChildMethod() {
                this.$refs.childComponent.showMsg()
            },
            alertANumParent(num) {
                alert("通过给子组件传过去一个函数，使得子组件接收到这个函数，可以直接调用" + num)
            }
        }
    }
</script>

<style>
    button {
        margin: 10px;
        padding: 5px 9px;
    }

    .parent {
        background-color: rgb(9, 133, 155);
        color: #fff;
        padding: 20px;
    }
</style>