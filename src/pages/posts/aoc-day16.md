---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 16
description: Solve Advent of Code Day 16 with Kevin
pubDate: 2024-14-17T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Perhaps its my relative low experience with Python that, whenever I have a rough day in this challenge (which to be fair has been pretty minimal so far) I go into the following day with a bit of trepidation. I've said it previously though, these challenges aren't meant to be easy, expecting them to be so would just defeat the purpose. It's extremely easy to just walk away from the keyboard and do something else. But if I did that, at least one of you would call me out publicly on LinkedIn for giving up.

## Problem 1
Day 16, the day of the Reindeer Olympics! Hopefully this year they allow Rudolph to play in the games...

The big event for this year's Olympics is the Reindeer Maze, where Santa's reindeer compete for the lowest score. The Reindeer start on the Start Tile (marked S) facing East and need to reach the End Tile (marked E). They can move forward one tile at a time (increasing their score by 1 point), but never into a wall (#). They can also rotate clockwise or counterclockwise 90 degrees at a time (increasing their score by 1000 points). Using a map you grabbed from a nearby kiosk, and coupling that with the potential path(s) through the maze you want to figure out the best place to sit and watch all the action.

Analyzing the map, what is the lowest score on this years maze a reindeer could potentially score?

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a map that contains this years layout of the reindeer maze
- Output: the lowest possible score to reach the end of the maze
- Constraint(s): reindeers start facing east and can only move forward or rotate 90 degrees. Additionally, a reindeer cannot move through a wall.

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file and create a programmatic representation of the maze
2. Find both the staring and ending positions within the map
3. Simulate or implement a function that works to find the shortest path through the map
4. Calculate the score for a path based on the number of moves and rotations, returning the lowest possible score

My early efforts to solve this problem ended up providing a score that over counted the actual answer. I initially chose to use a BFS algorithm to search through the maze, track moves and rotations. I think given this maze, it was limited an unable to find the optimal answer, hence our over count. I ended up implementing a Dijkstra algorithm which I think was better enabled to better handle our maze based movements as well as the associated tracking. Other changes made included better tracking of a reindeer's state, and a more accurate method to calculate a reindeer's rotation cost within the maze. These three changes enabled me to solve Problem 1 within five attempts and move on to Problem 2!

## Problem 2
Great, we know the best path(s) through the maze look like, now where do we sit? Non-wall tiles include a place to sit along the edge, and many factors go into determining the best vantage point (how comfortable the seats are, how far away the bathrooms are, whether there's a pillar blocking your view, etc.). However, the most important factor to us is that where we sit is along the/one of the best paths through the maze. We don't want to miss out on any of the action after all! Including the start and end points, we need to determine which tiles are a part of any of those paths, how many tiles are a part of at least one of the paths in the maze?

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: the same map from Problem 1 that contains this years reindeer maze
- Output: the count of tiles part of at least one of the best path's through the maze
- Constraints: we only need to consider non-wall tiles

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file and create a programmatic representation of the maze
2. Modify our our path function to find all path's with the lowest score
3. Mark tiles that are a part of a/any best path
4. Count marked tiles and return the total number along a best path

My initial challenges on Problem 2 were mainly around an under count of the tiles along the best route(s). I was doing several things incorrectly;
- Underestimating the number of possible best paths
- I was not including both position and facing direction in my state
- Tiles had to be counted from all best paths, not just a single path

I adjusted my code to more accurately generate neighbors considering the various moves available at a given time as well as using defaultdict to more efficiently track scores for paths in the maze. Lastly, I made sure my simulation continued to explore paths to ensure we found all potential best paths were found. As with the last time I had to admit this, I didn't fully understand why these were the right ways forward, so I think one of my next posts after completing this challenge will be to explore any of these cases where I implemented something without fully understanding it. The important, and I guess selfish implication for me though was, we solved the problem and I earned two more stars today.

Today's challenge had us navigating a maze, representing a grid attempting to find the best path(s) through it, and then using that information to determine where the best place to sit was. Despite some early issues in attempting to solve each problem, we eventually were able to successfully solve both problems. Some key learnings I walked away from today with were;
- Ensuring state is properly handled, in today's challenge including both the position and direction the reindeer was facing was critical to success
- Ensuring we analyzed all potential paths, and didn't stop upon finding the "best" path
- Efficient use of data structures through the use of things like priority queues and defaultdict

Today was a good challenge in light of how Day 15 went. I didn't immediately solve it, but I'm not still working through one of the problems today. I still haven't solved Day 15, Problem 2, so for now onward to Day 17 and whatever lies in store there.