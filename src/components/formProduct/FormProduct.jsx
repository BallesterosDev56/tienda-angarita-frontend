import './formProduct.css'
import stock from '../../assets/images/stock.png'

export const FormProduct = ()=> {
    return(
        <>
            <section className='section--product mb-6 pb-6'>
                <div className="title--product mb-5 pt-5">
                    <img src={stock} alt="logo" />
                    <h2><strong className='is-size-4 has-text-black mt-3'>Add a new Product</strong></h2>
                </div>
                <div className="form--container">
                    <form id='form--product'>
                        <div className="name--product mt-5">
                            <label htmlFor="name--input">Product name</label>
                            <input className='input is-full-width has-background-light has-text-black mt-3' type="text" id="name--input" />
                        </div>

                        <div className="description--product mt-6">
                            <label htmlFor="description--textarea">Product description</label>
                            <textarea className='textarea has-background-light has-text-black mt-3' name="description" id="description--textarea"></textarea>
                        </div>

                        <div className="price--product mt-6">
                            <label htmlFor="price--input">Product price</label>
                            <input className='input is-full-width has-background-light has-text-black mt-3' type="number" id="name--input" />
                        </div>

                        <div className="category--product mt-6">
                            <h2><strong className='has-text-weight-bold is-size-6 has-text-black'>Product categories</strong></h2>
                            <div className="categories mt-5">
                                <label className="radio-container">
                                    <input type="radio" name="category" value="electronics" required/>
                                    Electronics
                                </label>
                                <label className="radio-container">
                                    <input type="radio" name="category" value="clothing"/>
                                    Clothing
                                </label>
                                <label className="radio-container">
                                    <input type="radio" name="category" value="home-appliances"/>
                                    Home Appliances
                                </label>
                            </div>
                        </div>

                        <div className="photo--product mt-6">   
                            <h2><strong className='has-text-weight-bold is-size-6 has-text-black'>Feature photo</strong></h2>
                            <div class="file has-name">
                                <label class="file-label mt-3">
                                    <input class="file-input" type="file" name="resume" />
                                    <span class="file-cta has-background-light has-text-black">
                                    <span class="file-icon">
                                        <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label"> Choose a file… </span>
                                    </span>
                                    <span class="file-name has-text-black is-italic"> No file selected... </span>
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