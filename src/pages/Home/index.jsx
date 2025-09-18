// src\pages\Home\index.jsx

import { Link } from 'react-router-dom'
import './style.css'

function Home() {  
    return (
        <div className="home">
            <section className='hero'>
                <div className='hero__text'>
                    <h1>Contabilidade descomplicada para seu negócio</h1>
                    <p>Econnomize tempo e foque no que importa. Cuidamos da sua folha, impostos e obrigações com tecnologia e atendimento humano.</p>
                    <div className='hero__cta'>
                        <Link to="/servicos" className='btn primary'>Conheça nossos Serviços</Link>
                        <Link to='/fale-conosco' className='btn'>Fale com um especialista</Link>
                    </div>
                </div>
                <div className='hero__image'>
                    <img src={hero} alt='Equipe de contabilidade'/>
                </div>
            </section>

            <section className='features'>
                <h2>Por que nos escolher?</h2>
                <div className='grid cls-3'>
                    <div className='card'>
                        <h3>Atendimento  prioritário</h3>
                        <p>Suporte rápido pelo WhatApp, e-mail e reuniões online.</p>
                    </div>
                    <div className='card'>
                        <h3>Tecnologia</h3>
                        <p>Integrações com bancos e plataformas para automatizar lançamentos e reduzir erros.</p>
                    </div>
                    <div className='card'>
                        <h3>Planejamento tributário</h3>
                        <p>Escolha o regime ideal e estratégias legais para pagar menos impostos.</p>
                    </div>
                </div>
            </section>

            <section className='socialProof'>
                <div className='socialProof__image'>
                    <img src={office} alt='Escritório da empresa.'/>
                </div>
                <div className='socialProof__text'>
                    <h2>Mais de 200 empresas atendidas</h2>
                    <p>De MEIs a pequenas e médias empresas em todo o Brasil. Cases em comércio, serviços e tecnologia.</p>
                </div>
            </section>
        </div>
    )
}

export default Home