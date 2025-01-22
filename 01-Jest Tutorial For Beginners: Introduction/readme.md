https://dev.to/abidullah786/jest-tutorial-for-beginners-introduction-15-10im

```
npm init -y
npm install --save-dev jest
```

### jest
There are three main methods in this test file:

test() – It is the smallest unit test case that is written to be executed. String in quotes represents the test name
```
test("<test_name>",()=>{
    ...
})
```
expect() – It is an assertion. Every test() statement has an expect() function which takes a value and expects a return in true form. Single test case can have multiple expect() functions.
```
test("<test_name>",()=>{
    ...
    expect(2+2).toBe(4);
    ...
})
```
describe() – It is a suite of Test scripts that gives an outer description for the test suite. It could consist of more than one test cases.
```
describe("<name_to_tests_group>",()=>{

    test("<test_name>",()=>{
       ...
    });
    ...
    test("<test_name>",()=>{
       ...
    });
})
```
Start Unit testing
Now Let's get started by writing a test for a function that add two numbers.

First, create a sum.js file:
```
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```
Now it is batter to have a separate directory of test cases for that follow the below-given steps

First create the __test__ repository
Add your test files in that directory the file name should have .test.js means <any_name>.test.js
It will be batter to have different test files for different tests
import the function module you want to test.
before starting the test write the test script in package.js Add the following section to your package.json:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
After reading the above guideline, create a file named sum.test.js.
This will contain actual test:
```
const sum = require('./sum');

test("add", () => {
  expect(sum(1, 2)).toBe(3);
});
```
Finally, run yarn test or npm test command and Jest will print this message:
```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```
WOW! You just successfully wrote your first test using Jest!