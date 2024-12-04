---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 3
description: Solve Advent of Code Day 3 with Kevin
pubDate: 2024-12-04T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

There's a myth that it takes three weeks to establish a new habit. If that were an accurate figure, I'd be 14% of the way to establishing my new habit, alas, the myth is just that, and I'm still further away than I am closer to establishing a new habit.

Anyways, on to Day 3's problems. We've moved on to the toboggan (does anyone still ride toboggans?) shop in our search for the Chief Historian. Guess what, they're not here. It's like we're magically going to discover them JUST in time for Santa's sleigh departure...Surprise surprise though, the toboggan shop has a problem too. Must be this increased solar flare activity we've been having lately that's effecting all the electronics in the North Pole. But I digress.

The shopkeeper is attempting to run a program that takes some input, and attempts to multiply two numbers, each between one and three digits. But it appears the memory of the program is corrupted, invalid characters have been inserted into the program causing it to crash. Our job is to help the shopkeeper filter out the invalid characters, and multiply all the proper sequences providing them a sum total of those multiplications.

## Problem 1
Breaking down the problem statement, we can identify the following:
- Input: a string of corrupt memory containing both valid and invalid multiplication instructions mixed with invalid characters
- Output: the sum of all valid multiplication results
- Constraints: valid multiplication instructions are in the format of mul(x,y) where x and y can be one to three digit integers. Additionally, invalid instructions or characters should be ignored.

Our approach to this problem needs to take in mind the following considerations:
1. Read the memory file and find all valid multiplication instructions
2. For each valid instruction set, the numbers need to be extracted and multiplied
3. Results need to be added to a running total, with a final total provided once the entire memory input is read

Using the above approach, I wrote a Python program that performed the following steps to solve the problem:
1. Defined a regular expression (regex) pattern to match valid multiplication instructions
2. I then found all matches within the corrupt memory input file using the defined regex
3. Next I iterated through all found matches extracting numbers, converting them to integers and multiplying them
4. Each multiplied matched set is added to the running total
5. When the end of the matches is reached, the final total is printed

## Problem 2
Scanning through the memory file, we notice it contains conditional statements. do() enables future multiplication instructions, while don't() disables them. Because there are instructions that have don't() placed in front of them, those instructions are being skipped and not calculated. If we can handle this conditional statements appropriately, we should be able to provide the storekeeper a more accurate sum of calculations. The break down of this problem is largely similar to Problem 1, as is our approach. For the approach to Problem 2 however, we're going to want to initialize a variable that tracks whether or not multiplication instructions are enabled. I then updated my program to perform the following steps to solve this problem:
1. Update our regex to handle both the pattern match from Problem 1, as well as the conditional statements
2. Initialize a variable that tracks wether or not multiplication instructions are enabled
3. Again we iterate through the input file matching sets and additionally checking for the following: If a match is set to do(), set our tracking variable to True. If a match is set to don't(), set our tracking variable to False.
4. We then check our matched sets and look for matches that are configured to be multiplied AND have a conditional flag of Do() (True), perform the multiplication and add it to the running total
5. When the end of the matches is reached, the final total is printed

New iteration to my posts incoming!

I realized that, as a part of learning how to code, we're breaking problems down into smaller sub-problems, and using various concepts to solve them. These problems test us daily on the importance of creating structure within our solutions, so I figured I'd start closing out my posts with the concepts we use in each of our solutions.

1. Regular Expressions (regex): using a regex(s) allowed us to parse through an input file containing complex string patterns quickly and efficiently. This allowed us to quickly identify valid instruction sets in a timely manner.
2. String Parsing: today's problem taught us ways (or in this case new ways) to extract meaningful information from a string that contained both valid and invalid data
3. Conditional Logic: in Problem 2, we learned how to handle conditional statements (do() and don't()) within the input string
4. Function Design: the logic that processed the input file was written in the form of a function. Writing functions in our code helps promote code organization and reusability.
5. File Input/Output (I/O): as with previous day's responses, we are reading input from a file that our program analyzes to provide us our solution
6. Pattern Matching: from our input file, our program identified specific patterns from a large and messy dataset
7. State Management: today's challenge required us to track whether multiplications were enabled or disabled (via our conditionals) and taught us about the importance of maintaining state while our program(s) execute. Thinking about this, I could have probably written this under the Conditional Logging section as the two were linked in this challenge. These are separate concepts though.

If you've followed me along since the start of this new journey for me, thank you for reading along. I'm especially grateful to those who have reached out with advice, recommendations, or just even the simple "hey, I'm following along". Please don't stop, and please keep reading. Thank you!