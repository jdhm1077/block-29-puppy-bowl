import { useEffect, useState } from "react";


const PuppyList = () => {
    const [allPuppyList, setAllPuppyList] = useState([]);
  
    useEffect ( () => {
   
    const getPuppy = async () => {
    const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players/`);
    const responseJson = await response.json(); 
    const allPuppies = responseJson.data.players;
    setAllPuppyList(allPuppies);
    console.log(allPuppies);
   
    }    

    getPuppy();

 }, [] );


 return (
    <>
    
    <h1>Puppy List</h1>
    {
        allPuppyList.map((singlePuppy) => {
            return (
                <li key={singlePuppy.player}>{singlePuppy.player}</li>
            )
        })
    }
       
    </>
  );
};






export default PuppyList;