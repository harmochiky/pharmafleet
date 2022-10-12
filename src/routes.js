import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DepPage from "./pages/DepPage";
import CatPage from "./pages/CatPage";
import Deals from "./pages/Deals";
import Panel from "./pages/Panel";
import BuyerApply from "./pages/BuyerApply";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ManageProducts from "./pages/ManageProducts";
import AddNew from "./pages/AddNew";

class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add-new" component={AddNew} />
        <Route exact path="/manage-products" component={ManageProducts} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/p/:pid/:name" component={ProductPage} />
        <Route exact path="/deals" component={Deals} />
        <Route exact path="/s/:dep" component={DepPage} />
        <Route exact path="/s/:dep/:cat" component={CatPage} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/apply" component={BuyerApply} />
        <Route exact path="/panel" component={Panel} />
        <Route
          render={() => {
            return <Redirect to="/" />;
          }}
        />
      </Switch>
    );
  }
}

export default Router;
