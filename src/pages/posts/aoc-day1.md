---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 1
description: Solve Advent of Code Day 1 with Kevin
pubDate: 2024-12-02T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

On the first day of Christm...Advent of Code, my tru...online code challenge site gave to me, problem number 1!

Before we get to challenge number one, I want to dive into what Advent of Code is, and how I plan on being successful in this coding challenge: both
in completing challenges, and sticking to the full 25 days of the challenge. I believe I mentioned it in my previous post, but I stumbled upon it on Slack at work in one of our dev channels.

[Advent of Code](https://adventofcode.com/2024/about) is a coding challenge website set up in the style of a Christmas advent calendar. No different than many of the other popular coding challenge sites like LeetCode, Advent of Code offers programming challenges that developers (or non-developers like me) can attempt to solve across a range of skill levels. You don't need a computer science or IT degree, nor do you need any experience in the IT industry to participate, although some programming knowledge is certainly helpful. The key to success generally lies in your problem solving skills...and of course, Google-fu doesn't hurt either. Because this challenge is live, and people are completing challenges I will be making these posts a day after a challenge is issued. Additionally, during the challenge I will not provide my answers, but will walk you through my thought process in responding to a challenge. Sometime after this years challenges are completed, I will post my responses to my GitHub where you all can tell me what I did wrong.

So what does it take to be successful at responding to these coding challenges? First things first, read through the challenge question ensuring you understand what is being asked, what is the problem we're trying to solve for? What we're looking for here is, are there any inputs? What is the expected output you're trying to provide, and finally can you identify any constraints you may need to consider in your response. Once you feel you have a firm understanding of the problem statement, you can move on to approaching how to solve the problem. Are there any edge cases you need to consider? Can the problem be broken down into smaller more manageable parts? Maybe I'm overthinking things, but when I solve a problem I have both a command terminal open with Python running, as well as VSCode. If I can break down a response into smaller components (which I think for most problems you should be able to) I test each component within the terminal, then paste my code into VSCode once I've validated that component works. At the core of coding challenge responses is having a firm grasp of data structures and algorithms (arrays, linked lists, trees, etc.). For a relative beginner (like me), you may have to use Google, and that is OK. My suggestion here is to try and avoid copying down an example of the solution and using that in yours. It is expected one may not be able to immediately correctly solve one of these problems, that is OK. The goal is to build that knowledge so that as you gain the knowledge, you can look at a problem and quickly identify what you need to do to solve it. Obviously I can only provide this recommendation, but at the end of the day we are trying to learn something here.

Alright, let's move on to solving some problems. In this case, two problems because Advent of Code gives us two to solve per day. Successfully complete the first and you unlock the second.

## Problem 1
Each year, Santa's Chief Historian is present for the launch of the Christmas sleigh, only we have a slight problem. Nobody has seen them in months. The last anybody knew, the historian was off visiting historically significant locations to the North Pole and you have been asked to help check these places in an effort to find them. Starting with the historians office, our first goal is to create a definitive list of the locations to be searched. Looking over the Chief Historian's notes in their office, two groups of elf historians create a list of locations to check, with each location in this case being an ID. But a problem is immediately discovered, when the two teams compare their lists, they are not similar and you are asked to help them reconcile the lists.

To solve this first problem, we are asked to pair up the numbers and measure how far apart they are. Starting with the smallest number in each list (left and right) and working up from there. For each pairing of IDs, we need to figure out how far apart they are, log this and do this for the entire list to determine the total distance between lists (the sum of all individual distances). We are given an input file that is divided into two columns, and has roughly 1,000 location IDs per column. Breaking this problem down, we have the following:
- Input: an input file broken out into two columns with around 1,000 location IDs per column
- Output: we need to provide the total distance between the paired numbers from both lists
- Constraints: none mentioned

I approached this problem in five steps:
1. Initialize two empty lists, left and right
2. Parse the input file and fill the two empty lists with the values from the file
3. Because the lists were not provided in order, we need to sort both of our lists, starting from the lowest location ID and ending with the highest
4. With our lists now ordered, we need to calculate the distance between each pair in the two lists
5. Find our total distance by calculating the sum of all distances

Things we want to consider in solving this problem;
- Are our two lists of the same length? If not, how would we handle this?
- Is our list large enough that we need to consider tools that help us save memory?

For this particular problem, the answer is no to both. But these are things we want to consider, especially as the challenges get more difficult throughout the 25 days of challenges.

## Problem 2
Problem 2 picks up where problem 1 leaves off. We have discovered that the location IDs between the two lists are significantly different, and the elf historians can't agree which group made the mistake. Looking closer at both lists though, many of the location IDs appear in both lists. Our challenge now is to figure out how often each number from the left list, appears in the right list and calculate a similarity score by adding up each number in the left list, and multiplying it by the number of times it appears in the right list.

Again, breaking this problem down, we have the following:
- Input: an input file (the same as in problem 1) broken out into two columns with around 1,000 location IDs per column
- Output: we need to provide the similarity score, the sum of each number in the left list, multiplied by the number of times it appears in the right list
- Constraints: none mentioned

I approached this problem in four steps:
1. Starting with the input file, and parsing it to create a left and right list as we did in problem 1 (can we possibly reuse code here?)
2. Count the number of times each location ID occurs in our right list
3. Iterate through the left list, and calculate the similarity score (how often a number in the left list appears in the right list)
4. Sum up all contributions to get our final similarity score

Things to ask yourself while completing this problem revolve around how we can efficiently count occurrences of location IDs in our lists.

This was my approach to Day 1, my first time ever participating in one of these code challenges. Keep in mind, there are generally multiple "right answers" to these types of challenges, the difference generally coming down to experience. So my thinking and answers may be right, but are they the "most right" answers and thinking? Likely not, but that's OK. Again, I'm not overly experienced in coding and coding challenges. I'm sure someone who's done this for 10-15 years could look at my responses and provide several optimizations. If you see something amiss in my thought process, or optimizations in my code (when I eventually post it) please don't hesitate to give me some feedback. I only see things through my perspective, and learning through someone else's experience is key to my learning as well.

Thank you for following along on this journey with me, and most importantly, keeping me on track!