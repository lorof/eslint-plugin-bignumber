export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforces use of BigNumber instead of parseFloat",
      category: "Stylistic Issues",
      recommended: true,
      url: null,
    },
    fixable: null,
    schema: [],
    messages: {
      noParseFloat: "Do not use parseFloat. Consider using BigNumber instead.",
    },
  },

  create(context) {
    return {
      Identifier(node) {
        if (node.name === "parseFloat") {
          context.report({
            node,
            messageId: "noParseFloat",
          });
        }
      },
    };
  },
};
