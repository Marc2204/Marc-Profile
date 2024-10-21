import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [section, setSection] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleButtonClick = (newSection) => {
    setSection(newSection);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name && email && message) {
      alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
      <header className="text-center py-4 mb-4 bg-primary text-white rounded w-100">
        <h1>Hello World, Welcome to my Profile!!</h1>
        <></>
        <p>this is me Marc Rainier</p>
      </header>




      <div className="d-flex flex-column mb-4" style={{ alignItems: 'flex-start', width: '100%' }}>

        <button className="btn btn-outline-primary btn-sm mb-2 btn-animate" onClick={() => handleButtonClick('Home')}>
          Home
        </button>
        <button className="btn btn-outline-primary btn-sm mb-2 btn-animate" onClick={() => handleButtonClick('About')}>
          About
        </button>
        <button className="btn btn-outline-primary btn-sm mb-2 btn-animate" onClick={() => handleButtonClick('Skills')}>
          Skills
        </button>
        <button className="btn btn-outline-primary btn-sm btn-animate" onClick={() => handleButtonClick('Contact')}>
          Contact
        </button>
      </div>

      <div className="card shadow p-4 mb-4 animate__animated animate__fadeIn" style={{ width: '100%', maxWidth: '800px' }}>
        {section === 'Home' && (
          <div className="skills-section animate__animated animate__fadeIn">
            <h2 className="card-title text-center">Its Home</h2>

          </div>
        )}
        {section === 'About' && (
          <div className="about-section animate__animated animate__fadeIn">
            <h2 className="card-title text-center">About Me</h2>
            <p className="card-text text-center">
              My favorite language is Java because I love solving complex problems using object-oriented programming. I'm passionate about creating innovative solutions and constantly improving my skills in full-stack development, especially with React and PHP.
            </p>
          </div>
        )}
        {section === 'Skills' && (
          <div className="skills-section animate__animated animate__fadeIn">
            <h2 className="card-title text-center">My Skills</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Java</li>
              <li className="list-group-item">HTML & CSS</li>
              <li className="list-group-item">JavaScript & React</li>
              <li className="list-group-item">PHP & Laravel</li>
            </ul>
          </div>
        )}

        {section === 'Contact' && (
          <div className="contact-section animate__animated animate__fadeIn">
            <h2 className="card-title text-center">Contact Me</h2>



            <form onSubmit={handleSubmit} className="mt-4">
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-animate">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
