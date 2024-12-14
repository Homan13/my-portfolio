---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 13
description: Solve Advent of Code Day 13 with Kevin
pubDate: 2024-12-14T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Day 13 of Advent of Code just so happens to fall on a Friday. Is this going to portend anything for how today's challenge is going to go? Tune in at 11...wait, that's not right. Thankfully, today was mostly smooth. Troubleshot some issues with Problem 1, but nothing too involved.

## Problem 1
Today our search leads us to a tropical island and we can't quite tell if the historians are searching, or relaxing. Shockingly, nobody has bothered you asking for help, so you stroll into the arcade and immediately notice the claw machines. These claw machines don't have a joystick, they're operated by two buttons, A, which costs three tokens to push and B, which costs one token to push. Each machine contains one prize, and to win, the claw must be placed exactly over the top of it, properly aligned along both the x and y axis. You wonder to yourself what the smallest amount of tokens you'd need to spend to win as many of the prizes as possible. You write down the behavior of each machine's buttons, as well as the location of its prize.

Our goal is to determine how to win as many prizes as possible, and how many tokens this would take, keeping in mind we want to do this buy spending the least amount of tokens.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a list of all the claw machines in the arcade, each containing button A movement (x, y axis), button B movement (x, y axis) and the prize location (x, y axis)
- Output: the minimum number of tokens needed to win all possible prizes
- Constraints: button A costs us three tokens for each press, button B costs us one. Each button should be pressed no more than 100 times and the claw must be positioned exactly above the prize (x, y axis alignment)

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Parse data on the claw machines from our input file
2. For each machine, attempt combinations of button presses and determine if any combination will win the prize
3. Calculate the token cost for a combination that wins a prize
4. Track tokens spent for each machine, and return the total tokens required to win as many prizes as possible

My initial efforts were hampered by issues parsing the input file and working through the correct way to split the various values. I also initially (and probably lazily?) attempted to solve this through a brute force effort, which would have been rather inefficient. To efficiently calculate the number of tokens needed to win, I ended up using Numpy to calculate the number of button presses needed to win a particular prize. I did this by creating a 2x2 matrix that represented the axis movements of the two buttons, as well as a vector value that represented the prize. Making these changes, I was then fairly quickly enabled to successfully solve the problem and move on.

## Problem 2
Attempting to win the prize from machine number one, the claw is not lining up where you expect it to and you realize we've made a conversion error. Doing some quick calculations, the position is actually 10000000000000 units higher on both the X and Y axis. We're going to need to update our solution, accounting for this new information and recalculate again the fewest amount of tokens required to win the most prizes.

Problem 2 builds on Problem 1, with some subtle changes;
- Input: Input: a list of all the claw machines in the arcade, each containing button A movement (x, y axis), button B movement (x, y axis) and the prize location (x, y axis). In problem 2 the coordinates of the prize shift by 10000000000000 units.
- Output: remains the minimum number of tokens needed to win all possible prizes
- Constraints: button A costs us three tokens for each press, button B costs us one and the claw must be positioned exactly above the prize (x, y axis alignment)

Building on Problem 1, and still using Numpy to efficiently solve this problem. Due to the addition of the large nature of the shift, we introduced a validation check to make sure we accounted for floating-point operations. Shockingly, I was able to implement the correct changes first time through on this one, I guess it had to happen sometime?

Day 12 was a nice relaxing day for us, instead of helping someone else with their problem spent the day in an arcade trying to win prizes from claw games. In our effort to win as many prizes as possible, we needed to calculate the minimum number of tokens we'd need to spend, to win as many prizes as possible calculating a precise number of button presses that would get us to a specific set of coordinates. Some of the strategies included today are;
- Equation Modeling: our input file was mapped and represented as a system of linear equations
- Numpy: to efficiently solve our equations we used the Numpy module, a package of tools used for scientific computing in Python
- Working with large numbers: problem 26 introduced a very large number to our calculations, causing us to consider carefully how to calculate positions without losing precision

The key take away for me was how we solve mathematical problems (sometimes complex) using Python to do so efficiently. While programming languages like Python give us the power to efficiently solve problems like these, we're still required to think through these problems carefully. Many times the computers we run are limited on resources, and specifically thinking of Problem 2 its easy to create a solution that just brute force solves our challenge, but is that the best use of our resources?

We now move to the back half of this challenge. As always, thank you for following along!