import React, { useState, useEffect } from "react";
import classes from "../components/styles/Product.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faIndianRupeeSign,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component";
import RecomendedProducts from "../components/layout/RecomendedProducts";
import IndividualReview from "../components/layout/IndividualReview";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProduct } from "../store/actions/product-actions";
import { SingleProductSliceActions } from "../store/index";

function Product() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const { singleProduct, error, success } = useSelector(
    (state) => state.getProduct
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(SingleProductSliceActions.setsSingleProductReset());
    }
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id, error]);

  console.log(success);

  const rating = {
    size: 20,
    count: 5,
    color: "grey",
    activeColor: "orange",
    value: 2.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <FontAwesomeIcon icon={faStar} />,
    halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
    filledIcon: <FontAwesomeIcon icon={faStar} />,
  };

  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [state4, setState4] = useState(false);

  const clickHandler1 = () => {
    setState1(true);
    setState2(false);
    setState3(false);
    setState4(false);
  };
  const clickHandler2 = () => {
    setState1(false);
    setState2(true);
    setState3(false);
    setState4(false);
  };
  const clickHandler3 = () => {
    setState1(false);
    setState2(false);
    setState3(true);
    setState4(false);
  };
  const clickHandler4 = () => {
    setState1(false);
    setState2(false);
    setState3(false);
    setState4(true);
  };

  return (
    <>
      {success &&<section>
        <div className={`${classes["product-main-info"]} `}>
          <div className={classes["product-row"]}>
            <div
              className={`${classes["product-col-md-8"]} ${classes["product-images"]}`}
            >
              <div className={`${classes["all-product-images"]}`}>
                <div
                  className={classes["grid-img-box"]}
                  onClick={clickHandler1}
                >
                  <img
                    src="/images/realme Book.png"
                    alt="..."
                    className={classes["grid-img"]}
                  />
                </div>
                <div
                  className={classes["grid-img-box"]}
                  onClick={clickHandler2}
                >
                  <img
                    src="/images/realme Band 2.png"
                    alt="..."
                    className={classes["grid-img"]}
                  />
                </div>
                <div
                  className={classes["grid-img-box"]}
                  onClick={clickHandler3}
                >
                  <img
                    src="/images/realme Cobble Bluetooth.png"
                    alt="..."
                    className={classes["grid-img"]}
                  />
                </div>
                <div
                  className={classes["grid-img-box"]}
                  onClick={clickHandler4}
                >
                  <img
                    src="/images/realme Pad.png"
                    alt="..."
                    className={classes["grid-img"]}
                  />
                </div>
              </div>

              <div className={`${classes["product-current-image"]}`}>
                {state1 && (
                  <img
                    src="/images/realme Book.png"
                    alt="..."
                    className={`${classes["main-img"]}`}
                  />
                )}
                {state2 && (
                  <img
                    src="/images/realme Band 2.png"
                    alt="..."
                    className={`${classes["main-img"]}`}
                  />
                )}
                {state3 && (
                  <img
                    src="/images/realme Cobble Bluetooth.png"
                    alt="..."
                    className={`${classes["main-img"]}`}
                  />
                )}
                {state4 && (
                  <img
                    src="/images/realme Pad.png"
                    alt="..."
                    className={`${classes["main-img"]}`}
                  />
                )}
              </div>
            </div>

            <div
              className={`${classes["col-md-4"]} ${classes["product-info"]}`}
            >
              <div
                className={`${classes["product-details"]} ${classes["font-poppin"]}`}
              >
                <div className={classes["product-name"]}>{ singleProduct.name}</div>
              </div>

              <div
                className={`${classes["product-price-rating"]} ${classes["font-poppin"]}`}
              >
                <div className={classes["product-price-box "]}>
                  <div className={classes["product-price"]}>
                    <FontAwesomeIcon
                      icon={faIndianRupeeSign}
                      style={{ fontSize: "1.3rem", margin: "0 auto" }}
                    />
                    { singleProduct.price}
                  </div>
                </div>
                <div className={classes["product-rating"]}>
                  Rating
                  <ReactStars {...rating} />
                </div>
              </div>

              <div
                className={`${classes["product-description"]} ${classes["font-poppin"]}`}
              >
                MediaTek Helio G85 Octa-core Processor <br />
                4 GB RAM | 128 GB ROM | Expandable Upto 256 GB <br />
                16.51 cm (6.5 inch) HD+ Display <br />
                50MP+2MP+2MP Primary Camera | 8MP Front Camera <br />
                6000 mAh Battery <br />
              </div>

              <div className={classes["product-purchase"]}>
                <div className={`${classes["add-cart"]}`}>
                  <Button variant="outline-warning">Add to Cart</Button>
                </div>
                <div
                  className={`${classes["buy-now"]} ${classes["btn-outline-primary"]}`}
                >
                  <Button variant="outline-primary">Buy now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes["recomended-deals"]}>
          <div className={classes["recomended-products-heading"]}>
            Recomended Products
          </div>
          <div className={`${classes["background-1"]}`}>
            <RecomendedProducts />
          </div>
        </div>

        <div className={classes["all-product-details"]}>
          <div
            className={`${classes["details-navigation"]} ${classes["border"]}`}
          >
            <div className={classes["product-specs"]}>SPECS</div>
            <div className={classes["product-reviews"]}>
              <p>Reviews</p>
              <ReactStars {...rating} />
              <p>{rating.value}</p>
            </div>
          </div>
          <div
            className={`${classes["product-specs-main"]} ${classes["border"]}`}
          >
            <div className={classes["main-heading"]}>Specifications</div>
            <div
              className={`${classes["general-specs"]} ${classes["all-specs-category-box"]}`}
            >
              <div className={classes["heading"]}>General</div>
              <div
                className={`${classes["individual-spec"]} ${classes["row"]}`}
              >
                <div
                  className={`${classes["col-md-3"]} ${classes["spec-name"]}`}
                >
                  Whats in the box
                </div>
                <div
                  className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                >
                  laptop, charger, waranty card, user manual
                </div>
              </div>

              <div
                className={`${classes["individual-spec"]} ${classes["row"]}`}
              >
                <div
                  className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                >
                  Model number
                </div>
                <div
                  className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                >
                  CB 11ODS8
                </div>
              </div>
              <div
                className={`${classes["individual-spec"]} ${classes["row"]}`}
              >
                <div
                  className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                >
                  Model name
                </div>
                <div
                  className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                >
                  vivo book
                </div>
              </div>
              <div
                className={`${classes["individual-spec"]} ${classes["row"]}`}
              >
                <div
                  className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                >
                  color
                </div>
                <div
                  className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                >
                  Onyx black
                </div>
              </div>
              <div
                className={`${classes["individual-spec"]} ${classes["row"]} ${classes["last"]}`}
              >
                <div
                  className={`${classes["spec-name"]} ${classes["col-md-3"]}`}
                >
                  Power Supply
                </div>
                <div
                  className={`${classes["specs-details"]} ${classes["col-md-6"]} ${classes["offset-3"]}`}
                >
                  65W USB type-C
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes["product-reviews-all"]}`}>
            <div className={classes["main-heading"]}>Reviews</div>
            <IndividualReview />
          </div>
        </div>
      </section>}
    </>
  );
}

export default Product;
