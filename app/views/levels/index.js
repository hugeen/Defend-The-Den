define([
    'jQuery',
    'Underscore',
    'Backbone',
    'collections/levels',
    'text!templates/levels/index.html'
], function($, _, Backbone, levels, _index) {

    var Index = Backbone.View.extend({
        el: $("#wrapper"),
        initialize: function() {

        },
        render: function() {
            var data = { levels: levels.models, _: _ };
            this.el.html(_.template(_index, data));
        }
    });

    return new Index;

});