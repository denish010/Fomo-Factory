'use client'
import React from 'react'
import { RootState } from '@/store'
import { toggleModel } from '@/store/stockCryptoSlice'
import { useSelector, useDispatch } from 'react-redux'
import { PriceTable } from './PriceTable'
import ChangeSymbolModal from './ChangeSymbolModal'
import useTicker from '@/hooks/useTicker'
import Image from 'next/image'
import { formatPriceUSD } from '@/lib/utils'
import { Button } from 'reactstrap'
import { disableScroll } from '@/utils/comon'
import Loader from './Loader'
import TopDrawer from './Drawer'
import { redirect } from 'next/navigation'

const StockCryptoTable: React.FC = () => {
  const { loading, changeCoinModel } = useSelector(
    (state: RootState) => state.stockCrypto,
  )
  const { coins, selectedCoin, data } = useTicker()

  const dispatch = useDispatch()

  const handleModel = () => {
    disableScroll()
    dispatch(toggleModel())
  }

  if(data.length === 0){
    return redirect('/')
  }

  if (loading) return <Loader />

  return (
    <>
      <div className="p-4">
        <div className="flex justify-between items-end px-4">
          <div className=" flex gap-3 items-center">
            <Image
              className="w-15 h-15 rounded-full"
              src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${coins[selectedCoin].iconCode}.png`}
              alt={`${coins[selectedCoin].iconCode}`}
              height={60}
              width={60}
            />
            <div className="flex flex-col">
              <p className="font-bold text-2xl">{coins[selectedCoin].name}</p>
              <p>{formatPriceUSD(data[0].rate ?? 0, 5)}</p>
            </div>
          </div>
          <div>
            <Button
              className="p-4 text-black-700 cursor-pointer border border-black-700 rounded-md font-bold hover:shadow-md"
              onClick={handleModel}
            >
              Change Coin
            </Button>
          </div>
        </div>
        <PriceTable prices={data} />
        {changeCoinModel && <TopDrawer />}
      </div>
    </>
  )
}

export default StockCryptoTable
