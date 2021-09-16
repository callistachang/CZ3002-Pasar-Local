import { Layout } from "antd"
import { useRouter } from "next/dist/client/router"
import styles from "./Layout.module.css"
import Navbar from "./Navbar"

const { Header, Content, Footer } = Layout

const GeneralLayout = (props) => {
  const router = useRouter()

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <a className={styles.logo} onClick={() => router.push("/")}>
          Pasar Local
        </a>
        <Navbar activeMenuItem={props.activeMenuItem} />
      </Header>
      <Content style={{ padding: "0 5em" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Pasar Local © 2021 Created by Team SmartLocal
      </Footer>
    </Layout>
  )
}

export default GeneralLayout
