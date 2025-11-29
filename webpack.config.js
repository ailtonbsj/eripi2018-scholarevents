const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {},
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'index.html', to: 'index.html' },
                { from: 'imgs/*', to: '.' },
                { from: 'node_modules/reveal.js/css/reveal.css', to: 'css/' },
                { from: 'node_modules/reveal.js/css/theme/night.css', to: 'css/theme/' },
                { from: 'node_modules/reveal.js/lib/css/zenburn.css', to: 'lib/css/' },
                { from: 'node_modules/reveal.js/css/print/paper.css', to: 'css/print/' },
                { from: 'node_modules/reveal.js/lib/js/head.min.js', to: 'lib/js/' },
                { from: 'node_modules/reveal.js/js/reveal.js', to: 'js/' },
                { from: 'node_modules/reveal.js/plugin/markdown/marked.js', to: 'plugin/markdown/' },
                { from: 'node_modules/reveal.js/plugin/markdown/markdown.js', to: 'plugin/markdown/' },
                { from: 'node_modules/reveal.js/plugin/notes/notes.js', to: 'plugin/notes/' },
                { from: 'node_modules/reveal.js/plugin/highlight/highlight.js', to: 'plugin/highlight/' },
                { from: 'node_modules/reveal.js/plugin/zoom-js/zoom.js', to: 'plugin/zoom-js/' }
            ]
        })
    ],
}
