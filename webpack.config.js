import path from 'path';

export default {
  entry: './src/index.ts',
  output: {
    filename: 'Vanillanote2.bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: {
      name: 'Vanillanote2',
      type: 'umd'
    },
    globalObject: "typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : this",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  mode: 'production'
};
