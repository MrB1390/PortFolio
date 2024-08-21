import React, { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
import avata from '../assets/avatar.svg'
import resume from '../assets/Balasivam C.pdf';
import './css/resume.css';

// Configure pdfjs worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div className='container'>
            <h1 className='d-flex justify-content-center'>My Resume</h1>
            <div className="d-flex justify-content-center">
                {/* <Document
                    file={resume}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={console.error}
                >
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document> */}
                <img
                 src={avata}
                 alt='Resume-Avatar'
                 width="500px"
                 height="500px"
                />
            </div>
            <br />
            <div className='d-flex justify-content-center'>
                <button className='but'>
                    <a href={resume} style={{ textDecoration: 'none', color: "white", padding: "10px", borderRadius: "5px" }} target="_blank"  rel="noopener noreferrer">
                        CheckOut
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Resume;
