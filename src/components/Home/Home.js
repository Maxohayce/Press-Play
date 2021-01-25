import React from 'react';
import { Layout } from '../../Layout/index';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import Auba from '../../images/auba.png';
import Crad from '../../images/crad.png';
import Crypto from '../../images/crypto.png';
import Simplicity from '../../images/simplicity.png';

import './Home.css';


const cards = [
    {image: {Auba}, episode: 'E7', time: '12 mins', title: 'A Big Win?'},
    {image: {Crad}, episode: 'E14', time: '5 mins', title: 'Idea Power'},
    {image: {Crypto}, episode: 'E1', time: '10 mins', title: 'Taking Bitcoin'},
    {image: {Simplicity}, episode: 'E7', time: '6 mins', title: 'Save the Planet'}
]
const Home = () => (
    <Layout>
        <section className="Background">
            <div className="Text">
                <h1>Press play and Listen to the World!</h1><br/>
                <div className="Button">
                    <Button btnType="DarkHome" >Create Yours</Button>
                    <Button btnType="Orange">Explore</Button>
                </div>
            </div>
        </section>
        <section>
            <h4>Most Popular Topics</h4>
            <span>
                <i fa>Headlines</i>
                <i fa>Politics</i>
                <i>Relationships</i>
                <i>Money</i>
            </span>
        </section>
        <section>
            <h4>Top Podcast</h4>
            <div className="">
                {cards.map((card, i) => (
                    <Card key={i} image={card.image} episode={card.episode} time={card.time} title={card.title}/>
                ))}
            </div>
        </section>
    </Layout>
);


export default Home;