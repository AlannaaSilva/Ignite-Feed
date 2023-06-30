import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/sidebar";

import styles from "./App.module.css";

import "./global.css";



export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
        <Post/>
        </main>
      </div>


    </div>
  )
}


