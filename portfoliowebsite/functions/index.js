const functions = require("firebase-functions");
const axios = require("axios");

exports.sendContactEmail = functions.https.onRequest(async (req, res) => {
  const {fullName, email, inquiry} = req.body;

  // Validate the input
  if (!fullName || !email || !inquiry) {
    return res.status(400).send("All fields are required.");
  }

  // Set up Brevo API credentials and endpoint
  const apiKey = "nothing to see here, move along";
  const apiEndpoint = "https://api.brevo.com/v3/smtp/email";

  try {
    await axios.post(
      apiEndpoint,
      {
        sender: {email: email, name: fullName},
        to: [
          {
            email: "osmanovicomar@gmail.com",
            name: "Omar Osmanovic"
          }
        ],
        subject: "Omar Osmanovic Website Inquiry",
        htmlContent: `
        <p>Name: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Inquiry: ${inquiry}</p>`
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey
        }
      }
    );

    return res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error.message);
    return res.status(500).send("Error sending email: " + error.message);
  }
});
