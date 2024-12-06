---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 4
description: Solve Advent of Code Day 4 with Kevin
pubDate: 2024-12-05T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

The thing with coding challenges, or learning any new skill is you're inevitably going to come upon a topic or problem that...wait for it...challenges you. Learning isn't a journey that travels in a straight line, its got peaks and valleys. Some things we grasp quickly, other things take time for us to figure out. Sometimes we never quite figure it out. These moments are often the ones that make or break one's participation in these types of challenges. Today I hit my first problem that took time and effort to solve. Today it was Problem 2 for me, and solving it took about 4.5 hours. Coding challenges aren't meant to be easy, they're meant to challenge you.

To be frank, between work, getting dinner ready for the family, and kids after school activities, 4.5 hours to solve a coding challenge is a lot of time, and its quite easy to just walk away given the other priorities in my life. I go back to, challenges aren't meant to be easy...and if I just walked away from the keyboard one of you would call me out. I don't want to be called out by any of you.

Our search for the Chief Historian continues, this time at Ceres Station. If you guessed that we didn't find them, give yourself a bell! One of the elf's who lives at the station asks you for some help completing her word search puzzle. She just has to find one word, XMAS. This particular word search allows the word to be horizontal, vertical, diagonal, written backwards, or even overlapping other words, and the goal is to find every XMAS in the input file.

# Problem 1
Breaking down the problem, I identified the following:
- Input: an input file in the form of a grid that represents our word search puzzle
- Output: the number of times XMAS appears within the puzzle
- Constraints: XMAS can can appear horizontally, vertically, diagonally, and backwards. Additionally, words can overlap

My solution to this problem took on the following approach:
1. read in the input file and store it as a 2D list of characters
2. build a function that checks for XMAS
3. iterate through each cell in our grid, checking in all directions for a match to XMAS
4. Count total number of times XMAS appears, and provide that result back

# Problem 2
...and now we get to today's problem child.

We actually misunderstood the instructions. We were supposed to find X-MAS, that is, two MAS's that form an X, not XMAS. Essentially, we are looking for patterns of MAS or SAM that intersect at the A, forming an X.

I started with my code that successfully solved Problem 1 and updated it to account for the updated instructions. Initially, my code was to look for MAS in a top-left to bottom-right direction, and top-right to bottom-left. Or at least that's what I THOUGHT my code was only looking for. Eventually I realized it was looking in all directions so I was ending up with too many responses. Eventually I phoned my friend, Perplexity.ai. I fed it a prompt telling it what I was trying to do and provided it the code I had up until that point. The suggestion I got back was, to make my code more efficient, using one function instead of two and looking for A's, then using sets to determine if an M and S was present to form a valid X pattern.

There was a lot of Googling, and a lot of searching through Stack Overflow today. One thing I had told myself heading into this challenge was I would limit (notice I didn't say not use) my use of GenAI in my responses. GenAI came to my rescue today, and while it did provide me some example code, I did make sure to not just rely on that response. Using a combination of Google, Stack Overflow and the Advent of Code Reddit I was able to start with what Perplexity provided, while making some slight changes based on my research. The logic to search only for the above mentioned diagonal patterns proved a challenge to me and figuring out how to properly do that took me some time. But I have to say, there was an enjoyable aspect to it in that, I learned multiple potential ways to do this and while I'm sure my solution is neither elegant, and refactoring is probably in order I did still feel some fulfillment over completing this one.



Key Challenges in Problem 8
Understanding the Pattern Requirements:
The primary challenge was to correctly identify the X-MAS patterns formed by two "MAS" or "SAM" sequences that intersect at 'A'. Ensuring that we correctly interpreted the requirements for these patterns was crucial.
Grid Traversal and Boundary Conditions:
We needed to ensure that our grid traversal logic accounted for boundary conditions effectively. Accessing indices outside the grid would lead to errors, so implementing checks to prevent index out-of-bounds errors was essential.
Diagonal Checking Logic:
The problem required checking for diagonal patterns, which involved more complex logic than simple horizontal or vertical checks. We had to ensure that our functions accurately identified characters in both diagonal directions.
Efficiency of the Solution:
As the size of the input grid was substantial, optimizing our code for performance became necessary. This included minimizing unnecessary calculations and ensuring that our checks were as efficient as possible.
Debugging and Iterative Improvement:
Throughout the process, we faced issues with incorrect counts of X-MAS patterns. This required us to debug our code iteratively, comparing different implementations and refining our logic based on feedback and results.
Collaboration and Learning from Different Approaches:
By reviewing alternative solutions and approaches, we learned valuable lessons about coding practices and problem-solving strategies. This collaborative aspect helped us arrive at a more effective solution.

Day for provided some key learning's in the following areas:
1. Understanding Patterns: how do we use a programming language to identify specific patterns within a grid of characters? Problem two expanded upon this as we had to be careful to ensure our solution only looked for those matches within a restricted pattern (diagonal).
2. Grid Traversal: we learned out to traverse a 2D grid and iterate through each cell ensuring we only check valid positions
3. Using Sets: sets allow us to quickly check if required characters are present within identified positions aiding us in confirming valid patterns

I suspect this won't be the last Problem, or even full challenge that will take time to complete. Again, this isn't meant to be easy, and I shouldn't be completing every Problem within 15 minutes. On to Day 5, and whatever surprises lay in wait!