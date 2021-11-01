import { Currency, ETHER, Token } from '@padswap/sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import CoinLogo from '../pancake/CoinLogo'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${address}/logo.png`

const StyledBnbLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, `/images/coins/${currency?.address ?? 'token'}.png`, getTokenLogoURL(currency.address)]
      }

      return [`/images/coins/${currency?.address ?? 'token'}.png`, getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    return <StyledBnbLogo src="data:image/png;base64,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" size={size} style={style} />
  }

  return (currency as any)?.symbol ? (
    <CoinLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  ) : (
    <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
  )
}
