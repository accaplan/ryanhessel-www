import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components'

import { useEffect } from 'react'

function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0)
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState(document.body.getBoundingClientRect())
  // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset.top)
  // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset.left)
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | null>(null)

  const listener = (e) => {
    setBodyOffset(document.body.getBoundingClientRect())
    setScrollY(-bodyOffset.top)
    setScrollX(bodyOffset.left)
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up')
    setLastScrollTop(-bodyOffset.top)
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  return {
    scrollY,
    scrollX,
    scrollDirection,
  }
}

const Header: React.FC = () => {
  const { scrollDirection } = useScroll()

  return (
    <>
      <HeaderStyle isHidden={scrollDirection === 'up'}>
        <Link href="/">
          <a className="hover:underline">Ryan Hessel</a>
        </Link>
      </HeaderStyle>
      <ShimStyle />
    </>
  )
}

const HEADER_HEIGHT = '4rem'

const HeaderStyle = styled.div<{ isHidden: boolean }>`
  height: ${HEADER_HEIGHT};
  position: fixed;
  text-align: center;
  width: 100vw;
  border-bottom: 1px solid black;

  transition: 200ms transform ease-out;
  transform: ${(p) => (p.isHidden ? 'translate3d(0, -100%, 0)' : 'none')};

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  a {
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
  }
`
const ShimStyle = styled.div`
  padding-top: ${HEADER_HEIGHT};
`

export default Header
