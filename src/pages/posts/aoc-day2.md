---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 2
description: Solve Advent of Code Day 2 with Kevin
pubDate: 2024-12-03T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Well, I'm two days in and so far sticking to the plan. We continue in our attempt to hunt down Santa's Chief Historian, but upon arriving at our fist location to inspect we're presented with a new pressing problem to solve! The reactor that powers the North Pole is presenting engineers with some funky data. The data is in the form of multiple reports, each report listed across one line of a file the engineers have given you. Each report consists of a list of numbers called levels, which are space separated. The reactor engineers need to determine which reports are safe, the reactor can only tolerate levels that gradually are increasing, or gradually decreasing. A report is considered safe if both of the following statements are true:
- "The levels are either all increasing or all decreasing"
- "Any two adjacent levels differ by at least one and at most three"

Using the provided input file from the reactor engineers we need to determine how many reports in the overall file are safe.

## Problem 1
Breaking this problem down, we have the following:
- Input: an input file with multiple reports, with each report consisting of a list of numbers called levels
- Output: the number of reports that are considered safe
- Constraints: no constraints

Breaking the problem down, we need to analyze each report (individual line in our input file) to determine if it's safe, or not safe. Reviewing the challenge prompt, we can break down the problem into multiple smaller components:
1. We need to parse our entire input file ensuring each line is read in as a separate report
2. For each report we need to convert its string of numbers into a list of integers
3. Each individual list then needs to be checked to see if it is either increasing, or decreasing
4. Adjacent numbers in each list need to be checked to see if they differ by at least 1, and at most 3
5. Count and print the number of reports that meet both of these criteria

Using the above allowed me to write a program to assist the engineers in quickly determining how many safe reports they had:
1. I defined a function that checks each report to determine if it meets the safety criteria
2. I then read in the input file and for each line (report) converted the space separated numbers into a list of integers
3. Using the report function, we check each report to see if it meets the criteria of being safe
4. Reports that meet the safe criteria are counted with the final output being printed once every line has been analyzed

## Problem 2
It worked! Our solution provided the engineers what they initially thought they were looking for. Only something didn't look exactly right. The number of safe reports seemed low to them. Then an engineer realizes they forgot to tell us about the "Problem Dampener". This dampener allows the reactor to tolerate a single bad level in what normally would be a safe report. It sounds like we may be able to keep some/most of our solution in problem 1 and just update it to account for the "Problem Dampener" while checking each report is safe or not but with updated parameters based on what the dampener allows.
1. Keeping our safety check function from problem 1, we will add a new function. We are now checking to see if a report is safe, or can be made safe by removing one level from it.
2. We again iterate through the input file as before, with the additional function checking each report to see if it meets either the original or updated criteria

Now, those of you who read my Day 1 post may notice a bit of a difference in today's post. In the spirit of innovating and growing, I realized that in Day 1's post, I really only walked through how I broke down the problem(s) into smaller more manageable sub-problems. Will there be further changes tomorrow? Maybe? All things considered, I'm enjoying these responses, it gives me something additional to time-block during the day, and so far keeping up with that, and writing a post haven't been to onerous. Let's see how I feel though as these problems get more difficult...

Two days down though, 23 to go!