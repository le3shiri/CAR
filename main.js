
const canvas = document.getElementById('carCanvas');
const ctx = canvas.getContext('2d');


function drawCarBody() {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, '#1b75bb');
    gradient.addColorStop(1, '#144f6f');
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(140, 300);  
    ctx.lineTo(150, 300);  
    ctx.lineTo(650, 300);  
    ctx.lineTo(650, 230);  
    ctx.bezierCurveTo(622, 210, 520, 130, 450, 152); 
    ctx.lineTo(399, 158); 
    ctx.bezierCurveTo(280, 210, 200, 220, 150, 250); 
    ctx.closePath();
    ctx.fill();  
}
function drawCarWindows() {
    ctx.fillStyle = '#a6c8ff';  
    ctx.fillRect(1, 1, 1, 1);  
    ctx.fillRect(1, 1, 1, 1);  

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.strokeRect(1, 1, 1, 1);   
    ctx.strokeRect(1, 1, 1,1);   
}
function drawCarWheels() {
    ctx.fillStyle = '#333'; 

// L            
    ctx.beginPath();
    ctx.arc(250, 310, 40, 0, Math.PI * 2);
    ctx.fill();
    drawRims(250, 310);

//    R
    ctx.beginPath();
    ctx.arc(550, 310, 40, 0, Math.PI * 2);
    ctx.fill();
    drawRims(550, 310);
}


function drawRims(x, y) {
    ctx.strokeStyle = '#aaa';  
    ctx.lineWidth = 4;

    
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.stroke();

    
    for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * 20, y + Math.sin(angle) * 20);
        ctx.stroke();
    }
}


function drawLights() {
    
    ctx.fillStyle = '#ffff33';  
    ctx.beginPath();
    ctx.arc(160, 270, 10, 0, Math.PI * 2);  
    ctx.fill();

    ctx.beginPath();
    ctx.arc(640, 270, 10, 0, Math.PI * 2);  
    ctx.fill();

    
    ctx.fillStyle = '#ff3333'; 
    ctx.fillRect(645, 270, 10, 20);  
    ctx.fillRect(145, 270, 10, 20);  
}


function drawCarDetails() {
   
    ctx.fillStyle = '#333';
    ctx.fillRect(170, 285, 30, 10);  

    
    ctx.fillStyle = '#555';
    ctx.fillRect(635, 290, 5, 10);  
    ctx.fillRect(645, 290, 5, 10);  
}




function drawCarDoors() {
    ctx.strokeStyle = '#FF000000';
    ctx.lineWidth = 3;

   
    ctx.beginPath();
    ctx.moveTo(350, 250);
    ctx.lineTo(350, 300);
    ctx.stroke();

    
    ctx.beginPath();
    ctx.moveTo(480, 250);
    ctx.lineTo(480, 300);
    ctx.stroke();
}


function drawCar() {
    drawCarBody();       
    drawCarWindows();      
    drawCarWheels();    
    drawLights();        
    drawCarDetails();    
         
    drawCarDoors();      
}

drawCar();  