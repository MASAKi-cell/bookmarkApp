import { RootLayout, Sidebar, Content, TopBar } from './components/index'
import styles from './styles/pages/app.module.scss'

function App(): JSX.Element {
  const ipcHandle = (): Promise<void> => window.electron.sendPing()

  return (
    <>
      <TopBar />
      <RootLayout className={styles.wrapper}>
        <Sidebar className={styles.sidebar}>Sidebar</Sidebar>
        <Content className={styles.content}>
          {' '}
          Build an Electron app with <span className="react">React</span>
          &nbsp;and <span className="ts">TypeScript</span>
        </Content>
      </RootLayout>
    </>
  )
}

export default App
