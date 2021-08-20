import React from "react";
import Panel from "./Panel";
import s from "./Statistics.module.css";

function Buttons({ increaseItems, options }) {
  return (
    <Panel title="Please leave Feedback">
      <ul className={s.BtnsList}>
        {options.map(({ id, value }) => (
          <li className={s.items} key={id}>
            <button
              type="button"
              className={s.btnsItem}
              onClick={increaseItems}
            >
              {value}
            </button>
          </li>
        ))}
        {/* <li className={s.items}>
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
        </li> */}
      </ul>
    </Panel>
  );
}

export default Buttons;
