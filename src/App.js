import './App.css';
import {Box} from './components/Box';

function App() {
  return (
   <div className='container'>
     <p>Our Clean Slate</p>
      
      <Box message="Hi!" />
      <Box message="Hello!" color='purple'/>
      <Box message="Hola!" subheading='subheading'/>
      <Box message="Hey!" />
      <Box message="Salut!" />
    </div>
  );
}

export default App;
