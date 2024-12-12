---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 11
description: Solve Advent of Code Day 11 with Kevin
pubDate: 2024-12-22T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Much like 2024 has gone by in the blink of an eye, this coding challenge has seemingly done the same. Today's challenge is taking us off the planet Earth, and to a location a tad colder than the North Pole.

## Problem 1
Today we're on the planet Pluto. Yes, it's still a planet to me damnit! It's a brisk winter morning out here a couple billion miles from Earth you think to yourself as you cinch your hood a bit tighter. As the historians continue their search, you notice stones which seem to defy science. The stones are lined up in a perfectly straight line, and each is numbered. What's odd is, when you blink your eyes the stones change. Sometimes the number changes, sometimes a stone appears to split into two stones. When a stone splits, the other stones shift position maintaining the straight line. As you continue to observe this phenomenon, you believe you've determined the rules these stones follow;
- If the stone is engraved with the number 0, it is replaced by a stone engraved with the number 1
- If the stone is engraved with a number that has an even number of digits, it is replaced by two stones. The left half of the digits are engraved on the new left stone, and the right half of the digits are engraved on the new right stone. (The new numbers don't keep extra leading zeroes: 1000 would become stones 10 and 0.)
- If none of the other rules apply, the stone is replaced by a new stone; the old stone's number multiplied by 2024 is engraved on the new stone.
- No matter how the stones change, their order is preserved, and they stay on their perfectly straight line.

The input file for today's challenge is an arrangement of stones currently laid out in front of you. Our problem to solve today is to determine how many stones you will have after blinking 25 times.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a list of numbers
- Output: the number of stones after blinking 25 times
- Constraints: rules for stone transformation must be followed exactly and the ordering of stones needs to be preserved

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read the input file and parse the contained numbers into a list
2. Design a function that transforms a stone based on the rules of the challenge
3. Design a function that performs a blink on the current list of stones, calls on the transformation function, then repeats itself 25 times
4. Return the total number of stones after 25 blinks

Problem 1 involved the simulation of stones with their count evolving every time you blink. Using a list for our initial set of stones allowed us to easily manipulate and insert new stones during our simulation. Making sure we were careful to implement the rules of the challenge, today we also learned about managing a dynamically changing list and the efficient performance of repeated transformations on a set of data.

## Problem 2
Our historian friends are taking a LONG time to search Pluto, odd seeing as its such a small planet. How many stones will there be if we blink 75 times?

The only change from Problem 1 is the number of blinks we need to process, 75 instead of 25. The only change I made to my code

The Historians sure are taking a long time. To be fair, the infinite corridors are very large.

How many stones would you have after blinking a total of 75 times? The only change I initially made to my code was to change the number of blinks for it to simulate. I fairly quickly realized this was inefficient...likely due to my code churning, and churning, AND churning and not returning an answer. One of the first changes I made was to implement memoization, storing the results and avoiding repeating the same computing many times. I also changed how I represented the stones, moving from a list in Problem 1, to a tuple in Problem 2. Moving to a tuple based representation allowed us to efficiently cache results and after implementing these changes was able to solve this problem in a shorter order than my initial solution produced...or more accurately didn't produce.

In today's set of challenges, we simulated a line of numbered stones and their changes over a number of blinks. The strategies used to successfully solve today's challenge included the following;
- Memoization: the use of a memory dictionary to store intermediate results and avoid redundant calculations
- Tuples: an ordered and immutable sequence of elements that allowed us to more efficiently cache results in Problem 2

Most importantly, quickly identifying simply changing the number of blinks our original solution processed proved to be inefficient, so quickly identifying that and finding strategies to refactor our code to be more efficient were critical in solving Problem 2.

We've successfully completed another day, and we are just two problems away from 50% of the way through our challenge. Once again, thank you to everyone following my progress, offering motivation, feedback and of course, the all important "you're doing it wrong"!