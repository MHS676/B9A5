let titleCount = 1;
let totalPrice = 0;
const seatPrice = 550; 

const seats = document.querySelectorAll(".a");

let clickedCount = 0; // Variable to keep track of the number of buttons clicked

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function() {
        if (clickedCount < 4) { // Check if the limit of 4 buttons has not been reached
            const title = seat.querySelector("p").innerText;
            const titleSeatContainer = document.getElementById("seat-container");
            const p = document.createElement("p");
            p.innerText = title;
            titleSeatContainer.appendChild(p);

            // Update totalPrice and any other variables accordingly
            titleCount++;
            document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

            // Change the color of the button to red
            seat.style.backgroundColor = "#1DD100";

            // Increment the clicked count
            clickedCount++;

            // Disable further clicks if the limit has been reached
            if (clickedCount === 4) {
                // Remove event listener from all seats
                for (let i = 0; i < seats.length; i++) {
                    seats[i].removeEventListener("click", clickHandler);
                }
            }
        }
    });
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





