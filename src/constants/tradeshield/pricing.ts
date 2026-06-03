import type { FreelanceRate } from "./types";

export const sourceCodePricing = {
  title: "Client provides existing .mq5 source",
  options: [
    "₹500 – ₹1,500 per hour",
    "Fixed price after reviewing requirements",
  ],
};

export const freelanceRates: FreelanceRate[] = [
  { label: "Minimum project fee", value: "₹5,000" },
  { label: "Hourly rate", value: "₹1,000 – ₹2,000/hour" },
  { label: "Urgent delivery (24–48h)", value: "+30–50% on agreed price" },
];

export const pricingDisclaimer =
  "Final INR price is confirmed after I review your source code and scope.";
