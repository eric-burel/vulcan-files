Package.describe({
  name: 'origen:vulcan-files',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Provides vulcan with the capability of uploading files to server using Meteor-Files',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/OrigenStudio/vulcan-files',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'recursive-iterator': '3.3.0',
  'async-busboy': '0.6.2',
  'brackets2dots': '1.1.0',
  'object-path': '0.11.4',
  'react-dropzone': '4.1.3',
  'lodash':'4.0.0',
});

Package.onUse(api => {
  api.versionsFrom('1.6.0.1');

  api.use([
    'ecmascript',
    'vulcan:core',
    'ostrio:files',
    'origen:files'
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');
});