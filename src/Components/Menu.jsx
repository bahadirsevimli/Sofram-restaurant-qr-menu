import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"


export default function Menu () {

    const { menuCode } = useParams();
  const menus = useSelector((store) => store.menuHeader.menuTitle);
  const selectedMenu = menus.find((menu) => menu.code === menuCode);
  const selectedCategory = selectedMenu.code;

  const menu = useSelector((store) => store.menu);


console.log(selectedCategory)
console.log(menu)


    return(
     <div className="w-full flex justify-center mt-10 mb-10">
      <div className="w-[90%] max-w-2xl flex justify-between flex-wrap gap-y-10">
         {menu[selectedCategory]?.map((item) => (
            <div key={item.id} className="w-[43%] flex flex-col gap-2">
              <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p className="text-gray-500">{item.context}</p>
              <div className="flex w-full justify-end">
                <p>{item.price}</p>
              </div>
            </div>

        ))}
      </div>
   
     </div>
    )
} 