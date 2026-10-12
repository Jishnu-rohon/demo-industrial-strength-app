import React, { useState } from "react";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Industrial Strength App</h1>
      <hr />

      <section>
        <h2 className="text-center">Website Development</h2>
        <div className="d-flex justify-center" style={{ marginBottom: '1rem' }}>
          <button className="btn btn-primary" onClick={toggleModal}>
            Demo
          </button>
        </div>
        <p className="text-center">
          This application demonstrates modern React development practices including
          component composition, routing with React Router, and state management. Built
          with Create React App, it showcases a scalable component architecture with
          reusable UI panels, navigation, and data fetching patterns.
        </p>
        <ul className="list-space">
          <li>React 19 with StrictMode</li>
          <li>React Router DOM for client-side routing</li>
          <li>Functional components with hooks</li>
          <li>TypeScript type safety</li>
          <li>REST API integration patterns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-center">Software Development</h2>
        <p className="text-center">
          This project exemplifies industrial-strength software development practices
          including modular design, separation of concerns, and maintainable code
          structure. The application follows component-based architecture with clear
          prop interfaces, custom hooks, and service layer patterns for API
          communication.
        </p>
        <ul className="list-space">
          <li>Component-driven development</li>
          <li>TypeScript for type safety</li>
          <li>Service classes (RestClient) for API abstraction</li>
          <li>React hooks for state and lifecycle</li>
          <li>Responsive design with CSS</li>
        </ul>
      </section>

      <nav aria-label="Quick links" className="text-center">
        <ul className="list-space">
          <li>
            <a href="/panel-a" className="btn btn-outline">Panel A - Basic Component</a>
          </li>
          <li>
            <a href="/panel-b" className="btn btn-outline">Panel B - Props Demo</a>
          </li>
          <li>
            <a href="/panel-c" className="btn btn-outline">Panel C - Employee Data</a>
          </li>
          <li>
            <a href="/employee/1" className="btn btn-outline">Employee Details</a>
          </li>
        </ul>
      </nav>

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            position: 'relative',
            maxWidth: '800px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <button
              onClick={toggleModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                backgroundColor: 'white',
                border: 'none',
                cursor: 'pointer',
                padding: '5px 10px',
                borderRadius: '4px',
                fontWeight: 'bold'
              }}
            >
              Close ✕
            </button>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;