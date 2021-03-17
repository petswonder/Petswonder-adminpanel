import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../App.css';
import Heading from '../Heading';
import Nav from '../navbars/ServiceNav';

const AddVet = () => {
  const [formData, setFormData] = useState({
    title: '',
    sellerNumber: '',
    description: '',
    price: '',
    discount: '',
    inventory: '',
    species: '',
    category: '',
    productId: '',
    plusPoints: '',
    brand: '',
    image: null,
  });

  const {
    title,
    sellerNumber,
    description,
    price,
    discount,
    inventory,
    species,
    category,
    productId,
    plusPoints,
    brand,
  } = formData;

  const [redirect, setRediect] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const redirectTo = () => {
    return redirect && <Redirect to='/' />;
  };

  return (
    <div className='container profile-about bg-light mb-5'>
      <Nav />
      {redirectTo()}
      <br />
      <Heading text='Add new Doctor' />
      <br />
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='row'>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Title
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Seller Number
            </label>
            <div class='col-sm-9 controls'>
              <p className='text-muted ml-2'>123456789</p>
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Description
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='text'
                placeholder='Description'
                name='description'
                value={description}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Price
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='number'
                placeholder='Price'
                name='price'
                value={price}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Discount
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='number'
                placeholder='Discount'
                name='discount'
                value={discount}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Inventory
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='number'
                placeholder='Inventory'
                name='inventory'
                value={inventory}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Species
            </label>
            <div class='col-sm-9 controls'>
              <select
                className='ml-1 col-md-12'
                name='species'
                value={species}
                onChange={(e) => onChange(e)}
              >
                <option value='0'>* Select species</option>
                <option value='Dog'>Dog</option>
                <option value='Cat'>Cat</option>
                <option value='Fish'>Fish</option>
                <option value='Horse'>Horse</option>
                <option value='Rabbit'>Rabbit</option>
              </select>
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Category
            </label>
            <div class='col-sm-9 controls'>
              <select
                className='ml-1 col-md-12'
                name='category'
                value={category}
                onChange={(e) => onChange(e)}
                required
              >
                <option value='0'>* Select category</option>
                <option value='Food'>Dry-Food</option>
                <option value='Food'>Wet-Food</option>
                <option value='PetCare'>PetCare</option>
                <option value='Accessories'>Accessories</option>
                <option value='Toys'>Toys</option>
                <option value='Gifts'>Gifts</option>
              </select>
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Product Id
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='text'
                placeholder='productId'
                name='productId'
                value={productId}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Plus Points
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='number'
                placeholder='plusPoints'
                name='plusPoints'
                value={plusPoints}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Brand
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='text'
                placeholder='Brand'
                name='brand'
                value={brand}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
          </div>
        </div>
        <input type='submit' className='btn btn-warning btn-md my-1 mr-3' />
        <Link className='btn btn-light my-1 btn-md btn-dark' to='/'>
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default AddVet;