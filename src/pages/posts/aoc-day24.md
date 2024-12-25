---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 24
description: Solve Advent of Code Day 24 with Kevin
pubDate: 2024-12-25T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

It's Christmas Eve (even if you are reading this on Christmas), and everybody in this house is stirring. My wife and two of the kids are watching Christmas movies, child number three is probably watching something totally different at the moment while they await the arrival of their Grandmother to start cookie making. Here I sit at my computer typing up another post. Again, I'm trying to come up with witty things to say, but I left most of that at Day 3 or so...

## Problem 1
We're back in the jungle today, currently standing in a grove of fruit. The elves fruit monitoring device is malfunctioning, and we've been asked to take a look at it in an attempt to fix it. The device works by producing a number through boolean logic gates, each gate operating on two input and one output. The second portion of our input file lists all the gates and the wires connected to them. From what we can tell, it appears the system is trying to produce a number by combining bits on all wires starting with a 'z'. Since the bits on the wire are binary, we'll have to convert the number to decimal as part of this challenge.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a file that lists initial wire value and the connections and logic operations
- Output: the decimal output of wires starting with 'z'
- Constraints: there can be no loops in the circuit, gates wait for both inputs before producing an output and we are only calculating on wires that start with a 'z'

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read in our input file, splitting the initial wire values from the connections and logic operations
2. Create data structures that store each of the above values
3. Build a function that simulates the logic functions of the gates
4. Sum the value of any wires that begin with a 'z', converting to decimal and returning the total

My initial efforts in solving Problem 1 led to a consistent over count and a result that was coming back high. After some research, I discovered my initial attempt to solve was potentially calculating wire values multiple times. Updating my solution to better control iteration, and tracking of wire dependencies (waiting for all inputs before producing output) I was able to produce the correct result. This challenge was a fun little one, just the right amount of having to actually learn something new and struggle for a bit balanced against the relaxing day that is Christmas Eve.

## Problem 2
Upon closer inspection of the device, the system actually is attempting to add two binary numbers. Bits traversing 'x' wires start with one number, bits traversing the 'y' wires start with another. The output of these operations is a binary number sent across wires starting with 'z'. "For any combination of bits on wires starting with x and wires starting with y, the sum of the two numbers those bits represent should be produced as a binary number on the wires starting with z."

The system of gates and wires has four pairs which need output swapped, so eight wires total. We need to determine which four pairs of gates require swapped output and correctly performs our addition. What is the output if we sort the names of the eight wires involved joined with a comma?

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: the same file from Problem 1 that lists initial wire value and the connections and logic operations
- Output: the sorted names of the eight swapped wires, each delimited by a comma
- Constraints: only four pairs of gates have swapped output, no gate's output is swapped more than once

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read in our input file, splitting the initial wire values from the connections and logic operations as in Problem 1
2. Create data structures that store each of the above values as in Problem 1
3. Build a function that works to identify the eight wires sending the problematic bits
4. Identify the names of the wires swapped, sort and join them with a comma and return the result

In my, let's call it laziness to solve this problem, I attempted to brute force solve it...and crashed my computer, or rather brought it to a halt. I ended up implementing two fixes, probabilistic validation, which as I understand it assesses the likelihood that a given prediction is correct, and topological sorting, a linear ordering of vertices in a graph. I'm not going to understand I fully understand these concepts yet, because I don't. But after a bit of struggling on this one, and avoiding computer crashing situations I did finally solve this problem.

Today's challenge was interesting, we worked with boolean logic gates, summing up the operations of wires that started with 'z', then identified 8 crossed wires, printing out the wire names and adding a comma. Today's challenge was one of those days where I "solved it" without fully understanding the concepts we used to solve it (Problem 2). But hey, sometimes being lucky is better than being good I guess? Besides, I've marked these concepts down to come back to later on.

Since you all will be reading this on Christmas Day, for those that celebrate I wish you all a very Merry Christmas. To any of our Jewish Brethren and Sisters out there, I wish you all a very Happy first day of Hanukkah!