<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-09-08 14:47:12
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-09-08 16:25:30
 * @FilePath: \vue-js-point\src\view\jsPoint\symbol.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>使用场景</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">产生唯一的数据</div>
              <pre><code class="language-xml line-numbers">//   定义方式
        let str = Symbol("你好");
        let str2 = Symbol("你好");
        // 或
        let string = Symbol.for("你好");
        console.log(str == str2) //false
        console.log(str, string) // Symbol("你好") Symbol("你好");
        // 取值
        console.log(str.description, Symbol.keyFor(str)) //你好 undefined
        console.log(Symbol.keyFor(string), string.description) //你好 你好</code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>举例</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">重名</div>
              <pre><code class="language-xml line-numbers">let gridesOld = {
 张三: {
   js: 100,
   css: 99
 },
 张三: {
   js: 60,
   css: 68
 }
}
console.log(gridesOld)let user1 = {name: "张三",key: Symbol(),}//后面的会覆盖前面的
let user2 = {name: "张三",key: Symbol(),}
//使用变量作为key时需要加中括号
let grides = {
[user1.key]: {
    js: 100,
    css: 99
},
[user2.key]: {
    js: 60,
    css: 68
 }
}
console.log(grides)
console.log(grides[user1.key])</code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>遍历</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">遍历对象属性</div>
              <pre><code class="language-xml line-numbers">let site = Symbol("1");
        let web = {
          name: "百度",
          [site]: 'www.baidu.com'
        };
        for (const key in web) {
          console.log(key, "无法获的symbol属性")
        }
        for (const key of Object.getOwnPropertySymbols(web)) {
          console.log(key, '只能获得symbol属性')
        }
        for (const key of Reflect.ownKeys(web)) {
          console.log(key, '获得了全部属性')
        }</code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    created() {
      this.start();
      this.getPro();
      let gridesOld = {
        张三: {
          js: 100,
          css: 99
        },
        张三: {
          js: 60,
          css: 68
        }
      }
      console.log(gridesOld)
      let user1 = {
        name: "张三",
        key: Symbol(),
      }
      let user2 = {
        name: "张三",
        key: Symbol(),
      }
      console.log(user1.key, 'user1.key')
      //使用变量作为key时需要加中括号
      let grides = {
        [user1.key]: {
          js: 100,
          css: 99
        },
        [user2.key]: {
          js: 60,
          css: 68
        }
      }
      console.log(grides)
      console.log(grides[user1.key])
    },
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      start() {
        //   定义方式
        let str = Symbol("你好");
        let str2 = Symbol("你好");
        // 或
        let string = Symbol.for("你好");
        console.log(str == str2) //false
        console.log(str, string) // Symbol("你好") Symbol("你好");
        // 取值
        console.log(str.description, Symbol.keyFor(str)) //你好 undefined
        console.log(Symbol.keyFor(string), string.description) //你好 你好
      },
      getPro() {
        //   
        let site = Symbol("1");
        let web = {
          name: "百度",
          [site]: 'www.baidu.com'
        };
        for (const key in web) {
          console.log(key, "无法获的symbol属性")
        }
        for (const key of Object.getOwnPropertySymbols(web)) {
          console.log(key, '只能获得symbol属性')
        }
        for (const key of Reflect.ownKeys(web)) {
          console.log(key, '获得了全部属性')
        }
      }
    }
  }

</script>

<style>

</style>
