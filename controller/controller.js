import { sumArrayIntegers } from "../service/sumOfArrayIntegers.js";

export async function sumOfArrayIntegers(req, res) {
   try{
   let response = await sumArrayIntegers(req.body);
   console.log("🚀 ~ file: controller.js:5 ~ sumOfArrayIntegers ~ response:", response)
   return res.sendStatus(200).send(response);
   }catch(error){
      return req.sendStatus(400);
   }
}