Hello my names are Samuel Ng'ang'a a student studying at Moringa school currently pursuing Software development. I'm passionate on developing and debbuging programs.
The following explains the entire story on the web app i have created.
Ticket generator is a web app that helps lottery organizations and compnies that are offering tickets.
Languages used in this project is HTML, CSS and JavaScript. The following are fomulaes that were used in the JavaScript to create the rare tickets 
score=(lastDigitOfPhone×3+day×2+month×2+(yearmod100))mod100

Where:

lastDigitOfPhone → last digit of the user’s phone number

day → day of birth (1–31)

month → month of birth (1–12)

year % 100 → last two digits of the birth year

% 100 → ensures the score is always between 0–99

Ticket Type Assignment

After computing the score:

Score Range	Ticket Type	Probability Approx.
0 – 84	Ordinary	~85%
85 – 98	VIP	~14%
99	VVIP	~1%
How It Works

Phone last digit gives a small variation to the score.

Day and month of birth amplify differences between users born on different days.

Year % 100 ensures older and younger users have slightly different scores.

% 100 caps the score to a two-digit number so the ticket type ranges are consistent.

This method is deterministic: the same combination of phone, day, month, and year always produces the same ticket type.
Examples Of numbers likely toget the vip and the vvip ticket.
Ordinary

Phone: 0755512344 → last digit = 4

DOB: 15/8/1990

Score = (4*3 + 15*2 + 8*2 + 90) % 100 = 48 → Ordinary

VIP

Phone: 98765437 → last digit = 7

DOB: 15/6/1927

Score = (7*3 + 15*2 + 6*2 + 27) % 100 = 90 → VIP

VVIP

Phone: 123456789 → last digit = 9

DOB: 31/1/2008

Score = (9*3 + 31*2 + 1*2 + 8) % 100 = 99 → VVIP

This is the formula you used in your JS classifyUser function. 

© 2025 Samuel Ng'ang'a. All rights reserved.

This project, including all code, design, and content, is the intellectual property of Samuel Ng'ang'a. 

You may use, share, or modify this code for personal or educational purposes only. 
Commercial use or redistribution without explicit permission from the author is strictly prohibited.
To contact me please text me on my gmail account SammyNgash109@gmail.com. 
