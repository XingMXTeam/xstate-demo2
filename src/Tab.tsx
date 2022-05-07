import { Radio } from "@alifd/next";
import { useCallback } from "react";
import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";
const RadioGroup = Radio.Group;

const Tab = () => {
  const onChange = useCallback(() => {}, []);
  return (
    <div>
      <RadioGroup onChange={onChange} direction={"hoz"}>
        <Radio value={1}>
          <span>智能模式</span>
        </Radio>
        <Radio value={2}>
          <span>手动模式</span>
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default Tab;
