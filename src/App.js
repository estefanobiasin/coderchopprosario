
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./components/NavBar.css";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default function App(){
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/category/:id">
          <ItemListContainer/>
        </Route>
        <Route exact path="/item-detail-container">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/item-detail-container/:identificador">
          <ItemDetailContainer />
        </Route>

      </Switch>
    </BrowserRouter>
    // <div className="App">
    // <NavBar/>
    // <ItemListContainer/>
    // <ItemDetailContainer/>
    
    // </div>
    
    
  )
}
