import type { FunctionDefinition } from "@/core/types/date-format";

/**
 *
 * DD-MM-YY Code Base
 */
export const DDMMYY_dash: FunctionDefinition[] = [
  {
    language_id: "javascript",
    function: `
  function getDateFormat() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).substring(2);
    return \`\${day}-\${month}-\${year}\`;
  }
  
  // Result: "01-05-24"
  `,
  },
  {
    language_id: "python",
    function: `
  import datetime
  
  def get_date_format():
      date = datetime.datetime.now()
      return date.strftime("%d-%m-%y")
  
  # Result: "01-05-24"
  `,
  },
  {
    language_id: "java",
    function: `
  import java.time.LocalDate;
  import java.time.format.DateTimeFormatter;
  
  public class Main {
      public static void main(String[] args) {
          LocalDate date = LocalDate.now();
          DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yy");
          String formattedDate = date.format(formatter);
          System.out.println(formattedDate);
      }
  }
  
  // Result: "01-05-24"
  `,
  },
  {
    language_id: "csharp",
    function: `
  using System;
  
  class Program
  {
      static void Main()
      {
          DateTime date = DateTime.Now;
          string formattedDate = date.ToString("dd-MM-yy");
          Console.WriteLine(formattedDate);
      }
  }
  
  // Result: "01-05-24"
  `,
  },
  {
    language_id: "ruby",
    function: `
  def get_date_format
    date = Time.now
    date.strftime("%d-%m-%y")
  end
  
  # Result: "01-05-24"
  `,
  },
  {
    language_id: "php",
    function: `
  <?php
  function getDateFormat() {
    return date("d-m-y");
  }
  
  // Result: "01-05-24"
  `,
  },
  {
    language_id: "swift",
    function: `
  import Foundation
  
  func getDateFormat() -> String {
      let date = Date()
      let formatter = DateFormatter()
      formatter.dateFormat = "dd-MM-yy"
      return formatter.string(from: date)
  }
  
  // Result: "01-05-24"
  `,
  },
  {
    language_id: "kotlin",
    function: `
  import java.time.LocalDate
  import java.time.format.DateTimeFormatter
  
  fun getDateFormat(): String {
      val date = LocalDate.now()
      val formatter = DateTimeFormatter.ofPattern("dd-MM-yy")
      return date.format(formatter)
  }
  
  // Result: "01-05-24"
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
      return date.Format("02-01-06")
  }
  
  func main() {
      fmt.Println(getDateFormat())
  }
  
  // Result: "01-05-24"
  `,
  },
  {
    language_id: "rust",
    function: `
  use chrono::prelude::*;
  
  fn get_date_format() -> String {
      let date = Local::now();
      date.format("%d-%m-%y").to_string()
  }
  
  fn main() {
      println!("{}", get_date_format());
  }
  
  // Result: "01-05-24"
  `,
  },
];
