module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],

  plugins: [
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.json'],
        alias: {
          api: './src/api',
          assets: './src/assets',
          components: './src/components',
          routes: './src/routes',
          store: './src/store',
          themes: './src/themes',
          utils: './src/utils',
        },
      },
    ],
  ],
};
