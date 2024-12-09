---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 7 and 8
description: Solve Advent of Code Day 7 and 8 with Kevin
pubDate: 2024-12-09T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

A funny thing about participating in coding challenges, especially ones that drop challenges each day over a 24 day period is, when your kids sporting events occur over the weekend, the coding challenge doesn't take a pause. This weekend, well, Saturday really, was a bit of a crazy one. Field hockey tournament in Maryland for my daughter, then we were at a Christmas party after that. To say I didn't have time Saturday to work on any of this is an understatement, so Sunday was dedicated to finishing up my Day 6 post, and completing Day's 7 and 8 challenges. I had initially been hoping to complete both challenges relatively quickly, and then getting Day 7's post out the door...but as you'll see, Problem 2 on Day 8 decided to take up a good deal of my day. So, I'm combining Day's 7 and 8 into one post.

# Day 7
The next location in our search for the Chief Historian is a rope bridge over a river in the jungle. Either global warming has hit the North Pole especially hard, or we're not in the North Pole anymore. The historian isn't on the side of the bridge we're currently on, so we need to cross it and search the other side. As our search group crosses the bridge, we see that it is being repaired (confidence boosting) by engineers and we can't cross until they've completed their work. When you ask how long this work will take, the engineers tell you "not long", but they add their calibration equations were stolen, if you can help them determine which test values could be produced by placing combination operators into their equations, we can get our group back on the search! Operators are always evaluated left-to-right, and you notice you can see our operator thieves holding the add and multiply operators. Perhaps using these we can provide a calibration result to the engineers and get back to our search.

## Problem 1
Breaking down the problem statement, we can identify the following;
- Input: a list of equations in the form of a file
- Output: the sum of test values from equations that are true
- Constraints: only the addition and multiplication operators are available for us to use, operators are evaluated from left-to-right and numbers in the equations cannot be rearranged

With this in mind, we can develop the following approach in an attempt to help our new engineer friends out;
1. Parse the input file and extract the equations from it
2. Identify all possible operator combinations
3. Evaluate each operator combination and determine which combinations produce a test value
4. Sum up the total of test values from valid equations

In solving this challenge I ran into two issues initially that led to an inaccurate count but was able to fairly quickly realize where the issue was and resolve it. In my initial response, I attempted to create a custom function in Python to order my operations, but on doing a little research determined switching to using the itertools module would do this more efficiently. I also had to make slight adjustments to how we evaluated the left-to-right implementation and disregard standard operator order. Thankfully I was able to relatively quickly move through these and correctly solve the problem and move on.

## Problem 2
Upon reviewing our results, the engineers are concerned that it is nowhere within their strict safety tolerances. Looking closer at our operator thieves, you notice they're also holding a concatenation operator. With this in mind, we need to update our solution to account for concatenation and see if we can further help our new bridge engineer friends.

Our input and output does not change from Problem 1 to Problem 2. We have now added a third operator to our constraints, concatenation while evaluation and number rearranging does not change.

With this in mind, we can update our approach to provide a more accurate result;
1. Parse the input file and extract the equations from it just as in Problem 1
2. Modify our function that identifies all operator combinations to now include the concatenation operator
3. Adjust our function that evaluates operator combinations to include concatenated combinations and evaluate for test values
4. Sum up the total of test values from valid equations

By using our solution for Problem 1 as a starting point, we were able to add an additional operator to evaluate against and provide our new friends with a more accurate evaluation. Day 7 focused on the following strategies to successfully help us provide accurate calibration results to our new engineer friends so we could continue on with our search;
- Operator expansion
- Handling a scenario in which we evaluated equations outside of the normal operator precedence
- Use of the itertools module to more efficiently generate operator combinations as opposed to building a custom implementation with standard Python modules

