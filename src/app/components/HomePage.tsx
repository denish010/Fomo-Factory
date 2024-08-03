'use client'
import useTicker from '@/hooks/useTicker'
import CoinCard from './CoinCard'

const HomePage = () => {
  const { coins } = useTicker()
  return (
    <div className="h-screen   flex flex-col justify-start items-start p-4  bg-gray-200">
      <div className=" flex justify-center items-center p-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h3 className="text-wrap font-semibold text-2xl">
          Welcome to CryptoVault: Your Ultimate Cryptocurrency Companion
          </h3>
  
          <p className="text-wrap text-black">
          Welcome to CryptoVault, your secure and user-friendly gateway to the world of cryptocurrency. With top-notch security features, real-time market insights, and a seamless interface, CryptoVault makes it easy for both beginners and seasoned investors to buy, sell, and manage their digital assets with confidence. Start your crypto journey with us and experience a smarter, safer way to invest.
          </p>
        </div>  
      </div>

      <div className="w-[90%] flex flex-col sm:flex-row justify-between sm:flex-wrap gap-y-6">
        {Object.keys(coins).map((crypto: any, index) => {
          return <CoinCard {...coins[crypto]} key={index} />
        })}
      </div>
    </div>
  )
}

export default HomePage
