<!--
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-07-23 15:20:46
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-15 10:11:59
 * @FilePath: \notejs\src\view\Home.vue
-->
<template>
  <el-container>
    <el-header>
      <button @click="hello">调用mixin里面的方法</button>
      <span style="color:#fff">测试plugins里面的全局过滤器：{{new Date() | timeFormat}}</span>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-col :span="24">
          <el-menu :router="true" :default-active="activedIndex" @select="selectIndex" class="el-menu-vertical-demo"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-openeds="['2']">
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>vue</span>
              </template>
              <el-menu-item index="/parent">传值</el-menu-item>
              <el-menu-item index="/useSlot">插槽</el-menu-item>
              <el-menu-item index="/useRouter">useRouter</el-menu-item>
            </el-submenu>
            <el-submenu index="0">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>JS</span>
              </template>
              <el-menu-item index="/scope">作用域</el-menu-item>
              <el-menu-item index="/promotion">变量提升</el-menu-item>
              <el-menu-item index="/getInfo">获取参数</el-menu-item>
              <el-menu-item index="/JudgeType">判断数据类型</el-menu-item>
              <el-menu-item index="/arrayOperate">数组操作</el-menu-item>
              <el-menu-item index="/domOperate">DOM操作</el-menu-item>
              <el-menu-item index="/stringOperate">字符串操作</el-menu-item>
              <el-menu-item index="/ajax">ajax</el-menu-item>
              <el-menu-item index="/callapplybind">call、apply、bind</el-menu-item>
              <el-menu-item index="/promise">promise、async和await</el-menu-item>
              <el-menu-item index="/object">Object常用方法</el-menu-item>
              <el-menu-item index="/copyobject">对象</el-menu-item>
              <el-menu-item index="/stringTemplate">字符串模板的使用--es6</el-menu-item>
              <el-menu-item index="/symbol">Symbol</el-menu-item>
              <el-menu-item index="/set">Set与WeakSet</el-menu-item>
              <el-menu-item index="/map">Map与WeakMap</el-menu-item>
              <el-menu-item index="/factories">递归遍历数据成树结构</el-menu-item>
            </el-submenu>

            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>CSS</span>
              </template>
              <el-menu-item index="/animation">animation</el-menu-item>
              <el-menu-item index="/vueAni">vue Transition</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <clock></clock> -->
  </el-container>

</template>

<script>
  import {
    mixin
  } from "../mixin"
  export default {
    components: {},
    mixins: [mixin],
    data() {
      return {
        activedIndex: "/JudgeType",
      }
    },
    created() {
      console.log(this.$router);
      console.log(this.$route);
      this.activedIndex = this.$route.path;
      // function makeClosures(arr, fn) {
      // let result=[];
      // for(let i=0;i<arr.length;i++){ result[i]=fn.bind(this,arr[i]); } return result; }
    },
    methods: {
      selectIndex(index) {
        this.activedIndex = index;
      }
    }
  }
</script>

<style scoped>
  .el-container {
    height: calc(100vh - 66px);
  }

  .el-header {
    background-color: #595959;
  }

  .el-header h1 {
    float: left;
    color: #fff;
    margin-top: 10px;
    font-size: 20px;
  }

  .el-aside {
    background-color: #2A2D3E;
    overflow: hidden;
    overflow-y: scroll;
  }

  .el-aside::-webkit-scrollbar {
    display: none;
  }

  .el-main {
    height: calc(100vh - 60px);
  }

  .card-inner ul {
    display: flex;
    flex-wrap: wrap;
  }

  .card-inner ul li {
    width: 18%;
    margin-right: 1%;
    max-width: 280px;
    background-color: #fff;
    padding: 10px;
    transition: all .5s;
    min-width: 200px;
    cursor: pointer;

  }

  .card-inner ul li a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card-inner ul li:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    background-color: #028AFE;
    border-radius: 5px;
    color: #fff;
  }

  .card-inner ul li:hover a {
    color: #fff;
  }

  .card-inner ul li .pic {
    width: 90%;
  }

  .card-inner ul li .pic img {
    width: 100%;
    border-radius: 10px;
  }

  .box-card+.box-card {
    margin-top: 10px;
  }

  li.el-menu-item a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  li.el-menu-item.is-active a {
    color: #FFD04B;
  }
</style>