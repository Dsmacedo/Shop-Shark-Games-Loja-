import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import {
  HeaderBar,
  LinkItem,
  Links,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile,
  Logo
} from './styles'

import shark from '../../assets/images/sharklogo.png'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducer/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to="/">
            <Logo src={shark} alt="logo Shark" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  to="/categories"
                  title="Clique aqui para acessar a pagina de categorias"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  to="/#coming-soon"
                  title="Clique aqui para acessar seção de em breve"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  to="/#on-sale"
                  title="Clique aqui para acessar a seção de promoções"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              to="/categories"
              title="Clique aqui para acessar a pagina de categorias"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              to="/#coming-soon"
              title="Clique aqui para acessar seção de em breve"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              to="/#on-sale"
              title="Clique aqui para acessar a seção de promoções"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
