

const dicas = (servidor, bancoDeDados) => {
    servidor.get('/dicas', (req, res) => {
        res.json({
            dicas: bancoDeDados.dicas[parseInt(Math.random() * bancoDeDados.dicas.length)],
        });
    });


    servidor.post('/create', (req, res) => {
        const body = req.body
        bancoDeDados.dicas.push(body.dicas)
        res.json(body)
    });
};

export default dicas;