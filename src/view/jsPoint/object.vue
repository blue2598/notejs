<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-08-12 13:37:22
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-08-30 15:49:41
 * @FilePath: \vue-js-point\src\view\jsPoint\object.vue
-->

<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix"><span>Object常用方法</span></div>
			<div class="card-inner">
				<el-row :gutter="20">
					<el-col :span="24">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.is(val1,val2)</div>
							<ul class="point">
								<li>判断两个值是否相等</li>
							</ul>
							<el-button size="small" plain @click="printObjectis">打印</el-button>
							<pre><code class="language-xml line-numbers">console.log("==", "===", "Object.is()")
console.log("[]和[]：", [] == [], [] === [], Object.is([], []))
console.log("{}和{}：", {} == {}, {} === {}, Object.is({}, {}))
console.log("hello和hello：", "hello" == "hello", "hello" === "hello", Object.is("hello", "hello"))
console.log("NaN和NaN：", NaN == NaN, NaN === NaN, Object.is(NaN, NaN))
console.log("NaN和0/0：", NaN == 0 / 0, NaN === 0 / 0, Object.is(NaN, 0 / 0))
console.log("null和undefined：", null == undefined, null === undefined, Object.is(null, undefined))
console.log("null和null：", null == null, null === null, Object.is(null, null))
console.log("undefined和undefined：", undefined == undefined, undefined === undefined, Object.is(undefined,undefined))
console.log("+0和-0：", +0 == -0, +0 === -0, Object.is(+0, -0))</code></pre>
						</el-card>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.assign(target,source1,source2,...)</div>
							<ul class="point">
								<li>将源对象source的所有可枚举属性合并到目标对象target上,此方法只拷贝源对象的自身属性，不拷贝继承的属性。</li>
								<li>
									assign方法实行的是
									<b class="color">浅拷贝</b>
									，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。同名属性会替换。
									Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
								</li>
							</ul>
							<el-button size="small" plain @click="printObjectAssign">打印</el-button>
							<pre><code class="language-xml line-numbers">const target = {x: 0,y: 1};
const source = {x: 1,y: 2,fn: {number: 1}};
console.log(Object.assign(target, source))
console.log(target, source)
target.fn.number = 25;
console.log(target, source);
source.fn.number = 100;
console.log(target, source);</code></pre>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.create(prototype,[propertiesObject])</div>
							<ul class="point">
								<li>使用指定的原型对象及其属性去创建一个新的对象</li>
							</ul>
							<el-button size="small" plain @click="printObjectCreate">打印</el-button>
							<pre><code class="language-xml line-numbers">let parent = {x: 1,y: 1};
var child = Object.create(parent, {
    z: {
        writable: true,
        configurable: true,
        value: "newAdd"
    }
})
console.log(child);
console.log(child.x);</code></pre>
						</el-card>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.defineProperties(obj,props)</div>
							<ul class="point">
								<li>直接在一个对象上定义新的属性或修改现有属性，并返回该对象。</li>
							</ul>
							<el-button size="small" plain @click="printObjectCreate">打印</el-button>
							<pre><code class="language-xml line-numbers">let parent = {x: 1,y: 1};
var child = Object.create(parent, {
    z: {
        writable: true,
        configurable: true,
        value: "newAdd"
    }
})
console.log(child);
console.log(child.x);</code></pre>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.defineProperty(obj,props)</div>
							<ul class="point">
								<li>在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。</li>
							</ul>
							<el-button size="small" plain @click="printObjectCreate">打印</el-button>
							<pre><code class="language-xml line-numbers">let parent = {x: 1,y: 1};
