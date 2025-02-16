import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



export default function MenuHeaders(){

    const menus = useSelector((store) => store.menuHeader.menuTitle);
   
    return(
        <div className="w-full flex justify-center">
            <div className="border-2 border-amber-300 w-[80%]">
                {menus.map((menuHeader) => {
                   
                    return(
                    <Link to={`/${menuHeader.code}`} >
                        <div key={menuHeader.id} className="border-2 border-amber-600">
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