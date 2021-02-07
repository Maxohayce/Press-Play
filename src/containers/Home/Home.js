import React from 'react';
import { Layout } from '../../Layout/index';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Icon from '../../components/Fontawesome/Icon';

import Firefox from '../../images/firefox.png';
import Banner from '../../images/banner.png';
import Engage from '../../images/Engage.png';
import Engage1 from '../../images/Engage-bottom.png';

import classes from './Home.module.css';


const cards = [
    { title: 'Free Hosting & Distribution', body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin'},
    { title: 'Unlimited Access to Content', body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin'},
    { title: 'Unlimited Access to Content', body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin'}
]

const icons = [
    {className: 'fa fa-th', title: 'Headlines'}, {className: 'fa fa-thumbs-up', title: 'Politics'}, {className: 'fa fa-heart', title:'Relationships'}, {className: 'fa fa-dollar', title: 'Money'}
]

class Home extends React.Component {

        render() { 
            return (
                <Layout>
                    <section className={classes.Background}>
                        <div className={classes.Text}>
                            <h1><span className={classes.Press}>Press play</span> and Listen to the World!</h1><br/>
                            <div className={classes.Button}>
                                <Button btnType="Home" >Create Yours</Button>
                                <Button btnType="Orange">Explore</Button>
                            </div>
                        </div>
                    </section>
                    <section className={classes.Why}>
                        <h4>Why <span className={classes.Press}>Press play</span></h4>
                        <img alt="banner" src={Banner} />

                        <div className={classes.Cards}>
                            {cards.map((card, i) => {
                                return < Card key={i} title={card.title} body={card.body} /> })}
                        </div>

                        <h4>Find the Most Engaging Content on <span className={classes.Press}>PressPlay</span></h4>
                        <img alt="Engage" src={Engage} />
                        <img alt="Engage-bottom" src={Engage1} /> <br/>
                        <div className={classes.Icons}>
                            {icons.map((icon, i) => {
                                return < Icon key={i} class={icon.className} title={icon.title} />
                            })}
                        </div>
                        <h4>Watch how <span className={classes.Press}>PressPlay</span> works</h4>
                        <img className={classes.aboutImage} src={Firefox} alt="learn"/>
                        <h4>Here's Why you'd love <span className={classes.Press}>PressPlay</span></h4>
                    </section>
                    
                    
                    
                </Layout>
            );
        }
}


export default Home;