// eslint-disable-next-line no-use-before-define
import * as React from 'react'
import { Link } from 'wouter'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

import sun from '../../assets/icons/sun-solid.svg'
import search from '../../assets/icons/search-solid.svg'
import moon from '../../assets/icons/moon-solid.svg'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [dark, setDark] = React.useState<boolean>(true)
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href={'/'}>
          <a>Country Flags</a>
        </Link>
        <div className={styles.search}>
          <button>
            <Icon title="search" color="#fdf0d5" src={search} width={15}/>
            {/* <img src={search} alt="search" width={15} /> */}
          </button>
          <input type="text" />
          <input type="hidden" />
        </div>
        <button onClick={() => setDark(!dark)}>
          {dark
            ? <Icon title="sun" color="#fdf0d5" src={sun} width={30} />
            : <Icon title="sun" color="#003049" src={moon} width={30} />
          }
        </button>
      </div>
    </header>
  )
}

const Icon = styled(SVG)`
& path {
  fill: ${({ color }) => color};
}
`
export default Header
