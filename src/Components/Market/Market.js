import { Link } from "react-router-dom";

import './Market.css'
const Market = (props) => {

    const { data, isPending, error } = props


    return (
        <div className="market_body">
            <div className="search">
                <Link to="" className="logo">Market Place</Link>
                <form action="/search" method="post" className="search-bar-form">
                    <input type="search" id="search-bar" name="query" placeholder="Search For products" />
                    <button type="submit" className="search_shop_btn">
                        <label htmlFor="search-bar" className="fas fa-search"></label>
                    </button>
                </form>
                <Link to="/Cart" className="cart_heading"><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
            </div>



            <section className="home" id="home">

                <div className="image">
                    <img src="/Market_Images/main-img.avif" alt="" />
                </div>

                <div className="content">
                    <span>One stop For farmers!</span><br /><br />
                    <h2>Get all the assential products For cultivating crops and make our country stay healthy</h2>
                </div>

            </section>


            <section className="category" id="category">

                <h1 className="heading">shop by <span>category</span></h1>

                <div className="box-container">
                    <div className="box">
                        <h3>Seeds</h3>
                        <p>upto 50% off</p>
                        <img src="/Market_Images/seeds1.webp" alt="" />
                        <Link to="/search/seeds" className="shop_btn">shop now</Link>
                    </div>
                    <div className="box">
                        <h3>Fertilizers</h3>
                        <p>upto 44% off</p>
                        <img src="/Market_Images/fertiliser1.jpg" alt="" />
                        <Link to="/search/fertilizers" className="shop_btn">shop now</Link>
                    </div>
                    <div className="box">
                        <h3>Pesticides</h3>
                        <p>upto 35% off</p>
                        <img src="/Market_Images/fertiliser2.jpg" alt="" />
                        <Link to="/search/pesticides" className="shop_btn">shop now</Link>
                    </div>

                </div>

            </section>


            <section className="product" id="product">

                <h1 className="heading">latest <span>products</span></h1>

                <div className="box-container">
                    {error && <h1>error</h1>}
                    {isPending && <h1 style={{fontSize:"30px"}}>Loading .......</h1>}
                    {data && data.map(prod => (
                        <div className="box" key={Math.random()}>
                            <span className="discount" style={{ fontSize: "14px" }}>
                                {(((prod.mrp - prod.price) / prod.mrp) * 100).toFixed(1)}<br />Off
                            </span>
                            <Link to={"/productpage/" + prod._id} target="_blank">
                                <img src={prod.img1} alt="" />
                                <h3>{prod.name}</h3>
                            </Link>
                            <div className="stars">
                                <i className="fas fa-star" key={Math.random()}></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                            <div className="price"> Rs {prod.price}/- <span> Rs {prod.mrp}/- </span> </div>


                            <form action="/addToCart" method="post">
                                <div className="quantity">
                                    <span>quantity : </span>
                                    <input type="number" name="quantity" min="1" max="1000" defaultValue="1" />
                                    <span>  kg </span>
                                </div>
                                <Link to="/checkoutpage" className="shop_btn">Buy Now</Link>

                                <div style={{ display: "none" }}>
                                    <input type="text" name="name" defaultValue={prod.name} />
                                    <input type="text" name="productId" defaultValue={prod.id} />
                                    <input type="Number" name="price" defaultValue={prod.price} />
                                    <input type="Number" name="mrp" defaultValue={prod.mrp} />
                                    <input type="text" name="img" defaultValue={prod.img1} />
                                </div>
                                <button type="submit" className="addToCart_btn">Add To Cart</button>
                            </form>

                        </div>
                    ))}
                </div>

            </section>








            <footer className="market_footer">
                <div className="market_footer-container ">
                    <div className="market_row ">
                        <div className="market_footer-col ">
                            <h4>company</h4>
                            <ul>
                                <li><Link to="/Aboutuss">about us</Link></li>
                                <li><Link to="# ">our services</Link></li>
                                <li><Link to="# ">privacy policy</Link></li>
                                <li><Link to="# ">affiliate program</Link></li>
                            </ul>
                        </div>
                        <div className="market_footer-col " id="market_footer-col-online-shop ">
                            <h4>get help</h4>
                            <ul>
                                <li><Link to="# ">FAQ</Link></li>
                                <li><Link to="# ">shipping</Link></li>
                                <li><Link to="# ">returns</Link></li>
                                <li><Link to="# ">order status</Link></li>
                                <li><Link to="# ">payment options</Link></li>
                            </ul>
                        </div>
                        <div className="market_footer-col ">
                            <h4>online shop</h4>
                            <ul>
                                <li><Link to="/search/seeds">seeds</Link></li>
                                <li><Link to="/search/fertilizers">fertilizers</Link></li>
                                <li><Link to="/search/pesticides">pesticides</Link></li>
                            </ul>
                        </div>
                        <div className="market_footer-col ">
                            <h4>follow us</h4>
                            <div className="social-links ">
                                <Link to="# "><i className="fab fa-facebook-f "></i></Link>
                                <Link to="# "><i className="fab fa-twitter "></i></Link>
                                <Link to="# "><i className="fab fa-instagram "></i></Link>
                                <Link to="# "><i className="fab fa-linkedin-in "></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>
    );
}

export default Market;