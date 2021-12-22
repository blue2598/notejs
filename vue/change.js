/*
 * @Descripttion: 
 * @version: 
 * @Author: Young
 * @Date: 2021-11-17 14:17:58
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-15 11:07:21
 * @FilePath: \notejs\vue\change.js
 */
(function () {
	let prevElem = document.querySelector(".prev");
	let nextElem = document.querySelector(".next");
	if (prevElem) {
		prevElem.addEventListener('click', function () {
			goPath(0)
		})
	}
	if (nextElem) {
		nextElem.addEventListener('click', function () {
			goPath(1)
		})
	}
})()

function goPath(flag) {
	let arr = window.location.pathname.split("/");
	let index = arr[arr.length - 1].split(".")[0].split("_")[1];
	nextI = flag ? index * 1 + 1 : index * 1 - 1
	window.location.href = `vue_${nextI}.html`
}
