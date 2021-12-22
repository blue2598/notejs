<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-24 14:59:57
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-15 09:35:55
 * @FilePath: \notejs\src\view\vuePoint\useRouter\MORE.vue
-->
<template>
    <div>
        <span class="color">router-link默认是push模式,需要replace可以在router-link标签内加上该属性</span>
        <ul>
            <li v-for="item in newsList" :key="item.id">
                <!-- to上用query传参（字符串形式） -->
                <!-- <router-link :to="`/useRouter/routermore/detail?id=${item.id}`">
                    {{item.name}}
                </router-link> -->
                <!--to上用query传参 （对象形式） -->
                <router-link :to="{
                    path:'/useRouter/routermore/detail',
                    //name:'detail',
                    query:{
                        id:item.id
                    }
                }">
                    {{item.name}}
                </router-link>
                <!--to上用params传参（字符串形式：配置路由的时候需添加标志） -->
                <!-- <router-link :to="`/useRouter/routermore/detail/${item.id}`">
                    {{item.name}}
                </router-link> -->
                <!--to上用params传参（对象形式） -->
                <span class="color">用params传参(对象形式)：</span>
                <!-- params形式只能与name配合 无法与path配合使用 -->
                <!-- <router-link :to="{
                    name:'detail',
                    params:{
                        id:item.id
                    }
                }">
                    {{item.name}}
                </router-link> -->

            </li>
        </ul>
        <div class="child">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "moreCom",
        beforeDestroy() {
            console.log("More组件要销毁le");
        },
        data() {
            return {
                newsList: [{
                    id: "001",
                    name: "这是新闻标题1"
                }, {
                    id: "002",
                    name: "这是新闻标题2"
                }, {
                    id: "003",
                    name: "这是新闻标题3"
                }]
            }
        }
    }
</script>

<style scoped>
    .child {
        width: 100%;
        border: 1px solid #ddd;
        padding: 20px 15px;
    }
</style>