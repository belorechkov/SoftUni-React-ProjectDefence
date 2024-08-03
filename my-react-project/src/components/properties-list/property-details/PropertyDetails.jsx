
import { useParams } from "react-router";
import { useGetOneProperty } from "../../../hooks/useProperties";
import Button from "react-bootstrap/esm/Button";



export default function PropertyDetails() {
    const { propertyId } = useParams()
    const [property] = useGetOneProperty(propertyId)

    return (
        <div className="details_box">
            <div className="details_image"><img src={property.img_url} /></div>
            <div className="image_box">
                <div className="left_box">
                    <h2 className="details_offer_type">{property.type_offer}<br />
                        <span>{property.type_property},</span>
                        <span>{property.area} m<sup>2</sup></span>
                    </h2>
                    <div className="area_main">
                        <h3 className="details_location"><i className="location_icon fa fa-map-marker offer_icon" ></i><span>{property.city}, {property.district}, {property.street}.</span></h3>
                        <div className="details_rate_text" ><span>{property.price} EUR</span></div>
                    </div>

                    <div className="area_main" style={{ display: "block" }}>
                        <h3 className="details_description"><span>Description:</span></h3>
                        <h3 className="details_location"><span>{property.description}</span></h3>
                    </div>
                    <div className="modify_btns">
                        <Button variant="primary">Like</Button>
                        <Button variant="success">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}