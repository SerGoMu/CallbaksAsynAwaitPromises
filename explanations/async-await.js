async function requestHandler(req, res) {
	try {
		const user = await User.findbyId(req.userId);
		const tasks = await Tasks.findbyId(req.tasksId);
		tasks.completed = true;
		await tasks.save();
		res.send("Tasks completed");
	} catch (e) {
		res.send(e);
	}
}
