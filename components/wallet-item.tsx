import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface WalletItemProps {
  wallet: {
    id: number
    name: string
    address: string
    connected: boolean
    type: string
  }
}

export default function WalletItem({ wallet }: WalletItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-base">
          {wallet.type === "metamask" && "M"}
          {wallet.type === "solana" && "S"}
        </div>
        <div>
          <div className="font-medium text-base">{wallet.name}</div>
          <div className="text-sm text-gray-400">{wallet.address}</div>
        </div>
      </div>
      {wallet.connected ? (
        <div className="flex items-center text-green-400 text-base">
          <CheckCircle className="h-5 w-5 mr-2" />
          Connected
        </div>
      ) : (
        <Button variant="outline" size="sm" className="text-base px-4 py-2">
          Connect
        </Button>
      )}
    </div>
  )
}
