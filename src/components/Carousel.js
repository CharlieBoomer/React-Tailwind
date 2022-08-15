import {images} from './CarouselData';
import Button from './Button';

const Crousel = () => {
    return ( 
    <div className='md:hidden flex flex-row'>
        <div className='flex pt-8'>
        <Button svg={<svg xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="red">
        <path fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" 
        clipRule="evenodd" />
        </svg>}/>
        
    </div>
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray">
            <img src={images[0].image} alt="" className="w-16 -mt-14"/>
            <h5 className="text-lg font-bold">{images[0].name}</h5>
            <p className="text-sm text-darkGrayishBlue">{images[0].text}</p>

        </div>
        <div className='flex pt-8'>            
            <Button svg={
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 stroke-0 fill-current text-brightRedLight hover:fill-current hover:text-black" 
            viewBox="0 0 20 20" 
            fill="black">
            <path 
            fillRule="evenodd" 
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
            clipRule="evenodd" />
            </svg>}/>
        </div>
    </div> 
    );
}
 
export default Crousel;