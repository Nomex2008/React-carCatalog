//css
import styles from "./home.module.css";
//cars
import {cars} from "./cars.data.js";
//const cars = []
import CarItem from "./car-item/carItem.jsx";

function Home() {
    return (
        <div className={styles.wrapper}>

            <h1 className={styles.title}>
                Car Catalog
            </h1>

            <div>
                {cars.length ? (
                cars.map(car => (
                    <CarItem key={car.id} car={car}/>
                ))
                ) : (
                <p>There are no cars</p>
            )}
            </div>

        </div>
    )
};

export default Home;