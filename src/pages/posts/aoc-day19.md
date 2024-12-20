---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 19
description: Solve Advent of Code Day 19 with Kevin
pubDate: 2024-12-20T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

I was hoping to have a snarky or entertaining lead in for today's post. But I got nothing. So, right into it with Day 19....

## Problem 1
Today we're at some hot springs on a tropical island. With seemingly no problems for us to solve as the historians continue their search, we take the opportunity to visit the nearby onsen. According to the front desk, your money is no good here, but the attendant heard how we helped out here a few years ago and is willing to make a deal if we can help them arrange the towels.

The towels at this osen are marked with a pattern of stripes, and there are only a few patterns. Stripes are white, blue, black, red or green. The branding expert has produced, and given you a list of designs, each of which is a sequence of stripe colors they would like on display. Because the logo needs to face out correctly, we cannot reverse patterns by flipping the towel over. To get into the osen as quickly as possible, we need to review the list of towel patterns, and determine how many of the designs are possible.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a file including a list of the available patterns and the osen's desired designs
- Output: the number of designs that can be created with the towels available
- Constraints: towels cannot be flipped, we can use as many towels of each pattern as needed and designs must be an exact match

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file, separating the available patterns and desired designs
2. Build a function that determines if a given design can be created with the available stripe patterns
3. If a design can be created, count that in a counter, and return the total number when we've tested every design

The key to success today was efficiently determining what designs could be produced from the available stripe patterns, and then storing the results of those searches. I used a recursive function to perform the pattern matching within my solution and memoization to cache our results as we continued through every design. I made sure to include a termination point for the function that performed our pattern matching to avoid the possibility of an infinite loop if a design could not be produced. This part I didn't initially think of until my code ran for five minutes not producing any results. Once I added that, I got everything to run and we were able to help out the branding expert with the number of designs they could display.

## Problem 2
Apparently our arrangements aren't up to the standards of the staff. Instead of an endless cycle of rearrangement, let's see if we can provide every possible option to them. If we determine all the options, and add them up how many different ways to arrange towels does that end up being?

Our inputs and constraints do not change from Problem 1. Our output is now the total number of different ways each design can be created.

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file, separating the available patterns and desired designs as we did in Problem 1
2. Find all possible combinations of patterns that create a design
3. Count the number of all valid combinations for each design, returning the sum total

Problem 2 built on what we started in Problem 1, allowing us to use much of what we started with. Because of the possibility of our result being large (and it was) efficiently handling calculations was going to be critical. Keeping the memoization component of Problem 1 was helpful here. From there, solving this problem involved iteratively going through each design, determining the number of combinations possible to produce it and counting the result. As with Problem 1, I was able to solve this problem in fairly short order.

Today's challenge was all about pattern recognition, and determining how many designs could be created out of the available patterns available to us (Problem 1) and summing up the total number of patterns that could make all the designs (Problem 2). Across both problems I used memoization to cache results efficiently as we worked through the pattern recognition process. Dealing with impossible designs caused us to think about how we terminate in that particular case(s) so our problem didn't get into an infinite loop.

I'm a little worried as this is now two days where the challenges seemed pretty straight forward and I didn't struggle to solve them. Stay tuned, because I feel some frustration is on the very near horizon.
