<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-23 10:14:51
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 14:59:05
 * @FilePath: \notejs\src\view\vuePoint\communication\CCom.vue
-->
<template>
    <div class="demo cdemo">这里是C组件
        <hr>
        $store.state.number与选择计算的结果是：
        <hr>
        <select v-model.number="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="addNum(num)">+</button>
        <button @click="subNum(num)">-</button>
        <span class="color">{{number}}</span>
        $store.state.number * 10 :<span class="color">{{bigNum}}</span>
    </div>
</template>

<script>
    import {
        mapActions,
        mapMutations
    } from 'vuex'
    // 优化提交修改数据=>借助mapActions和mapMutations
    export default {
        data() {
            return {
                num: 1,
            }
        },
        computed: {
            // 可以通过计算属性=>在D组件使用vuex提供的方法获取值
            number() {
                return this.$store.state.number
            },
            bigNum() {
                return this.$store.getters.getBigNum
            },
        },
        methods: {

            // addNum() {
            //     this.$store.dispatch('add', this.num)
            // },
            // 优化提交->调用函数需要传值，不传值则是默认事件对象event
            ...mapActions({
                addNum: "add"
            }),
            // subNum() {
            //     // 也可以不走action提交，直接走mutation
            //     this.$store.commit('SUB', this.num)
            // }
            // 优化提交->调用函数需要传值
            ...mapMutations({
                subNum: "SUB"
            }),
            // key和value相同时可以用数组写法,此处不再展示
        },
    }
</script>

<style>
    hr {
        margin: 5px 0;
    }

    .demo {
        width: calc(50% - 40px);
        padding: 20px;
        display: inline-block;
        margin: 10px 0;
    }

    .cdemo {
        background-color: rgb(79, 245, 79);
    }
</style>