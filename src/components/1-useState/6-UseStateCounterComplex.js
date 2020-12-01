import React, { useState } from "react";
//functional update

const UseStateCounterComplex = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {ø
      // setValue(value+1)
      setValue(prevState => {
        return prevState + 1;
      });
    }, 2000);
  };

  const complexDecrease = () => {
    setTimeout(() => {
      setValue(prevState => {
        return prevState - 1;
      });
    }, 2000);
  };

  return (
    <div className="container">
      <section style={{ margin: "4rem 0" }}>
        <h2>複雑なカウンター</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexDecrease}>
          2秒後にマイナス
        </button>
        <button className="btn" onClick={reset}>
          リセット
        </button>
        <button className="btn" onClick={complexIncrease}>
          2秒後にプラス
        </button>
      </section>
    </div>
  );
};

export default UseStateCounterComplex;
