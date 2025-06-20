---
layout: '@/templates/BasePost.astro'
title: Automating SCCA Participant Report Submissions
description: High Performance Driving and Python Development team up in one article
pubDate: 2025-06-15T00:00:00Z
imgSrc: '/assets/images/boitumelo-aT_qyAwqgEw-unsplash.jpg'
imgAlt: 'Photo by Boitumelo on Unsplash'
---

I really thought after completing the 2024 Advent of Code I'd be writing more regularly, I even had a rough idea of some topics I wanted to cover coming out of that. I've learned its much easier to work on side projects like this when you have a legitimate problem your trying to solve, case in point, how could I automate a previously manual process? In this case, creation of a Time Trials (TT) participation report that we submit after a TT weekend.

In 2020 I began participating in High Performance Drivers Education (HPDE), most people call it track days. The primary club I drive with, [Sports Car Club of America](https://www.scca.com/) (SCCA) has multiple run groups, from Novice for new and beginner drivers, up to Advanced for well-experienced drivers. TT is another of our run groups for Advanced drivers to compete against each other against the clock, think of it as analogous to Formula 1 qualifying where each driver is trying to set the absolute fastest time they can. For the last three years, I have been a competition director for the [Washington DC Region](https://www.wdcr-scca.org/) (WDCR) SCCA TT events. Our job during a track weekend involves the setup, administration and management of a TT weekend and the after event administrivia  of updating season points, track records, etc. Our post event work also includes the inspiration for this post, producing the event report that gets sent to SCCA national (More on this in a second).

For 2025 I received a promotion (or our Event Lead just plain hates me) and was named the Chief Competition Director for our region. In this role, my focus is less on running an event itself, and more on growing and evolving the program, letting our region's other Competition Directors focus on running events. While my focus now mainly focuses on the big picture, sometimes focusing on the small things that can make our lives easier is beneficial. This is one of those situations, which brings us to the aforementioned participation report. The TLDR of this report is, it lists all the competitors of a weekend in order from fastest to slowest. Since each participant is classed based on their vehicle, and any modifications they have made to it, it also lists their finishing position within their class. At the conclusion of a weekend, a competition director generates the final event results from our [Orbits](https://mylaps.com/orbits5-updates/) timing software in PDF form, then enters that information into the SCCA provided participation report, which is in the format of a Microsoft Excel spreadsheet. Because of how our Orbits reports templates are currently configured, we then need to pull membership ID and vehicle information from [MotorsportsReg](https://www.motorsportreg.com/) (our participant registration software) to populate that information. While manually entering data for 20 - 34 drivers isn't back-breaking, its also something that, with a little tweak of our MotorsportsReg and Orbits setup we can automate 99% of  and have the report ready for submission much quicker than we have been previously able to.

The event results PDF generated by Orbits includes the following information:
- Position (overall, fastest driver to slowest)
- Car Number
- Competitor Name (full name, first and last)
- Vehicle Class
- Best Time
- Session the competitors best time occurred in
- Second best time
- Session the competitors second best time occurred in
- Sponsor
- Nationality/State

The participant report requires the following information:
- First Name
- Last name
- Member ID
- Position (overall position)
- Position in Class (where the competitor finished within their class)
- Make-Model (what kind of car is the participant driving?)
- Passing Rules
- Satisfactory (did this competitor behave themselves during the event)
- Class

For this initial development effort, I'm interested in two pieces of information from the results spreadsheet, Competitor name and vehicle class. I will cover this later on, but with a little tweaking to Orbits, we can modify our report so all the information we need for our report. What I want to do is pull driver name and vehicle class information from the PDF report, split the competitor name into first name and last name, and populate the participant report 'First Name', 'Last Name' and 'Class' columns with this information. As a Minimum Viable Project (MVP), this automates approximately 50-75% of the work that goes into creating the report. Position, Position in Class, Passing Rules and Satisfactory will very likely never be automated, these fields are easily entered into the report manually and as it currently stands, I don't see a reason to change that. I also did use GenAI, specifically Perplexity at times to help guide my development, and work through issues and roadblocks I was having as I developed this script.

We'll walk through this script in five sections:
1. Import statements to import any necessary libraries needed for the script to function properly
2. Configuration section that sets up some optional parameters like variables, logging and time format
3. A PDF extraction function that reads the PDF and extracts the data we're looking for
4. An Excel template update function that imports participant name and class information into the spreadsheet and saves a copy for us
5. A command line interface section that allows us to run the script with arguments

```python
import re
import logging
import argparse
from openpyxl import load_workbook
from openpyxl.worksheet.protection import SheetProtection
import pdfplumber
```

Starting off with our import statements, we're importing five libraries for our work here,
- re: regular expressions for pattern matching and text parsing
- logging: logging and monitoring system to aid in script debugging and provide real time feedback about what the script is doing
- argparse: command line argument parsing that helps us create a command line interface from which we can run our script with arguments
- openpyxl's load_workbook: read and manipulate Microsoft Excel files. Accesses specific worksheets within a workbook, writes our participant data and saves the updated workbook to a new file
- openpyxl's SheetProtection: helps us work with protected Excel worksheets by unprotecting, then reprotecting an Excel worksheet
- pdfplumber: PDF text extraction and parsing. Extracts text content from our results pages that maintains formatting

Moving on to our configuration section, this is where logging and constants the script can use are defined.

```python
dlogging_format = '%(asctime)s - %(levelname)s - %(message)s'
logging.basicConfig(level=logging.INFO, format=dlogging_format)
```

In the first part of the configuration section I'm setting up logging. Configuring logging is always a good idea, especially in the early phases of development. Properly configured logging aids us in quickly identifying any issues with the script and it can provide real time feedback in terms of what the script is doing when we run it. The first line creates the format that defines how each log message will appear using the following format specifiers,
- asctime: displays the timestamp when the log message was created
- levelname: Shows the severity level of the message with possible values of DEBUG, INFO, WARNING, ERROR, CRITICAL
- message: the actual log message

An example of what a log message would look like is this, "2025-05-28 15:37:42,123 - INFO - Found 34 participants in PDF."

The second line configures the logger itself, with two parameters:
- level=logging.INFO: sets our logging threshold, in this case INFO. Only messages that are INFO or higher will be printed
- format=dlogging_format: this applies the custom logging format outlined in the first line

The next section defines some variables that will control how my script interacts with both the PDF, and the Excel template. This allows us to preserve the template's structure while writing data while not having to hardcode these parameters throughout the code. With plans on updating this script in the near future, this helps make the script easier to maintain.

```python
DEFAULT_SHEET_NAME = '20-TERG-9137_Participation_Atla'
HEADER_ROW = 1
DATA_START_ROW = 20
CLEAR_COLUMNS = ['A', 'B', 'I']
TIME_PATTERN = re.compile(r'^\d+:\d+\.\d+$')
```

DEFAULT_SHEET_NAME specifies the worksheet we're working off of within Excel. The spreadsheet used is a template from the SCCA national office, I'm sure I could change the name of the worksheet, but have just never done so. 

Next we have two row constants, one that lists the header row, the other where we want to start printing data to. Currently, the header row is just a reference, while the Data Start Row tells our script where to begin printing data to, in this case row 20. This template has information within it we'd like to retain so as I've currently written it, the script will print all data from the PDF starting on row 20 and I will have to cut and paste it above. I'd like to find a more elegant way to print the data starting with row 2, while retaining the information that comes on the template, but that will have to be for a future update.

CLEAR_COLUMNS defines which columns in Excel will be populated with data and clears the columns in the event they are already populated. While the Excel template we're using for our particular use case is never populated, this at least allows us the option to write to an old file that may already be populated for example and it will clear what is currently written, then write from the PDF file.

Finally we have our time pattern. This regex helps us with parsing the PDF document by matching on driver lap times that act as an anchor point so the script can locate where participant data ends, and timing data begins.

Next we have the first function in this script, extract_participant_data which parses the event results PDF and extracts the participant information we're looking to export into our participant report spreadsheet.

```python
def extract_participant_data(pdf_path):
    participants = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text = page.extract_text() or ''
                for line in text.splitlines():
                    tokens = line.strip().split()
                    if len(tokens) < 6 or not tokens[0].isdigit():
                        continue
                    time_idx = next((i for i, t in enumerate(tokens) if TIME_PATTERN.match(t)), None)
                    if time_idx is None or time_idx < 4:
                        continue
                    number = tokens[1]
                    class_tokens = tokens[time_idx-2:time_idx]
                    name_tokens = tokens[2:time_idx-2]
                    name = ' '.join(name_tokens)
                    cls = ' '.join(class_tokens)
                    participants.append({'Number': number, 'Name': name, 'Class': cls})
    except Exception as e:
        logging.error(f"Error parsing PDF '{pdf_path}': {e}")
        raise

    logging.info(f"Found {len(participants)} participants in PDF.")
    return participants
```

We start by initializing an empty list, 'participants' that stores our...you guessed it...participant data. Participant data is stored as a dictionary with the following keys, 'Number', 'Name', and 'Class'.

Next, we open the PDF file using the pdfplumber library. While our particular PDF output from our timing software is single page, pdfplumber provides the option to iterate over multiple pages. We also use 'with', which is a resource management statement ensuring our pdf file isn't left open when we're done with our work.

Our script then moves on to the text extraction. All text on a given page of the pdf is either extracted, if no text is detected the script falls back to an empty string, ''. Text is then split into individual lines of text, one participant per row/line: "1 | 1 | Michael Schumacher | Max 1 | 1:18.035 | ..."

It then removes whitespace, and splits lines into individual words or tokens: ["1", "|", "1", "|", "Michael", "Schumacher", "|", "Max", "1", "|", "1:18.035", ...]

The script then runs a quick validation check that either skips a line that contains insufficient data (i.e. headers and footers) or skipping non-data lines (i.e. the first token in our lines is position number).

Before we begin extracting our participant data, we need to find an anchor point, in this case lap time. The script uses a regex (^\d+:\d+\.\d+$) defined in our constants to identify lap times, creates pairs of lap times for position tracking and finally either returns the first matching index, or 'none' if no match is found.

Now that we have an anchor point, we can begin extracting data. Using lap time as our reference point we are enabled to pull a participants name, and class information from the PDF for eventual writing to our report. Using the above token stripped of white space and split into individual words or tokens, our script finds the information as follows:
- class_tokens = tokens[time_idx-2:time_idx]: a participants vehicle class is the two tokens immediately before their lap time. Using a slicing operation, we tell the script where to start and finish. Since the participant's lap time is at index 10, we tell the slicing operation to start at index 8 (time_idx-2) and end at (but does not include) the time index.
- name_tokens = tokens[2:time_idx-2]: a participants name begins at index 3, so we start our operation at index 2 and end the slice at our class index.

Initially, I wrote the slices in a fixed format, i.e., class_tokens = tokens[8:10] and name_tokens = tokens[2:8]. While this would work, it would not work reliably. What I didn't consider (because our export didn't have it) are participants with one name like Prince, or participants with three names like Mary Beth Smith. These names would change our index for a given line. Dynamic slices ensure that our script always pulls class and name information reliably regardless of length of a participants name.

