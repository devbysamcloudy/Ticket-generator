const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        email: document.getElementById("email").value.trim(),
        day: document.getElementById("day").value.trim(),
        month: document.getElementById("month").value.trim(),
        year: document.getElementById("year").value.trim(),
        gender: document.getElementById("gender").value
    };

    if (!validateForm(data)) return;

    document.querySelector('.form-container').style.display = 'none';
    const ticket = document.getElementById('ticketContainer');
    ticket.style.display = 'block';

    document.getElementById('ticketName').innerText = `${data.firstName} ${data.lastName}`;
    document.getElementById('ticketPhone').innerText = data.phone;
    document.getElementById('ticketEmail').innerText = data.email;
    document.getElementById('ticketGender').innerText = data.gender;
    document.getElementById('ticketDOB').innerText = `${data.day}/${data.month}/${data.year}`;

    const ticketElement = document.getElementById('ticketType');
    const type = classifyUser(data.phone, data.day, data.month, data.year);
    ticketElement.innerText = type.toUpperCase();
    ticketElement.classList.remove('ordinary', 'vip', 'vvip');
    ticketElement.classList.add(type);

    // Pop animation
    ticketElement.style.transform = "scale(0)";
    ticketElement.style.transition = "transform 0.5s ease";
    setTimeout(() => { ticketElement.style.transform = "scale(1)"; }, 50);

    // Confetti for VVIP
    if(type === 'vvip') {
        launchConfetti();
    }

    // ---- Functions ----
    function validateForm(data) {
        return data.firstName && data.lastName && data.phone && data.email && data.day && data.month && data.year;
    }

    function classifyUser(number, day, month, year) {
        const lastDigit = Number(number.toString().slice(-1));
        const dayNum = Number(day);
        const monthNum = Number(month);
        const yearNum = Number(year);

        // Stable score to determine rarity
        let score = (lastDigit*3 + dayNum*2 + monthNum*2 + (yearNum % 100)) % 100;

        if (score < 85) return "ordinary";   // Most common
        else if (score < 99) return "vip";   // Rare
        else return "vvip";                  // Very rare
    }

    function launchConfetti() {
        const canvas = document.createElement('canvas');
        canvas.id = 'confettiCanvas';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const confettiCount = 100;
        const confetti = [];
        for(let i=0;i<confettiCount;i++){
            confetti.push({
                x: Math.random()*canvas.width,
                y: Math.random()*canvas.height - canvas.height,
                r: Math.random()*6 + 4,
                d: Math.random()*confettiCount,
                color: `hsl(${Math.random()*360},100%,50%)`,
                tilt: Math.random()*10 -10
            });
        }

        let animFrame;
        function draw(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            confetti.forEach(c=>{
                ctx.beginPath();
                ctx.lineWidth = c.r/2;
                ctx.strokeStyle = c.color;
                ctx.moveTo(c.x + c.tilt, c.y);
                ctx.lineTo(c.x + c.tilt + c.r, c.y + c.r);
                ctx.stroke();
            });
            update();
        }

        function update(){
            confetti.forEach(c=>{
                c.y += (Math.cos(c.d)+3+c.r/2)/2;
                c.x += Math.sin(0);
                if(c.y>canvas.height){ c.y=-10; c.x=Math.random()*canvas.width; }
            });
            animFrame = requestAnimationFrame(draw);
        }

        draw();
        setTimeout(()=>{
            cancelAnimationFrame(animFrame);
            ctx.clearRect(0,0,canvas.width,canvas.height);
            canvas.remove();
        },5000);
    }
});
