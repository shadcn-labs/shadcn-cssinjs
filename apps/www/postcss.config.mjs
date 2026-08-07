const config = {
  plugins: {
    // StyleX must run before Tailwind so the `@stylex;` directive in
    // styles/globals.css is replaced with the compiled component styles.
    // These options must match `.babelrc` so the class-name hashes emitted
    // here line up with the ones the Babel transform produces at runtime.
    "@stylexjs/postcss-plugin": {
      aliases: {
        "@/registry/bases/stylex/lib/*": ["../lib/*"],
      },
      include: [
        "apps/www/app/**/*.{js,jsx,ts,tsx}",
        "apps/www/components/**/*.{js,jsx,ts,tsx}",
        "apps/www/registry/**/*.{js,jsx,ts,tsx}",
        "apps/www/examples/**/*.{js,jsx,ts,tsx}",
        "apps/www/lib/**/*.{js,jsx,ts,tsx}",
        "app/**/*.{js,jsx,ts,tsx}",
        "components/**/*.{js,jsx,ts,tsx}",
        "registry/**/*.{js,jsx,ts,tsx}",
        "examples/**/*.{js,jsx,ts,tsx}",
        "lib/**/*.{js,jsx,ts,tsx}",
      ],
      runtimeInjection: false,
      styleResolution: "property-specificity",
      unstable_moduleResolution: {
        rootDir: process.cwd(),
        type: "commonJS",
      },
      useCSSLayers: true,
    },
    "@tailwindcss/postcss": {},
  },
};
export default config;
