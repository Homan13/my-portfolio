---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 25
description: Solve Advent of Code Day 25 with Kevin
pubDate: 2024-12-26T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Happy first day of Kwanzaa and second day of Hanukkah. To those who celebrate Christmas, I hope Santa brought you everything you asked for, and for those with kids, I sincerely hope your house has quieted down today (mine hasn't). I have made it to the end of this journey. 25 days, 50 challenges, 46 of those completed and stars earned. Not too shabby if I don't say so myself.

## Problem 1
Back in the North Pole, and still having not found the Chief Historian, someone mentions we should check his office one last time. When we get to their office, we find the door locked. Someone is in there, but they're not responding to our knocking. The locks are virtual, five-pin tumbler locks that look very expensive, you decided to contact security to get their help opening the door.

Unfortunately, security doesn't remember which keys go with which locks, so they provide us the schematics of every lock installed and every key in use for the floor we're currently on. The file contains the manufacturer information, so we decide to call their customer support line and see if they can help us out. They tell us "...you can't know whether a key opens a lock without actually trying the key in the lock (due to quantum hidden variables), but you can rule out some of the key/lock combinations." If we look at the diagram provided, we should be able to figure out if a key fits in a given lock.

Locks on the diagram have a top row that is filled (#), and the bottom empty (s). Keys are exactly the opposite. Looking closer at the lock diagrams, we can see the pins themselves and determine a list of heights for each pin in a given lock. There's too many combinations for us to just try every single key, since we're looking for lock/key pairs that fit together without overlapping, perhaps if we identify that we will have far fewer keys to test?

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a schematic file of each lock and key installed on the current floor we're on
- Output: total number of unique lock and key pairs that work together with no overlap
- Constraints: the lock is a 7x5 grid containing either #, or . characters and pin height is a maximum of 5

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read in our input file converting our schematic into column heights
2. Check for compatible lock/key pairs
3. Test lock/key pairs looking for pairs that work together, counting unique pairs as we go
4. Return the total number of unique, non-overlapping key/lock pairs

My initial attempts at solving this problem ran into issues correctly identifying locks and keys and I think I may have been miscalculating column heights as well. Regardless, my initial solution was drastically under counting the number of combinations, so back to the drawing board. In the end, I ended up implementing zip and a generator expression to solve this one.

## Problem 2
We successfully get into the Chief Historian's office, and find them asleep. Apparently they have been working on a chronicle for Santa this entire time, which ended up being the list the Historian's have been using in their search. Given we have three challenges to still complete, we are four stars (Day 25 Challenge 2 I think is just awarded) short of the complete chronicle. 

That's it everyone, as I said at the top we've reached the end of this journey, well, not entirely. I do plan on coming back and completing these last three problems (Day 15 Problem 2 and Day 21), but right now I need a break. Myself and the family are heading up to New York for the weekend, so once I return I'll try to knock these problems out New Years week and actually finish this all. After that, I'll probably write a little reflection piece, a lot has happened over the last 25 days, I've got a lot on my mind, and most importantly, there's some topics that, due to the nature/speed of the challenge I didn't fully understand at the time I worked with them.

Then of course I have updates to this very site I need to make as I rushed it out in an attempt to get going on this challenge. All this is to say, despite being done with this challenge (almost), I gotta lot of stuff to do. Ideas are welcome, my brain can only come up with so many.