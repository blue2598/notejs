/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-11-23 10:11:33
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 13:36:47
 * @FilePath: \notejs\src\store 模块化(开发版)\index.js
 */
// 都是对象
// state {},
// action {}
// mutation {}
// 以上三个都需要store的管理

// 引入Vuex
import Vue from 'vue'
import Vuex from 'vuex';
// 应用Vuex
Vue.use(Vuex)
// xx功能相关模块
const funState1 = {
    namespace: true,
    actions: {
        add(context, n) {
            context.commit(n)
        }
    },
    mutations: {
        ADD(state, num) {
            state.number = num;
        }
    },
    state: {},
    getters: {},
}
// xx功能相关模块

// import funState2 from './funState2.js' 可以将下面的换成这行
const funState2 = {
    namespace: true,
    actions: {},
    mutations: {},
    state: {},
    getters: {},
}


// xx功能相关模块
const funState3 = {
    namespace: true,
    actions: {},
    mutations: {},
    state: {},
    getters: {},
}
// 开启命名空间：namespace:true
//   取值时候用 ...mapState('fun1',['funName1','funName2'])
//   取值时候用 ...mapGetters('fun1',['funName1','funName2'])
//     或 取值时候用 this.$store.fun1.state.params1
// 提交的时候
// this.$store.commit('fun1/[funName]',options)
// this.$store.dispatch('fun1/[funName]',options)
// 
const store = new Vuex.Store({
    modules: { fun1: funState1, fun2: funState2, fun3: funState3 }
})
// 创建store
// const store = new Vuex.Store({
//     modules: { ...funState1, ...funState2, ...funState3 }
// })
// 暴露store
export default store