import { Game } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'
import { useDispatch, useSelector } from 'react-redux'

import { add, open } from '../../store/reducer/cart'
import { parseToBrl } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>PS5</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>por {parseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="clique aqui para adicionar este jogo ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
