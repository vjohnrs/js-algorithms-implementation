Input: A sequence of n numbers (a1, a2, . . . ,an).
Output: A permutation (reordering) (a`1, a`2, . . . ,a`n) of the input sequence such
a1 < a2 . . . < an.


Loop invariant:
* initialization: true prior to the loop
* maintenance: remains true before the next iteration
* termination: on termination, invarinat provides a correct algorithm