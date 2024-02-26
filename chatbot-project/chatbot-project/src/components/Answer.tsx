type AnswerProp={
    data:string|null
}

const Answer = ({data}:AnswerProp) => {
    console.log(data);

  return (
    <div id="ans-data">
        <h1 className="Right">{data}</h1>
    </div>
  )
}

export default Answer