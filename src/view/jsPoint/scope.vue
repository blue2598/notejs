<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-09-30 11:32:18
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-09-30 15:46:05
 * @FilePath: \vue-js-point\src\view\jsPoint\scope.vue
-->
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
        <span>var、let(/const)</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">var没有块级作用域、有函数作用域</div>
              <pre><code class="language-xml line-numbers">for (let  m = 0; m &lt; 3; m++) {
    console.log("let m:" + m)
}
// console.log(m)// m is not defined
for (var i = 0; i &lt; 3; i++) {
    console.log("var i:" + i)
}
console.log(i) //4
            </code></pre>
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
      //   this.start();
      this.end();
      let arr = [1, 2, 34, 1, 24, 4, 6, 7, 9, 10];
      let result = arr.filter((item) => {
        return item >= 2 && item <= 9
      });
      console.log(result);

    },
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      start() {
        for (let i = 0; i <= 3; i++) {
          console.log("let i:" + i)
        }
        // console.log(i)//
        for (var i = 0; i <= 3; i++) {
          console.log("var i:" + i)
        }
        console.log(i) //=>4
      },
      next() {
        for (let i = 0; i <= 3; i++) {
          // let 定义 有块级作用域概念 向上找 
          setTimeout(() => {
            console.log("let i:" + i)
          }, 1000)
        }
        // console.log(i)//
        for (var i = 0; i <= 3; i++) {
          setTimeout(() => {
            console.log("var i:" + i)
          }, 1000)
        }
      },
      end() {
        //   将var声明的 改写 用匿名函数包裹
        for (var i = 0; i <= 3; i++) {
          // 立即执行函数
          (function (a) {
            setTimeout(() => {
              console.log("var i:" + a)
            }, 1000)
          })(i)
        }
      }
    }
  }

</script>

<style>

</style>
