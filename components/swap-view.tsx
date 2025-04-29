"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, CheckCircle2 } from "lucide-react"

export default function SwapView() {
  const [swapComplete, setSwapComplete] = useState(false)

  const availableBalance = 1.59
  const exchangeRate = 0.99
  const estimatedReceive = (availableBalance * exchangeRate).toFixed(2)

  const handleSwap = () => {
    setSwapComplete(true)
  }

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-3">Aggregate on Base</h3>
        <p className="text-base text-gray-400 mb-6">
          Your aggregated dust is now on Base. Convert it to USDC for maximum utility.
        </p>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="mb-6">
            <div className="text-base mb-2">Available Balance</div>
            <div className="flex items-center">
              <DollarSign className="h-7 w-7 text-blue-400 mr-2" />
              <span className="text-3xl font-bold">${availableBalance}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-base mb-2">Aggregate To</div>
            <Select defaultValue="usdc">
              <SelectTrigger className="w-full bg-gray-700 text-base py-3">
                <SelectValue>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 mr-2 flex items-center justify-center text-sm">
                      U
                    </div>
                    USDC
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usdc">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 mr-2 flex items-center justify-center text-sm">
                      U
                    </div>
                    USDC
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6 p-4 bg-gray-700 rounded-lg">
            <div className="text-base">You'll receive approximately</div>
            <div className="text-2xl font-bold">~{estimatedReceive} USDC</div>
            <div className="text-sm text-gray-400 mt-2">Exchange rate: $1.00 = {exchangeRate} USDC</div>
          </div>

          {swapComplete ? (
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-5 mb-6">
              <div className="flex items-center text-green-400 mb-2">
                <CheckCircle2 className="h-6 w-6 mr-2" />
                <span className="font-medium text-base">Aggregation Completed Successfully</span>
              </div>
              <p className="text-base">You've received {estimatedReceive} USDC in your Base wallet.</p>
            </div>
          ) : (
            <Button onClick={handleSwap} className="w-full bg-blue-600 hover:bg-blue-700 text-base py-3">
              Aggregate Now
            </Button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-medium mb-3">Transaction History</h3>
        <div className="bg-gray-800 rounded-lg p-5">
          {swapComplete ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center p-4 bg-gray-700 rounded-lg">
                <div>
                  <div className="font-medium text-base">Aggregate to USDC</div>
                  <div className="text-sm text-gray-400">Just now</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-400 text-base">+{estimatedReceive} USDC</div>
                  <div className="text-sm text-gray-400">$1.59</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <p className="text-base">No transactions yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
