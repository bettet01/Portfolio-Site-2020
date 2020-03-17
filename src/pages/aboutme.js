import React from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'



const About = () => {
    return(
        <div>
            <Grid className='aboutme-grid'>
                <Cell col={6}>
                    <h2>Ethan Bettenga</h2>
                    <hr/>
                    <img 
                    src='https://uploads.codesandbox.io/uploads/user/c51536e6-7714-402b-bac3-0c0fd95cc65a/gTzy-briefcase.jpg'
                    alt='avatar'
                    style={{height: '300px'}}
                    />
                    <h4>About Me</h4>
                    <p> Welcome to my About Me page!</p>
                    <p> I graduated from Luther College in Decorah Iowa in May of 2016.
                    During my time at Luther, I became more passionate about education and discovered talents I didn’t think I had! This led me to start taking computer science classes,
                     and to eventually dedicate myself to coding and continuous learning. And a smile as I contribute to solving problems!
                    </p>
                    <p>
                    After college I was employed in banking as an account processor where I developed my coding talents, taking on odds projects until I was asked to help the automation team,
                     in which I was coached in agile and learned the Automation Anywhere framework.
                    </p>
                    <p>
                    My main skill that I can bring to any job is my interest and ability to learn! This has taken 
                    me everywhere from learning music to studying computer programming concepts, operating systems, and languages. 
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Fun Facts</h2>
                    <hr/>
                    <div className='aboutme-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{ paddingBottom: '6%', fontSize: '15px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-circle' aria-hidden='true' />
                                    In high school, I was in 3 different bands that ranged from pop punk to country music.
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ paddingBottom: '6%', fontSize: '15px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-circle' aria-hidden='true' />
                                    I learned how to hypnotize people as a way to meet people during high school and college.
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ paddingBottom: '6%', fontSize: '15px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-circle' aria-hidden='true' />
                                    I play quite a few instruments with my favorites being Guitar, Piano, and Drum Kit.
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ paddingBottom: '6%', fontSize: '15px', fontFamily: 'Anton'}}>
                                    <i className='fa fa-circle' aria-hidden='true' />
                                    I've recently taken up Tennis as a hobby. I am not good.
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}


export default About;