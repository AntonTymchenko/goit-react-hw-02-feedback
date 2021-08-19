import React from "react";
import Panel from "./Panel";
import s from "./Statistics.module.css";

function Buttons({ increaseItems }) {
  return (
    <Panel title="Please leave Feedback">
      <ul className={s.BtnsList}>
        <li className={s.items}>
          <button type="button" className={s.btnsItem} onClick={increaseItems}>
            Good
          </button>
        </li>
        <li className={s.items}>
          <button type="button" className={s.btnsItem} onClick={increaseItems}>
            Neutral
          </button>
        </li>
        <li className={s.items}>
          <button type="button" className={s.btnsItem} onClick={increaseItems}>
            Bad
          </button>
        </li>
      </ul>
    </Panel>
  );
}

export default Buttons;
