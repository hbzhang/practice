'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MeanSocket = new Module('socket');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MeanSocket.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    MeanSocket.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    MeanSocket.menus.add({
        title: 'Socket',
        link:  'Socket',
        roles: ['authenticated'],
        menu: 'main'
    });


    // //Uncomment to use. Requires meanio@0.3.7 or above
    // // Save settings with callback
    // // Use this for saving data from administration pages
    // MeanSocket.settings({
    //     'someSetting': 'some value'
    // }, function(err, settings) {
    //     //you now have the settings object
    // });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MeanSocket.settings({
        'funcPage': '../controllers/sockets',
        'getMessageFunc': 'createFromSocket',
        'getAllMessagesFunc': 'getAllForSocket',
        'removeOldMessagesFunc': 'removeOldSocketMessages',
        'getAllChannelsFunc': 'getListOfChannels'
    });

    // // Get settings. Retrieves latest saved settigns
    // MeanSocket.settings(function(err, settings) {
    //     //you now have the settings object
    // });


    return MeanSocket;
});