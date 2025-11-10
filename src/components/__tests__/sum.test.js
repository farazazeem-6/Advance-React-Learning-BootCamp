import { sum } from "../sum"

test("testing the sum function",()=>{
   const result= sum(10,20)
   expect(result).toBe(30)
})