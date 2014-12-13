'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Practice = new Module('practice');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Practice.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Practice.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Practice.menus.add({
    title: 'Team',
    link: 'team',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Practice.aggregateAsset('css', 'practice.css');

  Practice.aggregateAsset('css', 'abn_tree.css');

  Practice.aggregateAsset('css', '../lib/ng-pageslide/dist/angular-pageslide-directive.css');

  Practice.aggregateAsset('css', '../lib/angular-gridster/dist/angular-gridster.min.css');

  Practice.aggregateAsset('js', '../lib/angular-gridster/dist/angular-gridster.min.js', {
        absolute: false
    });
  Practice.aggregateAsset('js', '../lib/ng-pageslide/dist/angular-pageslide-directive.js', {
        absolute: false
    });
  Practice.aggregateAsset('js', '../lib/angular-modal-service/dst/angular-modal-service.js',
     {
        absolute: false
    });

  Practice.aggregateAsset('js', '../lib/angularjs-modal-service/src/createDialog.js', {
            absolute: false
   });

  //Practice.aggregateAsset('js', 'angular-bootstrap-nav-tree/abn_tree_directive.js', {
  //      absolute: false
  //  });

  Practice.angularDependencies(['angularFileUpload', 'focusOn','angular-gridster','pageslide-directive','angularModalService', 'fundoo.services']);

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Practice.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Practice.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Practice.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Practice;
});
