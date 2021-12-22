<!--
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-07-29 16:37:50
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-07-29 16:52:09
 * @FilePath: \vue-js-point\src\view\jsPoint\getInfo.vue
-->

<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>获取操作系统</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <pre><code class="language-xml line-numbers">getOS() {
// 获取操作系统
var sUserAgent = navigator.userAgent;
var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform ==
  "Macintosh") || (navigator.platform == "MacIntel");
if (isMac) return "Mac";
var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
if (isUnix) return "Unix";
var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
if (isLinux) return "Linux";
if (isWin) {
  var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
  if (isWin2K) return "Win2000";
  var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
  if (isWinXP) return "WinXP";
  var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
  if (isWin2003) return "Win2003";
  var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
  if (isWinVista) return "WinVista";
  var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
  if (isWin7) return "Win7";
  var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
  if (isWin10) return "Win10";
}
return "other";}</code></pre>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>获取浏览器以及版本号</span>
      </div>
      <div class="card-inner">
        <el-row :gutter="20">
          <pre><code class="language-xml line-numbers">getBrowse() {
 var browser = {};
 var userAgent = navigator.userAgent.toLowerCase();
 var s;
 (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1]: (s = userAgent.match(/firefox\/([\d.]+)/)) ?
   browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s =
     userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(
     /version\/([\d.]+).*safari/)) ?
   browser.safari = s[1] : 0;
 var version = "";
 if (browser.ie) {
   version = 'IE ' + browser.ie;
 } else {
   if (browser.firefox) {
     version = 'firefox ' + browser.firefox;
   } else {
     if (browser.chrome) {
       version = 'chrome ' + browser.chrome;
     } else {
       if (browser.opera) {
         version = 'opera ' + browser.opera;
       } else {
          if (browser.safari) {
          version = 'safari ' + browser.safari;
        } else {
          version = '未知浏览器';
        }
       }
     }
   }
 }
 return version;
      }</code></pre>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'App',
    created() {
      console.log("您的操作系统是：" + this.getOS());
      console.log("您的浏览器是：" + this.getBrowse());
    },
    mounted() {
      Prism.highlightAll();
    },
    methods: {
      getOS() {
        // 获取操作系统
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform ==
          "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) return "Linux";
        if (isWin) {
          var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
          if (isWin2K) return "Win2000";
          var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
          if (isWinXP) return "WinXP";
          var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
          if (isWin2003) return "Win2003";
          var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
          if (isWinVista) return "WinVista";
          var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
          if (isWin7) return "Win7";
          var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
          if (isWin10) return "Win10";
        }
        return "other";
      },
      getBrowse() {
        var browser = {};
        var userAgent = navigator.userAgent.toLowerCase();
        var s;
        (s = userAgent.match(/msie ([\d.]+)/)) ? browser.ie = s[1]: (s = userAgent.match(/firefox\/([\d.]+)/)) ?
          browser.firefox = s[1] : (s = userAgent.match(/chrome\/([\d.]+)/)) ? browser.chrome = s[1] : (s =
            userAgent.match(/opera.([\d.]+)/)) ? browser.opera = s[1] : (s = userAgent.match(
            /version\/([\d.]+).*safari/)) ?
          browser.safari = s[1] : 0;
        var version = "";
        if (browser.ie) {
          version = 'IE ' + browser.ie;
        } else {
          if (browser.firefox) {
            version = 'firefox ' + browser.firefox;
          } else {
            if (browser.chrome) {
              version = 'chrome ' + browser.chrome;
            } else {
              if (browser.opera) {
                version = 'opera ' + browser.opera;
              } else {
                if (browser.safari) {
                  version = 'safari ' + browser.safari;
                } else {
                  version = '未知浏览器';
                }
              }
            }
          }
        }
        return version;
      }
    }
  }

</script>

<style>


</style>
