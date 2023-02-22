// first attempt at undo - redo
function undoRedo(object) {
  const snapshotStack = [];
  const redoStack = [];

  return {
    set: function (key, value) {
      let memento = { ...object };
      snapshotStack.push(memento);
      object[key] = value;
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      if (object[key]) {
      let memento = { ...object };
      snapshotStack.push(memento);
      delete object[key];
        }
    },
    undo: function () {
      let memento = {...object};
      redoStack.push(memento);
      let prevState = snapshotStack.pop();
//       let keys = Object.getOwnPropertyNames(object);
//       for (let key of keys) {
//         object[key] = prevState[key];
//       }
      object = Object.assign(prevState)
      console.log(object)
    },

    redo: function () {
      snapshotStack.push(object);
      let prev = redoStack.pop();
      let keys = Object.getOwnPropertyNames(object);
      for (let key of keys) {
        //         console.log("objkey: ", object[key]);
        //         console.log("prevstatekey: ", prev[key])
        object[key] = prev[key];
      }
            
      object = Object.assign( prev)

    },
  };
}
