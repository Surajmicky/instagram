import './App.css';
import {useState,useEffect} from 'react';
import StoryList from './components/StoryList';
import Header from './components/Header';
import PostList from './components/PostList';
import data from './assets/data.json'
function App() {
  const [innerWidth,setInnerWidth] =useState(document.documentElement.clientWidth);
  const [filteredData,setFilteredData]=useState(data.posts)

useEffect(() => {
  const handleResize=()=>{
    setInnerWidth(document.documentElement.clientWidth);
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize',handleResize);
}, []);
  return (
     <div  className={`${innerWidth>480? 'flex flex-row':"flex flex-col"}`}>
      <Header   filteredData={filteredData} setFilteredData={setFilteredData} innerWidth={innerWidth}/>
      <div className=' w-full m-auto flex flex-col items-center justify-center'>
        <StoryList innerWidth={innerWidth}  />
        <PostList filteredData={filteredData} />
      </div>
     </div>
  );
}

export default App;
