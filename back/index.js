const cors = require('cors')
const Express = require('express')
//const fs = require('fs')
const app = Express()
const users = require('./usuarios')

app.use(cors());
app.use(Express.json())


app.get('/', (req , res) => {
    res.status(200).json({messagem: 'estou rodando'})
})

app.post('/login',(req, res) => {
    
    //const usuarioscad =   fs.readFileSync('./usuarios.json')
    //const usuariosparse = JSON.parse(usuarioscad)
    
    console.log(req.body)

    var nome = req.body.nomes
    var senha = req.body.senha
    
 

        for( var umUsuario of users) {
            if(nome == umUsuario.nome && senha == umUsuario.senha ){
                    //req.session.nome = umUsuario
                    res.send('conectado')
                    return
            }
                
            
        }
        res.send('falhou')
    
})

const port = process.env.PORT || 3000
app.listen(port , () => {
    console.log('servidorrodandonaporta ', port )
})


