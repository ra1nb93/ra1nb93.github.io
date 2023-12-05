function sendMail() {
  var params = {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_cvh648n";
  const templateID = "template_wgalvke";
   
  emailjs.send(serviceID, templateID, params)
    .then(res => {
      
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent sucessfully");
    })
    .catch((err) => console.log(err));
}

