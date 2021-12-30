//import { useState } from "react";

// style.cssに記述していたスタイルを"CSS-in-JS"としてJSへ埋め込む
// ただし、必ずしもCSS-in-JSが正解ではなく、デザイナーもCSSを
// 管理する場合は、やはりCSSファイルで管理したほうがいいときもある。
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  // 分割代入
  const { todoText, onChange, onClick, isDisabled } = props;

  return (
    <div style={style}>
      <input
        disabled={isDisabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={isDisabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
