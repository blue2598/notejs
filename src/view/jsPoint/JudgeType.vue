<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-27 14:55:36
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-07-28 08:45:24
 * @FilePath: \vue-js-point\src\view\jsPoint\JudgeType.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>判断数据类型(typeOf和intanceof的区别)</span>
      </div>
      <div class="card-inner flex-row">
        <ol>
          <h3>typeof</h3>
          <li><span>"字符串" ==> </span>{{getTypeBytypeof("字符串")}}</li>
          <li><span>725 ==> </span>{{getTypeBytypeof(725)}}</li>
          <li><span>[1,2,3] ==> </span>{{getTypeBytypeof([1,2,3])}}</li>
          <li><span>{} ==> </span>{{getTypeBytypeof({})}}</li>
          <li><span>new Date() ==> </span>{{getTypeBytypeof(new Date())}}</li>
          <li><span>new String() ==> </span>{{getTypeBytypeof(new String("hello") )}}</li>
          <li><span>function add(){} ==> </span>{{getTypeBytypeof(function add(){})}}</li>
          <li><span>undefined ==> </span>{{getTypeBytypeof(undefined)}}</li>
          <li><span>null ==> </span>{{getTypeBytypeof(null)}}</li>
        </ol>
        <ol>
          <h3>intanceof 返回值是 true or false</h3>
          <li><span>"字符串" ==> </span>"字符串" intanceof string</li>
        </ol>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    created() {
      this.getTypeByIntanceof()
    },
    methods: {
      getTypeBytypeof(params) {
        return `typeof(${params}) ==> ${typeof(params)}`
      },
      getTypeByIntanceof(params) {
        console.log("z instanceof String", "z"
          instanceof String)
        console.log("[1,2,3] instanceof String", [1, 2, 3] instanceof String)
        console.log("new String('1ad') instanceof Object", new String('1ad') instanceof Object)
        console.log("[1,2,3] instanceof Object", [1, 2, 3] instanceof Object)
      }

    }
  }

</script>

<style>
  .card-inner {
    padding: 0 10px;
  }

  .card-inner ol li {
    line-height: 25px;
    font-size: 16px;
    color: #333;
    font-weight: 700;
    color: #333;
    font-style: italic;
  }

  .card-inner ol li span {
    font-weight: 500;
    font-style: normal;
  }

  .card-inner ol li:nth-child(even) {
    color: #999;
  }

  .flex-row {
    display: flex;
    justify-content: flex-start;
  }

  .card-inner ol h3 {
    line-height: 30px;
  }

</style>
