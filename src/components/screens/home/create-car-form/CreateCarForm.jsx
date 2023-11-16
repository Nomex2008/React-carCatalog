import { useState } from 'react';
//styles
import styles from './CreateCarForm.module.css';

const CreateCarForm = ({setCars}) => {

    let [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState('')
    
    const createCar = e => {
        e.preventDefault()
        //console.log({name,price,image})
        setCars(prev => [...prev, { id: prev.length + 1,name,price,image}]
        )
    }

    return <form className={styles.form}>

        <input id='inputCreateCar' className={styles.input} placeholder="Name" type="text" 
        onChange={e => setName(e.target.value)} value={name}/>
        <input id='inputCreateCar' className={styles.input} placeholder="Price" type="text" 
        onChange={e => setPrice(e.target.value)} value={price}/>
        <input id='inputCreateCar' className={styles.input} placeholder="Image (only img-link)" type="text" 
        onChange={e => setImage(e.target.value)} value={image}/>

        <button className={styles.btn} onClick={createCar}>Create</button>

    </form>
};

export default CreateCarForm;