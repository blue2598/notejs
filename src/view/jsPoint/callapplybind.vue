<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-08-02 13:14:34
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-04 11:30:33
 * @FilePath: \vue-js-point\src\view\jsPoint\callapplybind.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>call、apply、bind</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">call</div>
              <ul class="point">
                <li>可以调用函数，改变this的指向</li>
                <li>传参：call([this],arg1,arg2,arg3...)</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">apply</div>
              <ul class="point">
                <li>可以调用函数，改变this的指向</li>
                <li>传参：call([this],[arg1,arg2,arg3...])</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">bind</div>
              <ul class="point">
                <li>传参：call([this],arg1,arg2,arg3...)</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <pre><code class="language-xml line-numbers"> &lt;script&gt;
    function callFn(color, length) {
        console.log(this.name + this.age + color + length)
    }
    let cat = {
        name: "小猫",
        age: 20,
    }
    // callFn.call(cat, "white", 50);
    // callFn.apply(cat, ["white", 50]);
    callFn.bind(cat, "white", 50)();
&lt;/script&gt;</code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    mounted() {
      Prism.highlightAll();
    },
    created() {
      this.learnFn();
    },
    methods: {
      learnFn() {}
    },
  }

</script>

<style>

</style>
