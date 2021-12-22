/*
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-27 14:35:40
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-24 17:21:03
 * @FilePath: \notejs\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(["../view/Home.vue"], resolve)
      },
      children: [
        // 获取一些信息：操作系统，浏览器信息等
        {
          path: 'getInfo',
          name: 'getInfo',
          component: function (resolve) {
            require(["../view/jsPoint/getInfo.vue"], resolve)
          }
        },
        // set
        {
          path: "scope",
          name: "scope",
          component: function (resolve) {
            require(["../view/jsPoint/scope.vue"], resolve)
          }
        },
        //提升：变量提升和函数提升
        {
          path: 'promotion',
          name: 'promotion',
          component: function (resolve) {
            require(["../view/jsPoint/promotion.vue"], resolve)
          }
        },
        // 判断数据类型
        {
          path: 'JudgeType',
          name: 'JudgeType',
          component: function (resolve) {
            require(["../view/jsPoint/JudgeType.vue"], resolve)
          }
        },
        // 数组操作
        {
          path: 'arrayOperate',
          name: 'arrayOperate',
          component: function (resolve) {
            require(["../view/jsPoint/arrayOperate.vue"], resolve)
          }
        },
        // js操作Dom
        {
          path: 'domOperate',
          name: 'domOperate',
          component: function (resolve) {
            require(["../view/jsPoint/domOperate.vue"], resolve)
          }
        },
        // 字符串操作
        {
          path: 'stringOperate',
          name: 'stringOperate',
          component: function (resolve) {
            require(["../view/jsPoint/stringOperate.vue"], resolve)
          }
        },
        // ajax请求
        {
          path: 'ajax',
          name: 'ajax',
          component: function (resolve) {
            require(["../view/jsPoint/ajax.vue"], resolve)
          }
        },
        // call、apply、bind的区别
        {
          path: "callapplybind",
          name: "callapplybind",
          component: function (resolve) {
            require(["../view/jsPoint/callapplybind.vue"], resolve)
          }
        },
        // promise
        {
          path: "promise",
          name: "promise",
          component: function (resolve) {
            require(["../view/jsPoint/promise.vue"], resolve)
          }
        },
        // Object常用方法
        {
          path: "object",
          name: "object",
          component: function (resolve) {
            require(["../view/jsPoint/object.vue"], resolve)
          }
        },
        // 深拷贝对象
        {
          path: "copyobject",
          name: "copyobject",
          component: function (resolve) {
            require(["../view/jsPoint/copyobject.vue"], resolve)
          }
        },
        // 字符串模板的使用
        {
          path: "stringTemplate",
          name: "stringTemplate",
          component: function (resolve) {
            require(["../view/jsPoint/stringTemplate.vue"], resolve)
          }
        },
        // symbol
        {
          path: "symbol",
          name: "symbol",
          component: function (resolve) {
            require(["../view/jsPoint/symbol.vue"], resolve)
          }
        },
        // set
        {
          path: "set",
          name: "set",
          component: function (resolve) {
            require(["../view/jsPoint/set.vue"], resolve)
          }
        },
        // set
        {
          path: "map",
          name: "map",
          component: function (resolve) {
            require(["../view/jsPoint/map.vue"], resolve)
          }
        },
        // set
        {
          path: "factories",
          name: "factories",
          component: function (resolve) {
            require(["../view/jsPoint/factories.vue"], resolve)
          }
        },
        // CSS
        {
          path: "animation",
          name: "animation",
          component: function (resolve) {
            require(["../view/cssPoint/animation.vue"], resolve)
          }
        },
        {
          path: "vueAni",
          name: "vueAni",
          component: function (resolve) {
            require(["../view/cssPoint/vueAni.vue"], resolve)
          }
        },
        // vuezhong 
        // 父子传值
        {
          path: "parent",
          name: "parent",
          component: function (resolve) {
            require(["../view/vuePoint/communication/Parent.vue"], resolve)
          }
        },
        {
          // 插槽
          path: "useSlot",
          name: "useSlot",
          component: function (resolve) {
            require(["../view/vuePoint/useSlot/useSlot.vue"], resolve)
          }
        },
        {
          // 路由的使用
          path: "/useRouter",
          name: "useRouter",
          component: function (resolve) {
            require(["../view/vuePoint/useRouter/router-1.vue"], resolve)
          },
          children: [
            {
              path: "routerhome",
              name: "routerhome",
              component: function (resolve) {
                require(["../view/vuePoint/useRouter/HOME.vue"], resolve)
              },
            },
            {
              path: "routermore",
              name: "routermore",
              component: function (resolve) {
                require(["../view/vuePoint/useRouter/MORE.vue"], resolve)
              },
              children: [
                {
                  // path: "detail",
                  path: "detail/:id",
                  name: "detail",
                  component: function (resolve) {
                    require(["../view/vuePoint/useRouter/Details.vue"], resolve)
                  },
                  // 对象写法：传的值无法是动态的
                  // props: { a: "路由配置里的a", b: "路由配置里的a" },
                  // 布尔值写法：该组件内接收到  params 携带的参数
                  // props: true,
                  // 函数写法：
                  // props($route) {
                  //   return { id: $route.query.id }
                  // }
                }
              ]
            }
          ]
        },
      ]
    },
  ]
})
export default router
console.log(router);
// 全局前置路由守卫--初始化和切换路由的时候都会触发
router.beforeEach((to, from, next) => {
  console.log(from, to);
  next();
})
// 后置守卫
router.afterEach((to, from) => {
  document.title = "改变标题"
})
// 独享路由守卫，写在单独的路由配置里
// beforeEnter((to,from,next)=>{})
// 组件路由守卫，写在组件内部,通过路由规则(通过导航栏输入地址无效、直接展示的时候不触发)，进入/离开组件时调入
// beforeRouteEnter(to,from,next){}
// beforeRouteLeave(to,from,next){}

