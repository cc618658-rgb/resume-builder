import React, { useState } from 'react';

const ResumeForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
    summary: '',
    college: '',
    collegeYear: '',
    hsc: '',
    hscYear: '',
    sslc: '',
    sslcYear: '',
    skills: '',
    certifications: '',
    languages: '',
    interests: '',
    declaration: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Resume Form</h2>
      <input id="name" placeholder="Name" required onChange={handleChange} />
      <input id="location" placeholder="Location" required onChange={handleChange} />
      <input id="phone" placeholder="Phone" required onChange={handleChange} />
      <input id="email" placeholder="Email" required onChange={handleChange} />
      <textarea id="summary" placeholder="Summary" required onChange={handleChange} />

      <h3>Education</h3>
      <input id="college" placeholder="College Name" required onChange={handleChange} />
      <input id="collegeYear" placeholder="College Passing Year" required onChange={handleChange} />
      <input id="hsc" placeholder="HSC School Name" required onChange={handleChange} />
      <input id="hscYear" placeholder="HSC Passing Year" required onChange={handleChange} />
      <input id="sslc" placeholder="SSLC School Name" required onChange={handleChange} />
      <input id="sslcYear" placeholder="SSLC Passing Year" required onChange={handleChange} />

      <textarea id="skills" placeholder="Skills (comma-separated)" required onChange={handleChange} />
      <textarea id="certifications" placeholder="Certifications (comma-separated)" required onChange={handleChange} />
      <textarea id="languages" placeholder="Languages Known (comma-separated)" required onChange={handleChange} />
      <textarea id="interests" placeholder="Interests (comma-separated)" required onChange={handleChange} />
      <textarea id="declaration" placeholder="Declaration" required onChange={handleChange} />

      <button type="submit">Generate Resume</button>
    </form>
  );
};

export default ResumeForm;
