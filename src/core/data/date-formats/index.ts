import type { DateFormat } from "@/core/types";

/**
 *
 * Date Formats
 */
export const DATE_FORMATS: DateFormat[] = [
  { format: "YYYY-MM-DD", preview: "2024-05-01" },
  { format: "MM/DD/YYYY", preview: "05/01/2024" },
  { format: "DD/MM/YYYY", preview: "01/05/2024" },
  { format: "MMM DD, YYYY", preview: "May 01, 2024" },
  { format: "DD MMM YYYY", preview: "01 May 2024" },
  { format: "YYYY/MM/DD", preview: "2024/05/01" },
  { format: "DD-MM-YYYY", preview: "01-05-2024" },
  { format: "MMMM DD, YYYY", preview: "May 01, 2024" },
  { format: "DD MMMM YYYY", preview: "01 May 2024" },
  { format: "MM-DD-YYYY", preview: "05-01-2024" },
  { format: "YYYY.MM.DD", preview: "2024.05.01" },
  { format: "DD/MMM/YYYY", preview: "01/May/2024" },
  { format: "MMM YYYY", preview: "May 2024" },
  { format: "MM-YYYY", preview: "05-2024" },
  { format: "YYYYMMDD", preview: "20240501" },
  { format: "YYYY年MM月DD日", preview: "2024年05月01日" },
  { format: "DD/MMM/YYYY HH:mm:ss", preview: "01/May/2024 00:00:00" },
  { format: "YYYY-MM-DDTHH:mm:ssZ", preview: "2024-05-01T00:00:00Z" },
  { format: "MM/DD/YYYY HH:mm", preview: "05/01/2024 00:00" },
  { format: "DD/MM/YYYY HH:mm", preview: "01/05/2024 00:00" },
  { format: "YY-MM-DD", preview: "24-05-01" },
  { format: "MM/DD/YY", preview: "05/01/24" },
  { format: "YY/MM/DD", preview: "24/05/01" },
  { format: "DD-MM-YY", preview: "01-05-24" },
  { format: "YY.MM.DD", preview: "24.05.01" },
];
