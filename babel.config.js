module.exports = {
  presets: [
    '@babel/preset-env', //compiling ES2015+ syntax
    '@babel/preset-react', //for react
    '@babel/preset-typescript',
  ],

  plugins: ['@babel/plugin-transform-runtime'],
};
