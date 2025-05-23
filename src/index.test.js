import Log from "./index.js";

test("log test", ()=>{
  expect(Log('hello')).toBe("hello")
})