function requestHandler(req, res) {
	User.findbyId(req.userId)
		/*buscar un usuario por ID y una vez lo encuentre, buscar la propiedad
    cuando termine, buscar la propiedad task
    */
		.then(function (user) {
			return TAsks.findById(user.tasksId);
		})
		.then(function (tasks) {
			tasks.completed = true;
			tasks.save();
		})
		.then(function () {
			res.send("Tasks completed");
		})
		.catch(function (errors) {
			res.send(errors);
			/*
    el error se aplica para cada posible error 
    de cada .then
    */
		});
}
