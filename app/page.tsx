import styles from './page.module.css'

import { getPage } from "@/sanity/sanity-utils"

export default async function Home() {
  const data = await getPage('home');
  console.log('data:', data);

  return (
    <main className={styles.main}>
      <div>
        {data.map((el: any) => el.name)}
      </div>
    </main>
  )
}
