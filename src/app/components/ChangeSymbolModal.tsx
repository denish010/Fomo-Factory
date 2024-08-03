import { AppDispatch } from '@/store'
import { toggleModel, updateSelectedCoin } from '@/store/stockCryptoSlice'
import { enableScroll } from '@/utils/comon'
import { useDispatch } from 'react-redux'
import { COIN_OPTIONS } from '../config'
import Image from 'next/image'

export default function ChangeSymbolModal() {
  const dispatch = useDispatch<AppDispatch>()

  const handleModelClose = (value: string) => {
    enableScroll()
    dispatch(updateSelectedCoin(value))
    dispatch(toggleModel())
  }
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen bg-[#00000080] z-20 flex justify-center items-center"
      onClick={() => {
        enableScroll()
      }}
    >
      <div className="max-h-[90vh] px-5 pt-6 pb-9 bg-white max-w-[650px] w-full rounded-lg shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
        <div className="text-[#222222] capitalize font-bold mb-4">
          select crypto
        </div>
        <div className="grid grid-cols-3 gap-4">
          {COIN_OPTIONS.map(({ label, value, iconCode }, index) => (
            <button
              key={index}
              className="bg-[#e7e7e7] border border-transparent hover:border-[#222222] transition-all duration-300 rounded-md text-[#222222] p-4 h-24 justify-center flex items-center shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,_rgba(60,64,67,0.15)_0px_2px_6px_2px] flex-col"
              onClick={() => {
                handleModelClose(value)
              }}
            >
              <Image
                className="w-10 h-10 mb-2 rounded-full"
                src={`https://s2.coinmarketcap.com/static/img/coins/128x128/${iconCode}.png`}
                alt={`${iconCode}`}
                height={60}
                width={60}
              />
              {label}
            </button>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  )
}
