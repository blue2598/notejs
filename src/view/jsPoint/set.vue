<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-09-09 14:12:28
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-09-16 14:05:03
 * @FilePath: \vue-js-point\src\view\jsPoint\set.vue
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
            <el-card class="box-card">
              <div class="title-left">开始使用</div>
              <el-button size="small" plain @click="start">打印</el-button>
              <ul class="point">
                <li>保存多个值</li>
                <li>不能有重复值</li>
                <li>但是是严格类型约束</li>
              </ul>
              <pre><code class="language-xml line-numbers"> // 方式一：直接在创建的时候填入数组
let set = new Set([1, 2, 3, 4]);
// 方式二：使用add填入
set.add(1)
set.add("1")
set.add([8, 9])
console.log(set);</code></pre>
            </el-card>
            <el-card class="box-card">
              <div class="title-left">Set元素检测与管理</div>
              <el-button size="small" plain @click="setUse">打印</el-button>
              <ul class="point">
                <li>增：set.add(elem)</li>
                <li>删：set.delete(elem)一次只能删除一个元素</li>
                <li>查：set.has(elem)</li>
                <li>长度：set.size()</li>
                <li>清空：set.clear()</li>
              </ul>
              <pre><code class="language-xml line-numbers">let set = new Set(["123", "342"]);
console.log(set.delete("243")) //返回fasle
console.log(set.size)
console.log(set.has("123"))
set.clear()
console.log(set.size)</code></pre>
            </el-card>
            <el-card class="box-card">
              <div class="title-left">类型转换</div>
              <el-button size="small" plain @click="setToArray">打印</el-button>
              <ul class="point">
                <li>展开语法[...set]</li>
                <li>Array.from(set)</li>
              </ul>
              <pre><code class="language-xml line-numbers">let set = new Set([1, 2, "324", "2", 34]);
// 方式一：展开
let array = [...set];
// 方式二：Array.from()
let array1 = Array.from(set);
console.log(array)
console.log(array1)
// 利用set去重
let number = [1, 2, 3, 4, 5, 6, 2, 3, 1, 1];
let result = [...new Set(number)];
console.log(result);
let member = [{
name: "1",
value: 1
}, {
name: "2",
value: 1
}, {
name: "1",
value: 1
}];
let result1 = [...new Set(member)];
console.log(result1)</code></pre>
            </el-card>
            <el-card class="box-card">
              <div class="title-left">遍历Set</div>
              <el-button size="small" plain @click="ergodicSet">打印</el-button>
              <ul class="point">
                <li>set.keys()、values()、entries()==>因为Set里面没有键值，所以set.keys()和values()相同</li>
                <li>foreach</li>
                <li>for of</li>
              </ul>
              <pre><code class="language-xml line-numbers"></code></pre>
            </el-card>
            <el-card class="box-card">
              <div class="title-left">实例：保存搜索关键词</div>
              <input type="text" v-model="keyword" @blur="saveWord" />
              <ul class="point">
                <li v-for="(item,index) in keywordData" :key="index">{{item}}</li>
              </ul>
              <pre><code class="language-xml line-numbers"></code></pre>
            </el-card>
            <el-card class="box-card">
              <div class="title-left">WeakSet</div>
              <el-button size="small" plain @click="WeakSetUse">打印</el-button>
              <ul class="point">
                <li>只能保存引用类型值</li>
                <li>不允许重复值</li>
                <li>弱引用类型:因此无法用keys()、values()、entries()迭代</li>
                <li>ps:引用类型数据 每次被引用时 系统增加一次引用次数 而WeakSet引用时不会增加</li>
              </ul>
              <pre><code class="language-xml line-numbers">
              // let set = new WeakSet('num');
              // console.log(set) // Invalid value used in weak set
              let set1 = new WeakSet();
              set1.add({
              name: 1
              });
              set1.add({
              name: 1
              })
              set1.add(document.querySelector(".point"))
              set1.add(document.querySelector(".point"))
              console.log(set1);
              // 弱引用特性
              let a = {
              name: "ysl"
              };
              let bweakset = new WeakSet();
              let bset = new Set();
              bweakset.add(a);
              bset.add(a);
              console.log(bweakset);
              console.log(a);
              a = null;
              console.log(bweakset);
              console.log(bset)
              console.log(a);
//实例
                class Todo {
                  constructor() {
                    this.items = document.querySelectorAll("ul>li");
                    this.lists = new WeakSet();
                    this.items.forEach(item => {
                      this.lists.add(item);
                    });
                  }
                  run() {
                    this.addEvent();
                  }
                  addEvent() {
                    [...this.items].map(item => {
                      item.addEventListener('click', event => {
                        if (this.lists.has(item)) {
                          item.classList.add('remove');
                          this.lists.delete(item);
                          item.addEventListener("animationend", () => {
                            item.remove()
                          })
                        } else {
                          item.classList.remove('remove');
                          this.lists.add(item);
                        }
                      })
                    })
                  }
                }
                new Todo().run();
  
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
        keyword: "",
        keywordData: [],

      }
    },
    created() {

    },
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      start() {
        // 方式一：直接在创建的时候填入数组
        let set = new Set([1, 2, 3, 4]);
        // 方式二：使用add填入
        set.add(1)
        set.add("1")
        set.add([8, 9]) //
        set.add({
          name: 1
        })
        set.add({
          name: 1
        })
        console.log(set);
        console.log(typeof set); //object
      },
      setUse() {
        let set = new Set(["123", "342"]);
        console.log(set.delete("243")) //返回fasle
        console.log(set.size)
        console.log(set.has("123"))
        set.clear()
        console.log(set.size)
      },
      setToArray() {
        let set = new Set([1, 2, "324", "2", 34]);
        // 方式一：展开
        let array = [...set];
        // 方式二：Array.from()
        let array1 = Array.from(set);
        console.log(array)
        console.log(array1)
        // 利用set不允许有值相同去重
        let number = [1, 2, 3, 4, 5, 6, 2, 3, 1, 1];
        let result = [...new Set(number)];
        console.log(result);
        let member = [{
          name: "1",
          value: 1
        }, {
          name: "2",
          value: 1
        }, {
          name: "1",
          value: 1
        }];
        let result1 = [...new Set(member)];
        console.log(result1)
      },
      ergodicSet() {
        let set = new Set([1, 2, 3, 4, 5]);
        let keys = set.keys(); //与set.values()结果相同
        console.log(keys);
        set.forEach(element => {
          console.log(element)
        });
        for (const value of set) {
          console.log(value)
        }
      },
      saveWord() {
        let _this = this;
        let saveWord = {
          data: new Set(),
          add: function (word) {
            console.log(word)
            this.data.add(word)
          },
          show: function () {
            this.data.forEach(function (value) {
              _this.keywordData.push(value)
            })
          }
        };
        saveWord.add(_this.keyword);
        saveWord.show()
      },
      // WeakSet
      WeakSetUse() {
        // let set = new WeakSet('num');
        // console.log(set) // Invalid value used in weak set
        let set1 = new WeakSet();
        set1.add({
          name: 1
        });
        set1.add({
          name: 1
        })
        set1.add(document.querySelector(".point"))
        set1.add(document.querySelector(".point"))
        console.log(set1);
        // 弱引用特性
        let a = {
          name: "ysl"
        };
        let bweakset = new WeakSet();
        let bset = new Set();
        bweakset.add(a);
        bset.add(a);
        console.log(bweakset);
        console.log(a);
        a = null;
        console.log(bweakset);
        console.log(bset)
        console.log(a);
      }

    }
  }

</script>

<style>

</style>
