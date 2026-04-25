// =====================
// IP INFO
// =====================
async function getIPInfo() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        document.getElementById("ip").textContent = data.ip || "N/A";
        document.getElementById("location").textContent =
            (data.city ? data.city + ", " : "") + (data.country_name || "N/A");
        document.getElementById("isp").textContent = data.org || "N/A";

    } catch (err) {
        document.getElementById("ip").textContent = "Error";
        document.getElementById("location").textContent = "Error";
        document.getElementById("isp").textContent = "Error";
    }
}

// =====================
// COPY IP
// =====================
function copyIP() {
    const ip = document.getElementById("ip").textContent;

    navigator.clipboard.writeText(ip);

    const msg = document.getElementById("copyMessage");
    msg.textContent = "Copied!";
    setTimeout(() => msg.textContent = "", 2000);
}

// =====================
// PASSWORD GENERATOR
// =====================
function generatePassword() {
    const length = document.getElementById("length").value;

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("passwordResult").textContent = password;
}

// Run IP fetch only if on index page
if (document.getElementById("ip")) {
    getIPInfo();
}