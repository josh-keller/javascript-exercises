const {tracker, track} = (function IIFE() {
  let events = [];

  return {
    tracker: {
      list() {
        return [...events];
      },

      elements() {
        return events.map(event => event.target);
      },

      clear() {
        events = [];
        return events.length;
      },
    },

    track(callback) {
      return function(event) {
        if (!events.includes(event)) {
          events.push(event);
        }

        callback(event);
      };
    },
  }
}());

/* 
tracker.list().length
// = 4
tracker.elements()
// = [div#blue, div#red, div#orange, div#green]
tracker.elements()[0] === document.querySelector('#blue')
// = true
tracker.elements()[3] === document.querySelector('#green')
// = true
tracker.clear()
// = 0
tracker.list()
// = []
tracker.list()[0] = 'abc'
tracker.list().length
// = 0
*/
