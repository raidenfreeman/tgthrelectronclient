var app = require('app');  // Module to control application life.
var path = require('path');


var cmd = require('node-cmd');

var cp = require('child_process')
var vlcCommand = require('vlc-command')

exports.startVLC = file => {
  vlcCommand((err, vlcpath) => {
    console.log(err);
    console.log('\"'+vlcpath+'\"');
    if (process.platform === 'win32') {
    cmd.run('\"'+vlcpath+'\"' + ' --extraintf http --http-password 1234');
    console.log('win');
  }
  else{
    console.log('mc');
    cmd.run(vlcpath+ ' --extraintf http --http-password 1234');
  }
  })
};

var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 1000, height: 625 });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
