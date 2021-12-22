/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-11-23 10:11:33
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-15 14:38:33
 * @FilePath: \notejs\src\store\index.js
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

const state = {
    number: 1,
}
import createVuexAlong from 'vuex-along' //vuex-along
// 响应组件中动作
// 这里处理异步
const actions = {
    add(context, n) {
        // context 相当于一个miniStore
        // context:{
        //     commit:{},dispatch:{},store:{}....
        // }
        context.commit("ADD", n)
    },
    waitAdd(context, n) {
        // 在action里面直接处理state数据、异步操作也可以实现功能，但开发者工具也没有响应
        setTimeout(() => {
            context.commit("WAITADD", n)
        }, 1000)
    }
}
// 操作数据
const mutations = {
    // 习惯约定，mutation里面使用大写的函数名
    ADD(state, n) {
        state.number = state.number + n;
    },
    SUB(state, n) {
        state.number = state.number - n;
    },
    WAITADD(state, n) {
        state.number = state.number + n;
    }
}
// 用于将state里面的数据加工
const getters = {
    getBigNum(state) {
        return state.number * 10
    }
}
const plugins = [createVuexAlong()];
// 创建store
const store = new Vuex.Store({
    state, actions, mutations, getters, plugins
})
// 暴露store
export default store