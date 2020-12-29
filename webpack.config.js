const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/* const CopyPlugin = require('copy-webpack-plugin'); */

const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    /* new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/favicon.png', to: 'assets' },
      ],
    }), */
    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: 'FincaApp ',
      shortname: 'FincaApp',
      description: 'FincaApp permite gestionar la administracion de tu finca.',
      background_color: '#fff',
      theme_color: '#b1a',
      //Array iconos de la aplicacion
      icons: [
        {
          src: path.resolve('./src/assets/favicon.png'),
          //Le pasamos todos los tamaños que requerimos
          sizes: [192, 512],
        },
      ],
    }),

    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png',
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://maps.arcgis.com/sharing/rest/content/items/3ddd6c4932d649d6996db442e920ceb9/data|res.cloudinary.com'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          // Cache para la API
          urlPattern: new RegExp(
            'https://api-covi-19.jorgevelasquez006.now.sh/API/covi19.json|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=CO'
          ),
          // Le decimos que primero valla a la red antes de ir a la cache
          // para tener los datos actulizados
          handler: 'NetworkFirst',
          //Le pasamos el nombre de la cache api
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3004,
  },
};
