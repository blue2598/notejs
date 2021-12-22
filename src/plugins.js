/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-11-18 14:17:38
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-18 14:35:00
 * @FilePath: \notejs\src\plugins.js
 */

// 插件
// 本质是一个包含install方法的一个对象
// 在main.js里引入,接受参数第一项是Vue，第二项是插件使用者传递的数据
// 这里接收到Vue了就可以在此处写Vue.mixin();Vue.filter();Vue.directive();等等
export default {
    install(Vue, a, b, c) {
        console.log(Vue);
        console.log(a, b, c);

        Vue.filter('timeFormat', function (time, format = 'YY-MM-DD hh:mm:ss') {
            let date = new Date(time);
            let config = {
                YY: date.getFullYear(),
                MM: date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
                DD: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
                hh: date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
                mm: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
                ss: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
            };
            for (let key in config) {
                format = format.replace(key, config[key]);
            }
            return format;
        })
    }
}