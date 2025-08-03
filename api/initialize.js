export default async function handler(req, res) {
  res.status(200).json({
    canvas: {
      content: {
        components: [
          { type: "input", id: "subject", label: "Subject", required: true },
          { type: "textarea", id: "description", label: "Description", required: true },
          { type: "button", id: "submit", label: "Submit", style: "primary" }
        ]
      }
    }
  });
}