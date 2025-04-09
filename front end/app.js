document.getElementById("messageForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("recipient", document.getElementById("recipient").value);
    formData.append("subject", document.getElementById("subject").value);
    formData.append("message", document.getElementById("message").value);
    formData.append("file", document.getElementById("file").files[0]);
  
    try {
      const res = await fetch("http://localhost:3000/api/send", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      document.getElementById("response").textContent = "✅ Message sent securely";
      document.getElementById("response").style.color = "#10B981";
    } catch (error) {
      document.getElementById("response").textContent = "❌ Failed to send";
      document.getElementById("response").style.color = "#EF4444";
    }
  });
  