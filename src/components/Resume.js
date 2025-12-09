import React from 'react';
import './Resume.css';
import html2pdf from 'html2pdf.js';

const Resume = ({ data }) => {
  const getList = (str) => str.split(',').filter(Boolean);

  const downloadPDF = () => {
    const element = document.getElementById('resumeOutput');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="resume-container">
      <div id="resumeOutput" className="resume">
        <h1 className="name">{data.name}</h1>
        <p className="contact">
          {data.location} | {data.phone} | {data.email}
        </p>

        {data.summary && (
          <section>
            <h2>Summary</h2>
            <hr />
            <p>{data.summary}</p>
          </section>
        )}

        <section>
          <h2>Education</h2>
          <hr />
          <p><strong>College:</strong> {data.college} ({data.collegeYear})</p>
          <p><strong>HSC:</strong> {data.hsc} ({data.hscYear})</p>
          <p><strong>SSLC:</strong> {data.sslc} ({data.sslcYear})</p>
        </section>

        {data.skills && (
          <section>
            <h2>Skills</h2>
            <hr />
            <ul>
              {getList(data.skills).map((skill, idx) => (
                <li key={idx}>{skill.trim()}</li>
              ))}
            </ul>
          </section>
        )}

        {data.certifications && (
          <section>
            <h2>Certifications</h2>
            <hr />
            <ul>
              {getList(data.certifications).map((cert, idx) => (
                <li key={idx}>{cert.trim()}</li>
              ))}
            </ul>
          </section>
        )}

        {data.languages && (
          <section>
            <h2>Languages Known</h2>
            <hr />
            <ul>
              {getList(data.languages).map((lang, idx) => (
                <li key={idx}>{lang.trim()}</li>
              ))}
            </ul>
          </section>
        )}

        {data.interests && (
          <section>
            <h2>Interests</h2>
            <hr />
            <ul>
              {getList(data.interests).map((interest, idx) => (
                <li key={idx}>{interest.trim()}</li>
              ))}
            </ul>
          </section>
        )}

        {data.declaration && (
          <section>
            <h2>Declaration</h2>
            <hr />
            <p>{data.declaration}</p>
          </section>
        )}
      </div>

      <button onClick={downloadPDF} className="download-btn">Download as PDF</button>
    </div>
  );
};

export default Resume;
