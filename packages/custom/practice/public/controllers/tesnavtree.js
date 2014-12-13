'use strict';

/*
  var app, deps;

  deps = []; //['angularBootstrapNavTree'];

  if (angular.version.full.indexOf("1.2") >= 0) {
    deps.push('ngAnimate');
  }
*/

  //var app = angular.module('mean.practice');//, deps);

  angular.module('mean.practice').controller('navTreeController', ['$scope', 'Global','Practice','createDialog',
    function($scope, Global,Practice,createDialogService) {
        $scope.global = Global;
        $scope.package = {
            name: 'practice'
        };
      //  $scope.frames = [];

 // app.controller('AbnTestController', function($scope, $timeout) {
   
  var apple_selected, tree, treedata_avm, treedata_geography;

  $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = "You selected: " + branch.label;
      console.log("You selected: " + branch.label);
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };
    apple_selected = function(branch) {
      return $scope.output = "APPLE! : " + branch.label;
    };
    treedata_avm = [
      {
        label: 'Animal',
        children: [
          {
            label: 'Dog',
            data: {
              description: "man's best friend"
            }
          }, {
            label: 'Cat',
            data: {
              description: "Felis catus"
            }
          }, {
            label: 'Hippopotamus',
            data: {
              description: "hungry, hungry"
            }
          }, {
            label: 'Chicken',
            children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
          }
        ]
      }, {
        label: 'Vegetable',
        data: {
          definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
          data_can_contain_anything: true
        },
        onSelect: function(branch) {
          return $scope.output = "Vegetable: " + branch.data.definition;
        },
        children: [
          {
            label: 'Oranges'
          }, {
            label: 'Apples',
            children: [
              {
                label: 'Granny Smith',
                onSelect: apple_selected
              }, {
                label: 'Red Delicous',
                onSelect: apple_selected
              }, {
                label: 'Fuji',
                onSelect: apple_selected
              }
            ]
          }
        ]
      }, {
        label: 'Mineral',
        children: [
          {
            label: 'Rock',
            children: ['Igneous', 'Sedimentary', 'Metamorphic']
          }, {
            label: 'Metal',
            children: ['Aluminum', 'Steel', 'Copper']
          }, {
            label: 'Plastic',
            children: [
              {
                label: 'Thermoplastic',
                children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
              }, {
                label: 'Thermosetting Polymer',
                children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
              }
            ]
          }
        ]
      }
    ];
    treedata_geography = [
      {
        label: 'North America',
        children: [
          {
            label: 'Canada',
            children: ['Toronto', 'Vancouver']
          }, {
            label: 'USA',
            children: ['New York', 'Los Angeles']
          }, {
            label: 'Mexico',
            children: ['Mexico City', 'Guadalajara']
          }
        ]
      }, {
        label: 'South America',
        children: [
          {
            label: 'Venezuela',
            children: ['Caracas', 'Maracaibo']
          }, {
            label: 'Brazil',
            children: ['Sao Paulo', 'Rio de Janeiro']
          }, {
            label: 'Argentina',
            children: ['Buenos Aires', 'Cordoba']
          }
        ]
      }
    ];
    $scope.my_data = treedata_avm;
    console.log("original data" + treedata_avm);
    $scope.try_changing_the_tree_data = function() {
      if ($scope.my_data === treedata_avm) {
        return $scope.my_data = treedata_geography;
      } else {
        return $scope.my_data = treedata_avm;
      }
    };

    $scope.my_tree = tree = {};

    $scope.launchInlineModal = function() {
            createDialogService({
                id: 'simpleDialog',
                template:
                    '<div class="row-fluid">' +
                    ' <h3>This is how the Simple Modal was launched</h3>' +
                    ' <div>' +
                    '   <div class="codebox">' +
                    '<pre>' +
                    'createDialog({\n' +
                    '    id: "inlineDialog",\n' +
                    '    <span style="color:red">template: "&lt;div>&lt;!--template HTML here...-->&lt;/div>"</span>\n' +
                    '    title: "A Inline Modal Dialog",\n' +
                    '    backdrop: true,\n' +
                    '    success: {\n' +
                    '        label: "Yay",\n' +
                    '        fn: function(){\n' +
                    '            console.log("Inline modal closed");\n' +
                    '        }\n' +
                    '    }\n' +
                    '});\n' +
                    '</pre>\n' +
                    '   </div>\n' +
                    ' </div>\n' +
                    '</div>',
                title: 'A Inline Modal Dialog',
                backdrop: true,
                success: {label: 'Success', fn: function() {console.log('Inline modal closed');}}
            });
        };

        $scope.launchObjectModal = function() {
            createDialogService({
                id: 'simpleDialog',
                template: angular.element(
                        '<div class="row-fluid">' +
                        ' <h3>This is how the Simple Modal was launched</h3>' +
                        ' <div>' +
                        '   <div class="codebox">' +
                        '<pre>' +
                        'createDialog({\n' +
                        '    id: "objectDialog",\n' +
                        '    <span style="color:red">template: angular.element("...")</span>\n' +
                        '    title: "A Object Modal Dialog",\n' +
                        '    backdrop: true,\n' +
                        '    success: {\n' +
                        '        label: "Yay",\n' +
                        '        fn: function(){\n' +
                        '            console.log("Object modal closed");\n' +
                        '        }\n' +
                        '    }\n' +
                        '});\n' +
                        '</pre>\n' +
                        '   </div>\n' +
                        ' </div>\n' +
                        '</div>'),
                title: 'A Object Modal Dialog',
                backdrop: true,
                success: {label: 'Success', fn: function() {console.log('Object modal closed');}}
            });
        };
        $scope.launchSimpleModal = function() {
            createDialogService('practice/views/directives/yesno.html', {
                id: 'simpleDialog',
                title: 'A Simple Modal Dialog',
                backdrop: true,
                success: {label: 'Success', fn: function() {console.log('Simple modal closed');}}
            });
        };
        $scope.launchComplexModal = function() {
            createDialogService('practice/views/directives/yesno.html', {
                id: 'complexDialog',
                title: 'A Complex Modal Dialog',
                backdrop: true,
                controller: 'ComplexModalController',
                success: {label: 'Success', fn: function() {console.log('Complex modal closed');}}
            }, {
                myVal: 15,
                assetDetails: {
                    name: 'My Asset',
                    description: 'A Very Nice Asset'
                }
            });
        };
      $scope.try_async_load = function() {
      $scope.my_data = [];
      $scope.doing_async = true;
      return $timeout(function() {
        if (Math.random() < 0.5) {
          $scope.my_data = treedata_avm;
        } else {
          $scope.my_data = treedata_geography;
        }
        $scope.doing_async = false;
        return tree.expand_all();
      }, 1000);
    };
  
    $scope.try_adding_a_branch = function() {
        var b;

        b = tree.get_selected_branch();
        console.log(b);
        tree.add_branch(b, {
            label: $scope.teamname,
            data: {
                something: 42,
                "else": 43
            }
        });
    };
    /*tree.add_root_branch({
            label: $scope.teamname ,
            data: {
                something: 42,
                "else": 43
            }});

    };*/

     $scope.try_deleting_a_branch = function() {
      var b;
      console.log(tree);
      b = tree.get_selected_branch();
      tree.delete_branch(b);
      //tree.delete_root_branch(b);
      console.log($scope.my_data);
         return;
    };

}]);
