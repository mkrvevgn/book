Books.module('CartApp', {
    startWithParent: false,
    define: function (CartApp, App, Backbone, Marionette, $, _) {
        'use strict';

        var Router = Backbone.Router.extend({
            routes: {
                "(:category)(/:id)": "init"
            },
                // '': 'init'
            before: function () {
                App.startSubApp('CartApp', {
                    mainRegion: App.main,
                });
            },

            init: function (category,id) {
                Books.CartApp.controller.loadProducts(category,id);
            }
        });

        App.addInitializer(function () {
            var router = new Router();
        });
    }
});