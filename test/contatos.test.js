var superagent = require('superagent')
var expect = require('expect.js')

describe('Testes da API de Contato', function(){
  var id

  it('Create', function(done){    
    superagent.post('http://localhost:3000/contatos')
      .send({ 
        nome: 'Contato 1'
      })
      .end(function(e,res){
        //console.log(res.body)
        expect(e).to.eql(null)
        id = res.body._id
        done()
      })    
  })

  it('Get', function(done){
    superagent.get('http://localhost:3000/contatos/' + id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id).to.eql(id)        
        done()
      })
  })

  it('List', function(done){
    superagent.get('http://localhost:3000/contatos')
      .end(function(e, res){
        //console.log(res.body)
        expect(e).to.eql(null)
        expect(res.body.contatos.length).to.be.above(0)
        expect(res.body.contatos.map(function (item){return item._id})).to.contain(id)        
        done()
      })
  })

  it('Update', function(done){
    superagent.put('http://localhost:3000/contatos/' + id)
      .send({
          nome: 'Contato 1 a'
        })
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id).to.eql(id)        
        done()
      })
  })

  it('Check Update', function(done){
    superagent.get('http://localhost:3000/contatos/' + id)
      .end(function(e, res){
        // console.log(res.body)
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.body._id.length).to.eql(24)        
        expect(res.body._id).to.eql(id)        
        expect(res.body.nome).to.eql('Contato 1 a')        
        done()
      })
  })    

  it('Remove', function(done){
    superagent.del('http://localhost:3000/contatos/' + id)
      .end(function(e, res){
        expect(e).to.eql(null)
        expect(typeof res.body).to.eql('object')
        expect(res.status).to.eql(200)    
        done()
      })
  })      
})