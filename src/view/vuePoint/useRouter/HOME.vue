<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-24 14:59:57
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 17:19:51
 * @FilePath: \notejs\src\view\vuePoint\useRouter\HOME.vue
-->
<template>
    <div class="router">
        Home组件被缓存了
        <input>
    </div>
</template>

<script>
    export default {
        name: "homeCom",
        beforeDestroy() {
            console.log("HOME组件要销毁le");
        },
        beforeRouteEnter(to, from, next) {
            console.log("beforeRouteEnter");
            next();
        },
        // 路由组件独有的两个生命周期
        activated() {
            console.log("激活");
        },
        deactivated() {
            console.log("失活");
        }
    }
</script>

<style scoped>

</style>