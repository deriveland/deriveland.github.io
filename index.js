const { createMachine, interpret } = XState;
const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBswBiAZQBUBBAJXsVAAcB7WXAF1xd87EAA9EARgCsANhISAHABYATBIDMKqUqUyJMgOwAaEAE9JKhSQMyAnBMuqptg-pUBfdybRY8hUgBOAK74+ARQdPQA8gAKIty8AkIi4gj6cgAMtupSmgpS2goqxmaIWiQZOgoZChIZhrYKOZ5eIPhcEHAiPjgExGSUYPE8-ILCSGKIALQGJMqyUgYGyrZZDiom5ggySiSWUiu2LjIKCgbqnt4Yvf4kwaHhw4ljKWWuJDLqOioy2jlqSk2iAMtjmdlcMjWOQkjUuIB6fmIT1GyQmqSm6gkcyUCyWKzWKg2pQQUyUs1sBRhdmk1QkEha7iAA */
createMachine({
  id: "(machine)",
  initial: "idle",
  states: {
    idle: {
      on: {
        START: {
          target: "#(machine).running",
        },
      },
    },
    running: {
      on: {
        STOP: {
          target: "#(machine).idle",
        },
      },
    },
  },
});

function activate(state) {
  const joinedState = state.toStrings().join(' ');
  const app = document.getElementById('app');
  if (app) {
    app.dataset.state = joinedState;
    app.setAttribute("data-state", joinedState);
  }
}

const interpreter = XState
    .interpret(machine)
    .onTransition(activate)
    .start();

const { send } = interpreter;