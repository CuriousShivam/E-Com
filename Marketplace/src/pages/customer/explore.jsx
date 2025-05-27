import Product from "../customer/products.jsx"
import {motion} from 'framer-motion';

const explore = () => {
    return (<motion initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}><Product/></motion>);
}

export default explore;