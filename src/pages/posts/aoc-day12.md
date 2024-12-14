---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 12
description: Solve Advent of Code Day 12 with Kevin
pubDate: 2024-12-13T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

I had this idea heading into this that I was going to begin each of my posts with a variation on the twelve days of Christmas, much as I did on Day 1 of this challenge. The problem with this is two-fold; one, the 12 Days of Christmas begin on Christmas day. Second, I think I quickly realized that coming up with a whity play on the twelve days seemed like it would get a bit onerous. So, I passed on that and I think things have worked out pretty well. BTW, and hopefully I'll remember to expand upon this at the end of this, but writing a blog post every day is more of a challenge than I thought it would be heading into this. But, again, more on that later.

## Problem 1
Today we appear to be back on Earth, on a farm. If you guessed that someone was going to ask us to help them, "give yourself a bell!" The farming elves are interested in setting up fences around each plot on the garden, but can't determine how much fence they need, or how much this endeavour will cost. Thinking you look smart, and could quickly help them solve their problem, they hand you a map of the entire farm. Each plot grows a single crop, indicated by a letter on the map. Multiple plots that touch each other, and are growing the same crop form a region. It is around these regions that the farmers are interested in fencing in. To accurately calculate the cost of the fence for a region, we need to know its area (the number of plots it contains) and perimeter (number of sides of garden plots in the region not touching another plot within the same region). 

The price of fencing is determined by multiplying a region's area, by its perimeter, and the total price of fencing is found by adding together the price of fencing for every region on the map.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a map of garden plots represented by a 2D grid of letters
- Output: the total price of fencing for all regions
- Constraints: regions are formed by horizontal or vertical plots that are adjacent to each other and each plot contributes to the perimeter if it borders a plot of a different crop

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read the input file and create a 2D list of the characters it contains
2. Identify and label each region of the map
3. For each region calculate its area and perimeter
4. Calculate the price of fencing for each region
5. Sum the cost of fencing for all regions and provide that as a result

In my initial attempts to solve Problem 1, I ran into a situation where I was both over and under counting the correct cost. My initial efforts went over, which then led me to over correct and I began under counting cost. Eventually I settled on a solution that involved using a flood-fill algorithm to identify the regions of matching crop types. This technique determines and alters an area of a given node in a multi-dimensional array with a matching attribute (so in our case, any two or more matching letters). Additionally I separated the region identification process from my perimeter calculation function. With these changes, I was able to correctly solve Problem 1 and move on.

## Problem 2
Apparently due to the amount of fencing material needed, the Elves qualify for a discount. Pricing under the discount works a bit differently though, instead of using the perimeter to calculate price, the number of sides a region has are used. A side is a straight section of fence, regardless of length.

Fortunately, the Elves are trying to order so much fence that they qualify for a bulk discount!

Under the bulk discount, instead of using the perimeter to calculate the price, you need to use the number of sides each region has. Each straight section of fence counts as a side, regardless of how long it is. Based on these updated calculations, what is the new total price for fencing across all regions on our map?

Our input from Problem 1 does not change. Output is still the total price of fencing, however calculated based on how many sides the region has instead of using the perimeter in Problem 1. We add one new constraint to those from Problem 1, each straight section of fence counts as a side regardless of its length.

Much of our approach from Problem 1 can remain, with Problem 2 requiring us to update our pricing calculation to use sides of fence instead of perimeter. My initial attempts at solving this problem were giving me a price that was too high, which I was able to attribute to counting the edge of a region multiple times. Moving forward, I updated my solution to count the corners for each region to give me a more accurate count. After about four iterations of working on it, I was able to successfully solve this problem and Working through the issue, I eventually updated my code to count the corners within each region instead of the edges which provided me with what I was looking for...a solution to this puzzle!

Day 12 had us solving two related, yet different problems in an attempt to calculate the price of fencing. In Problem 1, our task involved calculating the price based on the area of a region, multiplied by its perimeter. In Problem 2, after realizing the farming elves qualified for a bulk discount, the calculation switched to the area of a region, multiplied by the number of sides it has. The strategies we used and learned in today's challenge include;
- Flood Fill Algorithm: using this technique, we were able to identify each crop region efficiently. This technique determines and alters an area of a given node in a multi-dimensional array with a matching attribute.

