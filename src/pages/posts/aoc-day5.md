---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 5
description: Solve Advent of Code Day 5 with Kevin
pubDate: 2024-12-06T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Day 5. I'm one fifth of the way through this challenge. Five days down, 20 to go.

Problem 1 started out not as I suspected, but I was able to quickly identify what was going on, correct and solve. Thankfully I did not have to struggle for 4.5 hours today, today's struggle bus lasted for a whole 25 minutes.

In case you hadn't figured it out yet, our search for the Chief Historian continues.

## Problem 1
We've ended up in the basement, and thankfully for the most part avoided Milton and his Swingline stapler. We have again been accosted by someone in need of our help, this time an elf who can't seem to get their safety manual to correctly print. After confirming they're HP subscription was up to date and paid for, we dig in deeper. When new pages of the manual require printing, it must be done so in a specific order. Page ordering rules are presented in an x|y order, and it takes some time to understand what the rules are.

For example, 97|13 indicates that if both pages 97 and 13 are updated, page 97 must be printed before page 13. The second section lists the pages in each update. To help our new Elf friend get this to the printers as quickly as possible we need to start identifying updates that are already listed in their proper order.

Additionally, the Elves need to know the middle page number of each update being printed. Our goal is to find all the middle page numbers, and provide a sum of all of them as our solution.

Breaking down the problem, I identified the following:
- Inputs: a list that includes page ordering rules and a list of pages in the safety manual that need updating
- Outputs: we need to provide the Elves both the number of correctly ordered updates as well as the sum of middle page numbers from updates that are correctly ordered
- Constraints: page ordering rules must be explicitly followed and we only need to consider rules relevant to the pages in each update

With the above in mind, I took the following approach to solving this problem:
1. Parse the input file
2. Separate the update rules from the pages that need to be updated
3. Create a dictionary to store the rules
4. Create a list to store the page updates
5. Build a function that checks if an update is in the correct order
6. Process each correctly ordered update, find the middle page number and add it to a running sum
7. Print the count of correctly ordered updates and the sum of middle page numbers

My initial two runs at this problem were giving me the wrong answer which came down to how I was parsing the file and splitting the page rules, from the pages to be updated. Unlike yesterday's problem, I was able to update my function that does the splitting within two tries and get it working as it should be. One area here I need to be better at is keeping detailed notes when I'm working through issues like these. Partially due to this being a challenge, and me attempting to respond as quickly as possible, and part of this being me writing this article the following morning I've forgotten some of the fine detail in the changes I was making at the time. Even working under the premise of, "iterate quickly and break things", I think there's still time to slow down a bit, step back and understand and learn.

## Problem 2
Now that we've helped the Elves get printing the correctly ordered pages, we have a little time in which we can help them fix the incorrectly ordered pages. Using much of our previous problem, we need to find the incorrectly ordered pages, and put them in their proper order. Similar to Problem 1, we're also going to find the middle pages of the incorrectly ordered updates, and provide the sum of those middle pages.

Breaking down the problem, I identified the following:
- Input: same input file from Problem 1
- Output: the sum of middle page numbers from incorrectly ordered updates after putting them in the correct order
- Constraints: reordering rules, updates and our sum of middle pages only need to come from incorrectly ordered updates

My approach was similar to Problem 1, but updated to account for this particular problem:
1. Use existing code from Problem 1 to identify incorrectly ordered updates
2. Build a new function that reorders these updates, and puts the pages in the correct order
3. Find the middle page for each of these reordered updates
4. Print the sum of reordered updates

Today's challenge focused on us being able to recognize patterns and properly order pages. Key take away's from today's challenge for me were:
- Properly sorting data and structuring our data
- Separating rules and updates from our input file during the sorting process
- Using validation logic to identify updates following the defined ordering rules
- Building algorithms that re-order our data

Today's challenge built on lessons we've learned in previous day's challenges, and enhanced our knowledge in areas such as string manipulation, data structures and algorithms.
