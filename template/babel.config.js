module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: []
      },
      production: {
        plugins: ["transform-remove-console"]
      }
    },
    plugins: [
      ["module-resolver", {
        root: ["."],
        extensions: [
          ".ios.js",
          ".android.js",
          ".js"
        ],
        alias: {
          assets: "./assets",
          components: "./src/ui/components",
          constants: "./src/constants",
          flow: "./src/flow",
          localize: "./src/localize",
          navigator: "./src/ui/navigator",
          screens: "./src/ui/screens",
          ui: "./src/ui",
        }
      }],
    ]
  };
};
