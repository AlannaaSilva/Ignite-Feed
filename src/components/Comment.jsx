import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import {Trash, ThumbsUp} from "phosphor-react"


export function Comment(props) {
  return(
    <div className={styles.comment} >
      <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"/>

     <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Ana Beatriz</strong>
            <time dateTime="2023-06-29 00:15:20">Cerca de 1h atrás</time>
          </div>
          <button title="Deletar comentário" >
            <Trash size={24} />
          </button>
        </header>
        <p>Muito bom , parabéns!</p>
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