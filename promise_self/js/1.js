class PromiseSelf {
	static PENDING = "pending";
	static FULFILLED = "fulfilled";
	static REJECT = "reject";
	constructor(executor) {
		this.status = PromiseSelf.PENDING;
		this.value = null;
		try {
			executor(this.resolve.bind(this), this.reject.bind(this))
		} catch (error) {
			this.catch(error)
		}
		this.callbacks = [];
	}
	resolve(value) {
		if (this.status == PromiseSelf.PENDING) {
			// 外面调用时这里this指向undefined(class中是严格模式)
			this.status = PromiseSelf.FULFILLED;
			this.value = value;
			setTimeout(() => {
				this.callbacks.forEach(item => {
					item.onFulfilled(value);
				})
			})
		}
	}
	reject(reason) {
		if (this.status == PromiseSelf.PENDING) {
			this.status = PromiseSelf.REJECT;
			this.value = reason;
			setTimeout(() => {
				this.callbacks.forEach(item => {
					item.onRejected(reason)
				})
			})
		}
	}
	then(onFulfilled, onRejected) {
		return new PromiseSelf((resolve, reject) => {
			if (typeof onFulfilled != "function") {
				// then穿透=》返回这里的值
				onFulfilled = () => this.value
			}
			if (typeof onRejected != "function") {
				// then穿透=》返回这里的值
				onRejected = () => {
					throw Error(this.value)
				}
			}
			if (this.status == PromiseSelf.PENDING) {
				this.callbacks.push({
					onFulfilled: value => {
						try {
							let result = onFulfilled(value);
							if (result instanceof PromiseSelf) {
								// 如果then里面返回的是一个Promise对象=>改变返回的状态值给下一
								result.then(resolve, reject)
							} else {
								resolve(result)
							}
						} catch (err) {
							reject(err)
						}
					},
					onRejected: error => {
						try {
							let result = onRejected(error);
							if (result instanceof PromiseSelf) {
								// 如果then里面返回的是一个Promise对象=>改变返回的状态值给下一
								result.then(resolve, reject)
							} else {
								resolve(result)
							}
						} catch (err) {
							reject(err)
						}
					}
				})
			}
			if (this.status == PromiseSelf.FULFILLED) {
				setTimeout(() => {
					// 放进任务对列中 
					try {
						let result = onFulfilled(this.value);
						if (result instanceof PromiseSelf) {
							// 如果then里面返回的是一个Promise对象=>改变返回的状态值给下一个
							result.then(resolve, reject)
						} else {
							resolve(result)
						}
					} catch (error) {
						reject(error)
					}
				})
			}
			if (this.status == PromiseSelf.REJECT) {
				setTimeout(() => {
					try {
						let result = onRejected(this.value);
						if (result instanceof PromiseSelf) {
							// 如果then里面返回的是一个Promise对象=>改变返回的状态值给下一个
							result.then(resolve, reject)
						} else {
							resolve(result)
						}
					} catch (error) {
						reject(error)
					}
				})
			}
		})
	}
	catch (callback) {
		callback(this.value)
	}
}
