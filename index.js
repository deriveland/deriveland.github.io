const { createMachine, interpret } = XState;
const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBswBiAZQBUBBAJXsVAAcB7WXAF1xd87EAA9EARgkBmEgA4ALNICcyhRIUAGAGwAmAKwAaEAE9Ju5SQW6JygOwTNNudP13tAXw-G0WPIVIAJwBXfHwCKDp6AHkABRFuXgEhEXEEKUtlfWlpW317BSU7OWMzBG19KxtVO01a3IMvbxB8Lgg4EV8cAmIySjAEnn5BYSQxRGtSxBcSXTkZCRd9fO0arx8MboCSELCIwaSR1MRdOfkleyl9bW07BXsphDlK4oWllbXmrv9iA+GUsZpRaPAC0dhIbjsqm0ck0Omk6myTQ8QA */
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