//css
import styles from "./home.module.css";

function Home() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                Car Catalog
            </h1>
            <div>
                <div className={styles.item}>
                    <div
                    className={styles.img}
                    style={{
                        backgroundImage:'url(/1.jpg)',
                    }}
                    />
                    <div className={styles.info}>
                        <h2>Car 1</h2>
                        <p>$100 000</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;