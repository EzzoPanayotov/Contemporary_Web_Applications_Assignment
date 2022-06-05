# Implementation and Report

Hristo Panayotov - 10103128\
Hosted Website: https://solent-forum.netlify.app\
GitHub Repository: https://github.com/EzzoPanayotov/Solent-forum

## Introduction

Searching for information can be very frustrating and time-consuming for students, especially students that have just started university.

Of course, with experience and time, gathering information becomes easier; however, it can be very overwhelming at the beginning.

Tutors are usually very busy people, which means that receiving an email with an answer could take some time; of course, students are too; however, students are more likely to answer quicker due to their number.\
An answer from a student would not be of the same quality as the one from a tutor, most likely, but it could provide the questioner with a general idea.

As mentioned in the first assignment, the data accumulated through a survey shows that students struggle to find information about their modules and courses in general.\
During the first assignment, a prototype of a forum for Solent University students was produced.\
For this assignment, the prototype was followed, and a demo version of the product was created.

The forum allows students to create posts containing their questions, and other students will be able to provide answers, make suggestions or give recommendations in a comment section.

## Methodology

User stories were used to understand the requirements for the project, and the MoSCoW prioritization method was used to sort them.\
A user story describes the features of a system or software that will be useful to the user or purchaser (Cohn and Beck 2011, p.4).\
MoSCoW is an abbreviation of four hierarchical priority groups:
- "***MUST*** have": requirements that the project has to have.
- "***SHOULD*** have": features that are not vital but would be nice to have.
- "***COULD*** have": nice to have features that will have a small impact if not included.
- "***WON'T*** have": features that are not going to be implemented now, maybe at a later stage.

#### Methods

The solution was evaluated by a representative user base (students) through an online questionnaire.\
The users had not seen the application before they used it to get their truthful impressions and feedback.\
The data gathered shows the following:
- Some users found the design of the application inconsistent.
- The users approved of the demo application's navigation.
- Users were able to figure out the functionalities of the application fairly easily.
- Some users were able to find visual and functional errors.
- The majority of the users requested a better presentation of the feedback received from the system

Each user gave an overall grade of the solution.
| **User**   | **Grade**   |
| :--------: | :---------: |
| User 1     | 8           |
| User 2     | 7           |
| User 3     | 5           |
| User 4     | 5           |
| User 5     | 6           |
| User 6     | 5           |
| User 7     | 4           |
| User 8     | 6           |
| User 9     | 5           |
| User 10    | 6           |

|**AVG of Overall Grade**|
|:---:|
| 5.7|

The average of the overall grade is 5.7 out of 10, which means that there are places where the solution can be improved.\
The received feedback indicates that a better job has to be done with the design of the application, and the errors pointed out by the users have to be fixed.
At this point we could do another iteration of the MoSCoW prioritization method, but this time maybe try to focus on the ***"Could"*** have and ***"Won't"*** have categories.

## Conclusion/Results

The development process went pretty well, even though some functionalities were not implemented.\
There was not enough time to implement some of the ***"Must Have"*** functionalities due to errors and research required to complete other features of the same importance.\
I had some trouble using ***"useEffect"*** hooks, one of the errors that occurred was an infinite loop, which caused 50K(50,000) read operations in firebase in a matter of no time.\
Luckily, no one got hurt during this time of panic, but this was the first time that I encountered a problem like that, and it made me think twice before doing something that I do not fully understand.
That said, I really enjoyed this assignment, because it was challenging, engaging, unique, and interesting.\
Hopefully, I will be able to finalize and optimize the end product of this assignment in the near future, or at least I will try my best to do so.

## Appendix
User stories prioritized using MoSCoW.
![MoSCoW User Stories](./MoSCoW%20User%20Stories.png "MoSCoW User Stories")