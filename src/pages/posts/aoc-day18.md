---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 18
description: Solve Advent of Code Day 18 with Kevin
pubDate: 2024-12-19T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Day 18. Seven days left in this year's Advent of Code. I think I mentioned it before, it'll be interesting to see what Day 25 looks like, as advent typically only runs through the 24th, or at least my kids advent calendars each year do.

## Problem 1
Today we're inside a computer in the North Pole. We're almost immediately approached by a computer program telling us the region of memory we've transported ourselves to is unsafe. The current user of the system has initiated an algorithm that is pushing whole bytes of information down on top of us, and its fast too. A byte falls once every nanosecond. Our goal today is to create a list of bytes which will fall, in the order they will land in our memory space. The memory space is a 2D grid, with coordinates that range from 0-70 both horizontally and vertically.

You are currently located in the top left corner of the memory space, and need to get to the exit in the bottom right corner. As bytes of memory fall, the space it occupies becomes corrupted and cannot be accessed by you or the historians. We also cannot leave the boundaries of the memory space. Our goal is to find the minimum number of steps required to get to the exit of the memory space.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a list of coordinates that represents falling bytes of memory
- Output: the minimum number of steps needed to reach the exit
- Constraints: we can only move up, down, left or right, we cannot enter corrupted memory locations and we need to simulate only the first 1024 of falling bytes

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file to get the list of coordinates
2. Create a grid that represents the memory space
3. Simulate the falling memory and mark positions on the grid as corrupted
4. Find the shortest path from our starting point, to the exit and print the number

Problem 1 was relatively straight forward. Once I had read in our input file, and created a representation of the memory space in a grid, we simulated the first 1024 bytes and identified corrupted memory space within our grid. We memory fell, corrupted memory locations were marked with a 1, leaving safe spots on a grid marked with a 0. Using a BFS algorithm we then searched the grid to find the shortest path from start, to exit. Solved this problem on my first shot, on to Problem 2!

## Problem 2
With our exit path figured out, we now move on to our next worry, can the historians get out before the path is blocked? They move awfully slowly. To figure out how fast we need to move to get out of the memory before our path is blocked, we need to know the first byte that will cut of access to the exit.

Our input and constraints from Problem 1 have not changed. Our output will now be a set of coordinates of the first byte that will block us from exiting the memory space.

1. Read our input file to get the list of coordinates as we did in Problem 1
2. Create a grid that represents the memory space
3. Simulate the falling memory, this time checking path availability after a block falls
4. When a block prohibits our exit from the memory space, return the coordinates of that memory block

Problem 2 built on Problem 1 (as seemingly many of these daily challenges do) allowing us to use much of what we started with, and modify it to allow us to determine when our escape path would be blocked. We modified our BFS algorithm to search our path and determine if we could still leave the memory space after the falling of a memory block. If there was still a path to freedom, our simulation continued, if not we terminated and returned the coordinates of the blocking memory block. Like Problem 1, solved this on the first shot, which, seems trivial, but to me was kinda nice given some of the previous day's challenges.

A relatively straight forward and quick challenge day today. Maybe the organizer recognizes we're getting closer to Christmas and the challenges from here on out will be a breeze (Narrator: they won't be). I feel like I'm quite literally running out of things to say. Writing blog posts every day for 18 days straight isn't easy.
