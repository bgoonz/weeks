PR.registerLangHandler(
  PR.createSimpleLexer(
    [
      ["pln", /^[\t\n\r \xa0]+/, null, "\t\n\r �\xa0"],
      [
        "com",
        /^#(?:if[\t\n\r \xa0]+(?:[$_a-z][\w']*|``[^\t\n\r`]*(?:``|$))|else|endif|light)/i,
        null,
        "#",
      ],
      [
        "str",
        /^(?:"(?:[^"\\]|\\[\S\s])*(?:"|$)|'(?:[^'\\]|\\[\S\s])(?:'|$))/,
        null,
        "\"'",
      ],
    ],
    [
      ["com", /^(?:\/\/[^\n\r]*|\(\*[\S\s]*?\*\))/],
      [
        "kwd",
        /^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\b/,
      ],
      ["lit", /^[+-]?(?:0x[\da-f]+|(?:\.\d+|\d+(?:\.\d*)?)(?:e[+-]?\d+)?)/i],
      ["pln", /^(?:[_a-z][\w']*[!#?]?|``[^\t\n\r`]*(?:``|$))/i],
      ["pun", /^[^\w\t\n\r "'\xa0]+/],
    ]
  ),
  ["fs", "ml"]
);
