---
layout: '@/templates/BasePost.astro'
title: Advent of Code - The Straglers
description: Solving my 2024 Advent of Code "Problem Children"
pubDate: 2025-01-20T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Well, its been almost a month since I last shared an update. For those of you who remember, when I initially "completed" this past year's Advent of Code challenge, I had three problems I had yet to complete, Day 15 Problem 2, and both problems in Day 21. Now that things have settled on the new year, I've been able to find some time and come back to take on these problems, and finally solve them.

# Day 15
## Problem 2
In Day 15, we were helping out some lanternfish with their warehouse robots that were malfunctioning. After successfully helping them out with their first warehouse, we are informed that a second, and larger warehouse also has a robot not acting properly. The biggest change from Problem 1 to Problem 2 is, the warehouse in Problem 2 is double the size of the warehouse in Problem 1.

I started out on this attempt to solve the problem by comparing my solution with several solutions on the Advent of Code sub-Reddit. Running the successful solutions I found the current state of my solution was relatively close to the solutions that my test solutions provided, so I at least knew I was in the right neighborhood. Long story short, I eventually broke down and used Perplexity to identify where I was going wrong and it came down to two areas, the first being related to box tracking. One of the things I missed initially was that the boxes were now twice as wide in this problem and I was treating them as they were in problem 1. Effectively I was only tracking half of my boxes and thankfully, this was a relatively minor change to make. The other change I needed to make was closely related, in that I needed to correctly check that I had space to move a box, again accounting for the fact that boxes are now twice as wide in this warehouse as they were in the warehouse in Problem 1. Again, what I think were minor changes to implement got us where we needed to be.

Ultimately, my issue in this problem came down to reading comprehension. Had I CAREFULLY read the problem statement, I hope I would have caught the part about the size of the boxes increasing along with the warehouse. But alas, I, like everybody else am human and I missed it. Chalk it up to reading too quickly through the problem statement or whatever you will (it had been at least a month since I initially had attempted to solve this), sometimes you just need to take some time away (maybe not a month) to see things in a new light.

Which takes us to our next problem child...

# Day 21
## Problem 1
We've been transported onto Santa's starship (he has a starship?) and immediately the historians begin to freak out, one of them is missing. Scanning the ship, we find them in another part of the ship, in an area that is currently locked down. The ship's computer is unable to unlock the door, it can only be manually unlocked by typing the codes on the keypad at the door. You however, discover a pretty significant problem, the area outside the door is depressurized, so we're going to need to send a robot in. Additionally, while the robot is fully able to navigate the starship, it cannot be programmed or told to push a specific button, this must be done via a remotely controlled arm.

When the robot arrives at the door, its arm will be pointed at the A button of the keypad, located in the bottom right corner. From there, it will be guided from the directional keypad moving it up, down, left, or right to input the door code. "But wait, there's more". The area containing the keypad is currently experiencing elevated radiation levels, so we're going to have to send a robot in to do this work as well. As if that wasn't bad enough, the area containing this keypad is currently at a balmy -40 degrees, so we're going to have to send a robot into this section as well. It's like we're playing a game of robot phone tag! At least the keypad that controls this robot is accessible, we just need to deal with all the historians in the room with us. From this keypad, we need to enter all the combinations of presses it will take to open the door and free our trapped historian, which is five codes in all. What is the fewest number of button presses we need to perform to open the door, and the total sum of complexities of the codes on our list?

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: five codes in the form of an input file
- Output: the total sum of complexities of the five codes
- Constraints: we cannot move the robot's arm to a gap where no button exists, and all robots begin with their arm aimed at the 'A' button

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read our input file
2. For each code, find the shortest sequence of button presses it would take on our keypad to complete
3. Calculate and sum up the complexity for each code sequence

I started with the coded I had previously started with in December, but I honestly don't remember what issues I ran into other than my code not producing the correct answer. The basic structure of my solution started with a BFS approach but I wasn't handling the complex nature of the multi-layer button presses correctly. As I got back into solving this, I initially made some changes to my functions that controlled pressing the number pad, and direction pad. These changes resulted in an immediate "maximum recursion depth exceeded" error. The other area I focused on was in calculating the button presses, and their sequences themselves which, based on the end results I believe was the other area where my solution was lacking. In the end, I used several strategies to solve this problem; recursive functions that handled "pressing" the key pad and direction pad for the robots arm. I used a function that generated multiple options for each door code, then analyzed the results finding the shortest mount of button presses. To avoid the recursion error I utilized depth control. Looking back, I believe the challenging part of this problem, was the multi-level requirements of multiple robots, pressing multiple keypads, with each keypad having a different starting point. As with anything, a lot of research, even more experimentation and some good old fashioned patience eventually got me there.

## Problem 2
Well, we've freed the historian, only for the other historians to realize a second historian has been missing the entire time. As with the first, this historian is trapped in a locked compartment of the ship. This time, we have 25 directional keypads that robots will be using to unlock the door the historian is behind. Once again, we are attempting to unlock the door in the fewest number of key presses as possible, and provide the sum of complexities resulting from the five codes in the input file.

Thankfully, much of what we developed in Problem 1, could be used here. The big change was increasing how deep our path-finding algorithm searched, from 3 to 25, Problem 1 only having 3 keypads for us to traverse. All things considered, maybe I should have spent a little more time on actual Day 21 working on this, but I likely had a kids activity, or my own activity that ate up my time, I honestly don't remember.

...and just like that, I've completed (at long last), my 2024 Advent of Code challenge. So where do I go from here? Well, I have a couple things in mind, or that I need to work on that will likely end up getting posts of their own;
- You might remember on two of the challenges I ended up implementing solutions using strategies I didn't quite fully understand. I am planning a forthcoming post that covers these topics. I'll plan on digging into these topics, trying to better understand how they work so in the future I'm not just blindly implementing I hardly understand.
- In my first post, I mentioned I had hastily put this site together in an effort to have it up and running so I could begin this challenge. Well, now that I have the time I plan on coming back and making updates to the site to make it more personal to me, and less about the template I started with. While I may not post directly about those changes, I'm contemplating a post about just why I made the switch from Gatsby to Astro, and will likely lay out a little roadmap of posts for at least the first half of 2025.
- I also plan to participate in Advent of Code again next year. What that will look like, I don't know yet but with this years being a bit of a last minute, almost off the cuff decision I do plan on giving more thought to my participation next year. Not so much of a leaderboard type focus, but just what my writing about it will look like.
- I will also be getting my code up on GitHub in the next week or two, so please keep an eye out for that. Would love any feedback, as I'm certain none of my solutions are either the most elegant, nor efficient solution.

One thing is for certain, I plan on writing more in 2025. I had started, then let it lapse previously and I do enjoy doing this. To my readers, please keep me honest and bug the crap out of me if I stop. Thank you all again for following along!