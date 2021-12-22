<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-22 15:34:59
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-22 17:24:46
 * @FilePath: \notejs\src\view\vuePoint\useSlot\category.vue
-->
<template>
    <div class="list">
        <h3>{{title}}分类</h3>
        <!-- 默认插槽 内容由父元素决定，展示位置由自己决定，slot内部是默认值 -->
        <!-- <slot>
            <ul>
                <li v-for="(item,index) in listData" :key="index">{{item}}</li>
            </ul>
        </slot> -->
        <!-- 具名插槽 父组件内要指定放入的name -->
        <slot name="center">
            <ul>
                <li v-for="(item,index) in listData" :key="index">{{item}}</li>
            </ul>
        </slot>
        <slot name="bottom"></slot>
        <!-- 绑定的值逆向传给使用插槽的地方 -->
        <slot name="film" :films="films"></slot>
    </div>
</template>

<script>
    export default {
        props: ["listData", "title"],
        data() {
            return {
                films: ["寻梦环游记", "让子弹飞", "赌王", "电影"]
            }
        }
    }
</script>

<style scoped>
    .list {
        width: 220px;
        height: 300px;
        background-color: rgb(11, 167, 58);
        padding: 10px;
    }

    h3 {
        height: 36px;
        line-height: 36px;
        color: #fff;
        text-align: center;
        background-color: rgb(231, 191, 12);
    }

    ul {
        padding: 5px 0;
    }

    ul li {
        color: #333;
        padding: 5px 0;
        color: #fff;
        padding-left: 18px;
        position: relative;
        font-size: 13px;
    }

    ul li::before {
        position: absolute;
        content: '';
        width: 6px;
        height: 6px;
        background-color: #fff;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
    }

    .list img {
        width: 100%;
    }

    audio {
        width: 100%;
        margin-top: 10px;
    }

    a {
        color: chocolate;
    }
</style>