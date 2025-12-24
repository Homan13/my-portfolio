---
layout: '@/templates/BasePost.astro'
title: Upgrading my Homelab Setup
description: Upgrading my old (and busted) FreeNAS server to a more feature rich Homelab setup
pubDate: 2025-12-23T00:00:00Z
imgSrc: '/assets/images/homelab.jpg'
imgAlt: 'Photo by Radoslav Bali on Unsplash'
---

If you work in the IT industry, and depending on your situation, a home lab is a must have. Even if you aren't looking to use it professionally, there's a lot of services a home user can benefit from that aren't professionally focused; things like media services, file storage and even home automation can be run from even fairly simple setups. In my case, I'm looking to replace a FreeNAS Network Attached Storage (NAS) device that's been out of commission for about three years with something that can run both services for the house I'd like to run, plus experiment with enterprise level services.

My goal in building my current (broken) NAS was something that could store our pictures, music and movies and also stream throughout the house. I built this server back in the 2017/18 timeframe, and it served me well until about 2022/3 when the motherboard gave up the ghost. Over the last six months or so I've been giving some thought to upgrading, and adding some additional horsepower to run a full home lab setup backed by [Proxmox](https://www.proxmox.com/en/). Initially, I was just going to purchase a newer model motherboard and CPU combination to do a somewhat apples to apples upgrade. Several months ago though, while at my previous employer, I got involved in some conversations within our Viva Engage (think Slack, only worse) that caused me to change my plans. In today's post, the first in a series on my home lab journey, I'm going to detail my plans for a full home lab upgrade.

My previous build largely followed this thread in [r/Plex](https://www.reddit.com/r/PleX/comments/6rf9v0/plex_server_build_recommendation_470_16core_32/);
- CPU: 2x Xeon E5-2650, 2 GHz, 8 core and 16 threads
- Motherboard: Supermicro X9DRi-LN4F+
- RAM: 16 GB DDR3
- OS Storage: 2x 240 GB Kingston SSD in a RAID 1 configuration
- FreeNAS Storage Pool: 4x 4TB Western Digital Red in a RAID 5 configuration

Aside from the motherboard dying, I have had no complaints with this setup. Given I was only running FreeNAS and Plex Media server, I never stressed the components and am sure it could have handled additional services, hence my initial plan to seek out newer models of my motherboard/CPU combination. The biggest issue with this current setup was a lack of redundancy. If the server goes down, as it did, I lose access to my storage. As I've been researching home lab setups, building this in has become a critical factor. In addition, my home network could use a little TLC as well. My home service could use an upgrade at this point, and I'd like to add a more feature friendly switch into the mix. So, what started out as Kevin planning on building a new home NAS setup has turned into a full home lab build and network replacement. Why not? It's only money right?

The goal of this initial article is to outline what I'll be building at a high level, diving deep into the details in subsequent articles.

Starting with compute, the most important consideration for me as previously mentioned is redundancy, so my plan is to run a cluster of NUC style compute devices. Ideally I'd like a cluster of three, but will likely start off with two, growing to a third when I'm able. I haven't settled on a specific manufacturer yet, but there are plenty out there from Asus, Intel, Beelink and more. The great thing about this form-factor of compute is there are rack-mount solutions available allowing for simple, and clean installation. While not a comprehensive list, some of the things I'm looking to run in this setup includes:
- Proxmox 
- pfSense
- Pi-hole
- Plex or Jellyfin
- Experimenting with containers/Kubernets

Additionally, this will likely serve work related duties as well, testing installation strategies, assisting (as much as possible) in troubleshooting activities and helping validate Proof of Concept (PoC) activities. While I don't have any current plans beyond these services and activities, this setup should give me the ability to scale well beyond these initial plans.

Storage will be the first of the follow-on articles I write, mainly because I made a hasty decision and already purchased a new device. I'm going with the [Beelink ME Mini](https://www.bee-link.com/products/beelink-me-mini-n150?_pos=1&_fid=9ce4f87bd&_ss=c). This little thing has the ability to scale up to 24 TB of NVME-based storage, and is pretty power efficient with its Intel N150 processor. My plan is to configure it in a RAIDZ configuration, with TrueNAS as the operating system, and Nextcloud running on top of that providing remote access to my files. The bulk of my files will be media-based (photos, movies, music), but I also plan on migrating over my track data, track videos and personal files currently stored in Google Drive.

By far the largest upgrade I have in mind is networking. We've been in our current house since 2013, and still using the same Verizon service (75 Mbps up and down) that we signed up for when we moved. Between my wife and I working from home, and everything the kids stream, despite keeping up admirably there are still times we hit bottle necks. Most concerning though, is we're still using the old ActionTek modem Verizon installed when they set up our service. Not only will this router limit the service choices we can sign up for, but this modem isn't supported (or leased) by Verizon anymore. So, much like my old NAS was, this modem is a ticking time bomb, just waiting for the day it can deny us access to the internet by failing on us. I would say signing up for a new service will be the first thing I do, but seeing as I purchased a new switch for the house, this will be the second thing I do. Since we'll be upgrading to faster service to the house, I'll also shop around, see if Verizon is still the best offering available to us, or if we'll be going with another provider.

Prior to purchasing it, my house has never had any sort of dedicated switch, so adding that to my network has been on my list of things to do for awhile now. I ended up going with the Standard 24 port switch from Ubiquity, which should give me everything I'm looking for. I hemmed and hawed over Power over Ethernet (PoE), deciding to skip it. Time will tell if I end up regretting my choice, but currently I have no plans for video systems or home automation that would benefit from PoE connections. We'll see if that changes in the next couple years.

There's a couple question marks on my networking setup I still need to answer:
- WiFi: we currently run an Eero mesh setup in the house, which I have no complaints with. I certainly like the idea of switching to Ubiquity for Wifi, as this keeps everything on a unified system. I could also stick with Erro and deal with the minor annoyance of having to switch UIs to make adjustments.
- Modem: given that I'm looking at upgrading our service to the house, I figure its good time to look at a modem. I could rent one from the provider, but I like the idea of owning my own, even with the extra administrative overhead it brings. Again, migrating to Ubiquity with their Dream Machine is a tempting solution for me as it brings all networking under one common UI.

Thankfully there's a lot of good knowledge out there in the form of articles, YouTube videos and the like so hopefully by the time I begin writing the networking article I'll have all this solved.

I'm excited to start building after "thinking about this" for far too long. As I write this, I'm waiting on the final NVME drive to get here for the Beelink, so expect the next article in this series to go into detail on that. The device itself, setting up the OS, configuring the storage pool and possibly more. From what I've read so far, the installation (at least of TrueNAS itself) is a bit tricky, so I'd like this to serve as a nice reference people can use in their efforts to do something similar.

Thanks for reading, stay tuned for the next in this series as I dive into my Beelink storage device!