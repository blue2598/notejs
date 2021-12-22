<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-12-14 08:43:57
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-14 08:49:22
 * @FilePath: \notejs\src\view\vuePoint\communication\ECom.vue
-->
<template>
    <div class="ediv">我是parent组件的孙子组件通过provide/inject获取到的值:{{provideMsg}}</div>
</template>

<script>
    export default {
        inject: ['provideMsg']
    }
</script>

<style>
    .ediv {
        background-color: pink;
    }
</style>