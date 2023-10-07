
import { logoDark ,cartImage,leftlogo} from '../assets/index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Hader = () => {
  const productData = useSelector((state)=> state.bazar.productData);
 const userInfo =useSelector((state)=> state.bazar.userInfo);
  console.log(userInfo)
  return (
    <div className ="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
    <div className ="max-w-screen-xl h-full mx-auto flex items-center justify-between">
    <Link to="/">  <div>
            <img  className="w-28" src={logoDark} alt="logoDark"/>
        </div>  
        </Link>  
    <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
        <Link to="/"> <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li></Link>
           <Link to="/doc"> <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">About</li></Link>
           <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li> */}
        </ul>
        <Link to="cart" > <div className="relative">  
    <img className="w-6"src={cartImage} alt="CartImage"/>
<span className="absolute w-6 top-2 left-0 text-sm flex item-center justify-center font-semibold text-orange-900 ">{productData.length}</span>
      </div></Link>
     <Link to="/Login"> <img 
     className="w-8 h-8 rounded-full "
     src={userInfo?userInfo.image:leftlogo} alt="logo"/></Link>
    {userInfo && <p className='text-base font-bold text-bold text-black underline underline-offset-2'>{userInfo.name}</p>}
    
      </div>
      </div>
    </div>
  )
}

export default Hader

