import logo from './logo.svg';
import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

function App() {
  const [likeClick,setLikeClick] = useState('');
  const handleClick = () => {
    const color = likeClick ? '' : 'primary';
    setLikeClick(color);
  }
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ThumbUpIcon style={{fontSize:'100px'}} onClick={handleClick} color={likeClick}></ThumbUpIcon>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
