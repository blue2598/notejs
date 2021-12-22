<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-29 15:16:53
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-31 16:46:26
 * @FilePath: \vue-js-point\src\view\jsPoint\stringOperate.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>字符串方法</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="4">
            <el-card class="box-card">
              <div class="title-left">str.length</div>
              <ul class="point">
                <li>返回字符串的长度</li>
                <li>{{string}}：长度为：{{string.length}}</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">str[idx]</div>
              <ul class="point">
                <li>返回字符串中指定索引的字符</li>
                <li>{{string}}：索引为3的字符：{{string[-1]}}</li>
                <li>找不到则返回undefined</li>
                <li>它是只读的string[0] = "A" 不会产生错误（但也不会工作！）</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.charAt()</div>
              <ul class="point">
                <li>返回字符串中指定下标（位置）的字符串</li>
                <li>{{string}}：索引为3的字符：{{string.charAt(16)}}</li>
                <li>找不到则返回空字符串</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.charCodeAt()</div>
              <ul class="point">
                <li>返回字符串中指定索引的字符 unicode 编码</li>
                <li>{{string}}：索引为3的字符编码：{{string.charCodeAt(3)}}</li>
                <li>找不到返回NaN</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-card class="box-card">
              <div class="title-left">str.indexOf('str',n) & str.lastIndexOf('str','n')</div>
              <ul class="point">
                <li>indexOf()返回字符串中一个子串第一处出现的索引（从左到右搜索）。如果没有匹配项，返回-1</li>
                <li>lastIndexOf()返回指定文本在字符串中最后一次出现的索引，如果没有匹配项，返回 -1</li>
                <li>都接受第二个参数n,表示从索引为n处开始检索</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.search('str')</div>
              <ul class="point">
                <li>搜索特定值的字符串，并返回匹配的位置的索引，无匹配则返回-1</li>
                <li>不支持第二个参数</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">str.slice(startI,endI)</div>
              <ul class="point">
                <li>提取字符串startI到endI的某个部分，返回被提取的部分</li>
                <li>范围是[startI,endI)</li>
                <li>如果某个参数为负，则从字符串的结尾开始计数。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">str.substring(startI,endI))</div>
              <ul class="point">
                <li>substring()提取字符串startI到endI的某个部分，返回被提取的部分</li>
                <li>范围是[startI,endI)</li>
                <li>不接受负的索引</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">str.substr(startI,length)</div>
              <ul class="point">
                <li>截取从索引startI开始，长度为length的字符串</li>
                <li>索引为负，则从字符串末尾开始</li>
                <li>省略第二个参数，则截取剩余全部</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">str.replace('str','newstr')</div>
              <ul class="point">
                <li>用另一个值替换在字符串中指定的值，不会改变调用它的字符串</li>
                <li>replace()只替换首个匹配</li>
                <li>并对大小写敏感</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.toUpperCase() & str.toLowerCase()</div>
              <ul class="point">
                <li>toUpperCase() 把字符串转换为大写;</li>
                <li>toLowerCase() 把字符串转换为小写。</li>
                <li>不接受负的索引</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.concat()</div>
              <ul class="point">
                <li>连接两个或多个字符串。</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.trim()</div>
              <ul class="point">
                <li>方法删除字符串两端的空白符。</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.split()</div>
              <ul class="point">
                <li>字符串转换为数组。可接受正则匹配。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.startsWith()</div>
              <ul class="point">
                <li>startsWith()返回某个字符是否在开始出现</li>
                <li>区分大小写</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.endsWith()</div>
              <ul class="point">
                <li>endsWith()返回某个字符是否在结尾出现</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.trim()</div>
              <ul class="point">
                <li>方法删除字符串两端的空白符。</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card class="box-card">
              <div class="title-left">str.split()</div>
              <ul class="point">
                <li>字符串转换为数组。可接受正则匹配。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <pre><code class="language-xml line-numbers"> stringMethods() {
        let string = "hello world";
        console.log("string:%c" + string, "color:red")
        console.log("string.length:%c" + string.length, "color:red") //11
        console.log("string[-1]:%c" + string[-1], "color:red")
        console.log("string[3]:%c" + string[3], "color:red")
        console.log("string.charAt(-1):%c" + string.charAt(-1), "color:red")
        console.log("string.charAt(3):%c" + string.charAt(3), "color:red")
        console.log("string.charCodeAt(-1):%c" + string.charCodeAt(-1), "color:red")
        console.log("string.charCodeAt(3):%c" + string.charCodeAt(3), "color:red")
        console.log("string.indexOf('i'):%c" + string.indexOf('i'), "color:red")
        console.log("string.indexOf('l'):%c" + string.indexOf('l'), "color:red")
        console.log("string.indexOf('l',4):%c" + string.indexOf('l', 4), "color:red")
        console.log("string.lastIndexOf('i'):%c" + string.lastIndexOf('i'), "color:red")
        console.log("string.lastIndexOf('l'):%c" + string.lastIndexOf('l'), "color:red")
        console.log("string.lastIndexOf('l',9):%c" + string.lastIndexOf('l', 8), "color:red")
        console.log("string.search('l'):%c" + string.search('l'), "color:red")
        console.log("string.search('le'):%c" + string.search('le'), "color:red")
        console.log("string.slice(1,3):%c" + string.slice(1, 3), "color:red")
        console.log("string.slice(-4,-1):%c" + string.slice(-4, -1), "color:red")
        console.log("string.substring(1,3):%c" + string.substring(1, 3), "color:red")
        console.log("string.substr(1,3):%c" + string.substr(1, 3), "color:red")
        console.log("string:%c" + string, "color:red")
        console.log("string.replace('world','ysl'):%c" + string.replace('world', 'ysl'), "color:red")
        console.log("string:%c" + string, "color:red")
        console.log("string.toUpperCase():%c" + string.toUpperCase(), "color:red")
        console.log("string.toLowerCase():%c" + string.toLowerCase(), "color:red")
        console.log("string:%c" + string, "color:red")
        console.log("string.concat('concat'):%c" + string.concat('concat'), "color:red")
        console.log("  hello world   .trim():%c" + "   hello world  ".trim(), "color:red")
        console.log("string.split(''):%c" + string.split(''), "color:red")
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
    data() {
      return {
        string: "hello world",
      }
    },
    created() {
      this.stringMethods();
    },
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      stringMethods() {
        let string = "hello world";
        console.log("string:%c" + string, "color:red")
        console.log("string.length:%c" + string.length, "color:red") //11
        console.log("string[-1]:%c" + string[-1], "color:red")
        console.log("string[3]:%c" + string[3], "color:red")
        console.log("string.charAt(-1):%c" + string.charAt(-1), "color:red")
        console.log("string.charAt(3):%c" + string.charAt(3), "color:red")
        console.log("string.charCodeAt(-1):%c" + string.charCodeAt(-1), "color:red")
        console.log("string.charCodeAt(3):%c" + string.charCodeAt(3), "color:red")
        console.log("string.indexOf('i'):%c" + string.indexOf('i'), "color:red")
        console.log("string.indexOf('l'):%c" + string.indexOf('l'), "color:red")
        console.log("string.indexOf('l',4):%c" + string.indexOf('l', 4), "color:red")
        console.log("string.lastIndexOf('i'):%c" + string.lastIndexOf('i'), "color:red")
        console.log("string.lastIndexOf('l'):%c" + string.lastIndexOf('l'), "color:red")
        console.log("string.lastIndexOf('l',9):%c" + string.lastIndexOf('l', 8), "color:red")
        console.log("string.search('l'):%c" + string.search('l'), "color:red")
        console.log("string.search('le'):%c" + string.search('le'), "color:red")
        console.log("string.slice(1,3):%c" + string.slice(1, 3), "color:red")
        console.log("string.slice(-4,-1):%c" + string.slice(-4, -1), "color:red")
        console.log("string.substring(1,3):%c" + string.substring(1, 3), "color:red")
        console.log("string.substr(1,3):%c" + string.substr(1, 3), "color:red")
        console.log("string:%c" + string, "color:red")
        console.log("string.replace('world','ysl'):%c" + string.replace('world', 'ysl'), "color:red")
        console.log("string:%c" + string, "color:red")
        console.log("string.toUpperCase():%c" + string.toUpperCase(), "color:red")
        console.log("string.toLowerCase():%c" + string.toLowerCase(), "color:red")
        console.log("string:%c" + string, "color:red")
        console.log("string.concat('concat'):%c" + string.concat('concat'), "color:red")
        console.log("  hello world   .trim():%c" + "   hello world  ".trim(), "color:red")
        console.log("string.split(''):%c" + string.split(''), "color:red")
        console.log("string.startsWith('h'):%c" + string.startsWith('h'), "color:red")
        console.log("string.endsWith('h'):%c" + string.endsWith('h'), "color:red")
      }
    }
  }

</script>

<style scoped>


</style>
