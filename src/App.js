import './App.css';
import {useState,useEffect} from 'react';
import StoryList from './components/StoryList';
import Header from './components/Header';
import PostList from './components/PostList';
import data from './assets/data.json'
function App() {
  const [innerWidth,setInnerWidth] =useState(document.documentElement.clientWidth);
  const [filteredData,setFilteredData]=useState(data.posts)
//useEffect hook to mount and unmount Sidebar and Navbar conditionally
useEffect(() => {
  const handleResize=()=>{
    setInnerWidth(document.documentElement.clientWidth);
  }
 //eventListener to window when screen size is changed
  window.addEventListener('resize', handleResize);
  //eventListener to window cleanup
  return () => window.removeEventListener('resize',handleResize);
}, []);
  return (
     <div  className={`${innerWidth>480? 'flex flex-row':"flex flex-col"} body-font font-rajdhani`}>
      {/* Header section */}
      <Header   filteredData={filteredData} setFilteredData={setFilteredData} innerWidth={innerWidth}/>
      {/* Body section */}
      <div className=' w-full m-auto flex flex-col items-center justify-center'>
        <StoryList innerWidth={innerWidth}  />
        <PostList filteredData={filteredData} />
      </div>
     </div>
  );
}

export default App;
