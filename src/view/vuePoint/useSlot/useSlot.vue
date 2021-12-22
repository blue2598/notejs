<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-22 15:28:23
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-22 17:08:48
 * @FilePath: \notejs\src\view\vuePoint\useSlot\useSlot.vue
-->
<template>
    <div class="cont">
        <category title="美食">
            <!-- 这里到时候解析后放进子组件中 -->
            <img slot="center" src="https://img0.baidu.com/it/u=574283538,544700096&fm=26&fmt=auto">
        </category>
        <category title="音乐" :listData="musics">
            <audio slot="center" controls src="../../../assets/毛不易 - 入海.mp3"></audio>
            <audio slot="center" controls src="../../../assets/毛不易 - 入海.mp3"></audio>
            <audio slot="center" controls src="../../../assets/毛不易 - 入海.mp3"></audio>
            <a slot="bottom" href="">查看更多</a>
        </category>
        <category title="游戏" :listData="games">
            <!-- 新写法  并且v-slot只能写在template上面 -->
            <template v-slot:center>
                <ul>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ul>
            </template>
        </category>
        <category title="电影">
            <!-- <template slot="film" slot-scope="scope"> -->
            <!--  -->
            <template slot="film" slot-scope="scope">
                <ul>
                    <li v-for="(item,index) in scope.films" :key="index">{{item}}</li>
                </ul>
            </template>
        </category>
    </div>
</template>

<script>
    import category from "./category.vue"
    export default {
        name: "useScope",
        components: {
            category
        },
        data() {
            return {
                musics: ["入海", "一荤一素", "平凡的一天", "小情歌"],
                games: ["王者荣耀", "光遇", "和平精英", "冒险岛"],
            }
        },
    }
</script>

<style>
    .cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
</style>