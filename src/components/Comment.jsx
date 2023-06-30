import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import {Trash, ThumbsUp} from "phosphor-react"


export function Comment(props) {
  return(
    <div className={styles.comment} >
      <Avatar hasBorder={false} src={props.url}/>

     <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>{props.author}</strong>
            <time dateTime="2023-06-29 00:15:20">Cerca de 1h atrás</time>
          </div>
          <button title="Deletar comentário" >
            <Trash size={24} />
          </button>
        </header>
        <p>{props.comment}</p>
      </div>
      <footer>
        <button>
          <ThumbsUp />
        Aplaudir <span>20</span>
        </button>
      </footer>

     </div> 
 
    </div>
  )
}