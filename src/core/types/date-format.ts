export interface DateFormat {
  format: string,
  preview: string,
  type: "dash" | "slash" | "dot" | "comma" | "empty" | "HHmm",
  functions: FunctionDefinition[]
}

export interface FunctionDefinition {
  language_id: string,
  function: string
}
