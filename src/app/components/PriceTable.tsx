import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { formatPriceUSD } from '@/lib/utils'
import { StockCrypto } from '../config'

export function PriceTable({
  prices,
}: {
  prices: Array<Partial<StockCrypto>>
}) {
  return (
    <div className="max-w-[1440px] mx-auto py-6">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-black font-bold">Sr No.</TableHead>
            <TableHead className="w-auto text-black font-bold">Price</TableHead>
            <TableHead className="w-auto text-black font-bold">Volume</TableHead>
            <TableHead className="w-auto text-black font-bold">Capital</TableHead>
            <TableHead className='text-black font-bold'>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prices.map((price, index) => (
            <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
              <TableCell className="font-medium text-left">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium">
                {formatPriceUSD(price.rate!, 4)}
              </TableCell>
              <TableCell className="font-medium">{price.volume}</TableCell>
              <TableCell className="font-medium">{price.cap}</TableCell>
              <TableCell>
                {new Date(price.timestamp!).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
