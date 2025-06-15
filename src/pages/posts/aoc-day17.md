---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 17
description: Solve Advent of Code Day 17 with Kevin
pubDate: 2024-12-18T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Things are supposed to slow down in the lead up to the holiday season, not go crazy! I have quite literally, just wrapped up a busy day of work, followed up by finishing up my Day 16 post and then moving straight on to Day 17. Here's to hoping things start slowing down between now and Monday, my last day of work this year.

## Problem 1
Completing our challenge during the Reindeer Games, the historians push a button on their device and we're immediately falling...through the air...with no parachute. Is this going to be a problem? As it expands into a whole computer, the device says something about the situation being critical. No s**t! The computer is a 3-bit computer (it's program a list of 3-bit numbers) which also has three registers, A, B and C. These registers however aren't limited to 3-bits and can hold any integer. Additionally, the computer knows eight instructions each identified by a 3-bit number called it's opcode. After reading the opcode as input, the instruction becomes an operand. The computer's instruction pointer identifies the position in the program when the next opcode will be read. Starting with zero, and pointing at the first opcode in the program the pointer increases by 2 after each instruction is processed (unless its a jump instruction). Attempting to read an opcode beyond the end of the program, the computer will halt.

You will excuse me for skipping over the minutia of how the operands, instructions and computer works. If you're interested, you can read about it at Advent of Code. But, I do have an audience to think of, and putting them to sleep is not good for readership.

Our first task to helping the historians is determining what the program is trying to output. To do so, we need to initialize the registers to given values, run the program collecting any output produces by the instructions. Our output should be a string of integers joined by commas.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: initial register values from the input file
- Output: a string of comma-separated integers produced during program execution
- Constraints: the computer uses 3-bit instructions, registers can hold any value, the instruction pointer starts at 0 and generally increases by a value of 2 after each instruction and there are specific rules for each instruction

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read the input file to get our initial register values and the program
2. Build a function for each instruction of the program
3. Read the current instruction and operand, executing the corresponding instruction function
4. Update the instruction pointer
5. Collect output from the program
6. Join output values with a comma and print the result

Problem 1 involved a lot of busy work, mainly around each instruction requiring its own function to be written as well as a function to interpret the combination operands. It took me a few tries to get the functions working as intended, and I had to rewrite each of my instruction statements at least once...a couple more than once. After working through a bit of trial and error we were able to solve the problem and move on.

## Problem 2
With Problem 1 solved...and Problem 2 not telling us if we're still free-falling, we review the computer manual in a bit more detail and discover what we think the problem is. The program is supposed to output another copy of the program. Register A's value appears to be corrupt, so we'll need to find a new value we can initialize that register with so our program properly runs this time. 

Digging deeper in the device's manual, you discover the problem: this program is supposed to output another copy of the program! Unfortunately, the value in register A seems to have been corrupted. You'll need to find a new value to which you can initialize register A so that the program's output instructions produce an exact copy of the program itself.

Input and our constraints do not change from Problem 1 to 2, our output does, we need to produce an exact copy of the program.

Starting with my Problem 1 solution, I made some slight changes trying to efficiently solve this problem. I implemented modular arithmetic which helped optimize the search portion of our function, and then implemented a backward search algorithm. Starting from what we expected the program to output, that then worked backwards from that expected outcome. I was pleased to hit submit on my first attempt thinking I was going to get a "you're wrong" back from Advent of Code. I was pleasantly surprised to get the response telling me I had earned my second gold star for the day.

Day 17 had us simulating the operation of a computer, albeit a rather simple 3-bit implementation. In Problem 1 we needed to correctly interpret, then simulate the eight instruction sets ensuring our operand combinations worked properly. In my solution, I broke out each instruction as an individual function, and used a dictionary to efficiently manage my register values. Problem 2 was similar, yet built on Problem 1 using much of what we built in Problem 1 and modifying it to produce a program output that was a copy of itself. I used modular arithmetic and a backwards search algorithm here in an effort to efficiently solve this problem. More and more of the problems as we get into the later days of this challenge seem to be forcing us to really think about how we complete them, focusing on efficiency over brute force problem solving. Some days I just want to solve these challenges and move on, but the value here is in actually learning something. So, when I slow down and appreciate the problem I'm setting myself up for more success down the road.

Thanks again for following along!
