import { ShoppingCartOutlined } from "@ant-design/icons"

const Cart = () => {
  return (
    <>
      <div className="snipcart-checkout">
        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        {/* <span className="snipcart-total-price"></span> */}
      </div>
    </>
  )
}

export default Cart
