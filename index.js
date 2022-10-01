class EventDispatcher {
  constructor() {
    // listeners store
    this._listeners = {};
  }
  addEventListener(type, listener) {
    // validation
    if (this._listeners[type] === undefined) {
      this._listeners[type] = [];
    }
    // if event not provided push into listeners array
    if (this._listeners[type].indexOf(listener) === -1) {
      this._listeners[type].push(listener);
    }
  }
  removeEventListener(type, listener) {
    // validation
    if (this._listeners === undefined || this._listeners[type] === undefined) return;
    // found listener candidate to delete
    const index = this._listeners[type].indexOf(listener);
    // if founded delete
    if (index !== -1) {
      this._listeners[type].splice(index, 1);
    }
  }
  dispatchEvent(event) {
    // validation
    if (this._listeners === undefined || this._listeners[event.type] === undefined) return;
    // create a copy to avoid race condition
    const eventListenersCopy = this._listeners[event.type].slice(0);
    // bind target context
    event.target = this;
    // move through listeners array and dispatch
    for (let i = 0; i < eventListenersCopy.length; i++){
      eventListenersCopy[i].call(this, event);
    }
  } 
}
// example using below
const ed = new EventDispatcher();
// DO NOT USE ON PRODUCTION. ONLY FOR EXAMPLE
const event = {
  target: null,
  type: 'my-event'
};
const listener = () => {
  console.log('handled!');
};
ed.addEventListener('my-event', listener);
// should be handled
ed.dispatchEvent(event);
ed.removeEventListener('my-event', listener);
// should not be handled
ed.dispatchEvent(event);