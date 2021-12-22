<!--
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-09-14 14:02:25
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-09-22 14:05:11
 * @FilePath: \vue-js-point\src\view\jsPoint\map.vue
-->

<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix"><span>set创建</span></div>
			<div class="card-inner">
				<el-row :gutter="20">
					<el-col :span="24">
						<el-card class="box-card">
							<div class="title-left">特点、创建方式</div>
							<el-button size="small" plain @click="mapUse">打印</el-button>
							<ul class="point">
								<li>可以使用对象作为键名</li>
								<li>
									与对象的区别：
									<span class="color">对象</span>
									中键名只能是字符串
								</li>
							</ul>
							<pre><code class="language-xml line-numbers"> let a = 456;
let arr = [3, 4, 5]
//   创建添加方式一
let map = new Map([
    [a, "变量键名"],
    [arr, "数组键名"]
]);
//   创建添加方式二
map.set(function () {}, "这是个方程")
map.set(5, "数字键").set("5", "字符串键")
console.log(map);
// 与obj对比
let obj = {
    1: "数字1",
    "1": "字符串1",
    [a]: "变量键名"
};
console.log(obj);
let obj2 = {
    [obj]: "用对象做键名"
}
console.log(obj2);
//  取值
console.log("取值：", obj2["[object Object]"])
console.log("取值方式2：", obj2[obj.toString()])</code></pre>
						</el-card>
						<el-card class="box-card">
							<div class="title-left">Map的增删改查</div>
							<el-button size="small" plain @click="mapOperate">打印</el-button>
							<ul class="point">
								<li>增：map.set(elem)</li>
								<li>删：map.delete(elem)一次只能删除一个元素</li>
								<li>查：map.has(elem)</li>
								<li>长度：map.size()</li>
								<li>清空：map.clear()</li>
							</ul>
							<pre><code class="language-xml line-numbers">let map = new Map();
let obj = {
    name: "1",
}
map.set(obj, "对象");
map.set("56", '字符串')
console.log(map);
console.log(map.has("56"));
console.log(map.delete(obj));
console.log(map.size);
console.log(map.clear());</code></pre>
						</el-card>
						<el-card class="box-card">
							<div class="title-left">遍历Map</div>
							<el-button size="small" plain @click="ergodicMap">打印</el-button>
							<ul class="point">
								<li>map.keys()、values()、entries()结合for of</li>
								<li>foreach</li>
							</ul>
							<pre><code class="language-xml line-numbers">let map = new Map();
let obj = {
    name: "1",
}
map.set(obj, "对象");
map.set("56", '字符串');
map.forEach((item, index) => {
    console.log("foreach遍历", item, index)
})
for (const key of map.keys()) {
    console.log("keys()遍历键" + key)
}
for (const value of map.values()) {
    console.log("values()遍历键值" + value)
}
for (const [key, value] of map.entries()) {
    console.log("values()遍历键、键值" + key, value)
}
// entries等同于：
for (const [key, value] of map) {
console.log("遍历键、键值" + key, value)
}</code></pre>
						</el-card>
						<el-card class="box-card">
							<div class="title-left">类型转换</div>
							<el-button size="small" plain @click="mapToArray">打印</el-button>
							<ul class="point">
								<li>展开语法[...map]</li>
								<li>Array.from(map)</li>
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
							<div class="title-left">使用map操作Dom</div>
							<el-button size="small" plain @click="operateDom">打印</el-button>
							<div class="operate-dom" name="div1">div</div>
							<div class="operate-dom" name="div2">div</div>
							<div class="operate-dom" name="div3">div</div>
							<pre><code class="language-xml line-numbers">let map = new Map();