var child = Object.create(parent, {
    z: {
        writable: true,
        configurable: true,
        value: "newAdd"
    }
})
console.log(child);
console.log(child.x);</code></pre>
						</el-card>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.freeze(obj)</div>
							<ul class="point">
								<li>冻结一个对象</li>
								<li>冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。</li>
							</ul>
							<el-button size="small" plain @click="printObjectFreeze">打印</el-button>
							<pre><code class="language-xml line-numbers">const HOST = {
    url: "http:www.yang.com/api",
    port: 8088,
}
// HOST.port = 9090;
// console.log(HOST)
Object.freeze(HOST);
HOST.port = 9090;
console.log(HOST);
//严格模式下抛出异常：Cannot assign to read only property 'port' of object '#&lt;Object&gt;'" </code></pre>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.isFrozen()</div>
							<ul class="point">
								<li>判断一个对象是否被冻结 .</li>
							</ul>
							<el-button size="small" plain @click="printObjectFreeze">打印</el-button>
							<pre><code class="language-xml line-numbers">const HOST = {
    url: "http:www.yang.com/api",
    port: 8088,
}
// HOST.port = 9090;
// console.log(HOST)
Object.freeze(HOST);
HOST.port = 9090;
console.log(Object.isFrozen(HOST)); </code></pre>
						</el-card>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.keys(arr/obj)</div>
							<ul class="point">
								<li>返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致</li>
								<li>（两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。</li>
							</ul>
							<el-button size="small" plain @click="printObjectKVE">打印</el-button>
							<pre><code class="language-xml line-numbers">let obj = {
  name: "杨双林",
  age: 23,
  sex: "女"
};
let arr = [{
  label: "label1",
  value: "value1"
}, {
  label: "label2",
  value: "value3"
}];
let resultObjKeys = Object.keys(obj);
let resultArrKeys = Object.keys(arr);
console.log(resultObjKeys);
console.log(resultArrKeys);</code></pre>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.values(arr/obj)</div>
							<ul class="point">
								<li>
									方法返回一个给定对象自己的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
									Object.values会过滤属性名为 Symbol 值的属性。
								</li>
							</ul>
							<el-button size="small" plain @click="printObjectKVE">打印</el-button>
							<pre><code class="language-xml line-numbers">let obj = {
    name: "杨双林",
    age: 23,
    sex: "女"
  };
  let arr = [{
    label: "label1",
    value: "value1"
  }, {
    label: "label2",
    value: "value3"
  }];
  let resultObjKeys = Object.values(obj);
  let resultArrKeys = Object.values(arr);
  console.log(resultObjValues);
  console.log(resultArrValues);</code></pre>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.entries(arr/obj)</div>
							<ul class="point">
								<li>
									返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
								</li>
							</ul>
							<el-button size="small" plain @click="printObjectKVE">打印</el-button>
							<pre><code class="language-xml line-numbers">let obj = {
    name: "杨双林",
    age: 23,
    sex: "女"
  };
  let arr = [{
    label: "label1",
    value: "value1"
  }, {
    label: "label2",
    value: "value3"
  }];
  let resultObjEntries = Object.entries(obj);
  let resultArrEntries = Object.entries(arr);
  console.log(resultObjEntries);
  console.log(resultArrEntries);</code></pre>
						</el-card>
					</el-col>
				</el-row>
				<el-row :gutter="20">
					<el-col :span="8">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.preventExtensions(obj)</div>
							<ul class="point">
								<li>禁止向对象添加属性</li>
							</ul>
							<el-button size="small" plain @click="printObjectKVE">打印</el-button>
							<pre><code class="language-xml line-numbers"></code></pre>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.seal(obj)</div>
							<ul class="point">
								<li>
									封闭一个对象。不能添加新属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，已有属性的值以然可以修改。(也就是说descriptor里的writable变成没有变，configurable变成false了)
								</li>
							</ul>
							<el-button size="small" plain @click="printObjectKVE">打印</el-button>
							<pre><code class="language-xml line-numbers"></code></pre>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card class="box-card" shadow="hover">
							<div class="title-left">Object.freeze(obj)</div>
							<ul class="point">
								<li>
									冻结一个对象。不能添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。冻结一个对象后该对象的原型也不能被修改。
								</li>
							</ul>
							<el-button size="small" plain @click="printObjectKVE">打印</el-button>
							<pre><code class="language-xml line-numbers"></code></pre>
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
			newNumArr: []
		};
	},
	created() {},
	mounted() {
		Prism.highlightAll();
	},
	methods: {
		printObjectis() {
			console.log('==', '===', 'Object.is()');
			console.log('hello和hello：', 'hello' == 'hello', 'hello' === 'hello', Object.is('hello', 'hello'));
			console.log('[]和[]：', [] == [], [] === [], Object.is([], []));
			console.log('{}和{}：', {} == {}, {} === {}, Object.is({}, {}));
			// console.log("{a:1}和{a:1}：", {a:1} == {a:1}, {a:1} === {a:1}, Object.is({a:1}, {a:1}))
			console.log('NaN和NaN：', NaN == NaN, NaN === NaN, Object.is(NaN, NaN));
			console.log('NaN和0/0：', NaN == 0 / 0, NaN === 0 / 0, Object.is(NaN, 0 / 0));
			console.log('null和undefined：', null == undefined, null === undefined, Object.is(null, undefined));
			console.log('null和null：', null == null, null === null, Object.is(null, null));
			console.log('undefined和undefined：', undefined == undefined, undefined === undefined, Object.is(undefined, undefined));
			console.log('+0和-0：', +0 == -0, +0 === -0, Object.is(+0, -0));
		},
		printObjectAssign() {
			const target = {
				x: 0,
				y: 1
			};
			const source = {
				x: 1,
				y: 2,
				fn: {
					number: 1
				}
			};
			console.log(Object.assign(target, source));
			console.log(target, source);
			target.fn.number = 25;
			console.log(target, source);
			source.fn.number = 100;
			console.log(target, source);
		},
		printObjectCreate() {
			let parent = {
				x: 1,
				y: 1
			};
			var child = Object.create(parent, {
				z: {
					writable: true,
					configurable: true,
					value: 'newAdd'
				}
			});
			console.log(child);
			console.log(child.x);
		},
		printObjectFreeze() {
			const HOST = {
				url: 'http:www.yang.com/api',
				port: 8088
			};
			// HOST.port = 9090;
			// console.log(HOST)
			Object.freeze(HOST);
			HOST.port = 9090;
			console.log(HOST);
			console.log(Object.isFrozen(HOST));
			//vue中抛出异常Cannot assign to read only property 'port' of object '#<Object>'"
		},
		printObjectKVE() {
			let obj = {
				name: '杨双林',
				age: 23,
				sex: '女'
			};
			let arr = [
				{
					label: 'label1',
					value: 'value1'
				},
				{
					label: 'label2',
					value: 'value3'
				}
			];
			let resultObjKeys = Object.keys(obj);
			let resultArrKeys = Object.keys(arr);
			console.log(resultObjKeys);
			console.log(resultArrKeys);
			let resultObjValues = Object.values(obj);
			let resultArrValues = Object.values(arr);
			console.log(resultObjValues);
			console.log(resultArrValues);
			let resultObjEntries = Object.entries(obj);
			let resultArrEntries = Object.entries(arr);
			console.log(resultObjEntries);
			console.log(resultArrEntries);
		}
	}
};
</script>

<style></style>
