import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <ul className={styles.links}>
            <li>
              <Link href="/tutorial">Tutorial</Link>
            </li>
            <li>
              <Link href="/chat">Chat</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
