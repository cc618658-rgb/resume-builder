import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import Resume from './components/Resume';
import './index.css';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="container">
      <ResumeForm onSubmit={handleFormSubmit} />
      {formData && <Resume data={formData} />}
    </div>
  );
}

export default App;