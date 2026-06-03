import type { FreelanceRate } from "./types";

export const sourceCodePricing = {
  title: "Client provides existing .mq5 source",
  options: [
    "₹499 – ₹799 per hour",
    "Fixed price after reviewing requirements",
  ],
};

export const freelanceRates: FreelanceRate[] = [
  { label: "Minimum project fee", value: "₹1,899" },
  { label: "Hourly rate", value: "₹499 – ₹799/hour" },
  { label: "Urgent delivery (24–48h)", value: "+30–50% on agreed price" },
];

export const pricingDisclaimer =
  "Final INR price is confirmed after I review your source code and scope.";
