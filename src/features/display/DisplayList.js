import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice.js";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartner(state),
  ]);
  console.log("items array:", items);

  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        console.log("ITEM HEREEEEEE:", item);
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        }
        return (
          featuredItem && (
            <Col md className="m-1" key={idx}>
              <AnimatedDisplayCard item={featuredItem} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
