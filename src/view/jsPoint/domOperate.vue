<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-28 08:50:43
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-10 14:48:49
 * @FilePath: \vue-js-point\src\view\jsPoint\domOperate.vue
-->
<template>
  <div id="byid2" style="color:#333">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>获取DOM</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">通过id获取</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>页面上如果有相同的id的，取第一个</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">通过classname获取</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>返回包含带有指定类名的所有元素的节点列表。</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">通过tagname获取</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">querySelector</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>返回第一个匹配的元素</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">querySelectorAll</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>返回所有符合条件的元素</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>获取属性</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">getAttribute</div>
              <el-button size="small" plain @click="getAttrFn">打印</el-button>
              <ul class="point" id="byid1">
                <li>获取元素的某个属性值</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">ChildNodes、firstChildNode、lastChild</div>
              <el-button size="small" plain @click="getAttrFn">打印</el-button>
              <ul class="point" id="byid1">
                <li>获取元素的全部子节点、第一个孩子结点、最后一个孩子结点</li>
                <li>因为body标签和第一个标签div都是块级标签 查找的第一个结点和最后一个结点都是换行符，是文本节点#text</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">nodeType和nodeVlaue</div>
              <el-button size="small" plain @click="getAttrFn">打印</el-button>
              <ul class="point" id="byid1">
                <li>nodeType 的值有12种，常用的也就三种：1表示元素节点，2表示属性节点，3表示文本节点。</li>
                <li> nodeValue 不仅可以获取文本节点的值，还可以改变文本节点的值。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">querySelector</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>返回第一个匹配的元素</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">querySelectorAll</div>
              <el-button size="small" plain @click="printElem">打印</el-button>
              <ul class="point" id="byid1">
                <li>返回所有符合条件的元素</li>
              </ul>
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
    created() {},
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      printElem() {
        console.log(document.getElementById("byid1"))
        var classElem = document.getElementsByClassName("box-card");
        for (let i = 0; i < classElem.length; i++) {
          //   console.log(classElem[i])
        }
        console.log(document.getElementsByClassName("box-card"))
        console.log(document.getElementsByTagName("li"))
        console.log(document.querySelector(".el-button"))
        console.log(document.querySelectorAll(".el-button"))
      },
      getAttrFn() {
        var idElem = document.getElementById("byid2");
        console.log(idElem.getAttribute("style"))
        console.log("childNodes:", document.body.childNodes)
        console.log("firstChild:", document.body.firstChild)
        console.log("lastChild:", document.body.lastChild)
        console.log("nodeType:", idElem.nodeType)
        console.log("nodeValue:", idElem.nodeValue)
      }
    }
  }

</script>

<style>


</style>
