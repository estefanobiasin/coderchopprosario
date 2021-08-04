
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./components/NavBar.css";
import ItemCount from "./components/ItemCount";



export default function App(){
  return (
    <div className="App">
    <NavBar/>   
    <ItemListContainer greeting="Este sera el listado de nuestro carrito"  />
    <ItemCount/>
    </div>
    
    
  )
}