let elems = document.querySelectorAll(".operate-dom");
elems.forEach((item) => {
  map.set(item, item.getAttribute('name'))
})
addEventListener
map.forEach((config, elem) => {
  elem.addEventListener('click', () => {
    this.$message.success(config)
  })
})</code></pre>
						</el-card>
						<el-card class="box-card">
							<div class="title-left">利用Map控制表单提交</div>
							<el-button size="small" plain>打印</el-button>
							<form action="" @submit="mapForm">
								<label>同意协议：</label>
								<input type="checkbox" error="请勾选接受协议" />
								<label>我是校内学生：</label>
								<input type="checkbox" error="请勾选是否学生" />
								<input type="submit" value="提交" />
							</form>
							<pre><code class="language-xml line-numbers">
              </code></pre>
						</el-card>
						<el-card class="box-card">
							<div class="title-left">WeakMap</div>
							<el-button size="small" plain>打印</el-button>
							<ul class="point">
								<li>WeakMap的键只能是对象类型</li>
								<li>无法用keys()、values()、entries()迭代（弱引用类型、不会改变引用计数器）</li>
							</ul>
							<pre><code class="language-xml line-numbers">
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
			keyword: '',
			keywordData: []
		};
	},
	created() {
	},
	mounted() {
		Prism.highlightAll();
	},
	methods: {
		mapUse() {
			let a = 456;
			let arr = [3, 4, 5];
			//   创建添加方式一
			let map = new Map([[a, '变量键名'], [arr, '数组键名']]);
			//   创建添加方式二
			map.set(function() {}, '这是个方程');
			map.set(5, '数字键').set('5', '字符串键');
			console.log(map);
			// 与obj对比
			let obj = {
				1: '数字1',
				'1': '字符串1',
				[a]: '变量键名'
			};
			console.log(obj);
			let obj2 = {
				[obj]: '用对象做键名'
			};
			console.log(obj2);
			//  取值
			console.log('取值方式1：', obj2['[object Object]']);
			console.log('取值方式2：', obj2[obj.toString()]);
		},
		mapOperate() {
			let map = new Map();
			let obj = {
				name: '1'
			};
			map.set(obj, '对象');
			map.set('56', '字符串');
			console.log(map);
			console.log(map.has('56'));
			console.log(map.delete(obj));
			console.log(map.size);
			console.log(map.clear());
		},
		mapToArray() {
			let map = new Map();
			let obj = {
				name: '1'
			};
			map.set(obj, '对象');
			map.set('56', '字符串');
			console.log('[...map]方法：', [...map]);
			console.log('...map.entries()方法，等同于上式：', [...map.entries()]);
			console.log(Array.from(map));
		},
		ergodicMap() {
			let map = new Map();
			let obj = {
				name: '1'
			};
			map.set(obj, '对象');
			map.set('56', '字符串');
			map.forEach((item, index) => {
				console.log('foreach遍历', item, index);
			});
			for (const key of map.keys()) {
				console.log('keys()遍历键' + key);
			}
			for (const value of map.values()) {
				console.log('values()遍历键值' + value);
			}
			for (const [key, value] of map.entries()) {
				console.log('values()遍历键、键值' + key, value);
			}
			// entries等同于：
			for (const [key, value] of map) {
				console.log('遍历键、键值' + key, value);
			}
		},
		operateDom() {
			let map = new Map();
			let elems = document.querySelectorAll('.operate-dom');
			elems.forEach(item => {
				map.set(item, item.getAttribute('name'));
			});
			addEventListener;
			map.forEach((config, elem) => {
				elem.addEventListener('click', () => {
					this.$message.success(config);
				});
			});
		},
		mapForm() {
			let map = new Map();
			let inputElems = document.querySelectorAll('input[error]');
			inputElems.forEach(item => {
				map.set(item, {
					error: item.getAttribute('error'),
					status: item.checked
				});
			});
			return [...map].every(item => {
				item[1].status || this.$message.warning(item[1].error);
				return item[1].status;
			});
		}
	}
};
</script>

<style>
.operate-dom {
	padding: 5px 10px;
	border: 1px solid salmon;
	cursor: pointer;
	margin: 5px 10px;
}
</style>
