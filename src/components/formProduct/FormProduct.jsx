import './formProduct.css'
import stock from '../../assets/images/stock.png'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { FetchNewProduct } from '../../logic/fetchNewProduct'

export const FormProduct = ()=> {
    const [fileName, setFileName] = useState('No file selected...');
    const {register, handleSubmit, formState : {errors}} = useForm();

    const onSubmit = (data)=> {
        const formData = new FormData();
        
        for (const key in data) {
            formData.append(key, data[key]);
            
        }
        const inputFile = document.getElementById('productPhoto');
        formData.append('productPhoto', inputFile.files[0]);
        
        FetchNewProduct(formData).then((Response)=>{
            console.log(Response);
            
        })

    }

    const manageChange = ()=> {
        //cambiamos el nombre de el archivo mostrado en pantalla:
        const inputFile = document.getElementById('productPhoto');
        setFileName(inputFile.files[0].name);
        
    }

    return(
        <>
            <section className='section--product mb-6 pb-6'>
                <div className="title--product mb-5 pt-5">
                    <img src={stock} alt="logo" />
                    <h2><strong className='is-size-4 has-text-black mt-3'>Add a new Product</strong></h2>
                </div>
                <div className="form--container">
                    <form id='form--product' onSubmit={handleSubmit(onSubmit)}>
                        <div className="name--product mt-5">
                            <label htmlFor="name--input">Product name</label>
                            <input {...register('productName')} className='input is-full-width has-background-light has-text-black mt-3' type="text" id="name--input" required/>
                        </div>

                        <div className="description--product mt-6">
                            <label htmlFor="description--textarea">Product description</label>
                            <textarea {...register('productDescription')} className='textarea has-background-light has-text-black mt-3' id="description--textarea" required></textarea>
                        </div>

                        <div className="price--product mt-6">
                            <label htmlFor="price--input">Product price</label>
                            <input {...register('productPrice')} className='input is-full-width has-background-light has-text-black mt-3' type="number" id="name--input" required/>
                        </div>

                        <div className="category--product mt-6">
                            <h2><strong className='has-text-weight-bold is-size-6 has-text-black'>Product categories</strong></h2>
                            <div className="categories mt-5">
                                <label className="radio-container">
                                    <input {...register('productCategory')} type="radio" value="Electronics" required/>
                                    Electronics
                                </label>
                                <label className="radio-container">
                                    <input {...register('productCategory')} type="radio" value="Clothing"/>
                                    Clothing
                                </label>
                                <label className="radio-container">
                                    <input {...register('productCategory')} type="radio" value="Home Appliances"/>
                                    Home Appliances
                                </label>
                            </div>
                        </div>

                        <div className="photo--product mt-6">   
                            <h2><strong className='has-text-weight-bold is-size-6 has-text-black'>Feature photo</strong></h2>
                            <div className="file has-name">
                                <label className="file-label mt-3">
                                    <input onChange={manageChange} className="file-input" type="file" id='productPhoto' required/>
                                    <span className="file-cta has-background-light has-text-black">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label"> Choose a file… </span>
                                    </span>
                                    <span className="file-name has-text-black is-italic">{ fileName }</span>
                                </label>
                            </div>
                        </div>
                        <button className='button is-info is-fullwidth is-size-6 mt-6'>Add Product</button>

                    </form>
                </div>
            </section>
        </>
    )
}