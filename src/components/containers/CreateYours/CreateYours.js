import React from 'react';
import Layout  from '../../presentational/Layout/index'
import './CreateYours.css';
import dubz from "./dubz.png";

const CreateYours = () => ( 
    <Layout>
       <div className="body">
           <h3 className="acct">My Account </h3>
           <h3 className="dashboard">My Dashboard</h3>
           <div className="underline"></div>
           {/* <div className="dashtab">
                <div className="sub"><h3 className="onekay">1.3K</h3><h4>Subscribers</h4></div>
                <div className="dividerOne"></div>
                <div className="sub"><h3 className="fivekay">5K</h3><h4>Plays</h4></div>
                <div className="dividerTwo"></div>
                <div className="sub"><h3 className="elevenkay">11K</h3><h4>Impression</h4></div>
           </div>
           <div className="outter">
               <div className="inner"></div>
           </div>
           <h4 className="record">Record a podcast</h4>
           <div className="uploadOutter">
               <div className="uploadInner"></div>
           </div>
           <h4 className="upload">Upload a podcast</h4> */}

           <img src={dubz} className="dubz-pix"></img>
           <h4 className="dubem">Dubem</h4>
           <p className="editPodcast">edit podcast</p>
           <div className="divider2"></div>
           <h5 className="dubz">The Dubz Podcast Show</h5>
           <p className="editPodcast2">edit podcast</p>
           <div className="accttab">
                <div className="tabs"><h3 className="published">Published Podcast</h3></div>
                <div className="dividerOne"></div>
                <div className="tabs"><h3 className="drafts">Drafts</h3></div>
                <div className="dividerTwo"></div>
                <div className="tabs"><h3 className="settings">Settings</h3></div>
           </div>
           
       </div>
    </Layout>
);

export default CreateYours;