const { taskOne, taskTwo } = require("./tasks"); //importa dos metodos

async function main() {
	console.time("Measuring time"); //comienza a medir el tiempo en que se ejecuta el código
	const valueOne = await taskOne();
	const valueTwo = await taskTwo();
	console.timeEnd("Measuring time"); //termina de medir el tiempo

	console.log("Task One returned", valueOne);
	console.log("Task Two returned", valueTwo);
}

main();
