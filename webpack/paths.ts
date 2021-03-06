const path = require('path');
const fs = require('fs');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


const publicUrlOrPath = getPublicUrlOrPath(
    process.env.NODE_ENV === 'development',
    require(resolveApp('package.json')).homepage,
    process.env.PUBLIC_URL
);

const moduleFileExtensions = [
    'web.mjs',
    'mjs',
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
];


export default {
    dotenv: resolveApp('.env'),
    appPath: resolveApp('src'),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appPublicIcon: resolveApp('public/icons'),
    appHtml: resolveApp('public/index.html'),
    appIndexJs: './src/index.js',
    appPackageJson: resolveApp('package.json'),
    appSrc: resolveApp('src'),
    src: resolveApp('src'),
    appTsConfig: resolveApp('tsconfig.json'),
    appNodeModules: resolveApp('node_modules'),
    publicUrlOrPath,
    moduleFileExtensions
};
