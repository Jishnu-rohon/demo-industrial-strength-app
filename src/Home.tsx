import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Industrial Strength App</h1>
      <hr />
      <section>
        <h2>Website Development</h2>
        <p>
          This application demonstrates modern React development practices including
          component composition, routing with React Router, and state management. Built
          with Create React App, it showcases a scalable component architecture with
          reusable UI panels, navigation, and data fetching patterns.
        </p>
        <ul>
          <li>React 19 with StrictMode</li>
          <li>React Router DOM for client-side routing</li>
          <li>Functional components with hooks</li>
          <li>TypeScript type safety</li>
          <li>REST API integration patterns</li>
        </ul>
      </section>
      <section>
        <h2>Software Development</h2>
        <p>
          This project exemplifies industrial-strength software development practices
          including modular design, separation of concerns, and maintainable code
          structure. The application follows component-based architecture with clear
          prop interfaces, custom hooks, and service layer patterns for API
          communication.
        </p>
        <ul>
          <li>Component-driven development</li>
          <li>TypeScript for type safety</li>
          <li>Service classes (RestClient) for API abstraction</li>
          <li>React hooks for state and lifecycle</li>
          <li>Responsive design with CSS</li>
        </ul>
      </section>
      <nav aria-label="Quick links">
        <ul>
          <li>
            <a href="/panel-a">Panel A - Basic Component</a>
          </li>
          <li>
            <a href="/panel-b">Panel B - Props Demo</a>
          </li>
          <li>
            <a href="/panel-c">Panel C - Employee Data</a>
          </li>
          <li>
            <a href="/employee/1">Employee Details</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;