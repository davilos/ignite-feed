import { Header } from "./components/Header";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, voluptas! Ipsam fuga adipisci distinctio nemo atque ad eos totam reiciendis. Fugit eligendi provident, reiciendis quos a fuga vel ullam repudiandae."
          />
          <Post author="Gabriel Buzzi" content="Um novo post!" />
        </main>
      </div>
    </div>
  );
}

export default App;
