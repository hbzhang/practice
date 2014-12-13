/**
 * Created by hbzhang on 10/10/14.
 */
//var app = angular.module('sampleapp');

angular.module('mean.practice').controller('modalController', ['$scope', 'createDialog','ModalService',function($scope,createDialogService,ModalService) {

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };

    $scope.showModal = function() {
        ModalService.showModal({
            templateUrl: 'practice/views/directives/yesno.html',
            controller: 'modalController'
        }).then(function(modal) {
            console.log(modal.element);
            modal.element.modal();
            console.log('modal11112222');
            modal.close.then(function(result) {
                console.log('modal2222');
                $scope.yesNoResult = result ? "You said Yes" : "You said No";
            });
        });

    };

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


}]);