import Header from "./componentes/header"
import ListadoPaciente from "./componentes/ListadoPaciente"
import Formulario from "./componentes/formulario"
import Error from "./componentes/error"

function App() {

  return (
    <>
      <Header />
      <ListadoPaciente/>   
     <Formulario/> 
     <Error/>
    </>
  )
}
export default App