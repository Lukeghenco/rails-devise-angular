(function() {

    'use strict'

    angular
        .module('ngDevise', ['templates', 'Devise', 'ui.router'])
        .config(function($httpProvider) {
            // for CSRF errors
            $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
        })

}())
