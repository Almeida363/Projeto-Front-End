import Offers from '../../components/Section/Offers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrossel from '../../components/Section/Carrossel';
import Collection from '../../components/Section/Collection';
import Collection2 from '../../components/Section/Collection2';
import ProductsHigh from '../../components/ProductsHigh';
import './style.css';

export default function Home() {

    return (
        <div>
            <Carrossel />
            <div className='background'>
                <Collection />
                <Collection2 />
                <ProductsHigh />
            </div>
            <Offers />
        </div>
    );
}