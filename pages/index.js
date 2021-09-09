import Image from "next/image"
import { Button, DatePicker } from "antd"

const Home = () => {
  return (
    <>
      <Image src="/logo.svg" alt="Vercel Logo" width={200} height={200} />
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />
    </>
  )
}

export default Home
