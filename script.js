// =====================
// IP INFO
// =====================
async function getIPInfo() {
    try {
        // Get IPv4 only
       const geoRes = await fetch(`https://ipwho.is/${ip}`);
       const geoData = await geoRes.json();

        const ip = ipData.ip;

        document.getElementById("ip").textContent = ip;

        // Now get location using that IP
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = await geoRes.json();

        document.getElementById("location").textContent =
          (geoData.city ? geoData.city + ", " : "") + (geoData.country || "N/A");

        document.getElementById("isp").textContent =
          geoData.connection?.isp || "N/A";

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