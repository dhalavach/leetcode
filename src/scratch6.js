function undoRedo(object) {
  let actions = [];
  let undoneActions = [];

  return {
    set: function (key, value) {
      if (object.hasOwnProperty(key)) {
        actions.push(['edit', key, object[key], value]);
      } else {
        actions.push(['set', key, value]);
      }
      object[key] = value;
      undoneActions = [];
    },

    get: function (key) {
      return object[key];
    },

    del: function (key) {
      if (object[key]) {
        actions.push(['del', key, object[key]]);
        delete object[key];
        undoneActions = [];
      }
    },

    undo: function () {
      //       if(actions.length === 0) {
      //         throw new Error('no actions!')
      //       }
      let popped = actions.pop();
      if (popped[0] === 'set') {
        delete object[popped[1]];
      } else if (popped[0] === 'edit') {
        object[popped[1]] = popped[2];
      } else if (popped[0] === 'del') {
        object[popped[1]] = popped[2];
      }
      undoneActions.push(popped);
    },

    redo: function () {
      //       if (undoneActions.length === 1) {
      //         throw new Error('no actions!')
      //       }
      let popped = undoneActions.pop();
      if (popped[0] === 'set') {
        object[popped[1]] = popped[2];
      } else if (popped[0] === 'edit') {
        object[popped[1]] = popped[3];
      } else if (popped[0] === 'del') {
        delete object[popped[1]];
      }
      actions.push(popped);
    },
  };
}
