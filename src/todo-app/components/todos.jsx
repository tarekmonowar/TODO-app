import Todo from './todo';
import Styles from "./todos.module.css"

export default function Todos(props) {
  const { todos,onremoveTodo } = props;
  return (
    <section className={Styles.todos}>
      {todos.map((todo,index) => (
        <Todo key={index} todo={todo} onRemoveItems={onremoveTodo}/>
      ))}
    </section>
  );
}
