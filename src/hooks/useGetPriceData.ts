import { useEffect, useState } from 'react'

type ApiResponse = {
  info: {
    [key: string]: string
  }
}

const api = 'https://api.thegraph.com/subgraphs/name/toadguy/padswap-subgraph-movr'
const query = {
  query: `
  {
    token(id: "0x45488c50184ce2092756ba7cdf85731fd17e6f3d") {
      symbol
      derivedETH
    }
    pair(id: "0x38185bf42e4d6d0b51db5f6c2b83064008549087") {
      id
      token1Price
    }
  } 
  `
}

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api, {
          method: "POST",
          body: JSON.stringify(query)
        });
        // const response2 = await fetch('https://api.bscscan.com/api?module=stats&action=tokensupply&contractaddress=0xc0888d80ee0abf84563168b3182650c0addeb6d5&apikey=DMR2CTIEV3SYTRDRHN4PUVP43SEAV7KXHQ')
        const res = await response.json()
        // const res2 = await response2.json()
        setData({info: {price: `${Number(res.data.data.token.derivedETH) * Number(res.data.data.pair.token1Price)}`, mcap: `${Number(res.data.data.token.derivedETH) * Number(res.data.data.pair.token1Price)*20*1e9}`}})
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}


/**
 * Due to Cors the api was forked and a proxy was created
 * @see https://github.com/pancakeswap/gatsby-pancake-api/commit/e811b67a43ccc41edd4a0fa1ee704b2f510aa0ba

const api = 'https://api.pancakeswap.com/api/v1/price'

const useGetPriceData = () => {
  const [data, setData] = useState<ApiResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api)
        const res: ApiResponse = await response.json()

        setData(res)
      } catch (error) {
        console.error('Unable to fetch price data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
*/
export default useGetPriceData
