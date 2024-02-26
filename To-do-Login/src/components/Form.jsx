import React from 'react';
import styled from 'styled-components';
import './index.css';
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Section=styled.section`
width:100%;
height:100vh;
font-family:
display:flex;
`



const Head=styled.h1`
color: #4a4a4a;
font-size:60px;
font-weight:bolder;
font-style:revert-layer;
font-weight:700;
letter-spacing:1.6px;
padding:10px 40px;
padding-bottom:0px;
// padding: 73px 154px;

`

const Log=styled.h1`
color:#1648c6;
font-size:60px;
font-weight:bolder;
font-style:revert-layer;
font-weight:700;
letter-spacing:1.6px;
padding-left:40px;


`



const Divd=styled.div`
flex-basis:70%;

width:500px;
height:500px;
`


const Article=styled.article`
width:90%;
height:inherit;
margin: 0 auto;
display:flex;
    align-items:center;
    justify-content:center;
// flex-direction:column;
pading-left:700px;
gap:30px;

`;

const H1=styled.h1`
padding: 10px;
color: #1648c6;
font-size: 30px;
text-transform: uppercase;
letter-spacing: 1.6px;
font-weight: 1500;
font-style: revert-layer
`

const Main=styled.main`
background:white;
width:400px;
height:auto;
padding:10px;
border:1px solid #0096882e;
display:flex;
flex-direction: column;
gap: 10px;
`


const Div=styled.div`
margin:10px 0;
`


const Label=styled.label`
width:100%;
display:block;
padding:5px 0;
font-size:14px;
font-weight:600;
`


const Input=styled.input`
width:100%;
height:100%;
// padding:5px;
margin:10px 0;
// border:1px solid #ccc;
border:none;
outline:none;
padding-left:10px;
color:blue;
`

const Button=styled.button`
outline:none;
border:1px solid #1648c6;
width:100%;
padding:10px;
border-radius:3px;
color:#f6f7f9;
background:#1648c6;
font-size:14px;
text-transform: capitalize;
font-weight:500;
cursor:pointer;
&:hover{
    background:white;
    color:#1648c6
}
`


const Span1=styled.span`
margin-left:100px;
font-size:15px;
font-weight:bolder

`


const FieldSet=styled.fieldset`
width:90%;
// padding:5px;
margin:10px 0;
// border:1px solid #ccc;
border:none;

outline:none;
border-bottom:1px solid #1648c6;
`

const Input1=styled.input`
margin:10px;
margin-left:60px;
font-weight:bolder

`

const P=styled.p`
margin:20px;
text-align:left;
`


const Legent=styled.legend`
display:none;
`

const Span=styled.span`
color:#1648c6;
`
const Div1=styled.div`
display:flex;
justify-content:space-evenly;
padding:20px;`



const Form = () => {
    
  return (
   <Section>
     
    <Article>
    <Divd className="dummy">
        <Head>Trainer</Head>
        <Log>Login</Log>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sunt numquam, maiores fugiat odit repudiandae enim adipisci recusandae vero cum consectetur, sint, delectus voluptatem facilis laudantium. Eaque id adipisci iste! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quasi impedit commodi quo ad, consectetur, illum aspernatur cumque a tenetur repellendus sint nobis autem laborum. Voluptatum exercitationem unde aliquam sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsam libero recusandae beatae neque maiores in veniam impedit excepturi omnis distinctio dignissimos quod aspernatur provident, eum eveniet rem cupiditate assumenda!</P>
    </Divd>
       
       
        <Main>
            <header>
                <H1>Login</H1>
                
            </header>
            <Div className="form-group">
                {/* <Label htmlFor='email'>Email</Label> */}

                <FieldSet>
                <Legent>Enter Email</Legent>
                <Input type='text' placeholder='Enter your email'/>
                </FieldSet>
            </Div>
            <Div className="form-group">
                {/* <Label htmlFor='password'>Password</Label> */}
                <FieldSet>
                    <Legent>Enter Password</Legent>
                <Input type='text' placeholder='Enter your password'/>
                </FieldSet>
            </Div>

            <Div className="form-group">
               <Input1 type="checkbox" value="Subscribe to our newsletter"/>Subscribe to our newsletter
              </Div>
            <Div className="form-group">
                <Button >Sign in</Button>
            </Div>
            <Div className="form-group">
            <Span1>or sign up With</Span1>
            </Div>
         <Div1 className="form-group">
            <Span><RiFacebookFill /></Span>
            <Span><AiOutlineGoogle /></Span>
             <Span><FaTwitter /></Span>
              <Span><FaGithub /></Span>
             
            </Div1>
            
        </Main>
    </Article>
   </Section>
  )
}

export default Form