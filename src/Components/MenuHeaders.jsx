import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



export default function MenuHeaders(){

    const menus = useSelector((store) => store.menuHeader.menuTitle);
   
    return(
        <div className="w-full flex justify-center font-[Futura-Medium]">
            <div className=" w-[80%] m-10 flex flex-col gap-3">
                {menus.map((menuHeader) => {
                   
                    return(
                    <Link to={`/${menuHeader.code}`} >
                        <div key={menuHeader.id} 
                        className=" relative p-8 rounded-2xl font-bold bg-cover bg-center text-white tracking-widest text-xl"
                        style={{  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1)), url("/assets/Images/MenuHeaderBgImg/${menuHeader.code}.jpg")` }}>
                            
                            <h3>{menuHeader.name}</h3>
                            <span><img src="/svg/arrow-right-solid-svg" alt="" /></span>
                        </div>
                     </Link>    
                    )
                })}
                
            </div>
        </div>
    
    ) 
}