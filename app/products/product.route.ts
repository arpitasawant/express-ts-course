import { Router } from "express";
import { Route } from "../routes/routes.types";

const productRouter = Router();

productRouter.get("/",(req,res)=>{
    res.send([{id:123,name:"chicken breast",price:12.99}])
})

export default new Route("/product", productRouter);