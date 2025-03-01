function evaluateStrength(password) {
    let strength = 0;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    
    let colors = ["red", "orange", "yellow", "green"];
    let texts = ["Débil", "Moderada", "Fuerte", "Muy Fuerte"];
    
    strengthBar.style.width = `${(strength / 4) * 100}%`;
    strengthBar.style.backgroundColor = colors[strength - 1] || "red";
    strengthText.textContent = `Seguridad: ${texts[strength - 1] || "Débil"}`;
}

document.getElementById("length").addEventListener("input", function() {
    document.getElementById("lengthValue").textContent = this.value;
});

document.getElementById("generate").addEventListener("click", function() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}[]<>?";
    
    let allowedChars = lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;
    
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    document.getElementById("password").value = password;
    evaluateStrength(password);
});

document.getElementById("copy").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles!");
});