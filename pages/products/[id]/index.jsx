import Head from "next/head";
import Image from "next/image";

const imgData = [{
    id: 1,
    url: 'https://dasart.ru/userdata/image/bf/89/bf897e6f3453ff34b95b7148197438f1.jpg',
    alt: "image",
    width: 300,
    height: 300
}, {
    id: 2,
    url: 'https://www.обои55.рф/image/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/2/2/225_product/thumb1000x1000/265702111/prichal.jpg',
    alt: "image",
    width: 300,
    height: 300
}, {
    id: 3,
    url: 'https://i.pinimg.com/originals/b1/02/dc/b102dcda56577ee8b860b89dadf0f4c0.jpg',
    alt: "image",
    width: 300,
    height: 300
},]

const Product = () => {
    return (<div>
        <Head>
            <title>detail product</title>
        </Head>
        <div>
            <div>
                {imgData.map(({id, url, width, height, alt}) => (<Image
                    key={id}
                    src={url}
                    alt={alt}
                    width={width} height={height}
                    loading={"lazy"}
                />))}
            </div>
            detail product
        </div>
    </div>)
}
export default Product;