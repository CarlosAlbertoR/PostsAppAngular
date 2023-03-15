module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      width: {
        container: "100%",
        "screen-md": "768px",
        "screen-lg": "1024px",
      },
    },
  },
  variants: {},
  plugins: [],
};
