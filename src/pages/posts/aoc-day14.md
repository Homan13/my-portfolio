---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 14
description: Solve Advent of Code Day 14 with Kevin
pubDate: 2024-12-15T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: Photo by Lewis Kangethe Ngugi on Unsplash'
---

Onward to Day 14, and once again we're helping somebody else out. We need more of these arcade days to relax a little bit.

## Problem 1
Back to the global HQ of the Easter Bunny, I'm beginning to think the big Bunny and Santa are mortal enemies? Anyways, one of our historians needs to use the bathroom, which is guarded by security robots. We need to help the historian get to the bathroom without getting caught by security, so we'll need to predict their future movements and where they'll be. The robots move in predictable fashion. To calculate future locations we can use their current position and velocity from our input file. The space we have to deal with is 103 tiles tall, and 101 tiles wide, robots can share space, and they can also teleport (wrap around the space edges) when they reach the edge of the space. We need to run our simulation for 100 seconds, and determine the number of robots in each quadrant at the end of that time. Our output at the end of this time will be the safety factor of moving through this area to get to the bathroom.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a list of robots with initial position and their velocity
- Output: overall safety factor (multiplication of robot counts in each quadrant)
- Constraints: our grid size is 101x103, our simulation should run for 100 seconds, robots can wrap around the edge of the grid and robots on the middle line do not count for any quadrant

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. read our input file, identify each robots starting position and its associated velocity
2. Simulate motion of robots for 100 seconds
3. At the end of the simulation, count robots in each quadrant and calculate the overall safety factor

Our solution to Problem 1 involved simulating movement of all the robots from the input file over a 100 second period, and accounting for their ability to wrap around the edges of the area. To efficiently simulate the movement over 100 seconds I built a function utilizing modular arithmetic. With the large number of robots on the input file, this assisted us in efficiently handling all this inputs over the entire period of the simulation, while accounting for the wrapping behavior of the robots. Thankfully, we were able to help our historian companion before the situation became dire.

## Problem 2
While you wait for the historian wraps up their trip to the bathroom, the other historians start returning from their search. Somebody mentions these robots look awfully similar to the security robots the North Pole uses. You wonder what the fewest number of seconds is for the robots to move around the grid and eventually form the shape of a Christmas tree.

Our inputs and constraints do not change from Problem 1. Our output is the fewest number of seconds required for the Christmas tree pattern to appear on the grid. We will again read the input file, and run a function that simulates robot movement across our grid, only this time creating a function that checks if robot positions form a Christmas tree pattern on the grid. We then run our simulation second by second until the pattern appears, reporting back the time it takes to get there.

This problem took some of my time today, and thankfully I had field hockey and tutoring drop-off and pick-up for two of my girls this morning which gave me some good decompression time on this problem. My early attempts resulted in solutions that just ran in an infinite loop never providing an answer. I spent about 45 minutes working through the infinite loop issue before I started returning results, only my result was finding a "Christmas tree" pattern in one second, which I didn't even bother answering because that just didn't seem right. My main issue I believe was in defining and detecting the Christmas tree shape. In the end, I used a combination of determining a minimum safety factor rather than attempting to identify a visual pattern as well as using the product of quadrant counts to detect the pattern. I'm going to be honest here, I don't fully understand why this was the right direction to go, and will be spending most of the rest of the day trying to learn more about this....that said it got me across the finish line.

Today's challenge had us simulating the movement of robots along a grid-like space and having to account for things such as edge wrapping as well as pattern identification. Some of the strategies used today include;
- Modular arithmetic: to efficiently simulate a large number of movements, modular arithmetic was used. This form of math involves operations on a circular number line that has a fixed set of numbers. Using this helped us deal with the robots ability to teleport (or wrap around the edges) of our grid.
- We divided a grid into quadrants and then counted the robots in each quadrant as a part of our operations to determine our safety factor
- In Problem 2 we used quadrant counts as a proxy to help us detect the Christmas tree pattern

Today's challenge was all about  efficient use of mathematical modeling (this coming from someone who sucks at maths) and never stopping thinking through a complex problem. In a somewhat military term, we live to fight another day.