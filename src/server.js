var Service = require ('node-windows').Service;

var svc = new Service ({
    name: 'Yong Service 1',
    description: 'Volunteer App web server for Yong',
    script: 'run.bat',
    nodeOptions: [
        '--harmony',
        '--max_old_space_size=4096'
    ]
});

svc.on('install', function() {
    svc.start();
});

svc.install();