Once the data has been extracted from the PDF, we join our name tokens (first name and last name) and class tokens and create a dictionary that stores participant data, the result for a competitor looks like this: {'Number': '1', 'Name': 'Michael Schumacher', 'Class': 'Max 1'}.

We close our our extract_participant_data function with error handling to catch, and provide details on any errors produced by our script, or, if it runs successfully, returning the number of participants pulled from the report and the structured participant data to populate our Excel report with.

...and thus we reach the halfway point of our script. Now that we've extracted data from our PDF, we have to print is somewhere, in this case our Excel-based participant report. To do that we need another function, we'll call it update_excel_template.

```python
def update_excel_template(
    pdf_path, template_path, output_path,
    sheet_name=DEFAULT_SHEET_NAME, sheet_password=None
):
    participants = extract_participant_data(pdf_path)

    if not participants:
        logging.error("No participant data extracted. Check PDF format.")
        return

    try:
        book = load_workbook(template_path)
    except Exception as e:
        logging.error(f"Cannot open template '{template_path}': {e}")
        raise

    if sheet_name not in book.sheetnames:
        logging.error(f"Sheet '{sheet_name}' not found. Available: {book.sheetnames}")
        raise KeyError(f"Sheet '{sheet_name}' not found.")

    sheet = book[sheet_name]

    if sheet.protection.sheet:
        logging.info("Unprotecting sheet.")
        sheet.protection = SheetProtection(sheet=False)

    for i in range(max(len(participants), 50)):
        row = DATA_START_ROW + i
        for col in CLEAR_COLUMNS:
            sheet[f"{col}{row}"] = None

    for i, p in enumerate(participants):
        row = DATA_START_ROW + i
        parts = p['Name'].rsplit(' ', 1)
        first = parts[0]
        last = parts[1] if len(parts) == 2 else ''

        sheet[f'A{row}'] = first
        sheet[f'B{row}'] = last
        sheet[f'I{row}'] = p['Class']

    if sheet_password:
        logging.info("Re-protecting sheet.")
        sheet.protection = SheetProtection(password=sheet_password, sheet=True)

    try:
        book.save(output_path)
        logging.info(f"Saved report to '{output_path}'")
    except Exception as e:
        logging.error(f"Error saving to '{output_path}': {e}")
        raise
```

