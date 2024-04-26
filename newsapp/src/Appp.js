import React, { useState } from "react";

function Appp() {
  return (
    <div className="container">
      {/* <Counter/>
         <Counter/> */}
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
    </div>
  );
}
function HOCRed(props) {
  return <h2 style={{ backgroundColor: "red",width:100 }}><props.cmp/></h2>;
}
function HOCGreen(props){
    return <h2 style={{backgroundColor:'green',width:150}}><props.cmp/></h2>

}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}
export default Appp;
