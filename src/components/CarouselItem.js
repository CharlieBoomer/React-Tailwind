const CarouselItem = ({avatar, name, text}) => {
    return ( 
    <div>
        <img src={avatar} alt="" />
        <h4>{name}</h4>
        <p>{text}</p>
    </div> 
    );
}
 
export default CarouselItem;