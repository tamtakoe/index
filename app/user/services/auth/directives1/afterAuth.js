'use strict';

/**
 * Do something after auth
 *
 * `pu-after-auth` - `{expression}` - Expression which do after authorization
 */
app.directive('puAfterAuth', function() {
    return {
        templateUrl: 'app/user/services/afterAuth/template.html',
        link: function (scope, elem, attr) {
            scope.afterAuthAction        = attr.puAfterAuth;
            scope.afterAuthLoginTitle    = attr.loginTitle;
            scope.afterAuthRegisterTitle = attr.registerTitle;
        }
    };
});