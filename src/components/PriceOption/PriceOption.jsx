
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const{id,name,price,features}=option;
  return (
    <div className=' bg-red-200 rounded-lg p-6 flex flex-col'>
        <h1 className='font-bold text-4xl'>{id}</h1>
        <h2>
            <span className=' text-3xl'>{price}</span>
            <span className=' text-xl'>/mon</span>
        </h2>
        <h3>{name}</h3>
        <div className=' pl-6 flex-grow'>
        {
            features.map((feature,idx)=><Feature key={idx} feature={feature}></Feature>)
        }
        </div>
        <button  className=' mt-12 bg-purple-600 w-full py-2 font-bold rounded-lg hover:bg-purple-800 text-white'>Buy Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option:PropTypes.object.isRequired
}

export default PriceOption