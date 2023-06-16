// import { Container,Button } from '@chakra-ui/react'
// import React,{useState}from 'react'

// const Temp = () => {
//   const [input,setInput]=useState("")
//   const [item,setItem]=useState([])
//   const [completed,setCompleted]=useState([])

//   const btnHandler=()=>{
//     if(input!=="" && item.includes(item)){
//         setItem([...item , input]);
//     }
//     setInput("")
//   }
//   const checkboxHandler=(e)=>{
//      const itemtobeadded=e.target.value;
//      setCompleted([...completed,itemtobeadded])
//   }
//   return (
//     <Container maxW={'container.xl'} p={'30px'} >
//       <h1>Add item</h1>
//       <input type={'text'} placeholder='additem' value={input} onChange={(e)=>setInput(e.target.value)}/>
//       {/* {console.log(input)} */}
//       <Button onClick={()=>{btnHandler()}} >Add</Button>
//       {item.map((i)=>{
//         <li key={i}>
//             <input type={'checkbox'} value={i} onChange={(e)=>{checkboxHandler(e)}}/>
//             {console.log({i})}
//         </li>
       
        
//       })}

//       <h1>Completed List</h1>
//       {completed.map((item)=>{
//         <li key={item}>{item}</li>
//         {console.log({item})}
//       })}
//     </Container>
//   )
// }

// export default Temp;

import { useState } from "react";

// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
const Groceries = () => {
  const [input, setInput] = useState("");
  const [groceries, setGroceries] = useState([]);
  const [completed, setCompleted] = useState([]);

  const btnHandler = () => {
    if (input !== "" && !groceries.includes(input)) {
      setGroceries([...groceries, input]);
    }
    setInput("");
  };
  const checkboxHandler = (e) => {
    const itemToBeAdded = e.target.value;
    setGroceries(groceries.filter((item) => item !== itemToBeAdded));
    setCompleted([...completed, itemToBeAdded]);
  };

  return (
    <>
      <h3>Grocery List</h3>
      <label>
        Add item
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </label>
      <button onClick={() => btnHandler()}>Add</button>

      {groceries.map((item) => (
        <li key={item}>
          <input
            type="checkbox"
            value={item}
            onChange={(e) => {
              checkboxHandler(e);
            }}
          />
          {item}
        </li>
      ))}
      <h3>Completed List</h3>
      {completed.map((complete) => (
        <li key={complete}>{complete}</li>
      ))}
    </>
  );
};
export default Groceries;
