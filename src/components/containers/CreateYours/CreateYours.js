import React from 'react';
import Layout  from '../../presentational/Layout/index'
import './CreateYours.css';

const CreateYours = () => ( 
    <Layout>
       <div className="body">
           <h3 className="acct">My Account </h3>
           <h3 className="dashboard">My Dashboard</h3>
           <div className="dashtab">
             <div><h3>1.3k</h3><h6>Subscribers</h6></div>
             <div className="divider"></div>
             <div><h3>5k</h3><h6>Plays</h6></div>
             <div className="divider"></div>
             <div><h3>11k</h3><h6>Impression</h6></div>
           </div>
       </div>
    </Layout>
);

export default CreateYours;