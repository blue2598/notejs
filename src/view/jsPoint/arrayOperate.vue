<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-28 08:50:43
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-14 09:51:31
 * @FilePath: \notejs\src\view\jsPoint\arrayOperate.vue
-->
<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>数组循环</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">for循环</div>
              <el-button size="small" plain @click="showForTime">查看for循环时间</el-button>
              <ul class="point">
                <li>如果数据量比较大，最好用一个变量把数组的长度存起来，这样长度只计算一次，然后缓存了，速度会更快。</li>
                <li>可用break、continue、return</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">for...in循环</div>
              <el-button size="small" type="primary" plain @click="showForIn">打印</el-button>
              <el-button size="small" plain @click="showForInTime">查看for in循环时间</el-button>
              <ul class="point">
                <li>可遍历对象</li>
                <li>可用break、continue、return</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">for...of循环</div>
              <el-button size="small" type="primary" plain @click="showForOf">打印</el-button>
              <el-button size="small" plain @click="showForOfTime">查看for of循环时间</el-button>
              <ul class="point">
                <li>不可直接遍历对象</li>
                <li>可用break、continue、return</li>
                <li>如果遍历对象 需要实现iterator接口</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">foreach</div>
              <el-button size="small" type="primary" plain @click="showForeach">打印</el-button>
              <el-button size="small" plain @click="showForeachTime">查看foreach循环时间</el-button>
              <ul class="point">
                <li>无法用break、continue</li>
                <li>在IE中无法实现，需要做兼容处理</li>
                <li>没有 return 返回值</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">map</div>
              <el-button size="small" type="primary" plain @click="showMap">打印</el-button>
              <el-button size="small" plain @click="showMapTime">查看map循环时间</el-button>
              <ul class="point">
                <li>有返回值，可以return出来</li>
                <li class="color">数组的值为基本类型的时候，map遍历数组不会改变原数组的值,如果是数组对象则会改变原数组的值</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">filter</div>
              <el-button size="small" type="primary" plain @click="showFilter">打印</el-button>
              <ul class="point">
                <li>不会改变原始数组,返回新数组</li>
              </ul>
              <pre><code class="language-xml line-numbers">[1,2,3,4].filter(item=>item==2)</code></pre>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">every</div>
              <el-button size="small" type="primary" plain @click="showEvery">打印</el-button>
              <ul class="point">
                <li>返回值是布尔型</li>
                <li>每一项返回true,则返回true。</li>
              </ul>
              <pre><code class="language-xml line-numbers">let arr = [5, 6, 7, 8];
let flagNum = arr.every(item => item > 4)
console.log(flagNum)//true</code></pre>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">some</div>
              <el-button size="small" type="primary" plain @click="showSome">打印</el-button>
              <ul class="point">
                <li>返回值是布尔型</li>
                <li>有一项为true,则返回true</li>
              </ul>
              <pre><code class="language-xml line-numbers">let arr = [5, 6, 7, 8];
let flagNum = arr.every(item => item > 7)
console.log(flagNum)//true</code></pre>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">find、findIndex</div>
              <el-button size="small" type="primary" plain @click="showFind">打印</el-button>
              <ul class="point">
                <li>find方法返回数组中符合测试函数条件的第一个元素。否则返回undefined</li>
                <li>findIndex方法返回数组中符合测试函数条件的第一个元素的索引。否则返回-1</li>
              </ul>
              <pre><code class="language-xml line-numbers">[1,2,3,NaN].find(item=>item==2)//2
