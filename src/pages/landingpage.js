import React from 'react'
import {Grid, Cell} from 'react-mdl'


const LandingPage = () => {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img 
                    src = 'https://uploads.codesandbox.io/uploads/user/c51536e6-7714-402b-bac3-0c0fd95cc65a/-2Ex-avatar2.jpg'
                    alt='avatar'
                    className='avatar-img'
                    />
                    <div className='banner-text'>
                        <h1 >Robust Developer and Data Anaylst</h1>
                    <hr />
                        <p> HTML/CSS | Javascript | React | NodeJS | Express | MongoDB | MySQL | Python </p>

                    <div className='social-links'>
                        <a target='_blank' href="http://www.google.com" rel='noopener noreferrer'>
                            <i className='fa fa-linkedin-square' aria-hidden='true' />
                        </a>
                        <a target='_blank' href="http://www.google.com" rel='noopener noreferrer'>
                            <i className='fa fa-github-square' aria-hidden='true' />
                        </a>
                        <a target='_blank' href="http://www.google.com" rel='noopener noreferrer'>
                            <i className='fa fa-free-code-camp' aria-hidden='true' />
                        </a>
                        <a target='_blank' href="http://www.google.com" rel='noopener noreferrer'>
                            <i className='fa fa-youtube-square' aria-hidden='true' />
                        </a>
                    </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}


export default LandingPage;