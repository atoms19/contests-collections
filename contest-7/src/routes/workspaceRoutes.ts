import express from "express"
import authMiddleware from "../middlewares/authMiddleware";
import { workspaceService } from "../services";



let workspaceRouter = express.Router();

workspaceRouter.use(authMiddleware);


workspaceRouter.get('/',(req,res)=>{
  return res.json({
		message:""
  })

})
workspaceRouter.get('/:id',(req,res)=>{  
  let id = req.params.id
  let getWorkspace= workspaceService(id);
  return res.json({
     message:""
  })
})




export {workspaceRouter};

