<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-18 10:14:03
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-14 08:48:42
 * @FilePath: \notejs\src\view\vuePoint\communication\Child.vue
-->
<template>
    <div class="child">
        <h3>这里是Child组件</h3>
        子组件通过props接收到父组件传过来的值
        <p>接收到：{{msg}}</p>
        <p>接收到：{{number + 1}}</p>
        <p>指定默认值：{{age}}</p>
        <button @click="useParent">使用父组件传过来的函数类型的prop调用函数传值</button>
        <button @click="commit">使用$emit父组件传值</button>
        <button @click="commitEvent">使用$emit触发事件,父组件使用$refs</button>
        <button @click="unbindEvent">解绑事件</button>
        <div>我是parent组件的儿子组件我也可以通过provide/inject获取到的值:{{provideMsg}}</div>
        <ECom></ECom>
    </div>

</template>

<script>
    import ECom from './ECom.vue';
    export default {
        name: "Child",
        inject: ["provideMsg"],
        // props: ["msg", "number"],//简单接收
        // props: {
        //     msg: String,
        //     number: Number
        // }, //指定类型接收
        props: {
            msg: {
                type: String,
                required: true,
            },
            number: {
                type: Number,
                required: true,
            },
            age: {
                type: Number,
                default: 18,
            },
            alertANum: {
                type: Function
            }
        }, //指定类型、限制必要性、指定默认值
        components: {
            ECom
        },
        methods: {
            showMsg() {
                console.log("child的方法");
            },
            commit() {
                this.$emit("childCommit", "子组件传值")
            },
            useParent() {
                this.alertANum(Math.random())
            },
            commitEvent() {
                this.$emit("childCommit2", "子组件触发了childCommit2")
            },
            unbindEvent() {
                // 放进beforeDestory中
                // this.$off(); //解绑全部
                this.$off('childCommit'); //解绑单个
                // this.$off(['childCommit','childCommit2']);//解绑多个
            }
        }

    }
</script>

<style scoped>
    .child {
        background-color: rgb(43, 96, 139);
        height: 250px;
        padding: 20px;
    }
</style>