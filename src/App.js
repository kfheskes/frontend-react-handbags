import React, {Fragment} from 'react';
import './App.css';
import Button from "./components/Button/Button";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import Product from "./components/Product/Product";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Tile from "./components/Tile/Tile";
function App() {

    return (
        <>
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button type="button"
                        buttonClickHandler={() => {
                            console.log('to the collection')
                        }} isDisabled={false}
                >to the collection</Button>
                <Button type="button" buttonClickHandler={()=>{ console.log('shop all bags')}} isDisabled={false} > shop all bags</Button>

                <Button type="button" buttonClickHandler={()=> { console.log('pre-orders')}} isDisabled={true}> pre-orders</Button>
            </nav>
            <main>
               <Product label="Best seller" image={bag1} imageDescription="The handy bag" paragraph="The handy bag" price="€400,-">
               </Product>
                <Product label="Best seller" image={bag2} imageDescription="The stylish bag" paragraph="The stylish bag" price="€250,-">
                </Product>
                <Product label="New collection" image={bag3} imageDescription="The simple bag" paragraph="The simple bag" price="€300,-">
            </Product>
                <Product label="New collection" image={bag4} imageDescription="The trendy bag" paragraph="The trendy bag" price="€150,-">
            </Product>
            </main>
            <footer>
                <Tile titleBrand="THE BRAND">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis delectus dignissimos expedita explicabo, facere fugiat impedit</p>
                    <p>incidunt ipsam necessitatibus nemo neque obcaecati odit optio pariatur quas quis rem repellat repellendus repudiandae velit voluptatem voluptatibus. Aspernatur eveniet iusto minus optio quia. Accusamus autem commodi, dolor nobis rem totam veniam voluptatibus.</p>
                </Tile>
                <Tile image={brand} imageDescription="brandLogo"/>
                <Tile image={ourStory} alt="our_story"/>
                <Tile titleBrand="OUR STORY" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quia tempore temporibus. Culpa, itaque voluptatem. Aut blanditiis facilis hic ipsam, officia officiis soluta unde vel voluptate voluptatibus! Asperiores blanditiis eum iure labore nam nesciunt odio officia quas repellat vero! Amet at commodi est fugit ipsam praesentium quas quisquam rem similique.</p>
                </Tile>
            </footer>
        </div>
    </>
    );
}

export default App;