[1,2,3,NaN].find(item=>item==NaN)//undefined</code></pre>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">reduce</div>
              <el-button size="small" type="primary" plain @click="showReduce">打印</el-button>
              <ul class="point">
                <li>方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。</li>
                <li>reduce还有第二个参数，我们可以把这个参数作为第一次调用callback时的第一个参数</li>
              </ul>
              <table class="table">
                <tr class="head">
                  <td></td>
                  <td>prevValue</td>
                  <td>currValue</td>
                  <td>index</td>
                  <td>array</td>
                </tr>
                <tr>
                  <td>第一次调用</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>第二次调用</td>
                  <td>3</td>
                  <td>3</td>
                  <td>2</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>第三次调用</td>
                  <td>6</td>
                  <td>4</td>
                  <td>3</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>第四次调用</td>
                  <td>10</td>
                  <td>5</td>
                  <td>4</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>最后结果</td>
                  <td colspan="4">15</td>
                </tr>
              </table>
              <pre><code class="language-xml line-numbers">let arr = [1, 2, 3, 4, 5];
let newArr = arr.reduce(function (prevValue, currValue, index, array) {
return prevValue + currValue
})
let newArr1 = arr.reduce(function (prevValue, currValue, index, array) {
 return prevValue + currValue
}, 15)
console.log(newArr, newArr1)//15,30</code></pre>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">reduceRight</div>
              <el-button size="small" type="primary" plain @click="showReduceRight">打印</el-button>
              <ul class="point">
                <li>方法的功能和reduce()功能是一样的，不同的是reduceRight()从数组的末尾向前将数组中的数组项做累加。</li>
                <li>接受第二个参数，可以作为第一次调用callback时的第一个参数，</li>
              </ul>
              <table class="table">
                <tr class="head">
                  <td></td>
                  <td>prevValue</td>
                  <td>currValue</td>
                  <td>index</td>
                  <td>array</td>
                </tr>
                <tr>
                  <td>第一次调用</td>
                  <td>5</td>
                  <td>4</td>
                  <td>3</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>第二次调用</td>
                  <td>9</td>
                  <td>3</td>
                  <td>2</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>第三次调用</td>
                  <td>12</td>
                  <td>2</td>
                  <td>1</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>第四次调用</td>
                  <td>14</td>
                  <td>1</td>
                  <td>0</td>
                  <td>[1,2,3,4,5]</td>
                </tr>
                <tr>
                  <td>最后结果</td>
                  <td colspan="4">15</td>
                </tr>
              </table>
              <pre><code class="language-xml line-numbers">let arr = [1, 2, 3, 4, 5];
let newArr = arr.reduceRight(function (prevValue, currValue, index, array) {
return prevValue + currValue
})
let newArr1 = arr.reduceRight(function (prevValue, currValue, index, array) {
 return prevValue + currValue
}, 15)
console.log(newArr, newArr1)//15,30</code></pre>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">keys & values & entries</div>
              <el-button size="small" type="primary" plain @click="showKve">打印</el-button>
              <ul class="point">
                <li>返回一个遍历器对象，可以用for...of循环进行遍历</li>
                <li>keys遍历数组的键名</li>
                <li>values遍历数组键值</li>
                <li>entries遍历数组键名、键值</li>
              </ul>
              <pre><code class="language-xml line-numbers">let arr = [{name: "name1",value: "value1"}, {name: "name2",value: "value2"}];
