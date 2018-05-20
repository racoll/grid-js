# Which? Javascript Exercise


## Acheivements

Building a single pag web app, made up of an interractive and responive grid that:

* Shows, by way of red highlighted boxes, all the multiples of the number of the clicked box
* When clicked again, all the highlighted boxes revert back to original colour
* The grid has 3 numbers per row for desktop, 2 for tablet and 1 for mobile
* The grid has a margin that prevents it stretching to fill the screen 

## Challenges

### TDD 
* I was not able to overcome an initial testing blocker whereby the tests were not running due to an 'uncaught type error' on 'appendChild' in createBlock function. 

* I suspect this is to do with asynchronicity, in that the document has not fully loaded before appendChild is called.

* Unfortunately I could not get any tests passing, so I wrote the tests that I would have liked to have got passing as part of the build.

* I tried to install jsdom to create a fake DOM to test and see if this would help solve the issue.

## Next steps/Improvements

* I would like to find a solution to the test problem, perhaps through the use of a 'waitFor' style function. Despite spending some time experimenting with and spiking code to become more familiar with querying and manipulating the DOM, I would have preferred to have taken a test driven approach.

* I would like to implement a bug fix that prevents the user from clicking an additional box once the mutliples have already been displayed for the original choice.

* I would like to look deeper into styling techniques to try and make the game more dynamic visually.

