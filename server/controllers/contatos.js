var Contato = require("../models/contato").Contato;

exports.list = function(req, res) {
	Contato.find({}, function(error, contatos) {
		if (error) {
			console.log(error);
			return res.send(500);
		}
		res.json(contatos);
	});
}

exports.findById = function(req, res) {
	Contato.findById(req.params.id, function (error, contato) {
    	if (error) {
    		console.log(error);
    		return res.send(500);
		}
		res.send(contato);
	});
}

exports.create = function(req, res) {
	var contato = new Contato(req.body);
	contato.save(function(error, contato) {
		if (error) {
			console.log(error);
			return res.send(500, { error: "Object was not created." });
		}
		res.send(contato);
	});
}

exports.update = function(req, res) {
	Contato.findOneAndUpdate({_id:req.params.id}, req.body, function (error, contato) {
		if (error) {
			console.log(error);
			return res.send(500, { error: "Object was not updated." });
		}
	  	res.send(contato);
	});	
}

exports.delete = function(req, res) {
	Contato.findById(req.params.id, function (error, contato) {
	    contato.remove(function (error) {
	    	if (error) {
	    		console.log(error);
	    		return res.send(500, { error: "Object was not deleted." });
			}
			res.send(200);
	    });
	});
}