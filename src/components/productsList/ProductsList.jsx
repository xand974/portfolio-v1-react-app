import Product from "../product/Product";
import "./productsList.scss";

export default function ProductsList() {
  return (
    <div className="products__list">
      <div className="products__list__left">
        <div className="products__list__left__container">
          <img
            className="products__list__left__container--img"
            src="https://images.unsplash.com/photo-1634591839746-42af2534734d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGJsYWNrJTIwcHVycGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <div className="products__list__left--barre"></div>
      </div>
      <div className="products__list__right">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
