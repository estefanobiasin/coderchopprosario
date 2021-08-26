
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import "./components/style/Style.css";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import { cartContext } from "./context/cartContext";



export default function App(){
  const [isDark, setIsDark] = useState(false);
  return (
    // <Provider value={isDark}>
    
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/item-detail-container/:identificador">
            <ItemDetailContainer />
          </Route>
        </Switch>
        </BrowserRouter>
    //  </ThemeContext.Provider>
      // <div className="App">
      // <NavBar/>
      // <ItemListContainer/>
      // <ItemDetailContainer/>
      
      // </div>
      
      
  )
}
