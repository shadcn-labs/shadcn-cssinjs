const config = {
  plugins: {
    // StyleX must run before Tailwind so the `@stylex;` directive in
    // styles/globals.css is replaced with the compiled component styles.
    // These options must match `.babelrc` so the class-name hashes emitted
    // here line up with the ones the Babel transform produces at runtime.
    "@stylexjs/postcss-plugin": {
      include: [
        "registry/**/*.{js,jsx,ts,tsx}",
        "lib/**/*.{js,jsx,ts,tsx}",
      ],
      useCSSLayers: true,
      styleResolution: "property-specificity",
      runtimeInjection: false,
      unstable_moduleResolution: {
        type: "commonJS",
        rootDir: process.cwd(),
      },
    },
    "@tailwindcss/postcss": {},
  },
};
export default config;
