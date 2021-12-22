<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-08-31 15:34:21
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-31 15:54:07
 * @FilePath: \vue-js-point\src\view\jsPoint\stringTemplate.vue
-->
<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-08-04 11:14:03
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-05 17:23:07
 * @FilePath: \vue-js-point\src\view\jsPoint\promise.vue
-->

<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>字符串模板的使用``</span>
      </div>
      <div class="card-inner">
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">简介</div>
              <div v-html="divhtml"></div>
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
        divhtml: '',
      }
    },
    mounted() {
      Prism.highlightAll();
      let arr = [{
          name: "百度",
          site: "www.baidu.com"
        },
        {
          name: "谷歌",
          site: "www.google.com"
        },
        {
          name: "搜狐",
          site: "www.souhu.com"
        },
        {
          name: "腾讯",
          site: "www.tencent.com"
        },
      ];
      console.log(this.divhtml)
    },
    methods: {},
  }

</script>

<style>

</style>
