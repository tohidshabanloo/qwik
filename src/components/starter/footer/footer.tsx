import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        <a href="https://www.Rahvan.ir/" target="_blank" class={styles.anchor}>
          <span>Made with ♡ by Rahvan.ir</span>
          <span class={styles.spacer}>|</span>
          <span>{new Date().toISOString()}</span>
        </a>
      </div>
    </footer>
  );
});
