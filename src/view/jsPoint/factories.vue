<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-09-23 15:22:35
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-09-23 15:47:31
 * @FilePath: \vue-js-point\src\view\jsPoint\factories.vue
-->

<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>set创建</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="24">
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
        treeData: [],
      }
    },
    created() {
      this.getData();
    },
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      getData() {
        let _this = this;
        let url = 'https://www.fastmock.site/mock/c3d7065d85b11054d03579eda893ff81/zhfxsq/orgList';
        let httpR = new XMLHttpRequest();
        httpR.open('post', url, true);
        httpR.send();
        // 3、设置响应请求变化的函数
        httpR.onreadystatechange = function (res) {
          if (httpR.readyState == 4) {
            if (httpR.status == 200) {
              let result = httpR.responseText;
              _this.treeData = _this.factories(JSON.parse(result).data);
            }
          }
        };
      },
      factories(data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].pId == '0') {
            // this.travesal(data)
          }
        }
      }
    },
  }

</script>

<style>
  .operate-dom {
    padding: 5px 10px;
    border: 1px solid salmon;
    cursor: pointer;
    margin: 5px 10px;
  }

</style>
