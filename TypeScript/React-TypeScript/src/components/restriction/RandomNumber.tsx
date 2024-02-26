type RandomNumberType={

value:number
}

type PositiveNumber =RandomNumberType &{
    isPositive:boolean,
    isNegative?:never,
    isZero?:never
}

type NegativeNumber=RandomNumberType &{
    isPositive?:never,
    isNegative:boolean,
    isZero?:never
}

type Zero=RandomNumberType &{
    isZero:boolean
    isPositive?:never,
    isNegative?:never,    
}

// type RandomNumberProps={
//     value:number
//     isPositive:boolean
//     isNegative:boolean
//     isZero:boolean
// }


// ithula ethukkaga naa mathuren naa ipdi kudukura nala ennala orae nerathula is posive true negative true zero true nu kudukka mudiyum atha restrict pana thaan ipdi thani thaniyaa pirivhu pirichu kudukorom

type RandomNumberProps=PositiveNumber|NegativeNumber|Zero

const RandomNumber = ({
    value,isPositive,isNegative,isZero
}:RandomNumberProps) => {
  return (
    <div>
        {value} {isPositive && 'POSITIVE'} {isNegative && 'NEGATIVE'}{isZero && "ZERO"}

    </div>
  )
}

export default RandomNumber