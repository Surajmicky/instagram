import StoryModal from "./StoryModal";
import {useState} from 'react'
//component to render one single story
const StoryCard = ({name,imgUrl}) => {
   const [showModal, setShowModal] = useState(false);
   
    const truncateName=(name)=>{
     if(name.length<=8){
        return name;
     }else{
        let substring=name.substring(0,8) + '...'
        return substring;
     }
    }
    return (
      <>
    <div  onClick={() => setShowModal(true)} className="w-16">
    <div className=" bg-gradient-to-tr from-yellow-500 to-red-600 p-[2px] rounded-full object-cover ">
    <div className="bg-white  rounded-full p-1">
    <img className="h-14 w-14 rounded-full " src={imgUrl} alt="" />
    </div>
    </div>
    <p className="text-xs w-16 truncate text-center">{truncateName(name)}</p>
    </div>
    < StoryModal setShowModal={setShowModal} showModal={showModal} imgUrl={imgUrl}  />
    </>
    )
    }
    export default StoryCard