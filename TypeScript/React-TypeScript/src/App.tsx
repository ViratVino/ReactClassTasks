import Greet from "./components/Greet"
import Person from "./components/Person"
import PersonList from "./components/PersonList"
import Status from "./components/Status"
import Heading from './components/Heading';
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import input from './components/input';
import Input from "./components/input";
import Container from "./components/Container";
import Loggedin from "./components/state/Loggedin";
// import User from "./components/state/User";
import { ThemeContexProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import User from "./components/context/User";
import { MutabeRef } from "./components/ref/MutableRef";
import { Private } from "./auth/private";
import { Profile } from "./auth/profile";
import { List } from "./components/generics/List";
import RandomNumber from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { CustomButton } from "./components/Html/Button";
import Text from "./components/Html/Text";

function App() {

  const personName={
    first:"Virat",
    last:"Kholi"
  }
  

  const nameList=[
    {
      id:3,
      first:'Virat',
      last:'kholi'
    },
    {
      id:2,
      first:'glen',
      last:"Maxwell"
    },
    {
      id:1,
      first:'faf',
      last:"Duplesis"
    }
  ]

  return (
    
      <div>
        {/* <Greet name={"Virat Vino"} messageCount={20} isLoggedIn={true}/>
        <Person name={personName}/>
        <PersonList names={nameList}/>
        <Status status="loading"/> */}

        {/* <Heading>PlaceHolder Text</Heading>
        <Oscar><Heading>Oscar Goes to Thala Ajith</Heading></Oscar> */}

        {/* <Button handleClick={()=>{
          console.log("nee Click pannita da venna mavanae");
        }}/>
        <Input value="" handleChange={(event)=>console.log(event)}/> */}



        {/* <Container style={{border:`1px solid black`,padding:'1em'}}/> */}

        {/* <Loggedin/> */}

        {/* <User/> */}
{/* 
        <ThemeContexProvider>
          <Box/>
        </ThemeContexProvider> */}

        {/* <UserContextProvider>
          <User></User>
        </UserContextProvider> */}


        {/* <MutabeRef/> */}


{/* 
        <Private  isLoggedIn={true} component={Profile}></Private> */}
        



       {/* <List items={["Virat","ABD","Maxwell","FafDuplesis","Siraj"]} onClick={(items)=>console.log(items)} /> */}
       {/* <List items={nameList} onClick={(items)=>console.log(items)}/> */}

       {/* <RandomNumber value={10} isPositive /> */}


       {/* <Toast position="left-center"/>

       <CustomButton varient="Primary" onClick={()=>{console.log("Vanakkam Da Mapla Button La irunthu")}}>Click pandraa Vena
       <div>Primary Button</div>
       </CustomButton> */}






<Text as ="h1">
  heaading
</Text>

<Text as ="p">
  Paragraph
</Text>
      </div>
     
    
  )
}

export default App
