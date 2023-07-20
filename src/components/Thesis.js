import React, { useEffect } from 'react';
import LanguageContext from '../context/LanguageContext';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { StyleSheet } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import ThesisStyles from './Thesis.module.css';
import Thesis from './mythesis.pdf';

function Test(props) {
  console.log(props.description)
  /*
    {pageArr.map((page, i) => (
              <div
                key={i}
                ref={(el) => {
                  pageRefs.current[page] = el;
                }}
              >
                <Page
                  width={500}
                  height={100}
                  scale={2}
                  size="A4"
                  pageNumber={i + 1}
                  wrap
                />
              </div>
            ))}
  */
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  const { language, setLanguage } = React.useContext(LanguageContext);
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [pageArr, setPageArr] = React.useState([]);
  const [inputVal, setInputVal] = React.useState(1);
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0
  });
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const pageRefs = React.useRef({});
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const goToPreviousPage = () => {
    if (!isFirstPage) setPageNumber(pageNumber - 1);
    pageRefs.current[pageNumber - 1].scrollIntoView({ behavior: "smooth" });
  };

  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1)
  }

  function changePageNext() {
    changePage(+1)
  }

  function handleChange(e) {
    setInputVal(e.target.value);
  }

  function handleClick() {
    if (!isNaN(inputVal)) {
      if (inputVal >= 1 && inputVal <= numPages) {
        setPageNumber(parseInt(inputVal))
      }
      else {
        alert('Out of range');
      }
    }
    else {
      alert('Please enter a number not string or complex type')
    }
  }

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={`${ThesisStyles.mainDivOfThesis}`}>
      <div className={`${ThesisStyles.generalFrame}`}>
        <div className={ThesisStyles.AppHeader}>
          
          <div className={`${ThesisStyles.pageNumberBox} text-start`}>
            <p className={`text-dark ${ThesisStyles.pageNumber}`}>{pageNumber}/{numPages}</p>
            {pageNumber > 1 &&
                  <button className={`btn btn-primary ${ThesisStyles.buttonGroupItem}`} onClick={changePageBack}>&larr;</button>
                }


                {
                  pageNumber < numPages &&
                  <button className={`btn btn-success ${ThesisStyles.buttonGroupItem}`} onClick={changePageNext}>&rarr;</button>
                }

                <input type='text' className={`${ThesisStyles.buttonGroupItem}`} name='pageNumber' id='pageNumber' onChange={handleChange} />
                <button className={`btn btn-success ${ThesisStyles.buttonGroupItem}`} onClick={handleClick}>Go</button>
          </div>
          
          
              
                <Document file="/mythesis.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page width={dimensions.width * 0.4} height={dimensions.height} scale={1} pageNumber={pageNumber} style={{marginLeft:10}}/>
                </Document>
              
            
          




        </div>

      </div>
    </div>
  )
}

export default Test;