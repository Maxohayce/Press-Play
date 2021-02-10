import React from 'react';
import Layout  from '../../presentational/Layout/index';
import ListEpisode from '../../presentational/ListEpisode/ListEpisode';
import Button from '../../presentational/Button/Button';

import listenImage from '../../../assets/images/listen.png';
import episode from '../../../assets/images/episode.png';

import classes from './Listen.module.css';

const listEpisodes = [
    { title: 'All About Rocketez',  time: '05:00mins'},
    { title: 'All About Rocketez',  time: '05:00mins'},
    { title: 'All About Rocketez',  time: '05:00mins'},
    { title: 'All About Rocketez',  time: '05:00mins'},
    { title: 'All About Rocketez',  time: '05:00mins'},
    { title: 'All About Rocketez',  time: '05:00mins'}
];

const iconButtons = [
    { icon: 'fa fa-chevron-left' },
    { icon: 'fa fa-play' },
    { icon: 'fa fa-chevron-right' }
];

const episodeButtons = [
    { title: 'love'},{ title: 'life'},{ title: 'money'},{ title: 'bants'},{ title: 'bants'},{ title: 'bants'},{ title: 'bants'},
    { title: 'love'},{ title: 'life'},{ title: 'money'},{ title: 'bants'},{ title: 'bants'},{ title: 'bants'},{ title: 'bants'}
]

const episodeCard = [
    
]



class Listen extends React.Component {


    render () {

        const { Listen, listenTop, listenLeft, Play, PlayButton, listenRight, listenBottom, ProgressBar} = classes
        return (
            <Layout >
                <section>
                    <h1>Welcome to<span>PressPlay</span>Dubem</h1>
                    <input />
                    {episodeButtons.map((button, i) => {
                        return <Button btnType="Orange" style={{color: '#fff'}} key={i}>{button.title}</Button>
                    })}
                    <h4>Trending Podcasts for the Week</h4>
                    
                </section>
            <section className={Listen}>
                <div className={listenTop}>
                    <div className={listenLeft}>
                        <img alt="Episode" src={listenImage}/>
                        <h3>ROCKET SHIP</h3>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                        <span className={Play}>
                            <h3>PLAY</h3>
                            <button className={PlayButton} style={{height: '40px', width: '40px'}}>< i className="fa fa-play" ></i></button>
                        </span>
                    </div>
                    <div className={listenRight}>        
                        <h3>View Other Episodes</h3>
                        <span className={classes.Episodes}>{listEpisodes.map((listEpisode, i) => {
                        return <ListEpisode key={i} title={listEpisode.title} time={listEpisode.time} />
                        })}</span>
                    </div>
                </div>
                <div className={listenBottom}>
                    <span>
                        <img alt="Episode-Bottom" src={episode}/>
                        <span>
                            <h6>Jesus & Jollof</h6>
                            <p>Lhurvie Ajayi & Yvonne Orji</p>
                        </span>
                    </span>
                    <span>
                        {iconButtons.map((button, i) => {
                            return <Button key={i} btnType="Play"><i className={button.icon}></i></Button>
                        })}
                    </span>
                    <progress className={ProgressBar} max="100" value="80">
                            <span style={{width: '80%'}}>Progress: 80%</span>
                    </progress>
                </div>
            </section>
            </Layout>
        );
    }
}

export default Listen;