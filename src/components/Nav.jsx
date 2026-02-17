import { hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full paddingY-8'>
      <nav className='flex justify-between item-center max-container'>

        <a href="/">
          <img 
            src={headerLogo} 
            alt="Nike Logo"
            width={130}
            height={29}  
          />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

          {navLinks.map((items) => (

            <li key={items.label}>

              <a
                className='font-montserrat' 
                href={items.href}>
                {items.label}
              </a>

            </li>

          ))}
        </ul>

          <div className='hidden max-lg:block'>
            <img 
              src={hamburger} 
              alt="Hamburger" 
              width={25}
              height={25}
            />
          </div>

      </nav>
    </header>
  )
}

export default Nav