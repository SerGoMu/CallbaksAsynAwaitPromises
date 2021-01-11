//CALLBACK HELL

function requestHandler(req, res){
    User.findbyId(req.userId, function(err, user){
        /*
        en este punto, se realiza la consulta por userID (de izda a der)
        y una vez haya respuesta, esta se gestiona con la funcion
        */
        if (err) {
            res.send(err);
        }
        else{
            TextTrackList.findbyId(user.taskID, function(err,tasks){
                /*otra callback para consutlar el campo task
                y gestionar la respuesta
                */
            if (err) {
                return res.send(err);
            }
            else{
                tasks.completed = true;
                tasks.save(funcion (err) {
                    if (err){
                        return res.send(err);
                    }
                    else {
                        res.send('Task Completed');
                    }
                })
            }
        }
    }
}
