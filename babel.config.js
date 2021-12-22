/*
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-10-15 13:35:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-10-15 13:53:53
 * @FilePath: \notejs\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["prismjs", {
      "languages": ["javascript", "css", "markup"], // 这是语言类型
      "plugins": ["line-numbers"], // 使用了行号还可以添加其他插件，具体看官网
      "theme": "twilight", // 主题
      "css": true
    }]
  ]

}
