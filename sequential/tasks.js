const util = require("util");
const sleep = util.promisify(setTimeout); //convierte la callback SetTimeout a AsyncAwait y lo almacena en la constante

module.export = {
	async taskOne() {
		try {
			throw new Error("SOME PROBLEM");
			await sleep(4000);
			return "ONE VALUE";
		} catch (e) {
			console.log(e);
		}
	},

	async taskTwo() {
		try {
			await sleep(2000);
			return "TWO VALUE";
		} catch (e) {
			console.log(e);
		}
	},
};
