import React from 'react'
import './styles.css'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BarChartIcon from '@mui/icons-material/BarChart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const About = () => {
  return (
    <article className='container-about' id='serviços'>

      <section className='section-text'>
      <h1>Aqui estão alguns benefícios que a CoinTrackr oferece</h1>
      <p>Venha fazer parte, e tenha total controle das suas despesas</p>
      </section>

     <div className="container-card">
     <section className='section-card'>
        <MonetizationOnIcon />
        <h2>Controle de Gastos</h2>
        <p>
          Tenha total noção dos seus gastos e despesas, sempre sabendo onde o seu dinheiro está indo.
        </p>
      </section>

      <section className='section-card'>
        <BarChartIcon />
        <h2>Relatórios e análises</h2>
        <p>
          Entenda através de gráficos interativos e personalizados, suas depesas e investimentos.
        </p>
      </section>

      <section className='section-card'>
        <CurrencyExchangeIcon />
        <h2>Conversor de Moedas</h2>
        <p>
          Evite pesquisar taxas de câmbio, realizar calculos manuais. A CoinTrackr oferece tudo isso de forma simples e dinâmica
        </p>
      </section>
     </div>
    </article>
  )
}

export default About