let mix = require('laravel-mix');

require('laravel-mix-transpile-node-modules')
mix.transpileNodeModules(['eclipsefdn-solstice-assets']);

mix.options({uglify: {uglifyOptions: {compress: false, output: {comments: true}}}});

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less('./node_modules/eclipsefdn-solstice-assets/less/quicksilver/styles.less', 'static/css/styles.css');

mix.webpackConfig({
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    },
  },
});

mix.js(['./node_modules/eclipsefdn-solstice-assets/js/main.js'], './static/js/solstice.js');