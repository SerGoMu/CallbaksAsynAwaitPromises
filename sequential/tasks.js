const util = require("util");
const sleep = util.promisify(setTimeout); //convierte la callback SetTimeout a AsyncAwait y lo almacena en la constante

module.export = {
	async taskOne() {
		await sleep(4000);
		return "ONE VALUE";
	},

	async taskTwo() {
		await sleep(2000);
		return "TWO VALUE";
	},
};
