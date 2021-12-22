<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-23 10:14:59
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-23 16:42:35
 * @FilePath: \notejs\src\view\vuePoint\communication\DCom.vue
-->
<template>
    <div class="demo ddemo">这里是D组件
        <hr>
        $store.state.number与选择计算的结果是：
        <hr>
        <select v-model.number="num">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="waitAdd">等一秒再加</button>
        <span>{{numberPage}}</span>
        <!-- <span>{{number}}</span> -->
    </div>
</template>

<script>
    // 优化获取数据
    import {
        mapGetters,
        mapState
    } from "vuex";
    export default {
        data() {
            return {
                num: 1,
            }
        },
        computed: {
            // 可以通过计算属性=>自己写
            // number() {
            //     return this.$store.state.number
            // },

            // 使用Vuex提供的批量处理方法，展开到这个就是上述的一个个函数(对象写法)
            ...mapState({
                numberPage: "number"
            }),
            // 使用Vuex提供的批量处理方法，展开到这个就是上述的一个个函数(数组用法)
            ...mapState(["number"]),
            // getBigNum() {
            //     return this.$store.getters.getBigNum
            // },
            // mapgetter
            ...mapGetters(["getBigNum"])

        },
        mounted() {
            let x = mapState({
                number: "number"
            });
            // 这是个对象
            console.log(x, "mapState是什么");
            console.log(x.number, "mapState是什么");
            console.log(x.number.call(this), "mapState是什么");
            // mapGetters
            console.log(this.getBigNum);
        },
        methods: {
            waitAdd() {
                this.$store.dispatch('waitAdd', this.num)
            }
        },
    }
</script>

<style>
    .demo {
        width: calc(50% - 40px);
        padding: 20px;
        display: inline-block;
        margin: 10px 0;
    }

    .ddemo {
        background-color: rgb(175, 80, 80);
    }
</style>