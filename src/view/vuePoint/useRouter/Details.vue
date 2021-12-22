<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-24 14:59:57
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 16:18:58
 * @FilePath: \notejs\src\view\vuePoint\useRouter\Details.vue
-->
<template>
    <div>新闻详情：query接收：{{$route.query.id }}-params接收：{{$route.params.id}}</div>
</template>

<script>
    export default {
        // props: ["a", "b"],
        props: ['id'],
        computed: {},
        mounted() {
            // 接收参数：
            // 方式一，路由配置里配置 props ,props为对象时  只能是写死的值
            // console.log(this.a, this.b);
            // // 方式二，路由配置里配置 props ,props为布尔值时,props会接收到所有params携带过来的参数
            // console.log(this.id);
        }
    }
</script>

<style>

</style>