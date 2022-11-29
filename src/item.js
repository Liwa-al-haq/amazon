import React from 'react';
const Item = ({title,desc,price,discount,backgroundImg,BtnTxt,BtnLink}) => {
    
    return (
        <div className='  flex flex-row flex-1 mt-2 inline-flex justify-centre p-1 truncate overflow-hidden ' >
            <div className=' border overflow-hidden  bg-white bg-opacity-100 backdrop-blur-xl rounded drop-shadow-xl' style={{border:"gray solid",borderRadius:"10px"}} >
                <h3 className='font-bold text-center'>{title}</h3>
                <img src={backgroundImg} alt='' className=' h-72 max-md:h-56 max-lg:h-64'></img>
                <p className='text-center'>{desc}</p>
                <p className='text-center'>{price}</p>
                <p className='line-through text-center'>{discount}</p>
                <button className='text-center justify-center align-middle border rounded p-2 ml-24 mt-3 mb-2 bg-yellow-400'>Add to Cart</button>
                
            </div>
        </div>
    );
};

export default Item;