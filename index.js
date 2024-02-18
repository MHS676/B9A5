let titleCount = 1;
let totalPrice = 0;
const seatPrice = 550; // Assuming a fixed price for each seat

const seats = document.querySelectorAll(".a");

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];

    seat.addEventListener("click", function() {
        const title = seat.querySelector("p").innerText;

        const titleSeatContainer = document.getElementById("seat-container");
        const p = document.createElement("p");
        p.innerText = title;
        titleSeatContainer.appendChild(p);

        titleCount++;
        totalPrice += seatPrice; // Add the price of the clicked seat
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    });
}

const btn = document.getElementById("apply-btn");

btn.addEventListener("click", function() {
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();

    if (totalPrice > 0) {
        let discountPercentage = 0;

        if (couponCode === "NEW15") {
            discountPercentage = 0.15; // 15% discount for "NEW15"
        } else if (couponCode === "COUPLE20") {
            discountPercentage = 0.20; // 20% discount for "COUPLE20"
        } else {
            alert("Invalid Coupon code");
            return;
        }

        const discountAmount = totalPrice * discountPercentage;
        const discountElement = document.getElementById("grandPrice");
        discountElement.innerText = discountAmount.toFixed(2);

        const restTotal = document.getElementById("total");
        restTotal.innerText = (totalPrice - discountAmount).toFixed(2);

        document.getElementById("input-field").value = "";
    } else {
        alert("Please add a seat");
    }
});

