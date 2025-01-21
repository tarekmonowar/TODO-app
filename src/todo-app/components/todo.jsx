import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Styles from "./todo.module.css"

export default function Todo(props) {
    const {title , desc , id } = props.todo;
    const {onRemoveItems} = props;
  const handleClick =()=>{
    onRemoveItems(id)
  }

  return (
    <article className={Styles.todo}>
        <div>
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
        <div>
           <button className={Styles.btn} type="button"> <FontAwesomeIcon icon={faTrash} size="2x" onClick={handleClick} /></button> 
        </div>
       
    </article>
  )
}
