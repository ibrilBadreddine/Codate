import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MMM DD, YYYY Code Base
 */
export const MMMDDYYYY_comma: FunctionDefinition[] = [
  {
    language_id: "js",
    function: `
  function getDateFormat() {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const date = new Date();
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return \`\${month} \${day}, \${year}\`;
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "py",
    function: `
  import datetime
  
  def get_date_format():
      months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
      date = datetime.datetime.now()
      month = months[date.month - 1]
      return f"{month} {date.day}, {date.year}"
  
  # Result: "May 01, 2024"
  `,
  },
  {
    language_id: "java",
    function: `
  import java.time.LocalDate;
  import java.time.format.DateTimeFormatter;
  import java.util.Locale;
  
  public class Main {
      public static void main(String[] args) {
          LocalDate date = LocalDate.now();
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMM dd, yyyy", Locale.ENGLISH);
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "cs",
    function: `
  using System;
  using System.Globalization;
  
  class Program
  {
      static void Main()
      {
          DateTime date = DateTime.Now;
          string formattedDate = date.ToString("MMM dd, yyyy", CultureInfo.InvariantCulture);
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "rb",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%b %d, %Y")
  end
  
  # Result: "May 01, 2024"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("M d, Y");
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MMM dd, yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "kt",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  import java.util.Locale
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("MMM dd, yyyy", Locale.ENGLISH)
      return date.format(formatter)
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "go",
    function: `
  package main
  
  import (
      "fmt"
      "time"
  )
  
  func getDateFormat() string {
      date := time.Now()
      return date.Format("Jan 02, 2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "May 01, 2024"
  `,
  },
  {
    language_id: "rs",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%b %d, %Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "May 01, 2024"
  `,
  },
];
