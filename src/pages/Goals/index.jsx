import "./styles.css"

import { Box } from "@mui/material"
import goalsImage from '../../assets/goalsImage.jpg'
import { SideBar } from "../../components/componentsDashboard/SideBar"
import { Navbar } from "../../components/componentsDashboard/Navbar"
import TableGoals from "../../components/componentsGoals/TableGoals"

export const Goals = () =>  {

  return (
    
    <div className="bgColor">

      <Navbar />
       <Box  height={70}/>
       <Box sx={{display: 'flex'}}>
      <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div className="main-goals">
              <section>
                  <h1>Metas Estabelecidas</h1>
                  <article>
                      <p>
                      Definir metas financeiras é essencial para alcançar a estabilidade financeira, realizar sonhos e garantir um futuro financeiramente saudável.
                       As metas financeiras atuam como guias que direcionam nossas decisões diárias de gastos, poupanças e investimentos.
                       Aqui estão alguns motivos pelos quais definir metas financeiras é crucial:                      
                      </p>
                      <ol>
                        <li>
                          <strong className="title-reason">Direção e Foco: </strong> 
                          As metas financeiras fornecem clareza sobre onde você deseja chegar financeiramente.
                             Eles ajudam a concentrar seus esforços e recursos em objetivos específicos, em vez de gastar dinheiro aleatoriamente.
                        </li>
                        <li>
                          <strong className="title-reason">Planejamento Eficaz: </strong> 
                          Definir metas financeiras permite que você crie um plano sólido para alcançá-las.
                             Você pode dividir metas maiores em metas menores e mais alcançáveis, tornando o processo mais gerenciável
                             e motivador.
                        </li>
                        <li>
                          <strong className="title-reason">Controle Financeiro: </strong> 
                            As metas financeiras ajudam a controlar os gastos. Quando você tem um objetivo em mente, é mais provável que você
                             para evitar gastos impulsivos e desnecessários, ao compreender a relação entre suas ações e progresso
                             em direção ao objetivo.
                        </li>
                      </ol>
                  </article>
              </section>
              <figure>
                  <img src={goalsImage}  alt="imagem mulher com uma luneta" />
              </figure>
            </div>
            <TableGoals />
        </Box>
      </Box>
      </div> 
  )
}
