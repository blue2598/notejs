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
        <span>Promise</span>
      </div>
      <div class="card-inner">
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">简介</div>
              <ul class="point">
                <li>ECMAscript 6 原生提供了 Promise 对象。</li>
                <li>Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">特点</div>
              <ul class="point">
                <li>1、对象的状态不受外界影响。Promise 对象代表一个异步操作，有三种状态：
                  <ol>
                    <li>pending: 初始状态，不是成功或失败状态。</li>
                    <li> fulfilled: 意味着操作成功完成。</li>
                    <li>rejected: 意味着操作失败。</li>
                  </ol>
                </li>
                <li>2、一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise 对象的状态改变，只有两种可能：从 Pending 变为 Resolved 和从 Pending 变为
                  Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise
                  对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">优缺点</div>
              <ul class="point">
                <li>有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。</li>
                <li>Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于
                  Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>async、await</span>
      </div>
      <div class="card-inner">
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">简介</div>
              <ul class="point">
                <li>async 表示函数里有异步操作</li>
                <li>await 表示紧跟在后面的表达式需要等待结果。</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">async</div>
              <ul class="point">
                <li>1、async定义的函数内部会默认返回一个promise对象，如果函数内部抛出异常或者是返回reject，都会使函数的promise状态为失败reject。
                </li>
                <li>2、async函数接收到返回的值，发现不是异常或者reject，则判定成功，这里可以return各种数据类型的值，false,NaN,undefined...总之，都是resolve</li>
                <li>3、但是返回如下结果会使async函数判定失败reject
                  <ol>
                    <li>内部含有直接使用并且未声明的变量或者函数。</li>
                    <li>内部抛出一个错误throw new Error或者返回reject状态return Promise.reject('执行失败')</li>
                    <li>函数方法执行出错（🌰：Object使用push()）等等...</li>
                  </ol>
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <div class="title-left">awiat</div>
              <ul class="point">
                <li>这个关键字只能在使用async定义的函数里面使用</li>
                <li>async函数都会默认返回promise，并且这个promise解析的值都将会是这个函数的返回值，而async函数必须等到内部所有的 await 命令的 Promise 对象执行完，才会发生状态改变。
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="box-card">
              <pre><code class="language-xml line-numbers">function testSometing() {
    console.log("testSomething");
    return "return testSomething";
}

async function testAsync() {
    console.log("testAsync");
    return Promise.resolve("hello async");
}

async function test() {
    console.log("test start...");

    const testFn1 = await testSometing();
    console.log(testFn1);

    const testFn2 = await testAsync();
    console.log(testFn2);

    console.log('test end...');
}

test();

var promiseFn = new Promise((resolve)=> { 
                    console.log("promise START...");
                    resolve("promise RESOLVE");
                });
promiseFn.then((val)=> console.log(val));

console.log("===END===")

// test start...
// testSomething
// promise START...
// ===END===
// return testSomething
// testAsync
// promise RESOLVE
// hello async
// test end...
// undefined</code></pre>
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
      var promise = new Promise(function (resolve, reject) {
        resolve("成功！")
      })
      promise.then(function (successMag) {
        console.log(successMag)
      })
      promise.catch(function (err) {
        console.log(err)
      });

      this.getAiax(
        'https://www.fastmock.site/mock/5be73acffa04964e175aa5d4ad4354f1/easybuy/listdetails/58ff043c916edf48288b45a3'
      ).then((data) => {
        var result = JSON.parse(data);
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
      this.f1();
      console.log(3);
      this.test()
      console.log(this.test()) //返回的是一个Promise对象
    },
    methods: {
      getAiax(url) {
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                resolve(xhr.responseText)
              } else {
                reject(new Error(xhr.statusText))
              }
            }
          }
          xhr.onerror = function () {
            reject(new Error(xhr.statusText));
          }
          xhr.send()
        })
      },
      fn() {
        // 等到的是一个 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码
        return new Promise(resolve => {
          console.log(1)
          // 此处没有resolve结果,所以打印1,3
          // 加上resolve ：打印1,3,2
          resolve();
        })
        // 
        // 如果不是 promise , await会阻塞后面的代码，先执行async外面的同步代码，同步代码执行完，再回到async内部，把这个非promise的东西，作为 await表达式的结果。
        console.log(1)
      },
      async f1() {
        await this.fn();
        console.log(2)
      },
      touzi(猜测) {
        // return new Promise((resolve, reject) => {
        //   let sino = parseInt(Math.random() * 6 + 1)
        //   setTimeout(() => {
        //     resolve(sino)
        //   }, 3000)
        // })
        return new Promise((resolve, reject) => {
          let sino = parseInt(Math.random() * 6 + 1)
          if (sino > 3) {
            if (猜测 === '大') {
              resolve(sino)
            } else {
              reject(sino)
            }
          } else {
            if (猜测 === '大') {
              reject(sino)
            } else {
              resolve(sino)
            }
          }
          setTimeout(() => {
            resolve(sino)
          }, 3000)
        })
      },
      async test() {
        // let n = await this.touzi()
        // console.log(n)
        try {
          //把await及获取它的值的操作放在try里
          let n = await Promise.all([this.touzi('大'), this.touzi('大')])
          console.log('赢了' + n)
        } catch (error) {
          //失败的操作放在catch里
          console.log('输了' + error)
        }
      },
    },
  }

</script>

<style>

</style>
