PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pln", /^[\t-\r ]+/, null, "\t\n\r "],
      ["str", /^"(?:[^\n\f\r"\\]|\\[\S\s])*(?:"|$)/, null, '"'],
      ["str", /^'(?:[^\n\f\r'\\]|\\[^&])'?/, null, "'"],
      [
        "lit",
        /^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
        null,
        "0123456789",
      ],
    ],
    [
      ["com", /^(?:--+[^\n\f\r]*|{-(?:[^-]|-+[^}-])*-})/],
      [
        "kwd",
        /^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^\d'A-Za-z]|$)/,
        null,
      ],
      ["pln", /^(?:[A-Z][\w']*\.)*[A-Za-z][\w']*/],
      ["pun", /^[^\d\t-\r "'A-Za-z]+/],
    ]
  ),
  ["hs"]
);
