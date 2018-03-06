'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.isequal');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var watcher = function watcher(Comp) {
    var didUpdate = Comp.prototype.componentDidUpdate;
    return function (_Comp) {
        (0, _inherits3.default)(_class, _Comp);

        function _class() {
            (0, _classCallCheck3.default)(this, _class);
            return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
        }

        (0, _createClass3.default)(_class, [{
            key: 'componentDidUpdate',
            value: function componentDidUpdate(props, state) {
                for (var value in this.state.watch) {
                    var cb = this.state.watch[value];
                    var _ref = [this.state[value], state[value]],
                        newVal = _ref[0],
                        oldVal = _ref[1];

                    if (!(0, _lodash2.default)(newVal, oldVal)) {
                        cb.call(this, newVal, oldVal);
                    }
                }
                if (didUpdate) {
                    didUpdate.call(this, props, state);
                }
            }
        }, {
            key: 'render',
            value: function render() {
                return (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'render', this).call(this);
            }
        }]);
        return _class;
    }(Comp);
};
exports.default = watcher;