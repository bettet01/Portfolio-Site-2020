import React from 'react'
import { useState, useRef, useEffect} from 'react'
import { usePdf } from '@mikecousins/react-pdf';
import {Grid, Cell} from 'react-mdl'
import {Link} from 'react-router-dom'

const Resume = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const renderPagination = (page, pages) => {
    if (!pages) {
      return null;
    }
  };
 
  const canvasEl = useRef(null);
 
  const [loading, numPages] = usePdf({
    file: 'https://uploads.codesandbox.io/uploads/user/c51536e6-7714-402b-bac3-0c0fd95cc65a/SZEy-Resume_2019_1.0.pdf',
    page,
    canvasEl,
    scale: '1.1',
  });
 
  useEffect(() => {
    setPages(numPages);
  }, [numPages]);
 
  return (
    <div className='resume-page'>
      <Grid>
        <Cell col={6} >
            <h2>Resume</h2>
            <hr />
            <img 
                    src='https://uploads.codesandbox.io/uploads/user/c51536e6-7714-402b-bac3-0c0fd95cc65a/gTzy-briefcase.jpg'
                    alt='avatar'
                    style={{height: '300px'}}
            />
            <p>Don't like what you see? Make sure to check out my about me page to get a litle more detail about what I can do!</p>
            <p>Wanna contact me? Download my resume below and head to my contact page. I respond best to calls, texts, and emails.</p>
            <div className='button-box'>
            <Link className='button' to={process.env.PUBLIC_URL + '/Resume_2019_1.0.pdf'} target='_blank' download>
                Download
            </Link>
            </div>
        </Cell>
        <Cell col={6} >
            <canvas ref={canvasEl} />
        </Cell>
      </Grid>
    </div>
  );
};


export default Resume;