const sum = require('./index')

test("add 1 and 2 should be 3", ()=>{
	expect(sum(1,2)).toBe(3)
})