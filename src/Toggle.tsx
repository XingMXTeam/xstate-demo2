import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";

const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: {
        TOGGLE: "active"
      }
    },
    active: {
      on: {
        TOGGLE: "inactive"
      }
    }
  }
});
const Toggle = () => {
  const [state, send] = useMachine(toggleMachine);
  console.log(state.value);
  return (
    <button onClick={() => send("TOGGLE")}>
      {state.value === "inactive"
        ? "click to activate"
        : "Active! click to deactive"}
    </button>
  );
};

export default Toggle;
