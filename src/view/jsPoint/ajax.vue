<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-30 09:06:03
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-22 14:10:39
 * @FilePath: \notejs\src\view\jsPoint\ajax.vue
-->


<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>ajax请求的步骤</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">ajax</div>
              <el-button size="small" plain @click="getAjax">发起一次ajax请求</el-button>
              <ul class="point">
                <li>1、创建一个异步调用对象</li>
                <pre><code class="language-xml line-numbers">let ajax = new XMLHttpRequest();</code></pre>
                <li>2、创建Http请求，设置请求的类型，url，是否异步</li>
                <pre><code class="language-xml line-numbers">ajax.open('GET', url, true);</code></pre>
                <li>3、设置响应请求变化的函数</li>
                <pre><code class="language-xml line-numbers">ajax.onreadystatechange = getData;
function getData() {
//判断ajax对象的readyState属性值是否为4
//如果为4表示异步调用完成
if (ajax.readyState == 4) {   
}</code></pre>
                <li>4、发送请求</li>
                <pre><code class="language-xml line-numbers">ajax.send();</code></pre>
                <li>5、接收返回数据</li>
                <pre><code class="language-xml line-numbers">function getData() {
    if (ajax.readyState == 4) {
        //设置获取数据的语句
    if (ajax.status == 200 || ajax.status == 0) { 
        console.log(ajax.response)
    }
    }
}</code></pre>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="16">
            <el-card class="box-card">
              <div class="title-left">完整的ajax请求</div>
              <pre><code class="language-xml line-numbers">let baseUrl = 'https://www.fastmock.site/mock/5be73acffa04964e175aa5d4ad4354f1/easybuy';
        // 1、创建一个异步调用对象
        let ajax = createXMLHttpRequest();

        function createXMLHttpRequest() {
          if (window.ActiveXObject) {
            // IE
            return new ActiveXObject("Microsoft.XMLHTTP");
          } else if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
          }
        }
        // 2、创建Http请求 设置请求的类型，url，是否异步
        ajax.open('GET', baseUrl + '/listdetails/58ff043c916edf48288b45a3', true);
        ajax.setRequestHeader('content-type', ''); //设置头部
        // 3、设置响应请求变化的函数
        ajax.onreadystatechange = getData;
        // 4、发送请求
        ajax.send();
        // 5、接收返回数据
        function getData() {
          //判断ajax对象的readyState属性值是否为4，如果为4表示异步调用完成
          if (ajax.readyState == 4) {
            if (ajax.status == 200 || ajax.status == 0) { //设置获取数据的语句
              console.log(ajax.response)
            }
          }
        }
              </code></pre>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <el-button size="small" plain @click="getInfo">发送axios请求</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Prism from "prismjs"; //引入插件
  import axios from 'axios';
  export default {
    data() {
      return {
        numArr: [1, 2, 3, 4, 5, 6, 10],
        newNumArr: [],
      }
    },
    created() {},
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      getAjax() {
        // 这里为什么发送请求成功，因为fastmock做了处理
        let baseUrl = 'https://www.fastmock.site/mock/5be73acffa04964e175aa5d4ad4354f1/easybuy';
        // 1、创建一个异步调用对象
        let ajax = createXMLHttpRequest();

        function createXMLHttpRequest() {
          if (window.ActiveXObject) {
            // IE
            return new ActiveXObject("Microsoft.XMLHTTP");
          } else if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
          }
        }
        // 2、创建Http请求 设置请求的类型，url，是否异步
        ajax.open('GET', baseUrl + '/listdetails/58ff043c916edf48288b45a3', true);
        ajax.setRequestHeader('content-type', ''); //设置头部
        // 3、设置响应请求变化的函数
        ajax.onreadystatechange = getData;
        // 4、发送请求
        ajax.send();
        // 5、接收返回数据
        function getData() {
          //判断ajax对象的readyState属性值是否为4，如果为4表示异步调用完成
          if (ajax.readyState == 4) {
            if (ajax.status == 200 || ajax.status == 0) { //设置获取数据的语句
              console.log(ajax.response)
            }
          }
        }
      },

      getInfo() {
        axios.get(
          "/api/listdetails/58ff043c916edf48288b45a3/"
        ).then(res => {
          console.log(res.data);
        }).catch(err => {
          console.log(err.message);
        })
      },
    }
  }
</script>

<style scoped>
  .parent {
    width: 200px;
    height: 200px;
    background-color: red;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .child {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: inline-block;
  }
</style>