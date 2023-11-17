import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser'
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

const extensions = ['.ts', '.tsx','.js','.jsx'];

export default {
    input: './src/index.jsx',
    output: {
        file: 'dist/index.mjs',
        format: 'es',
 
    },
    
    external: [],
    plugins: [
        json(),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: 'auto', // <---- this solves default issue
          }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true,
        }),
        resolve({ extensions }),
        babel({
            exclude: 'node_modules/**',
            presets: ["solid", "@babel/preset-typescript"],
            extensions,
        }),
        postcss({
            plugins: [autoprefixer(), tailwindcss({
                content: ["./src/**/*.tsx"],
            })],
            extract: false,
            modules: false,
            autoModules: false,
            minimize: true,
            inject: false,
        }),
        terser({ output: { comments: false } }),
    ],
};