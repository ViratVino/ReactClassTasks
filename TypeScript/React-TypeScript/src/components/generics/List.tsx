type ListProps<T>={
    items:T[]
    onClick:(value:T)=>void
}

export const List =<T extends {id:number,first:string,last:string}>({items,onClick}:ListProps<T>)=>{
    return(
        <div>
            <h2>List of Items</h2>
            {
                items.map((item,i)=>{
                  return(
                    <div key={item.id} onClick={()=>onClick(item)}>
                        {/* {JSON.stringify(item)} */}
                        {item.last}
                        {item.first}

                        
                    </div>
                  )
                })
            }
        </div>
    )
}