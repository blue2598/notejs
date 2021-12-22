/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-11-18 14:17:56
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-18 14:34:00
 * @FilePath: \notejs\src\mixin.js
 */
// 混入：将一些公共的方法分离出来
// 在Home.vue文件里进行局部引用测试
export const mixin = {
    data() {
        return {
            mixinData: "这里可以写任何data、methods、生命周期里面的数据、方法."
        }
    },
    methods: {
        hello() {
            alert("hello!")
        }
    }
}