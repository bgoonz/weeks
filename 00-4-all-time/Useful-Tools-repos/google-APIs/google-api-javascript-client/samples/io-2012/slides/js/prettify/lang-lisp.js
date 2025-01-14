var a = null;
PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["opn", /^\(+/, a, "("],
      ["clo", /^\)+/, a, ")"],
      ["com", /^;[^\n\r]*/, a, ";"],
      ["pln", /^[\t\n\r \xa0]+/, a, "\t\n\r \xa0"],
      ["str", /^"(?:[^"\\]|\\[\S\s])*(?:"|$)/, a, '"'],
    ],
    [
      [
        "kwd",
        /^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\b/,
        a,
      ],
      [
        "lit",
        /^[+-]?(?:[#0]x[\da-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[de][+-]?\d+)?)/i,
      ],
      ["lit", /^'(?:-*(?:\w|\\[!-~])(?:[\w-]*|\\[!-~])[!=?]?)?/],
      ["pln", /^-*(?:[_a-z]|\\[!-~])(?:[\w-]*|\\[!-~])[!=?]?/i],
      ["pun", /^[^\w\t\n\r "'-);\\\xa0]+/],
    ]
  ),
  ["cl", "el", "lisp", "scm"]
);
