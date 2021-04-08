import React from 'react';

//react-router-dom package
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Userorders from './Userorders.js';
import Header from './navbars/Navbar';
import Userview from './Userview.js';
import ProductPanel from './ProductPanel.js';
import UserOrder from './UserOrder.js';
import ViewOrder from './ViewOrder.js';
import EditProduct from './EditProduct.js';
import Home from './home/Home.js';
import AddBanner from './home/AddBanner';
import DeleteBanner from './home/DeleteBanner';
import AddService from './services/AddService';
import EditService from './services/EditService';
import AddVet from './services/AddVet';
import EditVet from './services/EditVet';
import AddGuide from './guide/AddGuide';
import EditGuide from './guide/EditGuide';
const Routings = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={AddBanner} />
        <Route exact path='/addbanner' component={AddBanner} />
        <Route exact path='/deletebanner' component={DeleteBanner} />
        <Route exact path='/services' component={AddService} />
        <Route exact path='/services/addService' component={AddService} />
        <Route exact path='/services/editService' component={EditService} />
        <Route exact path='/services/addVet' component={AddVet} />
        <Route exact path='/services/editVet' component={EditVet} />
        <Route exact path='/shopping' component={UserOrder} />
        <Route exact path='/shopping/userorder' component={UserOrder} />
        <Route path='/shopping/userorders/:idno' component={Userview} />
        <Route exact path='/shopping/order/:orderId' component={ViewOrder} />
        <Route path='/shopping/addproduct' component={ProductPanel} />
        <Route path='/shopping/editproduct' component={EditProduct} />
        <Route path='/guide' component={AddGuide} />
        <Route path='/editguide' component={EditGuide} />
      </BrowserRouter>
    </>
  );
};
export default Routings;