Today's challenge highlighted the importance of using the proper algorithm for identifying a potentially complex region of figures and then working to group together like figures (in this case letters) and creating a region. With our regions identified, we could then build functions that properly calculated the area, perimeter (Problem 1) or number of sides (Problem 2) and create our pricing calculation by multiplying those figures and providing a sum total of those calculations.

Tomorrow marks our halfway point in this journey. I'm actually very excited about this, as those of you who have been following me along know, sticking to these types of things in the past for me have proven to be futile. Treating this as a one day at a time thing, using this forum plus my daily posts to LinkedIn have proven to be good motivation once I put it out there on what I planned on doing. Thank you again for all of you following along, and most importantly, thank you for continuing to hold my feet to the fire here.

Problem 26 builds on Problem 25 but introduces a new challenge: the prize coordinates for all claw machines are shifted by 
1
0
13
10 
13
  (10 trillion) on both the X and Y axes due to a unit conversion error. This adjustment makes it harder to win prizes, as the claw must now move much farther to align with the prize. Additionally, the problem states that it may take more than 100 button presses to win a prize, so we need to account for this increased range.
The goal remains the same: determine the fewest number of tokens required to win all possible prizes after adjusting the prize coordinates.
Inputs, Outputs, and Constraints
Inputs:
A list of claw machines, each with:
Button A: Movement in X and Y directions and cost of 3 tokens per press.
Button B: Movement in X and Y directions and cost of 1 token per press.
Prize location: Adjusted by 
1
0
13
10 
13
  on both X and Y axes.
Outputs:
The minimum number of tokens required to win all possible prizes.
Constraints:
The claw must align exactly with the prize's X and Y coordinates.
Button A and B presses must be non-negative integers.
If a prize cannot be won (no solution exists), it is skipped.
Challenges Faced
Input Parsing Errors: Early attempts at parsing the input failed due to unexpected formatting issues (e.g., commas, colons). We resolved this by using string slicing and careful splitting to extract values reliably.
Large Prize Coordinates: The shift by 
1
0
13
10 
13
  introduced extremely large numbers, making brute-force approaches infeasible.
Linear Equation Solving: Determining the number of button presses required for alignment involved solving a system of linear equations, which was initially approached inefficiently.
Unwinnable Prizes: Some machines had configurations where no combination of button presses could align the claw with the prize.
Solution Logic
To solve this problem efficiently:
Parse Input:
Extract button movements (X, Y) for A and B.
Extract prize coordinates and add 
1
0
13
10 
13
  to both X and Y values.
Solve Linear Equations:
Represent the system of equations as:
[
A
x
B
x
A
y
B
y
]
[
n
A
n
B
]
=
[
P
x
P
y
]
[ 
A 
x
​
 
A 
y
​
 
​
  
B 
x
​
 
B 
y
​
 
​
 ][ 
n 
A
​
 
n 
B
​
 
​
 ]=[ 
P 
x
​
 
P 
y
​
 
​
 ]
Use numpy's linalg.solve function to solve for 
n
A
n 
A
​
  (button A presses) and 
n
B
n 
B
​
  (button B presses).
Validate Solutions:
Ensure 
n
A
n 
A
​
  and 
n
B
n 
B
​
  are non-negative integers.
If valid, calculate the token cost as 
n
A
×
3
+
n
B
×
1
n 
A
​
 ×3+n 
B
​
 ×1.
Sum Token Costs:
Add up the token costs for all winnable prizes.

Explanation of Key Updates
Prize Adjustment: Added 
1
0
13
10 
13
  to both X and Y coordinates during input parsing.
Validation of Solutions: Ensured solutions from np.linalg.solve were non-negative integers before calculating token costs.
Handling Unwinnable Prizes: Skipped machines where no valid solution existed.
Final Output
This code calculates the fewest tokens required to win all possible prizes after adjusting for the unit conversion error. It efficiently handles large numbers and ensures only valid solutions are considered.