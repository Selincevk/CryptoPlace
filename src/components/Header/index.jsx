import { Link, NavLink } from "react-router-dom"
import { MdArrowOutward } from "react-icons/md"
import { CoinContext } from "../../context/CoinContext.jsx"
import { useContext } from "react"

const Header = () => {
 const {setCurrency } =  useContext(CoinContext)
    const currencyHandler = (e) => {
// Selec alanındaki değişim neticesinde elde edilen değeri al
const selectedCurrency = e.target.value;
        switch (selectedCurrency) {
            case "usd":
              setCurrency({ name: "usd", symbol: "$" });
              break;
            case "eur":
              setCurrency({ name: "eur", symbol: "€" });
              break;
            default:
              setCurrency({ name: "usd", symbol: "$" });
              break;
          }
    }
  return (
    <header className="flex items-center justify-between px-[10%] py-5 border-b-2 border-[#3c3c3c] bg-[#1a1a40]">
{/* LOGO */}
        <Link to="/">
        <img src="/logo.png" alt="logo" className="min-w-[90px] w-[max(12vw,120px)]"/>
        </Link>

{/* NAVİGATİON */}
    <ul className="hidden md:flex gap-10 ml-[50px] lg:ml-0">
        <NavLink to="/" className="cursor-pointer hover:text-[#ffde4d] transition">
Home
        </NavLink>
        <NavLink className="cursor-pointer hover:text-[#ffde4d] transition">
Features
        </NavLink>
        <NavLink className="cursor-pointer hover:text-[#ffde4d] transition">
Pricing
        </NavLink>

        <NavLink className="cursor-pointer hover:text-[#ffde4d] transition">
Blog
        </NavLink>
    </ul>

{/* SELECTED and BUTTON*/}
<div className="flex items-center gap-3 px-5 md:px-8 lg:px-0">
    <select onChange={currencyHandler} className="p-[5px_8px] rounded-md border-2 border-white bg-[#1a1a40]">
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
    </select>
    <button className="max-md:hidden flex items-center gap-2 md:gap-[8px] px-2 py-1 whitespace-normal rounded-[20px] bg-white text-[15px] text-black cursor-pointer hover:bg-[#ffde4d] transition">
        <span className="whitespace-pre">Sign Up</span>
        <MdArrowOutward className="size-6" />
    </button>
</div>
    </header>
  )
}

export default Header
