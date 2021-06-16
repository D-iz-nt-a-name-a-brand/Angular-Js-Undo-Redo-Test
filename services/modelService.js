var AngularUndoRedoDemo;
(function (AngularUndoRedoDemo) {
    var ModelService = (function () {
        function ModelService() {
            this.people = { paragraph: 'This area is Editable' };
        }
        return ModelService;
    }());
    AngularUndoRedoDemo.ModelService = ModelService;
    angular
        .module('AngularUndoRedoDemo')
        .service('model', ModelService);
})(AngularUndoRedoDemo || (AngularUndoRedoDemo = {}));
//# sourceMappingURL=modelService.js.map