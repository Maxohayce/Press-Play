import React from 'react';
import { Layout } from '../../Layout/index';
import Button from '../../UI/Button/Button';

import './Home.css';


const Home = () => (
    <Layout>
        <section className="Background">
            <div className="Text">
                <h1>Press play and Listen to the World</h1><br/>
                <Button btnType="Dark">Create Yours</Button>
                <Button>Explore</Button>
            </div>
        </section>
        <section>
            <h4>Most Popular Topics</h4>
            <span>
                <i fa></i>
            </span>
        </section>
    </Layout>
);


export default Home;