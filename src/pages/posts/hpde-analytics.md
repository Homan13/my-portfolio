---
layout: '@/templates/BasePost.astro'
title: HPDE Analytics - Turning MotorsportsReg Data into Actionable Insights
description: How one open-source tool is helping volunteer-run motorsports programs unlock data-driven decision making
pubDate: 2026-01-29T00:00:00Z
imgSrc: '/assets/images/data-insights.jpg'
imgAlt: 'Photo by Luke Chesser on Unsplash'
---

Running a successful time trials (TT) program isn't easy. First, you need enough drivers to fill out your grid, and a great team able to keep them coming back. Thankfully, the Washington DC Region (WDCR) of the Sports Car Club of America (SCCA) has both. But in 2026 there's a third ingredient that's become critical: **data**. We're not lacking in data, we're swimming in it. The problem? Turning that data into meaningful insights has been...painful.

This past season I set about a goal of building an application that would help us do just that, aided by a recent job change, which provided me access to Claude Code (not that I couldn't have accessed it before) these efforts were accelerated. I'm pleased to announce the launch of the [HPDE Analytics CLI](https://pypi.org/project/hpde-analytics-cli/), available now to any TT or High Performance Drivers Education (HPDE) program leads looking to extract meaningful trends out of their event registration data.

HPDE and TT events are largely grassroots affairs. Despite being a part of a larger organization like SCCA, WDCR is volunteer run, we all have outside jobs, and do this because we love being on track. WDCR, like other organizations uses an event registration application called [MotorsportReg](https://www.motorsportreg.com/) (MSR). The site contains vast amounts of data on our events, drivers, and the cars they drive. While MSR contains a built in report generation feature, building reports with it is not an easy affair. In my experience, generating a report that provided me meaningful data would sometimes take seven to eight attempts of working with the built-in generator, and sometimes I couldn't get all the information I wanted. It's almost like the report builder design was a secret plot by Microsoft to sell more Excel licenses...

In 2025, I built a pretty simple Python script that helps us automate generation of our weekend [participant reports](https://kevinhoman.info/posts/python-pdf-excel/) as a way to start learning Python. I knew previous to that I wanted to make something to do what HPDE Analytics can do, and building the participant report was very helpful in that regard. For any of you who have read my previous articles, you'll know that for years now I've been attempting to move beyond merely scripting, and into actual programming languages. Learning the Cloud Development Kit (CDK) was a good start, because it combined my infrastructure background, with a programming language that automated the deployment of my AWS infrastructure. Combining my love of the track, the challenges I face as a WDCR program lead, and how a programming language can make my life easier in that regard has been extremely helpful as well. I'm at a phase in my career where I'm not looking to learn to code to break into a career, I'm looking to add another 10 mm socket into my toolbox (mainly because they get easily lost) to make myself more effective. Sometimes it just takes awhile to find the easy button in terms of getting these kinds of projects done.

What started out as, honestly, a selfish endeavour to make data exports and reporting easier for me though, is something that can help the community at large. I'm not the only one who uses MSR, I can't imagine I'm the only one who finds their report generation UI difficult to use. Grassroots motorsports organizations are all largely facing the same challenges, and if I can provide them with something to help them succeed, then we all succeed. HPDE Analytics, while VERY much TT focused at the moment, is my way of giving back to the motorsports community as a whole, by making analytics easily accessible for other organizers and program leads enabling them to make data-driven decisions allowing their programs to flourish.

HPDE Analytics is a Python-based command-line tool that acts as the interface between your raw registration data stored in MSR, and the actionable insights which can be derived from that data. Its architecture is straightforward:
- OAuth 1.0a Authentication: allows you to securely connect to the MotorsportReg API using industry-standard authentication (albeit a bit outdated), with your access tokens stored locally and securely allowing for seamless repeat usage.
- Modular Data Pipeline: fetches your event, assignment and segment data through dedicated API client modules, making future modifications possible.
- Multiple Export Formats: outputs your data in both .csv and .json formats, providing the freedom to import into Excel or feed into visualization tools like Tableau or even process with your own scripts.

Simplicity is at its core, there are no configuration files or dependencies you need to manage. Install via pip, authenticate and you're ready to start pulling your event data. The commands are meant to be intuitive, and mirror natural data workflows.

What HPDE Analytics isn't is a full-blown analytics platform like PowerBI or QuickSight. It provides you with clean, well-structured data that you can analyze however you see fit, with the application(s) you're comfortable with. The commands are meaningful, and hopefully easy to remember:

To install:
```bash
pip install hpde-analytics-cli
```

To configure credentials:
 ```bash
 hpde-analytics-cli --configure
 ```

To authenticate:
```bash
hpde-analytics-cli --authenticate
```

Finally, to create an event export:
```bash
hpde-analytics-cli --event-id 12345 --export
```

The result is actionable data that you can begin working with in just minutes.

In its current form, HPDE Analytics is focused on TT based exports, so if you're a program lead of an HPDE or Autocross organization, not all the report fields may be relevant for you. With that said, in future iterations I do plan on making the report generation more flexible, so this can be used by all programs, not just TT. It is launched with a focused set of features meant to solve some of the most common pain points for HPDE and TT organizers.
- MotorsportReg Integration: pull event data, registrations, and assignments directly from the MotorsportReg API.
- Multi-Event Support: download data for specific events or pull historical data across your organization's entire event catalog.
- Field Discovery: automatically identifies and maps available data fields from the API, so you know exactly what data you're working with.
- Attendance Tracking: export historical registration data to analyze trends over time.
- Clean, Normalized Data: handles the messy parts of API responses so you get consistent, well-structured output.

Linked above is the HPDE Analytics project on PyPi, for full documentation, source code and contributions guidelines (this last part is coming soon) please see the project [GitHub repo](https://github.com/Homan13/hpde-analytics-cli).

As a program, one of our ongoing challenges is understanding participation patterns. Who's driving? Who's coming back? Which classes are the most popular? All this helps us in directing our focus on growth efforts, improvements and retaining and growing our drivers

With HPDE Analytics, I can pull registration data and answer these questions in minutes:

Once I've created an export and report of the date, I can ingest that data into just about any application to make sense of it, currently in this case that tool is Microsoft Excel pivot tables. For 2025, WDCR held nine TT events, with 218 total competitors. When you get your hands on the data however, you quickly see we have 74 unique competitors, the rest just being a bunch of Miata addicts showing up repeatedly.

| Category | Unique Drivers | % of Field |
|:---------|---------------:|-----------:|
| Max	   | 34             | 46%        |
| Sport	   | 17             | 23%        |
| Unlimited | 12             | 16%        |
| Tuner    | 11             | 15%        |

| Track | Unique Drivers |
|:------|---------------:|
| Summit Point Main | 57 |
| Dominion Raceway |	39 |
| Summit Point Jefferson | 30 |
| Summit Point Shenandoah | 26 |

Further analysis quickly yields other insights:
- Of our 74 unique competitors, 40 (54%) attended multiple events. 30 drivers attended three or more events, and one dedicated driver has attended all nine! Only 34 drivers (46%) were single-event participants.
- 25 (34%) of our drivers are also instructors in our HPDE program.
- Almost half our field runs in the Max category, with most of those in Max 5 which is the most competitive class on the grid.
- Mazda and Toyota dominate our paddock, specifically Miatas (they are the answer) and GR86s. If you threw a rock in our paddock, you'd hit one or the other. Please don't throw rocks in our paddock.
- 13 (18%) of our drivers participated in our All You Can Eat (AYCE) offering, allowing them to run in both our TT and Advanced Run Group (ARG) sessions for the maximum amount of time on track.

Looking at the data also shows us areas we're lacking in data, such as a competitor's first event with us. We only track a driver's first HPDE event.

Getting it out of the way because I only briefly touched on this above, tools like Claude Code (what I used on this application) and Cursor are extremely impressive, and not going anywhere. I also don't think they're going to replace developers en masse as many Medium and other blog posts will tell you. Rather, these tools, when used correctly make our jobs more efficient. With everything I have going on in my life, I can't even predict how long it would have taken me to create HPDE Analytics, with Claude I did it in just a bit over a weekend and have an Minimally Viable Product (MVP) I can release.

This doesn't mean we can just let these tools create our apps without supervision. Case in point, HPDE Analytics currently supports Python versions 3.8 through 3.12. Python 3.8 went End of Life (EOL) in 2024, so it is no longer receiving security updates. One of the next updates I will be making is deprecating Python 3.8 support in this application ensuring users are only using supported and more secure versions. Success in using tools like Claude Code is incumbent on you being able to fill in where it falls short, such as in this case where it built the application with support for a deprecated version of Python. Building in traditional tools such as SonarQube, CodeQL and more to detect security flaws, areas where your code can be improved and more are still important now, as they were without these tools. Don't be afraid of these tools, embrace them, monitor them, and don't abandon your traditional pipeline-based deployments. Your development efficiency will increase by using them properly.

This project was a great next step in my journey with Python, yes, I used Claude as my development partner, but that doesn't mean I (or you) didn't learn. I had to approve every file it opened, created and edited. I didn't just let it blindly develop, I reviewed its recommendations, asked it questions about its decision making, and researched its recommendations in some cases before approving. Claude takes on the time heavy process of researching how to perform some particular action, completing that in mere seconds what took a developer hours previously. This doesn't though absolve us of monitoring and validating what its doing. This project taught me a great deal about developing a fully-fledged application as opposed to a simple one-file script:
- Implementing a workable authorization flow requires careful handling of tokens, as well as callback URLs and error states. Learning to expect the unexpected, and testing with real data, not just the examples were a big key to successfully implementing a workable authorization solution.
- Creating a package for public distribution is more than just writing some code. Type hints need to work across multiple versions of Python (3.8 - 3.12) seamlessly. Building a cohesive testing and deployment pipeline with pre-commit hooks that catch formatting and security issues before they can get into the repo, setting up trusted publishing between GitHub and PyPi make committing code, and deploying your packages secure and seamless.
- Designing for all possible audiences (and an area I need to address). Technical users and event coordinators are looking for two different things. The former is likely looking for JSON output, the ability to log verbosely and pipe data into other tools, while the latter may just want a simple CSV they can open and manipulate in Excel. Creating something usable for both involves a powerful, yet approachable cli tool that developer and non-developer alike can easily run.
- Building a proper (and extendable) CI/CD pipeline from the beginning that includes linting, unit, security and code quality testing as well as release automation that seamlessly deploys each new release to PyPi.

Finally, while meant to support grassroots drivers and racers, building this project taught me skills that translate into enterprise data engineering:
- API integration and authentication flows
- Data normalization, or producing clean, useable outputs from potentially messy source material
- Pipeline-based design that separates extraction, transformation, and output
- Building a tool that people actually want to use (and I hope you want to use this)

Ultimately, it comes down to the fundamentals. Do you understand your data? Do you have any edge cases, and can you handle them gracefully? Finally, did you make it easy for the next person to pick up your project and run with if it comes down to that?

Development also doesn't stop here. In the immediate future I have some initial findings from Sonar and CodeQL I need to fix, plus dropping support for Python 3.8 as previously mentioned. From there, I'd like to make HPDE Analytics applicable to the wider community and user base via updates such as more flexibility in the report building portion of the tool. Currently HPDE Analytics is very TT (and WDCR TT focused at that) focused. HPDE and Autocross program leads are likely interested in different things, building in the flexibility for them to choose the data reports relevant to them is a critical next step in useability. MSR isn't the only track registration application in this game, expanding beyond them makes HPDE Analytics more appealing to organizations using something else. From a useability and UI stand-point, the average user is probably better served by a Graphical User Interface (GUI) version as opposed to simply a CLI tool. Hard as that is for me, a power Linux user to say, it really is the reality so in the future I will be looking at releasing a GUI variant greatly simplifying use.

But I can't do this alone, I need *YOUR* help. I need you to use the application, test the application, point out its flaws, its weaknesses, and where I can do better. Whether its a pull request, or just a straight up email, let me know what you think. I can have plans to make this application better, and more useable for everyone, but plans only go so far, your real life recommendations are what truly make the difference.

Honestly, HPDE Analytics started as something selfish, how could I reduce the time I spend either creating reports, or downloading data manually from MSR? So I built...and I recognized that this has the potential to help more than just me. That's the great thing about side projects, they start in one place, and quite frequently morph into something else. For me HPDE Analytics also serves as a bridge between two worlds: motorsports, and learning more about software development.

If you're a program lead, whether TT, HPDE, Autocross, etc, please give this a shot. Let me know where I succeeded, but more importantly let me know where I came up short. Star my repo if you find it useful, open an issue if something breaks, submit a PR if you want to help make it better.

In some ways, grassroots motorsports is like the open source community in software, it runs on passion and volunteerism. What it lacks is the data infrastructure professional level motorsports have. We track lap times obsessively, yet struggle to answer basic questions about participation trends or program health. I hope that HPDE Analytics acts as a small step in changing that trend. The data is there, it just needs to be unlocked.

See you at the track.