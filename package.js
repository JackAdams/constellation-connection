Package.describe({
  name: 'constellation:connection',
  version: '0.4.4',
  summary: 'Connection status plugin for Constellation',
  git: 'https://github.com/JackAdams/constellation-connection.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use(['templating'], 'client');
  api.use('constellation:console@1.4.4', 'client');

  api.addFiles('connection.css','client');
  api.addFiles('connection.html','client');
  api.addFiles('connection.js','client');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});