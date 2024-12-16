---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 15
description: Solve Advent of Code Day 15 with Kevin
pubDate: 2024-12-16T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Today was struggle bus city, the first day of the challenge I didn't complete both problems. It was Problem 2 for me today, and judging by the posts on the Advent of Code sub-Reddit, I wasn't the only one. I'll be moving on to Day 16 for now, but I'll be revisiting Problem 2 until I solve it. Because I don't like unfinished business.

## Problem 1
Looks like we're back under water and in our personal submarines from the other day. You see a school of lanternfish who are concerned over their loss of control of a robot that operates their most critical food warehouse. The robot is currently pushing around boxes within the warehouse with no regard to the logistics rules and inventory management strategy the lanternfish worked so hard to come up with. None of the fish are brave enough to swim up to the robot and shut it off, maybe though we could help them anticipate the robot's movement to help them find a spot where they can.

The fish provide you with a map of the warehouse that includes the movements the robot will attempt to make. Sometimes the movements fail as boxes are moved around, which makes prediction difficult. The warehouse is outfitted with the Lanternfish's custom "Goods Positioning System" (GPS for short) that tracks the locations of all boxes in the warehouse. The GPS coordinate of a box is equal to 100 times its distance from the top edge of the map plus its distance from the left edge of the map. We need to predict the motion of the robot and the boxes throughout the warehouse, providing the lanternfish with the sum of all GPS coordinates after the robot has stopped moving.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a warehouse map in the form of a 2D grid and a sequence of movements the robot will make
- Output: the sum of GPS for all boxes in the warehouse after the robot has completed all movement
- Constraints: the robot cannot move through walls (edge wrap) and the GPS coordinates of a box equals 100 * its row number + its column number

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file and create a representation of our map and the robot's movement sequence
2. Move the robot and boxes around the grid
3. Calculate the coordinates of all boxes on the map, and return the total sum of coordinates.

In what might have been a harbinger to come, although it didn't seem that way in the moment it took me several attempts to solve this problem. In all cases, my solutions were over counting and came down to several core issues. My initial attempts at calculating GPS position was doing so inaccurately and I realized my initial solution was allowing for edge wrapping. After updating my code (and re-reading the constraints of the challenge) to account for these minor issues we were able to successfully help out our lanternfish friends.

## Problem 2
The lanternfish were able to successfully deactivate the malfunctioning robot, only to learn another warehouse's robot was also on the fritz. The biggest change from Problem 1 is, the warehouse is twice as wide. We are given a mapping of how the map changes from the first warehouse to the second;
- If the tile is #, the new map contains ## instead
- If the tile is O, the new map contains [] instead
- If the tile is ., the new map contains .. instead
- If the tile is @, the new map contains @. instead

Like the first, the second warehouse uses the GPS system, and distances are measured from the edge of the map, to the closest edge of the box. We need to again predict the movement of the robot and boxes in this larger warehouse, and again provide a sum of the final GPS coordinates of all boxes in the warehouse.

Our input and output from Problem 1 do not change. For constraints, the warehouse is now twice as wide as the warehouse in Problem 1, and boxes occupy two spaces on the map.

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file and create a representation of our map and the robot's movement sequence based on the updated warehouse specifications
2. Update our function that moves boxes around the grid to account for the boxes in this warehouse being wider
3. Adjust our GPS calculation, an calculate the coordinates of all boxes on the map, returning the total sum of coordinates

...and here is where the wheels fell off. I was unable to solve the problem, attempting a wide range of solutions to eventually solve. Frustration finally settling in, I gave up on this problem for the day, and will be moving on to Day 16 tomorrow. That said, I will eventually come back to this one and hopefully solve it. I don't like keeping unfinished business.