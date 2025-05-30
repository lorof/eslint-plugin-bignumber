import { RuleTester } from "eslint";
import rule from "./lib/rules/no-parsefloat.mjs";

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2025,
    sourceType: "module",
  },
});

ruleTester.run("no-parsefloat", rule, {
  valid: [
    {
      code: `const amount = new BigNumber("1234.56");`,
    },
    {
      code: `const value = Number("123.45");`,
    },
    {
      code: `const result = parseInt("123", 10);`,
    },
  ],

  invalid: [
    {
      code: `const amount = parseFloat("1234.56");`,
      errors: [
        {
          messageId: "noParseFloat",
        },
      ],
    },
    {
      code: `
        function calculate() {
          return parseFloat(userInput);
        }
      `,
      errors: [
        {
          messageId: "noParseFloat",
        },
      ],
    },
  ],
});
