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
                    <p style={{fontSize: '20px', width: '60%', margin: 'auto', paddingTop: '1em'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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