import { useState } from "react";
import "../chip/chip.css";
export const Chip = ({ chips, setChips, placeholder, chipPrefix = "" }) => {
  const [value, setValue] = useState("");

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim().length > 0) pushChip(e.target.value);
    }
  };

  const pushChip = (val) => {
    const newChips = [...chips];
    newChips.push(val);
    setChips(newChips);
    setValue("");
  };

  const popChip = (e, index) => {
    e.preventDefault();
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="chip-wrapper">
      <div className="chip-values">
        {chips?.map((x, index) => {
          return (
            <div className="chip">
              <span key={index} className="">
                {`${chipPrefix}${x}`}
              </span>
              <a
                className="tag-remove"
                href="#"
                onClick={(e) => popChip(e, index)}
              >
                <span key={index}>x</span>
              </a>
            </div>
          );
        })}
        </div>

        <input
          className="chipInput"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
          onKeyDown={(e) => {
            onKeyDown(e);
          }}
        />
    </div>
  );
};
