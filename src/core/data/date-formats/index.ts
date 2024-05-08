import type { DateFormat } from "@/core/types";
import { YYMMDD_dot, YYYYMMDD_dot } from "./formats/dot";
import { MMDDYYYY_HHmm, DDMMYYYY_HHmm } from "./formats/HHmm";
import { MMMYYYY_empty, DDMMYYYY_empty } from "./formats/empty";
import { MMMDDYYYY_comma, MMMMDDYYYY_comma } from "./formats/comma";
import { YYMMDD_dash, YYYYMMDD_dash, MMDDYYYY_dash, MMYYYY_dash, DDMMYYYY_dash, DDMMYY_dash } from "./formats/dash";
import { MMDDYYYY_slash, MMDDYY_slash, DDMMMYYYY_slash, DDMMYYYY_slash, YYMMDD_slash, YYYYMMDD_slash } from "./formats/slash";

/**
 *
 * Date Formats
 */
export const DATE_FORMATS: DateFormat[] = [
  {
    format: "YYYY-MM-DD",
    preview: "2024-05-01",
    type: "dash",
    functions: YYYYMMDD_dash,
    description:
      "Commonly used for database storage and sorting due to its unambiguous nature. Suitable for various applications where precise date representation is required.",
    examples: ["Database storage", "API endpoints", "Sorting algorithms"],
  },
  {
    format: "MM/DD/YYYY",
    preview: "05/01/2024",
    type: "slash",
    functions: MMDDYYYY_slash,
    description:
      "Frequently used in American date conventions for user interfaces. It's intuitive for users accustomed to the month/day/year order.",
    examples: [
      "User registration forms",
      "Event scheduling",
      "Billing systems",
    ],
  },
  {
    format: "DD/MM/YYYY",
    preview: "01/05/2024",
    type: "slash",
    functions: DDMMYYYY_slash,
    description:
      "Commonly used in European date conventions for user interfaces. It's prevalent in official documents and forms across many countries.",
    examples: [
      "Passport expiration dates",
      "Flight booking systems",
      "Medical records",
    ],
  },
  {
    format: "MMM DD, YYYY",
    preview: "May 01, 2024",
    type: "comma",
    functions: MMMDDYYYY_comma,
    description:
      "Suitable for displaying dates in a human-readable format with month name abbreviation. It's often used in written communication and publishing.",
    examples: ["News articles", "Event invitations", "Social media posts"],
  },
  {
    format: "DD MMM YYYY",
    preview: "01 May 2024",
    type: "empty",
    functions: DDMMYYYY_empty,
    description:
      "Similar to MMM DD, YYYY but without commas. It's commonly used in formal writing and documentation.",
    examples: [
      "Government documents",
      "Legal contracts",
      "Academic publications",
    ],
  },
  {
    format: "YYYY/MM/DD",
    preview: "2024/05/01",
    type: "slash",
    functions: YYYYMMDD_slash,
    description:
      "An alternative to the dash-separated format, common in some systems or databases. It's often used in file naming conventions and data exchange formats.",
    examples: [
      "File naming conventions",
      "Version control systems",
      "Data exchange formats",
    ],
  },
  {
    format: "DD-MM-YYYY",
    preview: "01-05-2024",
    type: "dash",
    functions: DDMMYYYY_dash,
    description:
      "Widely used in various contexts, including official documents and forms. It's prevalent in invoice dates, appointment scheduling, and product expiration dates.",
    examples: [
      "Invoice dates",
      "Appointment scheduling",
      "Product expiration dates",
    ],
  },
  {
    format: "MMMM DD, YYYY",
    preview: "May 01, 2024",
    type: "comma",
    functions: MMMMDDYYYY_comma,
    description:
      "Similar to MMM DD, YYYY but with full month name. It's often used in event posters, newsletter headers, and personal diaries.",
    examples: ["Event posters", "Newsletter headers", "Personal diaries"],
  },
  {
    format: "MM-DD-YYYY",
    preview: "05-01-2024",
    type: "dash",
    functions: MMDDYYYY_dash,
    description:
      "Commonly used in various digital interfaces and forms. It's intuitive for users and widely accepted in online shopping carts, calendar applications, and project management tools.",
    examples: [
      "Online shopping carts",
      "Calendar applications",
      "Project management tools",
    ],
  },
  {
    format: "YYYY.MM.DD",
    preview: "2024.05.01",
    type: "dot",
    functions: YYYYMMDD_dot,
    description:
      "An alternative to the dash or slash-separated formats, providing a visually distinct style. It's often used in file naming conventions, version control systems, and data exchange formats.",
    examples: [
      "File naming conventions",
      "Version control systems",
      "Data exchange formats",
    ],
  },
  {
    format: "DD/MMM/YYYY",
    preview: "01/May/2024",
    type: "slash",
    functions: DDMMMYYYY_slash,
    description:
      "Suitable for contexts requiring month names in abbreviated form. It's often used in event calendars, travel itineraries, and weather reports.",
    examples: ["Event calendars", "Travel itineraries", "Weather reports"],
  },
  {
    format: "MMM YYYY",
    preview: "May 2024",
    type: "empty",
    functions: MMMYYYY_empty,
    description:
      "Used when only the month and year are relevant, without the day. It's commonly used in monthly reports, financial statements, and archived data.",
    examples: ["Monthly reports", "Financial statements", "Archived data"],
  },
  {
    format: "MM-YYYY",
    preview: "05-2024",
    type: "dash",
    functions: MMYYYY_dash,
    description:
      "Similar to MMM YYYY but with numeric month. It's often used in billing cycles, subscription periods, and membership durations.",
    examples: [
      "Billing cycles",
      "Subscription periods",
      "Membership durations",
    ],
  },
  {
    format: "MM/DD/YYYY HH:mm",
    preview: "05/01/2024 00:00",
    type: "HHmm",
    functions: MMDDYYYY_HHmm,
    description:
      "Includes time in hours and minutes along with the date, suitable for event scheduling. It's often used in meeting invitations, flight departure times, and train schedules.",
    examples: [
      "Meeting invitations",
      "Flight departure times",
      "Train schedules",
    ],
  },
  {
    format: "DD/MM/YYYY HH:mm",
    preview: "01/05/2024 00:00",
    type: "HHmm",
    functions: DDMMYYYY_HHmm,
    description:
      "Similar to MM/DD/YYYY HH:mm but with day and month flipped. It's often used in event registrations, appointment bookings, and deadline reminders.",
    examples: [
      "Event registrations",
      "Appointment bookings",
      "Deadline reminders",
    ],
  },
  {
    format: "YY-MM-DD",
    preview: "24-05-01",
    type: "dash",
    functions: YYMMDD_dash,
    description:
      "Commonly used in contexts where space is limited or year precision is not crucial. It's often used in barcode labels, batch numbers, and product codes.",
    examples: ["Barcode labels", "Batch numbers", "Product codes"],
  },
  {
    format: "MM/DD/YY",
    preview: "05/01/24",
    type: "slash",
    functions: MMDDYY_slash,
    description:
      "Often used in contexts requiring short date representations, such as shipping labels. It's commonly used in expiration dates, manufacturing dates, and document annotations.",
    examples: [
      "Expiration dates",
      "Manufacturing dates",
      "Document annotations",
    ],
  },
  {
    format: "YY/MM/DD",
    preview: "24/05/01",
    type: "slash",
    functions: YYMMDD_slash,
    description:
      "Similar to YY-MM-DD but with slashes. It's often used in product expiration dates, document versioning, and inventory tracking.",
    examples: [
      "Product expiration dates",
      "Document versioning",
      "Inventory tracking",
    ],
  },
  {
    format: "DD-MM-YY",
    preview: "01-05-24",
    type: "dash",
    functions: DDMMYY_dash,
    description:
      "Widely used in various official documents and forms. It's prevalent in identification cards, legal contracts, and travel visas.",
    examples: ["Identification cards", "Legal contracts", "Travel visas"],
  },
  {
    format: "YY.MM.DD",
    preview: "24.05.01",
    type: "dot",
    functions: YYMMDD_dot,
    description:
      "An alternative to YY-MM-DD or YY/MM/DD, providing a visually distinct style. It's often used in product labeling, inventory management, and version control systems.",
    examples: [
      "Product labeling",
      "Inventory management",
      "Version control systems",
    ],
  },
];
