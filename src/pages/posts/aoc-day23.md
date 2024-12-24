---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 23
description: Solve Advent of Code Day 23 with Kevin
pubDate: 2024-12-24T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

Day 23, I've made it 23 days into this challenge. I have to admit I'm a bit surprised I've made it this far. Now the question becomes, with just two challenges left what am I going to do with myself? As I mentioned yesterday, I have three challenges to come back to once this is all wrapped up, but I'm already trying to figure out what I need to do to keep this coding thing going into and beyond January.

## Problem 1
Back at Easter Bunny HQ today, and there's a LAN party scheduled. Plugging into a nearby port, you download a map of the network (today's input) in attempt to find it and join in on the fun. As I think about it, do the kids these days know what a LAN party is? Each line on the map represents a single connection between computers, and the connections are not directional. Since LAN parties typically involve multiplayer games, we should be able to locate the party by looking for sets of three computers where all three are connected over the network. We can also use this opportunity to look for the Chief Historian, if they're participating in the party, their computer will start with a 't', so we can use that as another way to filter our search for the party. For today, our goal is to find all sets of three inter-connected computers, and find out how many contain at least one computer with a name starting in 't'.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: a list of computer connections in the form of a local area network map
- Output: the number of sets of inter-connected computers where at least one computer name starts with a 't'
- Constraints: we are only counting connections where three computers are connected to each other

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read in our input file creating a map of the network and all connections
2. Create a function that finds all possible sets of three inter-connected computers
3. Create a function that checks sets for at least one computer starting with a 't'

In our search for the LAN party, we used our input file (the network map) by reading it in and creating a dictionary of all the connections that represented the network, each computer being a key and its value a set of connected computers. Using itertools, I then worked through the dictionary, generating all sets of three computers that were all inter-connected. Finally, using list comprehension, I worked through the list of inter-connected computers identifying computers within a set of computers that started with a 't', counting the number of sets and returning the overall total.

## Problem 2
Looking at the list of potential connections, its a lot of results to search through on your own. Noticing no Easter Bunny HQ employees seem to be around, you wonder to yourself if they're all at the LAN party. If that's the case, the party should be the largest set of inter-connected computers on the network. Looking at the flyers all over the walls, you also notice there is a password to join the party; the name of every computer at the party, sorted alphabetically...very secure. So, in addition to finding the party, we need to determine the password.

Breaking down our problem statement for the challenge today, we can identify the following;
- Input: the same list of computer connections in the form of a local area network map from Problem 1
- Output: a comma delimited string representing the LAN party password
- Constraints: we are only concerned with finding the largest possible set of inter-connected computers

With these considerations in mind, we can develop the following approach in our attempt to solve this problem;
1. Read in our input file creating a map of the network and all connections, same as in Problem 1
2. Update our function to now search out the largest set of inter-connected computers
3. Create a function to sort the computers of the largest set alphabetically, delimiting them with a comma
4. Return the password

Problem 2 allowed us to expand on our solution to Problem 1, to find all the interconnected computers, I switched to using a DFS search with memoization after my initial function more closely based on Problem 1 got into an infinite loop. Starting from the beginning, I iterate through each computer on the network, and determine how many other computers it is connected to, storing the results and tracking the largest set of inter-connected computers. Once I found that set, I then generated the password by sorting the computers in that set, joining them with a comma and printing the result.

Day 23 involved our search for a LAN party, using a map of inter-connected computers to find it. To solve today's challenges we created a graph representation of our map and searched through it for various states (either three, or the most) of inter-connectedness between computers. In Problem 1, once we had found our sets we filtered through each set, looking for computers whose names began with a 't'. In Problem 2, once we found the largest set of computers, we sorted the computers alphabetically to generate our password. We didn't find the Chief Historian, but we did get to play some mean games of Counterstrike, so I'd say it all worked out great!

Just two days left, a very happy Christmas Eve to those of you reading who celebrate. Until tomorrow!