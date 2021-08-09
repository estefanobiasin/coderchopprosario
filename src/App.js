
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./components/NavBar.css";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";



export default function App(){
  return (
    <div className="App">
    <NavBar/>   
    <ItemListContainer />
    <ItemCount stok={4} inicio={0}/>
    
    </div>
    
    
  )
}
