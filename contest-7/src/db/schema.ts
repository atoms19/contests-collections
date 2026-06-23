import { Generated } from "kysely"

export interface Database{
 users:UserTable
 workspace:WorkSpaceTable
 todos:TodosTable
}

interface UserTable {
   id: Generated<number>,
   username: string ,
   password: string
}

interface WorkSpaceTable {
  id: Generated<number>,
  name:string,
  user_id: number
} 

interface TodosTable {
  id: Generated<number>
  title: string,
  description:string,
  completed: boolean 
  workspace_id: number
}

 



