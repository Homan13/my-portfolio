---
layout: '@/templates/BasePost.astro'
title: Advent of Code - Day 9
description: Solve Advent of Code Day 9 with Kevin
pubDate: 2024-12-10T05:00:00Z
imgSrc: '/assets/images/code-challenge.jpg'
imgAlt: 'Photo by Lewis Kangethe Ngugi on Unsplash'
---

...and the Advent of Code challenge just keeps chugging along, just like Advent itself. Funny that, huh? Day 9, still recovering from yesterday's Problem 2 and walking into this wondering what things are going to look like. Today's challenge brought up an extra special surprise for old school Windows users (more on that to come).

## Problem 1
Apparently we're now in an underwater location, If we didn't know we were still on Earth, we may think we got transported to Mon Cala, in a galaxy far far away...thankfully we're all provided with our own personal mini-submarines to get around. The other historians think they've managed to figure out how these things work and jet off looking for their chief. Meanwhile, you notice an amphipod struggling with their computer. The driver is attempting to create more space on the computer by making more contiguous free space available but the program isn't working properly. Did they try Window's defrag?

Files are represented by a series of digits that alternate between the length of a file, and the length of free space. Additionally, every file has an ID number based on the order of the files before they are rearranged. The UID of files begins at 0. Our goal is to move file blocks one at a time from the end of the disk, to the leftmost free space block until no gaps remain between blocks. The end of the process is updating the checksum of the filesystem which involves multiplying each blocks' position with the ID number it contains. Our goal is to provide the total of checksums as our result.

Breaking down our problem statement, we can identify the following;
- Input: a string of digits representative of a disk map
- Output: a total checksum
- Constraints: files need to be processed one at a time, starting from the end of the disk map

With this in mind, we can develop the following approach to break down and solve this problem;
1. Read the file and parse the string into a list of file and free space sizes
2. Create a list that represents the disk, with corresponding file IDs and free space
3. Move storage blocks from the end of the disk map to the leftmost side of the map until no gaps remain
4. Calculate the checksum based on final positions and IDs and print the total

## Problem 2
Success! We've completed our process and the disk has a lot more contiguous free space, however the computer is now running much slower. Our new amphipod friend surmises we could modify our compacting process and move whole files instead of individual storage blocks. We must update our solution to move whole files to the leftmost span of free space that can fit the file. Each file should only be moved once, in decreasing order of file ID starting with the highest and again, providing a resulting checksum of the filesystem.

Input and output does not change from Problem 1. Our constraints do change in that we are now moving a whole file instead of individual blocks, and if a file cannot fit within the available space, we do not move it.

With the above in mind, we can approach this problem in the following way;
1. Read the file and parse the string into a list of file and free space sizes
2. Create a list that represents the disk, with corresponding file IDs and free space
3. Move files from the end of the disk map to the leftmost side of the map until no gaps remain
4. Calculate the checksum based on final positions and IDs and print the total

Today's challenge thankfully proved to involve less time for me than yesterday's, I have to admit I'm dreading the inevitable back-to-back day's of struggle bus during this challenge. Today's Problem's presented us with the following lessons and strategies;
- Effective usage of data structures by using a list to represent storage
- Efficiently calculating our checksum by the use of a single pass through the compacted disk
- Moving files conditionally and only if the amount of free space was suitable to store that file. If there wasn't enough space, the file is left in place.

Tomorrow brings us day 10, a new challenge, and likely new and unanticipated challenges.