import { useRouter } from "next/router"

const Vendor = () => {
  const router = useRouter()
  const { id } = router.query
  return <div>{id}</div>
}

export default Vendor
