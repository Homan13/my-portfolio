---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 20
description: Solve Advent of Code Day 20 with Kevin
pubDate: 2024-12-21T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Once again, I've got no witty lead ins to today's post.

## Problem 1
We're back in a computer again today, this time outside of the CPU. Once again, the historians leave you all by your lonesome and a program walks up to you challenging you to a race. The race itself takes place within a twisting path of computer code, the program hands you a map of the course to review. In this race, cheating is allowed. Once, and exactly once during the race a program may disable collision for up to 2 picoseconds, which allows it to pass through walls. At the end of the cheat period, the program must be back on normal track, otherwise it will be disqualified. Since we don't know what the conditions on track will be, we want to give ourselves as many options as we can, and find the best cheats possible. How many of them will save us at least 100 picoseconds.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a 2D grid representing our racetrack
- Output: the number of cheats we can identify that save us at least 100 picoseconds
- Constraints: cheats only last for a total of two moves and is identified by its start, and end position. After a cheat, the program must be on normal track to avoid getting disqualified

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read the input file creating a 2D grid representation of the track
2. Identify the start and end of the race
3. Build a function that finds the shortest path through the racetrack without cheating
4. Build a function that finds all possible cheats
5. For each cheat discovered, calculate the time saved
6. Count the number of cheats that save 100 picoseconds or more, and return that number

Problem 1 today had us trying to find the number of cheats on the racetrack that would save us 100 picoseconds over the standard path. My initial logic was pretty basic, and my initial runs led to over counts, although thankfully each change I made kept getting closer to the right answer. In my initial run I used a basic BFS function to identify paths, then worked to solve the cheats. Iterating through the problem, I eventually settled on using BFS to calculate distances from the starting point, calculating the cheats with their own function then storing them in a set. Most of the time I spent on this problem came down to playing around with just a few lines and experimenting to get things where I needed it. But, after some (Narrator: it was a fair amount) of trial and error we found the total number of cheats for this problem.

## Problem 2
Apparently while we were calculating cheats in Problem 1, the cheating rule changed, just a couple milliseconds ago. Now, a single cheat lasts for 20 picoseconds, not just 2. We should now have more cheats available to us, our goal being to find the best cheats that will save us at least 100 picoseconds.

Our input and output do not change from Problem 1. On the constraint side, a cheat can now last up to 20 picoseconds, the remaining constraints not changing.

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read the input file creating a 2D grid representation of the track
2. Identify the start and end of the race 
3. Reuse our function from Problem 1 that finds the shortest path through the racetrack without cheating
4. Update our function that identifies cheats to account for the 20 picosecond limit
5. For each cheat discovered, again calculate the time saved
6. Again count the number of cheats that save 100 picoseconds or more, and return the number

Very similar to Problem 1, this problem involved a lot of trial and error to get to the right answer.I was able to reuse much of what I started with in Problem 1, and updating it for the constraints of Problem 2. The biggest change was in handling the variability of the cheat, which in Problem 1 was a fixed 2 picoseconds, now becoming variable anywhere between 2-20 picoseconds in Problem 2. I eventually settled on a nested loop for this part and after some fiddling was able to earn my second star of the day!

Today's problems had us analyzing the map of a race, represented as a 2D grid in an effort to find the number of cheats available to us to get through the race as quickly as possible. Some of the strategies used today to successfully solve both problems were the use of BFS functions, sets, and nested loops to account for the varying length of cheats in Problem 2.

Onward to Day 21, and whatever that has in store for me. My holiday vacation at work has begun so tomorrow I'll be working on this, doing some wrenching on the car, and of course watching Penn State in their first ever College Football Playoff appearance. Thanks again for following along, see you all tomorrow!