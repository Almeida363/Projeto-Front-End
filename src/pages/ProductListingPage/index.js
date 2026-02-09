import "./style.css";
import Filter from "../../components/FilterGroup";
import ProductList from "../../components/ProductListing";
import SortOptions from "../../components/ProductCard/OrderBy";

export default function ProductPage() {
    return (
        <div className="darkBackground">
            <div className="productBox">
                <div className="headerBox">
                    <p className="productResults">Resultados para "Tênis" - <span className="productCountGray">72 produtos</span> </p>
                    <SortOptions className="sort-options" />
                </div>

                <div className="contentBox">
                    <Filter className="filter-by" />
                    <ProductList />
                </div>
            </div>
        </div>
    );
}
