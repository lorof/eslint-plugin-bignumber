import noParseFloat from "./rules/no-parsefloat.mjs";

export default {
  meta: {
    name: "eslint-plugin-bignumber",
    version: "1.0.0",
  },

  rules: {
    "no-parsefloat": noParseFloat,
  },

  configs: {
    recommended: {
      name: "bignumber/recommended",
      plugins: {
        bignumber: {
          rules: {
            "no-parsefloat": noParseFloat,
          },
        },
      },
      rules: {
        "bignumber/no-parsefloat": "warn",
      },
    },

    strict: {
      name: "bignumber/strict",
      plugins: {
        bignumber: {
          rules: {
            "no-parsefloat": noParseFloat,
          },
        },
      },
      rules: {
        "bignumber/no-parsefloat": "error",
      },
    },
  },
};
