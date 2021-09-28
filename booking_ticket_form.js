

function openBookingForm() {
    document.querySelector(".booking-ticket-form").style.display = "block";
}

function closeBookingForm() {
    document.querySelector(".booking-ticket-form").style.display = "none";
}

// Basic tickets
document.querySelector(".count-down-amount-basic").addEventListener("click", () => {
    document.querySelector(".count-amount-basic").textContent === "0" ? null : document.querySelector(".count-amount-basic").innerHTML--;
});

document.querySelector(".count-up-amount-basic").addEventListener("click", () => {
    document.querySelector(".count-amount-basic").innerHTML === "20" ? null : document.querySelector(".count-amount-basic").innerHTML++;
});

// Senior tickets
document.querySelector(".count-down-amount-senior").addEventListener("click", () => {
    document.querySelector(".count-amount-senior").textContent === "0" ? null : document.querySelector(".count-amount-senior").innerHTML--;
});

document.querySelector(".count-up-amount-senior").addEventListener("click", () => {
    document.querySelector(".count-amount-senior").textContent === "20" ? null : document.querySelector(".count-amount-senior").innerHTML++;
});