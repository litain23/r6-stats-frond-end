const darkTheme = require('@ant-design/dark-theme');
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

console.log("ADFASDF")
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: darkTheme.default
  }),
);



/**
 * https://github.com/ant-design/ant-design-dark-theme
 * http://www.edwardhk.com/language/js/3-steps-customize-theme-for-ant-design-with-create-react-app-2019/
 * https://github.com/ant-design/ant-design-landing/issues/235
{
    loader: 'less-loader', 
    options: {
        lessOptions: {
            javascriptEnabled: true
          }
    }
}

 */