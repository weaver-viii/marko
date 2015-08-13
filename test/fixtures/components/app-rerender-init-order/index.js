module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {
            version: input.version
        };
    },
    getTemplateData: function(state, input) {
        return {
            version: state.version
        };
    },
    init: function() {
        window.rerenderInitOrder.push('parent');
    },
    onAfterUpdate: function() {
        window.rerenderInitOrder.push('parent');
    }
});