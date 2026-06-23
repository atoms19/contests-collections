import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export default function authMiddleware(req:Request,res:Response,next:NextFunction){
   req.headers.authorization=  
}
