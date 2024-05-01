import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * MM/DD/YYYY Code Base
 */
export const MMDDYYYY_slash: FunctionDefinition[] = [
  {
    language_id: "JavaScript",
    function: `
  function getDateFormat() {
    const date = new Date();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return \`\${month}/\${day}/\${year}\`;
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "Python",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%m/%d/%Y")
  
  # Result: "05/01/2024"
  `,
  },
  {
    language_id: "Java",
    function: `
  import java.time.LocalDate;
  import java.time.format.DateTimeFormatter;
  
  public class Main {
      public static void main(String[] args) {
          LocalDate date = LocalDate.now();
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "C#",
    function: `
  using System;
  
  class Program
  {
      static void Main()
      {
          DateTime date = DateTime.Now;
          string formattedDate = date.ToString("MM/dd/yyyy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "Ruby",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%m/%d/%Y")
  end
  
  # Result: "05/01/2024"
  `,
  },
  {
    language_id: "PHP",
    function: `
  <?php
  function getDateFormat() {
    return date("m/d/Y");
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "Swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "MM/dd/yyyy"
      return formatter.string(from: date)
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "Kotlin",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy")
      return date.format(formatter)
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "Go",
    function: `
  package main
  
  import (
      "fmt"
      "time"
  )
  
  func getDateFormat() string {
      date := time.Now()
      return date.Format("01/02/2006")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "05/01/2024"
  `,
  },
  {
    language_id: "Rust",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%m/%d/%Y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "05/01/2024"
  `,
  },
];
