import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Product from '../productComponents/Product';
import ProductTable from '../productComponents/ProductsTable';
import ProductHistory from '../productComponents/ProductHistory';
const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
      <Home />
       </Route>   
      <Route path="/product">
        <Product />
      </Route>
      <Route path = '/displayProducts'>
      <ProductTable/>
      </Route>
      <Route path = '/displayProductsHistory'>
      <ProductHistory/>
      </Route>
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Main;