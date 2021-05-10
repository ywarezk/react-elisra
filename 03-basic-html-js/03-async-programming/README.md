# Async programming in Javascript

examples of async stuff:

1. fetch - send request the response will return in the future
2. websocket - server is pushing data
3. interval - some time interval
4. animation - for example event for finish the animation
5. web worker - can push message
6. events - user clicks a button


## Classify your async code.

1. turn your async code to the following diagram

- how many times the callback is called? once / multiple times / infinite
- will it close?
- can it fail?

----o-----o-----o-----o----|----->

----o-----o-----o-----o----X----->

## Javascript in unique in async code

- non-blocking
- "Single Threaded"

## Promise

-----------o---|---------------->
-----------X---------------->