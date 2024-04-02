# voting-dapp
Final Project Submission for Alchemy Ethereum Dev. Bootcamp

## Abstract 

Online voting is becoming more popular in today's world. It can save money and encourage more people to vote. Instead of using paper ballots or going to a polling station, people can vote online wherever they have internet. However, some people are worried about the safety of online voting. If there's a weakness in the system, it could be manipulated. Any electronic voting system needs to be trustworthy, accurate, secure, and easy to use. This study looked at how blockchain technology could improve online voting systems and what challenges it might face. It found that blockchain could help fix some of the problems with current voting systems, but there are concerns about privacy and speed. To make a good online voting system using blockchain, it needs to be secure for remote voting and fast enough to handle lots of transactions.


## Problems in the existing system

There are several problems associated with existing voting systems, which can vary depending on the specific system in place. Some common issues include:

* **Lack of accessibility**: Many voting systems are not accessible to all citizens, particularly those with disabilities or those who live in remote areas. This can disenfranchise certain groups of voters.

* **Vulnerability to manipulation**: Traditional paper-based voting systems are susceptible to tampering, fraud, and manipulation. Electronic voting systems can also be vulnerable to hacking and cyber attacks.

* **Voter suppression**: Certain policies or practices can intentionally or unintentionally suppress voter turnout, such as strict voter ID laws, limited polling locations, and restricted voting hours.

* **Lack of transparency**: Some voting systems lack transparency, making it difficult for voters to understand how their votes are being counted and for election officials to verify the integrity of the results.

* **Complexity**: Voting systems can be overly complicated, leading to confusion among voters and potential errors in the voting process.

* **Slow tabulation and reporting**: Traditional paper-based voting systems can be slow to tabulate and report election results, leading to delays and uncertainty.

* **Cost**: Implementing and maintaining voting systems can be expensive, particularly when upgrading to more secure or technologically advanced systems.

Addressing these problems often requires a combination of policy changes, technological advancements, and increased transparency and accountability in the electoral process.

## Proposed System:

This system simplifies the voting process, ensures transparency, and provides a secure way to conduct elections using blockchain technology.

* **Entities**: We have three main roles in our system: Admin, Candidate, and Voter.   
* **Admin Role**: The Admin, who owns the application, registers both voters and candidates.
* **Election Setup**: When there's an election for a specific position, the Admin creates a new entry for it, detailing all the necessary information.  
* **Candidate Participation**: Candidates can join the election by providing their details.
* **Token Creation**: The Admin generates new ERC1155 (or ERC721) tokens for each election ID.
* **Voting Tokens**: Additionally, the Admin creates ERC20 tokens specific to each election ID. Voters receive only one ERC20 token per election, and to prevent duplicates, each candidate's address is linked to an election ID.
* **Voting Process**: Voters can only cast their votes when the Admin opens voting for a particular election ID.
* **Vote Transfer**: When a voter selects a candidate, their ERC20 token for that election is transferred from the voter's account to the candidate's account.
* **Closing Voting**: Once the voting period ends, no further votes can be cast.
* **Determining the Winner**: The candidate with the highest number of ERC20 tokens for a specific election ID is declared the winner.
* **Winner Confirmation**: The Admin then transfers the ERC721 token (Election Token) to the winning candidate.