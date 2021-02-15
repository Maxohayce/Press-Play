import React from 'react';
import Layout  from '../../presentational/Layout/index';
import './About.css';
import Lottie from 'react-lottie'
import animationData from '../../../assets/LottieFiles/construction.json';

const CreateYours = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
      return(
     <Layout>
         <div className="body">
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
            <h3 className="oops">Oops! Page is still under construction</h3>
            <h4 className="sorry">Sorry for the inconveniences</h4>
          </div>
     </Layout>
    
    );
  };

export default CreateYours;