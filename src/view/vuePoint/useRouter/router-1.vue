<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-24 14:59:57
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 16:45:04
 * @FilePath: \notejs\src\view\vuePoint\useRouter\router-1.vue
-->
<template>
    <div class="router">
        <h3>这是导航</h3>
        <router-link active-class="active" to="/useRouter/routerhome">2.1</router-link>
        <router-link active-class="active" to="/useRouter/routermore">2.2</router-link>
        <div class="child">
            <!-- include可以是数组，这里面使用的是组件页面的name -->
            <keep-alive include="homeCom">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "router-1",

    }
</script>

<style scoped>
    .router a {
        padding: 5px 9px;
        background-color: skyblue;
        color: #fff;
        margin: 5px;
        display: inline-block;
    }

    .router a.active {
        background-color: rgb(238, 204, 9);
    }

    .child {
        width: 100%;
        border: 1px solid #ddd;
        padding: 20px 15px;
    }
</style>