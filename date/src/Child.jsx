// import React, { useState } from 'react';
// import './App.css';

// const Child=(probs)=>{



//   let [date,setDate]=useState('');
//   console.log(date);

//   console.log(date && true);

//     let[pending,SetPending]=useState("");
  
//     console.log(probs);

//     let {prev,Today}=probs;
//     console.log(prev);
//     console.log(Today);


//     // let val=prev.filter((v)=>{
//     //     if(v.status=== "Pending"){
//     //       Today.unshift(v);
//     //     return v;
//     //     }
//     // });
//     // console.log(val);

//     let upd=(prev)=>{
//       prev.filter((v)=>{
//         if(v.status==="Pending"){
//           Today.unshift(v);
//         }
//       })

//     }

// //    val.filter((v)=>{
// //     SetPending(v);
// //    })
 
// //    console.log(pending);
// // console.log(val.length);


// let updateDate=(day)=>{
//   setDate(day);
// }



// let up=()=>{
// if(val.length===1){
//   SetPending(val[0]);
//   console.log(val[0]);
// }
// }

// let Yesterday=()=>{
//     return(<Div></Div>)
// }



//   return (
//     <div>


//           <div className="container">
//             <div className="tasks">
//             <table className="task-table">
          
//             <tr className="Headings">
//               <th>Task</th>
//               <th>Status</th>
//             </tr>
          
//          {date && (
//          <div>
//          {date === 'prev'
//           ? prev.map((task, index) => (
//               <tr key="index"   className={`task-item ${task.status}`}>
//               <td className="task-info">{task.Task}</td>
//               <td className="task-status">{task.status}</td>
//               </tr>
//             ))
//           : Today.map((task, index) => (
//               <tr key="index"   className={`task-item ${task.status}`}>
//               <td className="task-info">{task.Task}</td>
//               <td className="task-status">{task.status}</td>
//               </tr>
//             ))
//           }

//          </div>
//          )}
//          </table>
//          </div>
//          </div>



         
        
//          <button className="yesterday"  onClick={()=>{updateDate('prev') ;
//          upd(prev);
//         }}   >Previous Day</button>
//          <button className='Today' onClick={()=>updateDate('Today')}>Today</button>
        
//     </div>
   
    
//    ) 

//    } 
// export default Child








import React, { useState } from 'react';
import './App.css';

const Child=(probs)=>{



  let [date,setDate]=useState('');
  console.log(date);

  console.log(date && true);

    let[pending,SetPending]=useState("");
  
    console.log(probs);

    let {prev,Today}=probs;
    console.log(prev);
    console.log(Today);

    let upd=(prev)=>{
      prev.filter((v)=>{
        if(v.status==="Pending"){
          Today.unshift(v);
        }
      })

    }

let updateDate=(day)=>{
  setDate(day);
}



let up=()=>{
if(val.length===1){
  SetPending(val[0]);
  console.log(val[0]);
}
}

let Yesterday=()=>{
    return(<Div></Div>)
}



  return (
    <div>


          <div className="container">
            <div className="tasks">
            <table className="task-table">
          
            <tr className="Headings">
              <th>Task</th>
              <th>Status</th>
            </tr>
          
         {date && (
         <div>
         {date === 'prev'
          ? prev.map((task, index) => (
              <tr key="index"   className={`task-item ${task.status}`}>
              <td className="task-info">{task.Task}</td>
              <td className="task-status">{task.status}</td>
              </tr>
            ))
          : Today.map((task, index) => (
              <tr key="index"   className={`task-item ${task.status}`}>
              <td className="task-info">{task.Task}</td>
              <td className="task-status">{task.status}</td>
              </tr>
            ))
          }

         </div>
         )}
         </table>
         </div>
         </div>



         
        
         <button className="yesterday"  onClick={()=>{updateDate('prev') ;
         upd(prev);
        }}   >Previous Day</button>
         <button className='Today' onClick={()=>updateDate('Today')}>Today</button>
        
    </div>
   
    
   ) 

   } 
export default Child






























