import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'


const Contact = () => {
    return(
        <div className='contact-body'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                    <h2>Ethan Bettenga</h2>
                    <hr />
                    <img 
                    src='https://uploads.codesandbox.io/uploads/user/c51536e6-7714-402b-bac3-0c0fd95cc65a/iuI6-approved.jpg'
                    alt='avatar'
                    style={{height: '300px'}}
                    />
                    <p style={{fontSize: '20px', width: '60%', margin: 'auto', paddingTop: '1em', lineHeight: "27px"}}>
                    <p>Thanks for taking the time to learn about me.</p>
                    <div>I'm currently employed with Genesis10 under their Dev10 program. 
                        If you're interested in working with me. I would recommend reaching out to the Minneapolis
                        branch. I'm not directly involved with the recruitment process but I have a good feeling the Dev10 
                        team would be willing to chat! 
                    </div>
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className='contact-list'>
                        <List>
                        <ListItem>
                            <ListItemContent style={{ paddingBottom: '6%', fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-phone-square' aria-hidden='true' />
                                641-903-9235
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{paddingBottom: '6%',fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-comment-o' aria-hidden='true' />
                                641-903-9235
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{paddingBottom: '6%', fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-envelope' aria-hidden='true' />
                                bettet01@luther.edu
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{paddingBottom: '6%',fontSize: '30px', fontFamily: 'Anton'}}>
                                <i className='fa fa-skype' aria-hidden='true' />
                                cid.b23f0bf7d2ed1485
                            </ListItemContent>
                        </ListItem>
                        </List>
                    </div>

                </Cell>
            </Grid>
        </div>
    )
}


export default Contact;