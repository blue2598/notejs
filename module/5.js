// 默认导出
export default class User {
	constructor(name) {
		this.name = name;
	}
	show() {
		return this.name;
	}
}
// 或者在这里写
// export {User as default}


// 混合导出
// let y = "uuu";
// function show(){
	
// }
// export {y,show as showName};
