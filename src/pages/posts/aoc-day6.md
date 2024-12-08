---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 6
description: Solve Advent of Code Day 6 with Kevin
pubDate: 2024-12-07T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

One of the things I've learned in the early days of this challenge is, the challenges come at you quickly. The 24 hours between challenges seems like a lot at the outset of this, but as you get into it the challenges seem to come at you hot and heavy. While its another thing I've had to add to my calender throughout the day, so far things have been pretty manageable. As I sit here and type this, I wonder if timing myself per problem offers any benefit. Let me know your thoughts on that if you have any. It's amazing the random thoughts that just pop into my head throughout this process.

## Problem 1
Another day, another location to scour for the Chief Historian...only this location is in the past. Apparently the North Pole in addition to solving out how to make reindeer fly, have also figured out time travel. Amazing place this North Pole. Because we're now in a timeline none of us should be in we must be careful not to run into anyone from the past. The only problem with that is, the area the other historians need to search has a patrolling guard. If we can determine the path the guard takes on their route, maybe we can help the historians know where the guard will be at all times so they can search this space unnoticed.

Thankfully for us, the guard follows a strict series of steps that makes our job predicting their route easier and knowing where they will be at any given moment. In short, if the guard is blocked by an object, they turn 90 degrees to their right, otherwise, they take a step forward. Our goal is to predict the path the guard will take in this space, as well as the number of positions they visit before they leave the area we need to search.

Breaking down the problem I was able to identify the following:
- Input: an input file in the form of a map of the lab showing the initial position and direction of the guard
- Output: the number of positions the guard will visit before leaving the area
- Constraints: the guard follows a specific movement protocol and also stops when leaving the area

With the above input, output and constraints in mind I was able to develop the following approach to solve this problem:
1. Parse the input file creating a 2D list that represents the lab space we're trying to monitor
2. Build several functions that help us find the guards initial position and direction, and simulates the movement of the guard and tracks the positions they have visited
3. Count the number of distance positions the guard visits, and return that number when they leave the area

My initial attempts at solving this ran into two problems, one involving getting into an infinite loop, and the other providing a count that was too high. To solve the infinite loop I implemented a step counter and a limit on the maximum number of steps, ensuring my simulation would terminate and not just continue running. As I investigated my high count, I noticed several things I was able to improve upon from my initial attempt. I was able to update my boundary detection to be more precise in detecting when the guard was about to leave the mapped area, something similar I did with the movement logic. My initial attempt made it possible for the guard to move left or right, so an update was included to make sure they could only turn right when encountering an obstacle. The last thing I implemented to prevent the over count was switching to a set data structure to track locations our guard visited. Implementing these changes into my initial attempt was successful, and provided me with the correct answer.

## Problem 2
Our solution to Problem 1 is successful, but rather quickly the Historians realize the patrol area of the guard is too large for them to search the lab space without getting caught. They think however, that adding just one obstruction won't cause any time paradox's and if we place it properly, we can get the guard stuck in a loop. If successful, we can create an opening the Historian's can use to search the lab safely.

We need to identify how many positions we can use for this obstruction.

Breaking down the problem, I was able to identify the following:
- Input: same file as Problem 1
- Output: The number of unique locations where placing an obstruction will cause the guard to get stuck in a loop
- Constraints: we can only add one obstruction, the obstruction cannot be placed at the guard's starting position and the guard's movement rules remain the same as in Problem 1

I used the above input, output and constraints to develop the following approach at solving Problem 2:
1. Again we read in our input file, parse it and create a 2D list representing the lab space
2. Reuse our functions from Problem 1 that find the guard's starting position, and simulate their movement around the lab space
3. Build a new function that places an obstruction on an empty grid space
4. Run the simulation, check if the path forms a loop, if it does count that as successful and rerun the simulation trying a new obstruction spot
5. Upon trying every option, return the final number of positions that cause loops

Similar to Problem 1, I initially ran into an over count scenario where my initial run came back too high. By implementing the following changes; restoring initial grid state after each simulation and considering position and direction when checking loops allowed us to eliminate false positives and get a more accurate count of placement that would cause a loop. By implementing these changes I was able to overcome the initial over count, and produce the correct answer.

Today's challenge continues to build on lessons we've learned in the previous challenges. In today's challenge we used the following strategies to solve the problem and help our elf historians continue their search for their boss.
1. Movement simulation across a 2D grid with path and direction tracking
2. Loop detection while building in logic that prevents infinite loops in a simulation
3. State tracking

Attempting to track movement within a computer simulation seems straight forward from the outset. Implementing this however involves careful thinking in avoiding some of the initial roadblocks we hit like infinite loops and over counts. As usual, thank you again for following along on my little holiday coding journey here, I know its only like two of you, but it really means a lot!