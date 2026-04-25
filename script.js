// ===== GET IP + LOCATION + ISP =====
async function getIPInfo() {
    try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        document.getElementById("ip").innerText = data.ip;
        document.getElementById("location").innerText =
            data.city + ", " + data.country_name;
        document.getElementById("isp").innerText = data.org;
    } catch (error) {
        document.getElementById("ip").innerText = "Error";
        document.getElementById("location").innerText = "";
        document.getElementById("isp").innerText = "";
        console.error("IP fetch failed:", error);
    }
}

// Run on page load
getIPInfo();


// ===== COPY IP BUTTON =====
function copyIP() {
    const ipText = document.getElementById("ip").innerText;

    navigator.clipboard.writeText(ipText).then(() => {
        document.getElementById("copyMessage").innerText = "Copied!";
        setTimeout(() => {
            document.getElementById("copyMessage").innerText = "";
        }, 1500);
    });
}


// ===== SECURE PASSWORD GENERATOR =====
function generatePassword() {
    let length = document.getElementById("length").value;

    // Character set
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    let password = "";

    // Secure random generator
    let array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        password += chars[array[i] % chars.length];
    }

    document.getElementById("passwordResult").textContent = password;
}
}