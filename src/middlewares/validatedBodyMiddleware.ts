import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBodyMiddleware =
  (schema: ZodTypeAny) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    console.log(req.body)
    const validated = schema.parse(req.body);
    console.log(validated)
    req.body = validated;
    next();
  };
