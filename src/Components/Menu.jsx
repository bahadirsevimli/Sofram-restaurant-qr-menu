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
     <>
    {menu[selectedCategory]?.map((item) => (
  <h4 key={item.id}>{item.name}</h4>
))}
     </>
    )
} 