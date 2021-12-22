<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-08-10 15:44:52
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-12 13:24:01
 * @FilePath: \vue-js-point\src\view\jsPoint\promotion.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>变量提升</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card" shadow="hover">
              <div class="title-left">我是变量声明，我会被提升在作用域顶端！(<b class="color">注：</b>只有声明的变量和函数才会进行提升，隐式全局变量不会提升。)</div>
              <pre><code class="language-xml line-numbers">var a;</code></pre>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card class="box-card" shadow="hover">
              <div class="title-left">我是变量定义，我的声明部分会被提升，赋值部分不会被提升！</div>
              <pre><code class="language-xml line-numbers">var b = "hello";</code></pre>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card class="box-card" shadow="hover">
              <div class="title-left">我是函数定义，或者叫我函数表达式。其实我就是变量定义，只不过恰好被赋值的类型是函数，所以也只提升变量名，不提升函数值！</div>
              <pre><code class="language-xml line-numbers">var c = function(){console.log("c is a variable")}</code></pre>
            </el-card>
          </el-col>
          <el-col :span="24">
            <el-card class="box-card" shadow="hover">
              <div class="title-left">我是函数声明，所以我全部被提升了，包括函数名和函数体。另外，我的优先级比变量声明要高，名字和我相同的变量声明会被忽略！</div>
              <pre><code class="language-xml line-numbers">function d(){console.log("d is a function")}</code></pre>
            </el-card>
          </el-col>

          <el-col :span="10">
            <el-card class="box-card" shadow="hover">
              <el-button @click="eq">查看以下代码打印结果</el-button>
              <pre><code class="language-xml line-numbers">var foo = function (x, y) {
          return x - y;
}

function foo(x, y) {
    return x + y;
}
var num = foo(1, 2);
console.log(num)</code></pre>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card" shadow="hover">
              <el-button @click="pro2">查看以下代码打印结果</el-button>
              <pre><code class="language-xml line-numbers">function foo() {
  console.log(a);
  var a = 1;
  console.log(a);
  function a() {}
  console.log(a);
  console.log(b);
  var b = 2;
  console.log(b);
  function b() {}
  console.log(b);
  console.log(c)
  c=3
}

pro2();</code></pre>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card" shadow="hover">
              <el-button>上个代码的js解析顺序是</el-button>
              <pre><code class="language-xml line-numbers">  
    function a(){};
    function b(){};
    var a;
    var b;
    console.log(a)//function a(){};
    a = 1;
    console.log(a)//1;
    console.log(a)//1
    console.log(b)//function b(){};
    b = 2;
    console.log(b)//2
    console.log(b)//2
    console.log(c)//c is not defined
}</code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>优先级</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card" shadow="hover">
              <div class="title-left">函数提升优先级高于变量提升，且不会被同名变量声明时覆盖，但是会被变量赋值后覆盖</div>
              <pre><code class="language-xml line-numbers">
console.log(bar);  // f bar() { console.log(123) }
console.log(bar()); // undefined
var bar = 456;
function bar() {
    console.log(123); // 123
}
console.log(bar); // 456
bar = 789;
console.log(bar); // 789
console.log(bar()) // bar is not a function</code></pre>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" shadow="hover">
              <el-button @click="getPL">查看以下代码打印结果</el-button>
              <pre><code class="language-xml line-numbers">
 console.log(a());

 function a() {
 return 2
 }
 var a = function () {
 return 1
 }
 console.log(a())
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
    data() {
      return {
        numArr: [1, 2, 3, 4, 5, 6, 10],
        newNumArr: [],
      }
    },
    created() {

    },
    mounted() {
      Prism.highlightAll();
      this.promotion();
    },
    methods: {
      promotion() {
        console.log(a, b, c, d);
        var a;
        var b = "hello";
        var c = function () {
          console.log("c is a var")
        };

        function d() {
          console.log("d is a function")
        }
      },
      eq() {
        var foo = function (x, y) {
          return x - y;
        }

        function foo(x, y) {
          return x + y;
        }
        var num = foo(1, 2);
        console.log(num)
      },
      pro2() {
        // 此处说明  隐式全局变量不会被提升  此处会报错  c is not defined
        try {
          console.log(c);
          c = 3;
        } catch (err) {
          console.log(err)
        }
        console.log(a);
        var a = 1;
        console.log(a);

        function a() {}
        console.log(a);
        console.log(b);
        var b = 2;
        console.log(b);

        function b() {}
        console.log(b);
        console.log(d);
        d = 4;

      },
      getPL() {
        console.log(a());

        function a() {
          return 2
        }
        var a = function () {
          return 1
        }
        console.log(a())
      }
    }
  }

</script>

<style>


</style>
