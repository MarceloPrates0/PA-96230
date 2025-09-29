const express = require('express');
const cross = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

//Configuração do sequelize para conetar ao banco de dados MySQL
const sequelize = new Sequelize('aula002909', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Definição da tabela de Usuario
const Usuario = sequelize.define('Usuario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }            
});

// Configuração do serbidor Express
const app = express(); // Criação do servidor
app.use(express.json()); // Middleware - Permite que o servidor entenda JSON no corpo das requisições
app.use(cross()); // Permite que o servidor aceite requisições do frontend
const port = 30000; // Porta onde o servidor irá escutar

// Criando ortas da API
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.post('/usuarios', async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const novoUsuario = await Usuario.create({ nome, email, telefone });
        res.status(201).json(novoUsuario);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(400).json({ error: 'Verifique se o e-mail já existe.' });
    }
});

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
        console.log('Banco de dados sincronizado');
    });
}).catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
});   