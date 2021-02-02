import receitas from "../../assets/Receitas.json";
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
  console.log(receitas);
  return (
    <header>
      {receitas.map((receita) => {
        console.log(receita);
        return (
          <div>
            <div style={{ flexDirection: "row" }}>
              <text style={{ fontSize: 40 }}>Receita: </text>
              <text style={{ fontWeight: "400", fontSize: 30 }}>
                {receita.nome}
              </text>
            </div>
            <h3>Ingredientes:</h3>
            <ul>
              {receita.ingredientes.map((ingrediente) => (
                <li>{ingrediente}</li>
              ))}
            </ul>
            <h3>Modo de Preparo:</h3>
            <ul>
              {receita.modoPreparo.map((etapa) => (
                <li>{etapa}</li>
              ))}
            </ul>
          </div>
        );
      })}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </header>
  );
};
