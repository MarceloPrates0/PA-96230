const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('teste_000610', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const  Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
},
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
}, 
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
},
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
}, 
    dataNascimento: {
        type: DataTypes.STRING,
        allowNull: false
},
    salario: {
        type: DataTypes.FLOAT,
        allowNull: false
},
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
}, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
}
});


const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    validade: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    protocoloAtendimento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});


const app = express(); //criação do app express
app.use(cors()); //habilitar o cors
app.use(express.json()); //habilitar o json

const port = 3000; //definir a porta

app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

app.post('/funcionarios', async (req, res) => {
    const { nome, cpf, rg, matricula, dataNascimento, salario, telefone, email } = req.body;
    try {
        const novoFuncionario = await Funcionario.create({ nome, cpf, rg, matricula, dataNascimento, salario, telefone, email });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

app.post('/produtos', async (req, res) => {
    const { nome, lote, validade } = req.body;
    try {
        const novoProduto = await Produto.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

app.post('/clientes', async (req, res) => {
    const { nome, dataNascimento, protocoloAtendimento } = req.body;
    try {
        const novoCliente = await Cliente.create({ nome, dataNascimento, protocoloAtendimento });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

sequelize.sync().then(() => {
    app.listen(port, async () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
        console.log(`Conectando ao banco de dados...`);
    });
}).catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});
    