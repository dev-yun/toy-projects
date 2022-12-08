import styles from './Home.module.css';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import DiaryForm from './DiaryForm';
import DiaryList from './DiaryList';

export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('myDiary');
  console.log(documents);

  return (
    <main className={styles.cont}>
      <div className={styles.form_cont}>
        <DiaryForm uid={user ? user.uid : null} />
      </div>
      <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
      </ul>
    </main>
  );
}