Our Excel update function begins with establishing some parameters, namely the path to our results PDF, the path to our Excel template, the eventual output report, the name of the Excel sheet we are working with and the sheet password (in the event the worksheet is protected).

Our function starts by calling on the PDF parsing function to get our participant list, reads in the Excel template, and confirms the sheet to be edited exists. The script then checks to see if sheet protection is enabled, temporarily disabling it allowing our participant data to be written to it.

Before writing any data to our report, we want to ensure it's clear of existing data. As we write to the template and save as a new report 99% of the time, this generally shouldn't be an issue. Sometimes though we're operating in a pinch and we may pull in a previously used report and begin working off that. In this case, we start at row 20, and clear it and all rows after ensuring we have a clean sheet to load data onto.

With a clean sheet, we can begin writing in our participant data. We start by splitting up participant names into first and last with logic built in that allows us to handle names like 'Mary Beth Smith', which would split on 'Mary Beth' and 'Smith', or single names like 'Prince' (but as of right now not The Artist Formerly Known As...). Participant class is also written in, with the script writing information to the proper column based on header.

With our participant data written to the sheet, we can now re-protect it if it was previously protected before saving the report.

The last section of code contains the command-line interface for the script allowing a user to specify the input files, output file and optional parameters when producing a participant report.

```python
if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Populate participation report')
    parser.add_argument('pdf_input', help='Results PDF path')
    parser.add_argument('excel_template', help='Excel template path')
    parser.add_argument('output_file', help='Output Excel path')
    parser.add_argument('--sheet-name', default=DEFAULT_SHEET_NAME, help='Worksheet name')
    parser.add_argument('--sheet-password', default=None, help='Worksheet password')
    args = parser.parse_args()
    update_excel_template(
        args.pdf_input,
        args.excel_template,
        args.output_file,
        sheet_name=args.sheet_name,
        sheet_password=args.sheet_password
    )
```

