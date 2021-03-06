//ejecutar de manera secuencial

const { taskOne, taskTwo } = require("./tasks"); //importa dos metodos
const e = "algo";
async function main() {
	try {
		console.time("Measuring time"); //comienza a medir el tiempo en que se ejecuta el código
		const valueOne = await taskOne();
		const valueTwo = await taskTwo();
		console.timeEnd("Measuring time"); //termina de medir el tiempo

		console.log("Task One returned", valueOne);
		console.log("Task Two returned", valueTwo);
	} catch {
		console.log(e);
	}
}

main();
