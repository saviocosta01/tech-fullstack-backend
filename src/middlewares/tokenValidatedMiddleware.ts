import 'dotenv/config'
import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import jwt from "jsonwebtoken";



export const tokenValidated = (
    req: Request,
    res: Response,
    next: NextFunction
  ): Response | void => {
    const authorization: string | undefined = req.headers.authorization;
  
  
    if (!authorization) {
      throw new AppError("Missing bearer token", 401);
    }
   
    const token = authorization?.split(" ")[1]
    
    jwt.verify(
      token,
      String(process.env.SECRET_KEY),
      (error: any, decoded: any) => {
        if (error) {
          throw new AppError(error.message, 401);
        }
        res.locals.id = decoded.sub;
      }
    );
  
    return next()
  };
  