Using argparser enables the use of help documentation and error messages in the event invalid inputs are input during execution. The next statements define our input and output files: our event result PDF, the Excel Template file and the resultant Excel spreadsheet file that will become our participant report. We include optional arguments for sheet name and sheet password and then read in our command line inputs at runtime. Finally, we execute the main function, passing in all parameters provided and we have our completed participation report all ready to add the additional information, before handing in to our event lead before we get in trouble.

For something my team and I have to run maybe twice a month, this may seem overkill. But most of us are in the tech industry so:
- We're lazy, and want this done as quickly as possible
- Outside of Time Trials we have work and family life so if it doesn't get done the day competition is complete, the odds are good it could linger for awhile and our event lead has to bug us (me) for the report

This also is not currently a complete script as previously mentioned. Our report has multiple additional fields which need to be filled out, notably Member ID and Make-Model (car type). To get this information, we will have to update our participant export from MotorsportsReg, and then update our event results template in Orbits. Once that's done, its just a matter of refactoring our script so that it parses and writes these additional fields for us, and then as the South Park underpants gnomes are fond of saying..."PROFIT!".

I have an additional idea of building out an event-driven project that would automate the entire process end to end, from event results PDF being placed in a Google Drive folder, to the kicking off of an AWS hosted Lambda function that runs this script, that then writes the output back to Google Drive and notifies all competition directors and our event lead. This is not something we would implement, and is more a fun, how can I make this work type thing. First things first though comes the updates mentioned above.

Script can be found [here](https://github.com/Homan13/shell-scripting/blob/main/participant-report.py). If you're a fellow SCCA Competition Director, please feel free to use to help make your post-event work more efficient. If you have any recommended updates/refactors I can make, please feel free to open up a pull request.

Thanks for your time today, until next time!