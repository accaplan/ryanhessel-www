import Link from 'next/link'
import styled from 'styled-components'

export default function Header() {
  return (
    <>
      <HeaderStyle>
        <Link href="/">
          <a className="hover:underline">Ryan Hessel</a>
        </Link>
      </HeaderStyle>
      <ShimStyle />
    </>
  )
}

const HEADER_HEIGHT = '4rem'

const HeaderStyle = styled.div`
  height: ${HEADER_HEIGHT};
  position: fixed;
  text-align: center;
  width: 100vw;
  border-bottom: 1px solid black;

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
