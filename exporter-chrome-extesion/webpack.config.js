const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

// Load environment variables from .env file
const env = dotenv.config().parsed;

// Create an object with environment variables for Webpack's DefinePlugin
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    entry: {
        popup: './src/scripts/popup.js',
        supabaseClient: './src/scripts/supabaseClient.js',
        // content: './src/scripts/content.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin(envKeys)
    ],
    mode: 'development'
};