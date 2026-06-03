export const paymentSteps = [
  {
    step: 1,
    title: "Request a quote",
    description: "Submit the form with your package, platform, and requirements (attach .mq5 if you have it).",
  },
  {
    step: 2,
    title: "Fixed price by email",
    description: "I review your files and reply within 24–48 hours with a clear INR price and delivery date.",
  },
  {
    step: 3,
    title: "50% advance",
    description: "Work starts after advance payment (UPI / bank transfer / Razorpay link).",
  },
  {
    step: 4,
    title: "Delivery & balance",
    description: "You test the build; pay the remaining 50% before final source/files are released.",
  },
];

export const paymentMethods = [
  {
    id: "upi",
    title: "UPI",
    description: "Google Pay, PhonePe, Paytm — instant confirmation.",
    note: "UPI ID shared on invoice after quote approval.",
  },
  {
    id: "bank",
    title: "Bank transfer (NEFT / IMPS)",
    description: "Indian bank account details sent with your invoice.",
    note: "Include your name in payment reference.",
  },
  {
    id: "razorpay",
    title: "Razorpay payment link",
    description: "Card / UPI / net banking via secure link (for clients who prefer online checkout).",
    note: "Link sent by email after we agree on price.",
  },
];

export const paymentPolicyNotes = [
  "Prices on this site are starting ranges, not automatic checkout amounts.",
  "No work begins until advance is received and scope is confirmed in writing (email/WhatsApp).",
  "Refunds: advance is refundable only if work has not started; partial delivery may be prorated by mutual agreement.",
  "Rush delivery (+30–50%) available for agreed urgent timelines.",
];
