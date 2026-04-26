// =====================
// IP INFO
// =====================
async function getIPInfo() {
    try {
        const res = await fetch("https://api.ipify.org?format=json");
        const ipData = await res.json();

        const geoRes = await fetch(`https://ipwho.is/${ipData.ip}`);
        const geoData = await geoRes.json();

        document.getElementById("ip").textContent = ipData.ip || "N/A";
        document.getElementById("location").textContent =
            (geoData.city ? geoData.city + ", " : "") + (geoData.country || "N/A");
        document.getElementById("isp").textContent = geoData.connection?.isp || "N/A";

    } catch (err) {
        console.log("ERROR:", err);
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