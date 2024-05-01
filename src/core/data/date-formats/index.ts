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
  },
  { 
    format: "MM/DD/YYYY", 
    preview: "05/01/2024",
    type: "slash",
    functions: MMDDYYYY_slash
  },
  { 
    format: "DD/MM/YYYY", 
    preview: "01/05/2024",
    type: "slash",
    functions: DDMMYYYY_slash
  },
  { 
    format: "MMM DD, YYYY", 
    preview: "May 01, 2024",
    type: "comma",
    functions: MMMDDYYYY_comma
  },
  { 
    format: "DD MMM YYYY", 
    preview: "01 May 2024",
    type: "empty",
    functions: DDMMYYYY_empty
  },
  { 
    format: "YYYY/MM/DD", 
    preview: "2024/05/01",
    type: "slash",
    functions: YYYYMMDD_slash
  },
  { 
    format: "DD-MM-YYYY", 
    preview: "01-05-2024",
    type: "dash",
    functions: DDMMYYYY_dash 
  },
  { 
    format: "MMMM DD, YYYY", 
    preview: "May 01, 2024",
    type: "comma",
    functions: MMMMDDYYYY_comma
  },
  { 
    format: "MM-DD-YYYY", 
    preview: "05-01-2024",
    type: "dash",
    functions: MMDDYYYY_dash
  },
  { 
    format: "YYYY.MM.DD", 
    preview: "2024.05.01",
    type: "dot",
    functions: YYYYMMDD_dot
  },
  { 
    format: "DD/MMM/YYYY", 
    preview: "01/May/2024",
    type: "slash",
    functions: DDMMMYYYY_slash
  },
  { 
    format: "MMM YYYY", 
    preview: "May 2024",
    type: "empty",
    functions: MMMYYYY_empty
  },
  { 
    format: "MM-YYYY", 
    preview: "05-2024",
    type: "dash",
    functions: MMYYYY_dash
  },  
  { 
    format: "MM/DD/YYYY HH:mm", 
    preview: "05/01/2024 00:00",
    type: "HHmm",
    functions: MMDDYYYY_HHmm
  },
  { 
    format: "DD/MM/YYYY HH:mm", 
    preview: "01/05/2024 00:00",
    type: "HHmm",
    functions: DDMMYYYY_HHmm
  },
  { 
    format: "YY-MM-DD", 
    preview: "24-05-01",
    type: "dash",
    functions: YYMMDD_dash
  },
  { 
    format: "MM/DD/YY", 
    preview: "05/01/24",
    type: "slash",
    functions: MMDDYY_slash
  },
  { 
    format: "YY/MM/DD", 
    preview: "24/05/01",
    type: "slash",
    functions: YYMMDD_slash
  },
  { 
    format: "DD-MM-YY", 
    preview: "01-05-24",
    type: "dash",
    functions: DDMMYY_dash
  },
  { 
    format: "YY.MM.DD", 
    preview: "24.05.01",
    type: "dot",
    functions: YYMMDD_dot
  },
];
