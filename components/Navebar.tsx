import styles from "./navebar.module.css";
import Content from "./Content";


const Navebar = () => {

    const data = [
        {
            title: "cars",
            categoryes: [ // Consider renaming to 'categories' for proper spelling
                { name: "Category 1", link: "http://link1.com" },
                { name: "Category 2", link: "http://link2.com" },
      
     
            ]
        },
        {
            title: "cars",
            categoryes: [ // Consider renaming to 'categories' for proper spelling
                { name: "Category 1", link: "http://link1.com" },
                { name: "Category 2", link: "http://link2.com" },
      
     
            ]
        },
        {
            title: "cars",
            categoryes: [ // Consider renaming to 'categories' for proper spelling
                { name: "Category 1", link: "http://link1.com" },
                { name: "Category 2", link: "http://link2.com" },
      
     
            ]
        },
        {
            title: "cars",
            categoryes: [ // Consider renaming to 'categories' for proper spelling
                { name: "Category 1", link: "http://link1.com" },
                { name: "Category 2", link: "http://link2.com" },
                { name: "Category 2", link: "http://link2.com" },
                { name: "Category 2", link: "http://link2.com" },
                { name: "Category 2", link: "http://link2.com" },
                { name: "Category 2", link: "http://link2.com" },
                { name: "Category 2", link: "http://link2.com" },
                { name: "Category 2", link: "http://link2.com" },
                
      
     
            ]
        },
        {
            title: "cars",
            categoryes: [ // Consider renaming to 'categories' for proper spelling
                { name: "Category 1", link: "http://link1.com" },
                { name: "Category 2", link: "http://link2.com" },
      
     
            ]
        }
 



    ];



    return (
        <>
            <header className={styles.header}>
                <h1>My Website</h1>
                <nav className={styles.nav}>
                    <ul>
                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>


                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>


                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>


                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>


                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>

                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Home</a>
                                <div className={styles.triangle}></div>
                            </div>
                            <div className={styles.megamenu}>
                                <div className={styles.contentcontainer}>
                                    {data.map((item, index) => (
                                       <Content tip={item}/>
                                    ))}

                                    <div></div>
                                </div>
                            </div>
                        </li>








                        <li className={styles.menuItem}>
                            <div className={styles.linkcontainer}>
                                <a href="#">Services</a>
                                <div className={styles.triangle}></div>
                            </div>


                            <div className={styles.megamenu}>
                                <div>56666666666777777777777777777777777777
                                    777777777777777777775555555555555555
                                    555555555555555555555555555555555555555555555555</div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>


        </>

    )



}


export default Navebar
