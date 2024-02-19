let titleCount = 1;
let totalPrice = 0;
const seatPrice = 550;
const totalSeat = 40;

const seats = document.querySelectorAll(".a");



for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function() {
        if (clickedCount < 4) {
            const title = seat.querySelector("p").innerText;
            const titleSeatContainer = document.getElementById("seat-container");
            const p = document.createElement("p");
            p.innerText = title;
            titleSeatContainer.appendChild(p);

            totalPrice += seatPrice;
            document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
            
            seat.style.backgroundColor = "#1DD100";
            
            clickedCount++;
            document.getElementById("seat").innerText = clickedCount;
            const restOfSeat = totalSeat - clickedCount;
            document.getElementById("rest-seat").innerText = restOfSeat;
            if (clickedCount === 4) {
                // Remove event listeners from all seats
                for (let i = 0; i < seats.length; i++) {
                    seats[i].removeEventListener("click", handleClick);
                }
            }
        }
    });
}


let clickedCount = 0; 

function handleClick() {
    // Your event handler logic goes here
}










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






