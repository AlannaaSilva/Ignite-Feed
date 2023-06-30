
import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {

  const comentario1 = "Muito bom!"
  const url1= "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  const url2 = "https://images.unsplash.com/photo-1685821935645-92a918ca51b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
  const url3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1300&q=80" />
          <div className={styles.authorInfo}>
            <strong>João Almeida</strong>
            <span> Web Developer </span>
          </div>
        </div>
        <time dateTime="2023-06-29 00:15:20">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
     <p><a href=""> joao.design/doctorcare</a></p>
      </div>

    <form className={styles.commentForm}>
      <strong>Deixe o seu feedback</strong>

      <textarea 
      placeholder="Deixe um comentário"
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
    
    <div className={styles.commentList}>
      <Comment comment={"Nossa parabéns!!💙💙"} author= {"Antonio"} url={url1}/>
      <Comment comment={"Ficou ótimo!👏🏻👏🏻"} author={"Larissa Castro"} url={url2}/>
      <Comment comment={comentario1} author={"Carlos alberto"} url={url3}/>

    </div>
    </article>
  )
}