import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { addProduct } from '../api';
import '../App.css';
import Heading from '../Heading';
import Nav from '../navbars/HomeNav';
import axios from 'axios';

const AddBanner = () => {
  const [formData, setFormData] = useState({
    file: null,
    category: '',
  });

  const { file, category } = formData;

  const [redirect, setRediect] = useState(false);

  const handleFile = (e) => {
    let file = e.target.files;

    setFormData({ file });
  };
  const handleUpload = (e) => {
    console.log(file);
    axios({
      url: `https://petswonder.co.in/petswonder/api/uploadBanner?content=${category}`,
      method: 'POST',
      data: file,
    }).then();
    setFormData({ file: null, category: '' });
  };

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
      <Heading text='Add new Banners' />
      <br />
      <form className='form'>
        <div className='row'>
          <div className='form-group row col-md-6'>
            <label htmlFor='' className='col-sm-12 control-label'>
              Select File
            </label>
            <div class='col-sm-9 controls'>
              <input
                className='ml-1 col-md-12'
                type='file'
                multiple
                name='file'
                onChange={(e) => handleFile(e)}
                required
              />
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
                <option value='Home'>Home</option>
                <option value='Shop'>Shop</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type='button'
          onClick={(e) => handleUpload(e)}
          className='btn btn-warning btn-md my-1 mr-3'
        >
          {' '}
          Upload{' '}
        </button>
        <Link className='btn btn-light my-1 btn-md btn-dark' to='/'>
          Go Back
        </Link>
      </form>
    </div>
  );
};

export default AddBanner;
