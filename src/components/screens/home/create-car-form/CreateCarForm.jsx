import { useState } from 'react';
//styles
import styles from './CreateCarForm.module.css';

let clearData = {
    price:'',
    name:'',
    image:'',
}

const CreateCarForm = ({setCars}) => {

    const [data , setData] = useState({
        price:'',
        name:'',
        image:'',
    })
    
    const createCar = e => {
        e.preventDefault()
        //console.log({name,price,image})
        setCars(prev => [...prev, { id: prev.length + 1,...data}]
        )
        setData(clearData)
    }

    return <form className={styles.form}>

        <input id='inputCreateCar' className={styles.input} placeholder="Name" type="text" 
        onChange={e => setData(prev => (
            {
                ...prev, name: e.target.value,
            }
        ))} value={data.name}/>

        <input id='inputCreateCar' className={styles.input} placeholder="Price" type="text" 
        onChange={e => setData(prev => (
            {
                ...prev, price: e.target.value,
            }
        ))} value={data.price}/>

        <input id='inputCreateCar' className={styles.input} placeholder="Image (only img-link)" type="text" 
        onChange={e => setData(prev => (
            {
                ...prev, image: e.target.value,
            }
        ))} value={data.image}/>

        <button className={styles.btn} onClick={createCar}>Create</button>

    </form>
};

export default CreateCarForm;