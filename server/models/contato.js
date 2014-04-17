var mongoose = require("mongoose");

var ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false },
  email: { type: String, required: false }
});

var Contato = mongoose.model('Contato', ContatoSchema);

module.exports = {
  Contato: Contato
}