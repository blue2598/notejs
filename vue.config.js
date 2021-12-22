/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-10-15 13:45:28
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-11-22 14:15:18
 * @FilePath: \notejs\vue.config.js
 */
module.exports = {
    lintOnSave: false,
    // 方式一
    // vue开了一个代理服务器，默认端口号就是项目启动的端口号
    // 请求服务时默认先找本地服务器有没有，如果没有再转发到接口服务器
    // devServer:{
    //     proxy:"https://www.fastmock.site/mock/5be73acffa04964e175aa5d4ad4354f1/easybuy"
    // }
    // 方式二
    // 配置多个 ，根据请求前缀转发
    devServer: {
        proxy: {
            "/api": {
                target: "https://www.fastmock.site/mock/5be73acffa04964e175aa5d4ad4354f1/easybuy",
                // 转发的时候将api再去掉
                pathRewrite: {
                    "^/api": ""
                },
                // 支持websocket
                ws: true,
                // 欺骗接口服务器
                // true是告诉服务器当前来源和接口服务器相同，false是真实
                // 即是改变请求头中的host
                changeOrigin: false,
            },
        }
    }
}