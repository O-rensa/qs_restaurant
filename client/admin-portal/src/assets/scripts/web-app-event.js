var webapp = webapp || {};

webapp.event = (() => {
    var _callbacks = {};

    var on = (eventName, callback) => {
        if (!_callbacks[eventName]) {
            _callbacks[eventName] = [];
        }
        _callbacks[eventName].push(callback);
    };

    var off = (eventName, callback) => {
        var callbacks = _callbacks[eventName];
        if (!callbacks) {
            return;
        }
        var index = -1;
        for (var i = 0; i < callbacks.length; i++) {
            if (callbacks[i] === callback) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            return;
        }
        _callbacks[eventName].splice(index, 1);
    }

    var trigger = (eventName, ...args) => {
        var callbacks = _callbacks[eventName];
        if (!callbacks || !callbacks.length) {
            return;
        }
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i](...args);
        }
    }

    return {
        on: on,
        off: off,
        trigger: trigger
    }
})();