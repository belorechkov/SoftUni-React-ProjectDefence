import PropertyCard from "./property-card/PropertyCard";
import { useGetAllProperties } from "../../hooks/useProperties";

export default function PropertiesList() {
    const [properties] = useGetAllProperties();

    return (
        <div className="Properties_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="Properties_taital_main">
                            <h1 className="Properties_taital">All Properties</h1>
                            <hr className="border_main" />
                        </div>
                    </div>
                </div>
                <div className="Properties_section_2">
                    <div className="row">
                        {properties.map((property) => (
                            <PropertyCard key={property._id} {...property} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
