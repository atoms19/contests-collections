import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod/v3";
import {z} from "zod"

function zodMiddleware(schema:any) {

return (req: Request, res: Response, next: NextFunction)=>{ 
          let result = schema.safeParse(req.body);
			 if(!result.success){
				 return res.status(400).json({
					 "success":false,
					 "errors":result.error.issues.flat()
				 })
			 }
			 req.body = result.data;
			 next();
	 }

}
export {zodMiddleware};
