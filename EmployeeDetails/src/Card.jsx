import React from 'react'

const Card = ({data}) => {
    console.log(data);
  return (
    <div className='wrapper-container'>
    {
        data.map((val,i)=>{
            return<div className='card'>
            <h2>{val.subjectName}</h2>
            <hr />
            <p>BatchCode:{val.batchCode}</p>
            <p>StartDate:{val.batchStartDate}</p>
            <p>Mode:{val.batchMode}</p>

            </div>
        })
    }
    </div>
  )
}

export default Card