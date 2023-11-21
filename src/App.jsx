// App.js
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('Move the holy mouse and click the show wisdom button to give you a heavy advice to break your back.');
  const [adviceId, setAdviceId] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

  const getRandomAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();

      if (data && data.slip) {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      }
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div className=" relative top-[300px] mx-auto bg-DarkGrayishBlue max-w-[500px] min-h-[320px] rounded-3xl px-2 py-8">
      <h1 className="text-NeonGreen w-fit mx-auto mt-5 font-semibold">ADVICE &nbsp; #{adviceId}</h1>

      <h2 className="font-bold text-white text-2xl text-center p-2 w-10/12 min-h-[96px] mx-auto mt-7 flex justify-center items-center">
        &quot;{advice}&quot;
      </h2>
      <div className='mt-10 mx-auto w-fit'>
        {isSmallScreen ? (
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        ) : (
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        )}
      </div>
      <div id="button-dice" className="cursor-pointer bg-NeonGreen w-16 h-16 rounded-full p-5 mx-auto mt-[40px] mb-[-60px]" onClick={getRandomAdvice}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
        </svg>
      </div>
    </div>

  );
};

export default App;
