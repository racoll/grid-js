# Which? Javascript Exercise


## Acheivements

Building a single pag web app, made up of an interractive and responive grid that:

* Shows, by way of red highlighted boxes, all the multiples of the number of the clicked box
* When clicked again, all the highlighted boxes revert back to original colour
* The grid has 3 numbers per row for desktop, 2 for tablet and 1 for mobile
* The grid has a margin that prevents it stretching to fill the screen 

## Challenges

### Testing 
* It took me some time to get visibility on and overcome a testing blocker. Once I realised that the problem was likely due to asycnhronocity, as queries to the DOM were not being recognised due to the tests running before the DOM had fully loaded, then I was able to work through the problem and get tests passing for the main logic.

* For potential solutions I looked into async/await, timeouts on tests, as well as potentially mocking certain objects. Ultimately, I needed to be more clear about defining objects and state in my test files so that the tests would know what certain elements on the DOM really were at that point in time.

* I did not write tests for the primeBlock function, as the presence of click event listeners present on the blocks is confirmed by the toggleBlocks function, and thereby by those tests.

## Next steps/Improvements

* I would like to implement a bug fix that prevents the user from clicking an additional box once the mutliples have already been displayed for the original choice. 

* I would like to build out the test files to cover more angles in the code.

* I would like to look deeper into styling techniques to try and make the game more dynamic visually.

