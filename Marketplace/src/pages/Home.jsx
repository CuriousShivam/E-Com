import Products from "./customer/products.jsx"
import Carousel from "./customer/HomeSections/Carousel.jsx"
import MainProducts from "./customer/HomeSections/MainProducts.jsx"
import FAQ from "./customer/HomeSections/FAQ.jsx"
import Newsletter from "./customer/HomeSections/Newsletter.jsx"
import UserReviews from "./customer/HomeSections/UserReviews.jsx"
import ShowCategory from "./customer/HomeSections/ShopByCategory.jsx"
import SearchBar from "./customer/HomeSections/SearchBar.jsx"
import {useEffect, useState} from "react";
import axios from "axios";


const Home = () => {
    const [banners, setBanners] = useState([]);
    const [bannersLoading, setBannersLoading] = useState(true);

    const [mainProducts, setMainProducts] = useState([]);
    const [mainProductsLoading, setMainProductsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/ui/get`);

                if (res.data.success) {
                    const data = res.data.data;
                    //console.log("Inside Home.jsx",data.banners, data.mainProducts)
                    // setBanners(data.banners || []);
                    // setBannersLoading(false);

                    const productIds = data.mainProducts || [];

                    if (Array.isArray(productIds)) {
                        const productRequests = productIds.map((id) =>
                            axios.post(`${import.meta.env.VITE_BASE_URL}/api/product/getProductById`, { id })
                        );

                        const productResponses = await Promise.all(productRequests);
                        const products = productResponses.map((response) => response.data.data);

                        setMainProducts(products);
                        setMainProductsLoading(false);
                        setBanners(data.banners || []);
                        setBannersLoading(false);
                    }
                }
            } catch (err) {
                console.error("Error fetching homepage data:", err);
            }
        };



        fetchData();
    }, []);
    return (
        <>
            <SearchBar />
            <ShowCategory />
            <Carousel bannersLoading={bannersLoading} banners={banners} />
            <h1 className="text-2xl mx-6 py-2 px-2 border-b-2 mb-4 border-black font-bold">Trending Products</h1>
            <MainProducts mainProductsLoading={mainProductsLoading} mainProducts={mainProducts}/>
            <h1 className="text-2xl mx-6 py-2 px-2 border-b-2 mb-4 border-black font-bold">Explore Products</h1>
            <Products />
            <UserReviews />
            <Newsletter />
            <FAQ />
        </>
    );
}

export default Home;
