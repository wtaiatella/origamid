import React from 'react'
import Button from './Button'

// TODO: creat 3 buttons components, parsing 'notebook', smartphone' and 'table' as prop: name

const styleBlock = {
  display: 'flex',
}

const Header = () => {
  return (
    <header>
      <nav style={styleBlock}>
        <Button name={'Home'} pathName={'/'} />
        <Button name={'Notebook'} pathName={'notebook'} />
        <Button name={'Smartphone'} pathName={'smartphone'} />
        <Button name={'Table'} pathName={'table'} />
      </nav>
    </header>
  )
}

export default Header
