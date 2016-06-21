const execFile = require('child_process').execFile;
const flow = require('flow-bin');

execFile(flow, ['check'], (err, stdout) => {
    console.log(stdout);
});
