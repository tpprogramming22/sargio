function sendMessage() {


    const request = new XMLHttpRequest();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sub = document.getElementById("subject").value;
    const comments = document.getElementById("message").value;

    if(!name||!email||!sub||!comments) {
      return
    }




    request.open("POST", "https://discord.com/api/webhooks/1097516453290324041/T2w0zzOU4c-PNSupaWtZfd9hq_cgmAkrqSKoV88ShR4sV6LwgofsvzABfdFGdsdQRkCJ");

    request.setRequestHeader('Content-type', 'application/json');

    console.log(message)

    const params = {
      content: "NEW FORM SUBMISSION:           Name: "+name+"            Email: "+email+"           Subject: "+sub+"            Message: "+comments
    }

    request.send(JSON.stringify(params));
    const form = document.getElementById("contact-form")
    form.reset();
    alert("Thanks for submitting your contact form!")
  }

  export default sendMessage;