# Day 8
We've gone from the jungle, to a top-secret Easter Bunny installation. As your historian friends continue their search, you look at a big antenna that seems to emit a signal that makes people more likely to by Easter chocolate as a Christmas gift. As you look out across the city, you see more of these antennas, each emitting a specific signal identified by a single lowercase letter, uppercase letter or digit. These signals only apply their effect at specific antinodes, which are based on the resonant frequencies of the antennas. Specifically, an antinode occurs at any point in line with two antennas of the same frequency, but only when one antenna is twice as far away as the other. Each frequency paired antenna set creates two antinodes, one on either side of the antennas. While you wait for the historians to complete their search, you work to calculate the number of unique locations that contain an antinode.

## Problem 1
Breaking down our problem statement for Day 8's challenge, we can identify the following;
- Input: a map of antennas throughout the city represented as a grid of characters
- Output: the number of unique locations on the map that contain an antinode
- Constraints: antinodes occur when two antennas of the same frequency are in line, with one twice as far from the point as the other. Antinodes can occur at locations that contain antennas and the map is bound, and antinodes are only contained within this boundary.

With this in mind, we can approach this challenge in the following way;
1. Parse the input file and create a 2D grid that represents the map of the city
2. Identify all antennas and their corresponding frequency
3. Identify antennas with the same frequency and calculate if they create potential antinode locations and store valid locations
4. Sum the total of valid antinode locations

The primary issue I ran into solving Problem 1 was an initial over count of antinodes. Properly calculating the distance to ensure we only counted antennas twice the distance of each other took a little tweaking to accurately count nodes, additionally I used a set data structure to store locations. Implementing these minor upgrades helped us accurately identify all antinodes across Easter city.

## Problem 2
Which brings us to this weekend's problem child, Day 8 Problem 2. I once again had to phone my friend in Perplexity to eventually solve this one. It was this problem that led me to posting Day 6's post so late in the evening yesterday. It was this problem that led me to creating this combined post for Day's 7 and 8. Maybe it was the NFL football that distracted me throughout the day, but this Problem took me a good portion of Sunday to figure out.

Apparently we've had a shoulder surfer in the form of one of the historians watching our work in Problem 1. After asking a question about resonant harmonics, we realize that an antinode occurs at any grid position, in line with at least two antennas of the same frequency, BUT regardless of distance. This means we likely under counted antinode locations in Problem 1, and need to update our solution.

Breaking down our problem, our input and output do not change from above, although the number of antinodes should increase now that we can more accurately count them. Our constraints only slightly change, with antinodes occurring at any grid position with two antennas of the same frequency, no longer needing to be double the distance.

With these updates in mind, we can approach this problem as follows;
1. Parse the input file and create a 2D grid just as in Problem 1
2. Modify our function that finds antennas and group antennas by frequency
3. Update our function that finds antinodes based on the updated rules of Problem 2
4. Identify valid antinode locations
5. Sum the total of valid antinode locations

Throughout the process of attempting to solve this challenge I ran into multiple issues that required me to continually update my solution. 
- Some of my earliest attempts were not accounting for diagonal lines leading to an under count. My implementing the use of greatest common divisor I was able to ensure that all points along the line between two antennas were correctly recorded
- I initially was calculating positions that could fall outside of my grid boundaries and providing an over count. By creating a function that checks the grid boundary, I ensured positions were valid

In an effort to solve, I implemented debugging statements using a limited grid with a known number of antinode locations to better attempt to isolate what I was doing incorrectly and solve the problem. While this was helpful, I never quite got to solving this on my own, and used Perplexity.ai to assist in my troubleshooting. Within about 3-4 iterations working with an AI assistant I was able to close the loop (accounting for diagonals) and solve this problem. In hindsight, it was probably a good thing football was on yesterday as it gave me a good outlet to walk away from my computer for a bit and clear my mind. While frustrating at times, ultimately solving this, even if I had to phone a friend proved to be rewarding and enjoyable. My approach was iterative, and involved various other sites including Google, Stack Overflow and even the Advent of Code sub-Reddit as I iterated and improved my solution. While there were times that multiple updates kept providing the same "answer" proved to be frustrating, I nevertheless kept my head down and worked through things. As we mentioned previously when we ran into a problem that took multiple hours to solve, we just need to keep pressing forward instead of giving up. Onward to Day 9 though, and whatever Advent of Code has in store for us tomorrow (or today).
