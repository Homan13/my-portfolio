---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 10
description: Solve Advent of Code Day 10 with Kevin
pubDate: 2024-12-11T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Ten days. Ten straight days of coding. Given my history of failing my resolutions, I had some doubts as to whether or not I'd even make it this far. To be fair, my resolutions really never got started...so at Day 1 I was already ahead. Fifteen days to go, although Advent ends on the 24th, maybe the 25th challenge is super easy...

## Problem 1
Today's location is a floating island in the sky with a lava production facility. As the historians begin their search at today's site, a reindeer has found you and hands you their 'Lava Island Hiking Guide'. Opening the book though, you notice most of it is burned and you're not quite sure what the ask is, or how you can help. Our new friend then hands you a blank map of the immediate area. You wonder to yourself if you can fill in the missing trails.

Reviewing some of the scraps of the book, you are able to determine a good hiking trail is as long as possible, with a gradual uphill slope. Based on the map, this means a trail starts at 0, ends at 9 and increases by a height of exactly 1 at each step. Additionally, trails only include steps that go up, down, left or right. A trail (or multiple trails) starts at a trailhead and a trailhead score is the number of 9-height positions that can be reached from a particular trailhead. Our mission, should we choose to accept it is to figure out the sum of all trailhead scores for our hiking obsessed reindeer.

Breaking down our problem statement, we can identify the following;
- Input: a grid of single-digit numbers representing heights along various trails
- Output: the sum total score of all trailheads
- Constraint(s): trails can only move up, down, left or right. Trails start at a height of 0 (the trailhead) and end at height 9, and is valid only if it increases in height by exactly 1 for each step

With that in mind, we can develop the following approach in our attempt to solve this problem;
1. Read the input file and create a 2D list that represents our map
2. Identify all trailheads (positions with a height of 0)
3. For each trailhead, find reachable positions with a height of 9, and count it's score
4. Sum up all trailhead scores

Problem 1 involved turning our input file into a 2D list representative of a map containing various trails and trailheads in which we needed to identify and sum up all scores for identified trailheads. In order to efficiently solve this problem, I implemented a Breadth-First Search (BFS) to find all reachable positions from a trailhead that respected the constraints of this challenge (movement rules). This allowed us to fairly quickly provide our new friend with the trailhead scores they had been looking for.

## Problem 2
The reindeer reviews our results then walks away, returning several minutes later with another charred piece of paper, presumably from the book in Problem 1. This new piece of paper describes each trailhead in terms of its rating, which is the number of unique trails which begin at that trailhead. For Problem 2, we need to now rate each trailhead based on this new system, and provide the sum of all ratings back to our new friend.

Our input does not change from Problem 1, we can use the same input file (map). Our output for this Problem is a sum of all trailhead ratings which is a unique hiking trail from each trailhead. Constraints are the same as Problem 1, and do not change for this problem.

With this in mind, we can approach the solution to this problem as follows;
1. Read the input file and create a 2D list that represents our map as in Problem 1
2. Identify all trailheads (positions with a height of 0) as in Problem 1
3. For each trailhead, identify and count unique trails that start at a given trailhead
4. Sum up all trailhead ratings

My initial attempts to solve this problem were producing a total sum of 0 and then was able to get results which ended up being too high. After doing some research, I ended up using a Depth-First Search (DFS) based approach to identify all unique trails to a given trailhead. Coupling this with a set to track visited positions within a trail, I was then able to ensure we weren't counting the same path multiple times and getting an over count. Implementing these changes over several iterations and I was able to correctly solve this problem.

Today's two Problems focused on search patterns to identify both the score, and rating of trailheads. Each problem used a slightly different approach to successfully solve. In Problem 1, we used a BFS approach which involves starting at the root (our trailhead in this case), then searching all nodes at the present depth before moving on to search at the next level, and so on. In Problem 2, we switched to a DFS approach, which again starts at the root (trailhead) and searches as far as possible along a branch. The search then backtracks and repeats that process until coming to the end of its search. Overall, today's challenge covered the importance of understanding how to traverse a grid (our map) efficiently.

In just a few short days we'll be halfway through this challenge...which ultimately means I'm a few short days closer to some much needed vacation...from work, not from coding challenges.