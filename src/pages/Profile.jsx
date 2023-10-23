import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LogoutBtn from '../Components/LogoutBtn';
import Buttons from '../utils/Buttons';
import { AuthServices } from '../appwrite/AuthServices';

export default function Profile() {
  const user = useSelector((state) => state.user?.userData);

  return (
    <div className='my-5'>
      <div className='d-md-flex px-5 gap-3 justify-content-center '>
        <div className='col-md-4'>
          {/* Profile picture card */}
          <div className='card mb-4 mb-0'>
            <div className='card-header'>Profile Picture</div>
            <div className='card-body text-center'>
              {/* Profile picture image */}
              <img
                className='img-account-profile rounded-circle mb-2 w-75'
                src='http://bootdey.com/img/Content/avatar/avatar1.png'
                alt=''
              />
              {/* Profile picture help block */}
              <div className='small font-italic text-muted mb-4'>
                JPG or PNG no larger than 5 MB
              </div>
              {/* Profile picture upload button */}
              <button className='btn btn-primary' type='button'>
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          {/* Account details card */}
          <div className='about-text go-to'>
            <h4 className='dark-color text-capitalize'>hey, {user?.name}</h4>
            <h6 className='theme-color lead'>
              A Lead in React &amp; Javascript developer based in INDIA
            </h6>
            <p>
              I <span className='badge bg-info fs-6'>design and develop</span> services for
              customers of all sizes, specializing in creating stylish, modern websites, web
              services and online stores. My passion is to design digital user experiences through
              the bold interface and meaningful interactions.
            </p>
            <div className='row about-list'>
              <div className='col-md-6'>
                <div className='media'>
                  <label className='fw-medium'>User Id:</label>
                  <p>{user?.$id}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>Created At:</label>
                  <p>{new Date(user?.$createdAt).toUTCString()}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>Updated At:</label>
                  <p>{new Date(user?.$updatedAt).toUTCString()}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>Registration:</label>
                  <p>{new Date(user?.registration).toUTCString()}</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='media'>
                  <label className='fw-medium'>Your Full Name:</label>
                  <p>{user?.name}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>E-mail:</label>
                  <p>{user?.email}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>Phone:</label>
                  <p>{user?.phone || '820-885-3321'}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>Email Verification:</label>
                  <p>{user?.emailVerification ? 'YES' : 'NO'}</p>
                </div>
                <div className='media'>
                  <label className='fw-medium'>Status:</label>
                  <p>{user?.status ? 'Available' : 'Unavailable'}</p>
                </div>
              </div>
              <div>
                <Buttons className='btn-info'>Edit</Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='w-75 mx-auto' />
      <div className='d-flex justify-content-center'>
        <LogoutBtn>Logout User</LogoutBtn>
      </div>
    </div>
  );
}
