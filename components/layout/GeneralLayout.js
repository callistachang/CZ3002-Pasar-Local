import { Layout } from "antd"
import { useRouter } from "next/dist/client/router"
import Media from "react-media"
import styles from "./Layout.module.css"
import Navbar from "./Navbar"

const { Header, Content, Footer } = Layout

const GeneralLayout = (props) => {
  const router = useRouter()

  return (
    <Layout className={styles.siteLayoutContent}>
      <Header>
        <Media
          query="(min-width: 600px)"
          render={() => (
            <a className={styles.logo} onClick={() => router.push("/")}>
              Pasar Local
            </a>
          )}
        />
        <Navbar activeMenuItem={props.activeMenuItem} />
      </Header>
      {props.noPadding ? (
        <Content>{props.children}</Content>
      ) : (
        <Content style={{ padding: "0 5em" }}>{props.children}</Content>
      )}
      {!props.noFooter && (
        <Footer style={{ textAlign: "center" }}>
          Pasar Local © 2021 Created by Team SmartLocal
        </Footer>
      )}
    </Layout>
  )
}

export default GeneralLayout