for (let item of arr.values()) {
  console.log(item) // {name: "name1",value: "value1"}...
}</code></pre>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <table class="table">
                <tr class="head">
                  <td></td>
                  <td>keys</td>
                  <td>values</td>
                  <td>entries</td>
                </tr>
                <tr>
                  <td>let arr=[1,2,3];for(let item of arr.keys()){console.log(item)}</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>let arr=[1,2,3];for(let item of arr.values()){console.log(item)}</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>let arr=[1,2,3];for(let [index,item] of arr.entries()){console.log(index,item)}</td>
                  <td>0,1</td>
                  <td>1,2</td>
                  <td>2,3</td>
                </tr>
              </table>
              <pre><code class="language-xml line-numbers">for (let item of arr.keys()) {
console.log(item) // 0,1
}
for (let [index, item] of arr.entries()) {
  console.log(index, item)
}</code></pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>数组增删、排序、反转</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">push & pop</div>
              <el-button size="small" type="primary" plain @click="operateArr('push')">push</el-button>
              <el-button size="small" plain @click="operateArr('pop')">pop</el-button>
              <el-divider></el-divider>
              <el-tag type="success">{{numArr}}</el-tag>
              <ul class="point">
                <li>push是向数组末尾增加元素，返回值是新数组的长度</li>
                <li>pop从后面删除元素，只能是一个，返回值是删除的元素</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">shift & unshift</div>
              <el-button size="small" type="primary" plain @click="operateArr('shift')">shift</el-button>
              <el-button size="small" plain @click="operateArr('unshift')">unshift</el-button>
              <el-divider></el-divider>
              <el-tag type="success">{{numArr}}</el-tag>
              <ul class="point">
                <li>shift是从数组头部删除一个元素，返回值是删除的元素</li>
                <li>unshift是从数组头部添加一个元素，返回值是新数组的长度</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">splice(i,n,item1,item2,...,itemX) & slice(startI,endI)</div>
              <el-button size="small" type="primary" plain @click="operateArr('splice')">splice</el-button>
              <el-button size="small" plain @click="operateArr('slice')">slice</el-button>
              <el-divider></el-divider>
              <el-tag type="success">{{numArr}}</el-tag>
              <ul class="point">
                <li>splice删除从i(索引值)开始之后的n个元素,返回值是删除的元素形成的数组,item1,item2,...,itemX是添加的元素</li>
                <li>slice切去索引值startI到索引值endI的数组，不包含endI的值，返回值是切出来的数组,不改变原数组</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">sort & reverse</div>
              <el-button size="small" type="primary" plain @click="operateArr('sort')">sort</el-button>
              <el-button size="small" plain @click="operateArr('sortdesc')">sort从大到小</el-button>
              <el-button size="small" type="primary" plain @click="operateArr('sortasc')">sort从小到大</el-button>
              <el-button size="small" plain @click="operateArr('reverse')">reverse</el-button>
              <el-divider></el-divider>
              <el-tag type="success">{{numArr}}</el-tag>
              <el-tag type="success">从大到小{{newNumArr}}</el-tag>
              <el-tag type="success">从小到大{{newNumArr}}</el-tag>
              <ul class="point">
                <li>sort数组进行排序,返回值是排好的数组，默认按照字符串顺序，不是按照数字大小排序的</li>
                <li>reverse反转数组，返回值是反转后的数组</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">concat</div>
              <el-button size="small" type="primary" plain @click="operateArr('concat')">concat</el-button>
              <el-button size="small" plain @click="operateArr('unshift')">unshift</el-button>
              <el-divider></el-divider>
              <el-tag type="success">连接后数组：{{newNumArr}}</el-tag>
              <ul class="point">
                <li>concat 连接两个数组 返回值为连接后的新数组</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>判断数组中是否包含给定的值</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">indexOf</div>
              <el-tag type="success">{{[1,2,3,4,5,6,7,2,3,4]}}里是2的索引：</el-tag>
              <el-tag type="success">{{[1,2,3,4,5,6,7,2,3,4].indexOf(2)}}</el-tag>
              <el-divider></el-divider>
              <el-tag type="warning">{{[1,2,3,4,5,6,NaN]}}里是NaN的索引：</el-tag>
              <el-tag type="warning">{{[1,2,3,4,5,6,NaN].indexOf(NaN)}}</el-tag>
              <ul class="point">
                <li>从数组开头查找某个元素的索引值，若有重复的，则返回第一个查到的索引值，若不存在，则返回-1</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">lastIndexOf</div>
              <el-tag type="success">{{[1,2,3,4,5,6,7,2,3,4]}}里是2的索引：</el-tag>
              <el-tag type="success">{{[1,2,3,4,5,6,7,2,3,4].lastIndexOf(2)}}</el-tag>
              <el-divider></el-divider>
              <el-tag type="warning">{{[1,2,3,4,5,6,NaN]}}里是NaN的索引：</el-tag>
              <el-tag type="warning">{{[1,2,3,4,5,6,NaN].lastIndexOf(NaN)}}</el-tag>
              <ul class="point">
                <li>从数组末尾查找某个元素的索引值，若有重复的，则返回第一个查到的索引值，若不存在，则返回-1</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
              <div class="title-left">includes</div>
              <el-tag type="success">{{[1,2,3,4,5,6,7,2,3,4]}}是否存在2：</el-tag>
              <el-tag type="success">{{[1,2,3,4,5,6,7,2,3,4].includes(2)}}</el-tag>
              <el-divider></el-divider>
              <el-tag type="warning">{{[1,2,3,4,5,6,NaN]}}是否存在NaN：</el-tag>
              <el-tag type="warning">{{[1,2,3,4,5,6,NaN].includes(NaN)}}</el-tag>
              <ul class="point">
                <li>判断数中是否包含给定的值,返回值是true or false</li>
                <li>indexOf和includes的区别是includes能查到NaN</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>原理</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">find</div>
              <pre><code class="language-xml line-numbers">findValue(array, callback) {
  for (let value of array) {
    if (callback(value)) {
      return value
    }
  }
  return undefined
}
console.log(this.findValue([1, 2, 3, 45, 5], (item) => {
return item == 45
}))
//原型链方法
Array.prototype.findValue = function(callback){
  for(let value of this){
    if(callback(value)){
      return value
    }
  }
  return undefined
}</code></pre>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <div class="title-left">sort方法原理</div>
              <pre><code class="language-xml line-numbers">sort(array) {
        for (let i = 0, len = array.length; i < len; i++) {
          for (let j = 0; j < len; j++) {
            if (array[i] > array[j]) {
              let temp;
              temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }
        }
        return array
      }
sort(array, callback) {
for (let i = 0, len = array.length; i < len; i++) {
   for (let j=0; j < len; j++) { 
     if (callback(array[i], array[j]) < 0){ 
       let temp;
      temp=array[i];
       array[i]=array[j];
        array[j]=temp;
         }
       }
     }
   return array 
}</code> </pre>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Prism from "prismjs"; //引入插件
  export default {
    data() {
      return {
        numArr: [1, 2, 3, 4, 5, 6, 10],
        newNumArr: [],
      }
    },
    created() {
      console.log(this.removeWithoutCopy([1, 2, 2, 5, 6, 7, 6, 3, 3, 4, 2, 3], 2));
      console.log(this.findValue([1, 2, 3, 45, 5], (item) => {
        return item == 45
      }))
      // console.log(this.sort([1, 24, 5, 6, 7]))
      console.log(this.sort([1, 24, 5, 7, 6], function (a, b) {
        return a - b
      }))
      this.reduceMethods();

    },
    mounted() {
      Prism.highlightAll();

    },
    methods: {
      removeWithoutCopy(arr, item) {
        var res = [],
          res1 = [];
        for (let i = 0; i < arr.length; i++) {
          if (res.indexOf(arr[i]) > -1 && res1.indexOf(arr[i]) < 0) {
            res1.push(arr[i])
          } else {
            res.push(arr[i])
          }
        }
        return res1
      },
      showForTime() {
        let arr = new Array(500000);
        // let arr = new Array(500000000);
        console.time("for");
        let len = 0;
        // for (let i = 0; i < arr.length; i++) {
        for (let i = 0, len = arr.length; i < len; i++) {
          //   console.log(arr[i]);
        }
        console.timeEnd("for");
        // 测试500000000的时候,使用变量保存length和不保存时间差别不大
      },
      showForInTime() {
        let arrtime = new Array(500000);
        console.time("forin")
        for (let item in arrtime) {

        }
        console.timeEnd("forin")
      },
      showForOfTime() {
        let arrtime = new Array(500000);
        console.time("forof")
        for (let item of arrtime) {

        }
        console.timeEnd("forof")
      },
      showForeachTime() {
        let arrtime = new Array(500000);
        console.time("foreach")
        arrtime.forEach(function (value, index) {})
        console.timeEnd("foreach")
      },
      showMapTime() {
        let arrtime = new Array(500000);
        console.time("map")
        arrtime.map(function (value, index) {})
        console.timeEnd("map")
      },
      showForIn() {

        //   数组
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }]
        for (let prop in arr) {
          console.log("for...in循环数组：" + prop, arr[prop])
        }
        // 对象
        let obj = {
          a: 1,
          b: 2,
          c: 3
        };
        var needVlaue = "";
        for (let prop in obj) { //prop指对象的属性名
          if (prop == "b") {
            needVlaue = obj[prop];
            // break
            // continue
            // return
          }
          console.log("for...in循环对象：" + prop, obj[prop]);
        }
        console.log(needVlaue)
      },
      showForOf() {
        // 数组
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }, {
          name: "name",
          value: "ysl"
        }]
        for (let item of arr) {
          if (item.name == "sex") {
            // return
            // continue
            // break
          }

          console.log("for...of循环数组：", item)
        }
        // 对象
        let obj = {
          a: 1,
          b: 2,
          c: 3
        };
        // for (let item of obj) {
        //   console.log(item);//报错
        // }
      },
      showForeach() {
        // 数组
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }, {
          name: "name",
          value: "ysl"
        }]
        let newArr = arr.forEach(function (value, index) {
          console.log("foreach循环数组：", value, index, arr)
          if (value.name == "sex") {
            value.name == "sexUpdate"
          }
          return value
        })
        console.log("arr:", arr, "newArr:", newArr)
      },
      showMap() {
        // 数组
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }, {
          name: "name",
          value: "ysl"
        }]
        let newarr = arr.map(function (value, index, array) {
          if (value.name == "sex") {
            value.name = "sexUpdate"
          }
          return value
        })
        console.log("arr:", arr, "newarr", newarr, "改变原数组的值")
        let arrNum = [1, 2, 3, 4, 5, 6];
        let newArrNum = arrNum.map(function (value, index, array) {
          return value * 10
        })
        console.log("arrNum:", arrNum, "newArrNum", newArrNum, "未改变原数组")
      },
      showFilter() {
        // 数组
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }, {
          name: "sex",
          value: "1"
        }, {
          name: "name",
          value: "ysl"
        }]
        // let newArr = arr.filter(function (item) {
        //   return item.name == "sex"
        // })
        // 或
        let newArr = arr.filter(item => item.name == "sex")
        console.log("返回的数组：", newArr, "原数组：", arr)
      },
      showEvery() {
        // 数组
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }, {
          name: "sex",
          value: "1"
        }, {
          name: "name",
          value: "ysl"
        }]
        // let newArr = arr.filter(function (item) {
        // return item.name == "sex"
        // })
        // 或
        let flag = arr.every(item => item.name == "sex")
        let flagNum = [5, 6, 7, 8].every(item => item > 4)
        console.log(flag, arr)
        console.log("[5, 6, 7, 8]循环每一项大于4？", flagNum)
      },
      showSome() {
        let arr = [1, 2, 3, 8];
        let flagNum = arr.some(item => item > 4)
        console.log("[1, 2, 3, 8]循环有一项大于4？", flagNum)
      },
      showFind() {
        let arr = [{
          name: "age",
          value: 23
        }, {
          name: "sex",
          value: "女"
        }, {
          name: "sex",
          value: "1"
        }, {
          name: "name",
          value: "ysl"
        }]
        // let result = arr.find((item, index) => {
        //   console.log(item, index)
        //   return item.name == "sex"
        // })
        let result = arr.find(item => item.name == "sex")
        console.log(result);
        let index = arr.findIndex(item => item.name == "sf");
        console.log(index)
      },
      showReduce() {
        let arr = [1, 2, 3, 4, 5];
        let newArr = arr.reduce(function (prevValue, currValue, index, array) {
          //   console.log(prevValue, currValue, index, array)
          return prevValue + currValue
        })
        let newArr1 = arr.reduce(function (prevValue, currValue, index, array) {
          console.log(prevValue, currValue, index, array)
          return prevValue + currValue
        }, 15)
        console.log(newArr, newArr1)
      },
      showReduceRight() {
        let arr = [1, 2, 3, 4, 5];
        Array.prototype.ruduceRightSum = function () {
          //   console.log(this)
          return this.reduceRight(function (preValue, curValue) {
            return preValue +
              curValue;
          });
        }
        arr.ruduceRightSum();
        console.log('最终的值：' + arr.ruduceRightSum()); // 21
      },
      showKve() {
        let arr = [{
          name: "name1",
          value: "value1"
        }, {
          name: "name2",
          value: "value2"
        }, {
          name: "name3",
          value: "value3"
        }];
        let keys = arr.keys();
        console.log(keys.next())
        console.log(keys.next())
        console.log(keys.next())
        console.log(keys.next())
        let {
          value,
          done
        } = keys.next();
        console.log(value, done)
        // 迭代操作
        for (let item of arr.keys()) {
          console.log(item)
        }
        for (let item of arr.values()) {
          console.log(item)
        }
        // 解构赋值
        let [a, b] = [1, 2]; //a=1,b=2
        // 这里的[index,item] = [索引，值]
        for (let [index, item] of arr.entries()) {
          console.log(index, item)
        }
      },
      operateArr(name) {
        var num = Number((Math.random() * 10).toFixed(0))
        if (name == "push") {
          this.numArr.push(num);
        }
        if (name == "pop") {
          this.numArr.pop(num);
        }
        if (name == "shift") {
          this.numArr.shift();
        }
        if (name == "unshift") {
          this.numArr.unshift(num);
        }
        if (name == "splice") {
          this.numArr.splice(1, 2)
        }
        if (name == "slice") {
          this.numArr.slice(1, 2)
        }
        if (name == "sort") {
          this.numArr.sort()
        }
        if (name == "sortdesc") {
          this.newNumArr = this.numArr.sort(function (a, b) {
            return b - a
          })
        }
        if (name == "sortasc") {
          this.newNumArr = this.numArr.sort(function (a, b) {
            return a - b
          })
        }
        if (name == "reverse") {
          this.numArr.reverse()
        }
        if (name == "concat") {
          this.newNumArr = this.numArr.concat(["concat"])
        }
      },
      // find方法原理
      findValue(array, callback) {
        for (let value of array) {
          if (callback(value)) {
            return value
          }
        }
        return undefined
      },
      sort(array, callback) {
        for (let i = 0, len = array.length; i < len; i++) {
          for (let j = 0; j < len; j++) {
            if (callback(array[i], array[j]) < 0) {
              let temp;
              temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }
        }
        return array
      },
      reduceMethods() {
        let goods = [{
          name: "电扇",
          price: 1000,
        }, {
          name: "电脑",
          price: 4999,
        }, {
          name: "电视",
          price: 5600,
        }, {
          name: "电视",
          price: 5600,
        }, {
          name: "电扇",
          price: 1000,
        }, {
          name: "ipad",
          price: 2799,
        }]
        // 去重
        let onlyGoods = goods.reduce(function (arr, curV) {
          let name = arr.find((v) => {
            return v.name == curV.name;
          });
          if (!name) {
            arr.push(curV)
          }
          return arr
        }, [])
        console.table(onlyGoods)
      }
    }
  }
</script>

<style>


</style>