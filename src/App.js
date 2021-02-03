import logo from './logo.svg';
import './App.css';
import receitas from './assets/Receitas.json'
import { useState } from 'react';
import TableExpanded from './components/TableExpanded'
// import styled from "";
// const Button = styled.button`
//   color: var(--white);
//   border: 1px solid var(--white);
//   background: var(--black);
//   box-sizing: border-box;
//   cursor: pointer;
//   padding: 16px 24px;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   outline: none;
//   border-radius: 5px;
//   text-decoration: none;
//   display: inline-block;
//   transition: opacity 0.3s;

//   &:hover,
//   &:focus {
//     opacity: 0.5;
//   }
// `;

export default () => {
  // const [receitasNome, setReceitasNome] = useState();
  // const [receitasIngredientes,setReceitasIngredientes] = useState();
  // const [receitasModoPreparo, setReceitasModoPreparo] = useState();
  console.log(receitas)
  return (
    <div>
      <header>
        <div>
          <div style={{ flexDirection: "row" }}>
            <text style={{ fontSize: 30, fontWeight: "bold" }}>
              Seja muito bem-vindo ao Vivendo Sozinho.
            </text>
          </div>
          <h3>
            Aqui daremos dicas de como sobreviver sozinho ao se mudar, teremos
            receitas e muito mais.
          </h3>
        </div>
      </header>
      <body>
        <h3>Aqui segue nossa primeira receita postada: </h3>
        <a href="/Arroz">Arroz</a>
        <TableExpanded receitas={receitas} />
      </body>
    </div>
  );
}


