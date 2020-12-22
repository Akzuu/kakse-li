import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import cv from '../files/Kolari-Akseli_CV.pdf';

const Resume = () => (
  <div>
    <Document file={cv}>
      <Page pageNumber={1} />
    </Document>
  </div>
);

export default Resume;
