import { Router } from "express";
import { Route } from "../routes/routes.types";

const productRouter = Router();

productRouter.get("/",(req,res)=>{
    
    console.log(req.headers.cookie);
    console.log(req.cookies);
    console.log(req.signedCookies.hello)
    if(req.cookies.hello && req.cookies.hello === "world")
    return res.send([{id:123,name:"chicken breast",price:12.99}])

    return res.send(403).send({msg:"Sorry.You need the correct cookie"})
})

productRouter.get("/cookie", (req, res, next) => {

	res.cookie("hello","world",{maxAge:10000,signed:true});
    res.status(201).send({msg:"Hello"});

});
export default new Route("/product", productRouter);