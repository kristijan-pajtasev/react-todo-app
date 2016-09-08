class EventEmitter {
    constructor() {
        this.callbacks = {};
    }

    publish(eventType) {
        if(this.callbacks[eventType]) {
            for(var i = 0, length = this.callbacks[eventType].length, callback = this.callbacks[eventType][i]; i < length; i++) {
                callback();
            }
        }
    }

    subscribe (eventType, callback) {
        if(this.callbacks[eventType]) {
            this.callbacks[eventType].push(callback);
        } else {
            this.callbacks[eventType] = [callback];
        }

    }

}

export default new EventEmitter();