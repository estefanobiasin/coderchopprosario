import { useParams, Link } from "react-router-dom";
import React from 'react';
import './style/Style.css';
import ItemList from './ItemList';

function ItemListContainer (){

    return(
                 <div className="item">
                     <ItemList/>
                
                </div>

        )


}
 export default ItemListContainer
