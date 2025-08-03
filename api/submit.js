import axios from "axios";

export default async function handler(req, res) {
  const { subject, description } = req.body.input_values || {};
  const { email } = req.body.customer || {};

  await axios.post(
    "https://YOURDOMAIN.freshdesk.com/api/v2/tickets",
    {
      subject,
      description,
      email,
      priority: 1,
      status: 2
    },
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from("YOUR_FRESHDESK_API_KEY:x").toString("base64"),
        "Content-Type": "application/json"
      }
    }
  );

  res.status(200).json({
    canvas: {
      content: {
        components: [
          { type: "text", text: "Your support request has been sent successfully!" }
        ]
      }
    }
  });
}