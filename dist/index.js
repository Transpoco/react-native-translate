(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'react-native'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('react-native'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.reactNative);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _reactNative) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Translate = undefined;
    exports.setLocalization = setLocalization;
    exports.translate = translate;

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _localization = {};

    function setLocalization(localization) {
        if (_localization != undefined) {
            _localization = localization;
        }
    }

    function translate(value) {
        if (!_localization.hasOwnProperty(value)) {
            return value;
        } else {
            return _localization[value];
        }
    }

    var Translate = exports.Translate = function Translate(_ref) {
        var value = _ref.value;
        return _react2.default.createElement(
            _reactNative.Text,
            null,
            translate(value)
        );
    };
});