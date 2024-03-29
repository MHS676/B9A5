let titleCount = 1;
let totalPrice = 0;
const seatPrice = 550;
const totalSeat = 40;
let clickedCount = 0; 

const seats = document.querySelectorAll(".a");

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function() {
        if (clickedCount < 4) {
            //you can't selected this button again
            seat.removeEventListener("click", arguments.callee);
            // HTML & cSS push
            const tailwindClass = 'seat-container flex justify-between my-6 text-gray-500'
            const seatPush = seat.innerText;
            const pClass = 'text-ticket-heading-color font-semibold text-opacity-60'
            const div = document.createElement('div');
                    div.innerHTML = `
                    <div class="${tailwindClass}">
                    <p class="${pClass}">${seatPush}</p>
                    <p class="${pClass}">Economy</p>
                    <p class="${pClass}">${seatPrice}</p>
                    
                </div>
                    `;
                    const seatDetailsContainer = document.getElementById('div-seat');
                    seatDetailsContainer.appendChild(div);
            
            totalPrice += seatPrice;
            document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
            
            
            //set the color
            seat.style.backgroundColor = "#1DD100";
            
            clickedCount++;
            document.getElementById("seat").innerText = clickedCount;
            const restOfSeat = totalSeat - clickedCount;
            document.getElementById("rest-seat").innerText = restOfSeat;

            
            
        }
    });
}


// right coupon added
const btn = document.getElementById("apply-btn");

btn.addEventListener("click", function() {
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    
    if (totalPrice > 0) {
        let discountPercentage = 0;

        if (couponCode === "NEW15") {
            discountPercentage = 0.15; 
        } else if (couponCode === "COUPLE20") {
            discountPercentage = 0.20; 
        } else {
            alert("Invalid Coupon code");
            return;
        }

        const discountAmount = totalPrice * discountPercentage;
        const discountElement = document.getElementById("grandPrice");
        discountElement.innerText = discountAmount.toFixed(2);

        const restTotal = document.getElementById("grandPrice");
        restTotal.innerText = (totalPrice - discountAmount).toFixed(2);

        document.getElementById("input-field").value = "";
        
    } else {
        alert("Please add a seat");
    }
});



function onlyNumbers(event) {
    const key = event.key;
    const inputValue = event.target.value;

    if (key >= "0" && key <= "9") {
        if (inputValue.length < 11) {
            return;
        }
    }
    event.preventDefault();
}

function checkInputs() {
    const input1Value = document.getElementById('input1').value.trim();
    const input2Value = document.getElementById('input2').value.trim();
    const input3Value = document.getElementById('input3').value.trim();
    const submitBtn = document.getElementById('submitBtn');

    if (input1Value !== '' && input2Value !== '' && input3Value !== '') {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '#1DD100'; // Change button color
    } else {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = ''; // Reset button color
    }
}






function play(){
    
    const homeSection = document.getElementById('hidden-btn');
    homeSection.classList.add('hidden');

}

