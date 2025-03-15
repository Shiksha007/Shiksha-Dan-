let infoIndex = 0;
function nextInfo() {
    document.getElementById("info-container").classList.add("hidden");
    document.getElementById("registration").classList.remove("hidden");
}

function generateUserID() {
    document.getElementById("registration").classList.add("hidden");
    document.getElementById("payment").classList.remove("hidden");
}

function makePayment() {
    let amount = document.getElementById("amount").value;
    if (!amount || amount < 1) {
        alert("कृपया मान्य राशि दर्ज करें।");
        return;
    }
    let upiLink = `upi://pay?pa=ak98064201@axl&pn=ShikshaDaan&am=${amount}&cu=INR`;
    window.location.href = upiLink;
}