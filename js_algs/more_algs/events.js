class Events {
  constructor() {
    this.events = {};
  }

  on(eventName, cb) {
    if (this.events[eventName]) {
      this.events[eventName].push(cb);
    } else {
      this.events[eventName] = [cb];
    }
  }

  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  off(eventName) {
    // this.events[eventName] = [];
    delete this.events[eventName];
  }
}
