import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./components/style/Style.css";
import Category from "./components/Category";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CarritoProvider } from "./context/cartContext";

export default function App() {

  return (
    <CarritoProvider>

      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <Category />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/item-detail-container/:identificador">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </CarritoProvider>



  )
}