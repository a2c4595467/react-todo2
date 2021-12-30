export const CompleteTodo = (props) => {
  // 分割代入
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のToDo</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>
                {todo}
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
