import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <App />;
};

ReactDOM.render(<Main />, document.getElementById('root'));
