let candidatos = require('../data/database')

module.exports = (router) => {

    router.get('/candidato', (res, req) => {
        req.json(candidatos)
    })

    router.get('/candidato/:id', (req, res) => {
        const id = req.params.id
        const candidatoEncontrado = candidatos.find(a => a.id == id)
        res.json(candidatoEncontrado)
    })

    router.put('/candidato', (req, res) => {
        const id = req.body.id
        const candidatoEncontrado = candidatos.find(a => a.id == id)
        candidatoEncontrado.nome = req.body.nome
        candidatoEncontrado.contato = req.body.contato
        candidatoEncontrado.habilidades = req.body.habilidades
        candidatoEncontrado.status = req.body.status
        candidatoEncontrado.contratacao_data = req.body.contratacao_data

        res.json(candidatoEncontrado)
    })

    router.post('/candidato', (req, res) => {
        const candidato = {
            id: candidatos.length + 1,
            nome: req.body.nome,
            contato: req.body.contato,
            habilidades: req.body.habilidades,
            status: req.body.status,
            contratacao_data: req.body.contratacao_data
        }
        candidatos.push(candidato)
        res.json(candidato)
    })

    router.delete('/candidato/:id', (req, res) => {
        const novaCollection = candidatos.filter(a => a.id != req.params.id)
        candidatos = novaCollection
        res.send('Candidato removido')
    })
}












