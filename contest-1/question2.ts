
type Res = {
  id : number,
  name:string
}

const apiResponse:Res[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]



function transformToObject(arr:Res[]){
  let obj =new Map<number,string>()
  apiResponse.forEach((response,id)=>{
	 obj.set(response.id,response.name)
  })
  return obj
}

console.log(transformToObject(apiResponse))
