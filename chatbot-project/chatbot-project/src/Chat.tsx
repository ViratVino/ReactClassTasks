import "./Chatbot.sass";
import { HiPaperAirplane } from "react-icons/hi2";
import ChatBot from "./components/ChatBot";
import './components/style.scss'
import { useEffect, useState } from "react";

type stateProp={
  key:string
}
const MyComponent: React.FC = () => {
  let [state,setState]=useState<string>("");
  let [val,setVal]=useState<null|string>(null);

  let handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    // let {name,value}=e.target;
    setState(e.target.value);
    console.log(state);
  }
  
  let handleClick=()=>{
      setVal(state);
 }


    return (
      <main>
        <section id="container">
          <header id="head">
            <div id="img"></div>
            <div id="h5">
              <h5>Active...</h5>
            </div>
          </header>
          <section className="main_content" >
            <ChatBot search={val}/>
          </section>
          <footer id="footer">
            <div id="text">
              <input type="text" placeholder="enter text....." value={state} onChange={handleChange}/>
              <div id="icon" onClick={handleClick}>
                <HiPaperAirplane />
              </div>
            </div>
          </footer>
        </section>
      </main>
    );
  }
export default   MyComponent;