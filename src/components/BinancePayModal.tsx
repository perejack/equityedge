import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import QRCode from "qrcode";

interface BinancePayModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  challengeType: string;
  challengeAmount: string;
}

const BinancePayModal = ({ 
  isOpen, 
  onClose, 
  amount,
  challengeType,
  challengeAmount 
}: BinancePayModalProps) => {
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  
  // Wallet address for payments - this would come from your backend in production
  const walletAddress = "TKGTXDvZhvvwUwzhvQArVDgcpHS9pHdw2Z";
  const paymentId = `EE${Date.now().toString().slice(-7)}`;
  const network = "BEP-20 (BSC)";
  
  // Convert USD to USDT (1:1 for simplicity)
  const usdtAmount = amount.toFixed(2);
  
  useEffect(() => {
    if (!isOpen) return;
    
    // Generate QR code for Binance Pay
    const generateQRCode = async () => {
      try {
        // Create Binance Pay deeplink for Bitcoin
        const binancePayUrl = `binance://pay?amount=${usdtAmount}&coin=USDT&address=${walletAddress}&network=BTC`;
        
        const qr = await QRCode.toDataURL(binancePayUrl, {
          width: 250,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qr);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };
    
    generateQRCode();
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isOpen, walletAddress, usdtAmount]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success(`${type} copied to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleConfirmPayment = () => {
    // In production, this would verify the payment with your backend
    toast.success("Payment verification initiated. Please wait...");
    setTimeout(() => {
      toast.success("Payment confirmed! Your challenge will be activated shortly.");
      onClose();
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-white p-0 gap-0">
        {/* Header */}
        <div className="bg-[#FCD535] p-4">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900 flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#1E2026"/>
                <path d="M2 17L12 22L22 17" stroke="#1E2026" strokeWidth="2"/>
                <path d="M2 12L12 17L22 12" stroke="#1E2026" strokeWidth="2"/>
              </svg>
              Binance Pay
            </DialogTitle>
          </DialogHeader>
        </div>
        
        <div className="p-6 space-y-4">
          {/* Payment Details */}
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-bold text-lg">{usdtAmount} USDT</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Network:</span>
              <span className="font-semibold">Bitcoin (BTC)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Payment ID:</span>
              <span className="font-mono text-sm">{paymentId}</span>
            </div>
          </div>
          
          {/* QR Code Section */}
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="text-center space-y-4">
              <div className="inline-block p-4 bg-white rounded-lg">
                {qrCodeUrl ? (
                  <img 
                    src={qrCodeUrl} 
                    alt="Binance Pay QR Code" 
                    className="w-56 h-56"
                  />
                ) : (
                  <div className="w-56 h-56 flex items-center justify-center">
                    <span className="text-gray-400">Generating QR Code...</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">QR Code</p>
                <p className="text-sm text-gray-500">Scan to pay with<br/>Binance App</p>
              </div>
            </div>
          </div>
          
          {/* Address Section */}
          <div className="space-y-3">
            <p className="text-gray-700 font-medium">Send USDT to this address:</p>
            <div className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
              <span className="text-sm font-mono break-all mr-2">{walletAddress}</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => copyToClipboard(walletAddress, "Address")}
                className="flex-shrink-0"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
            
          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div className="text-sm space-y-1">
                <p className="font-semibold text-yellow-800">Important:</p>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                  <li>Only send USDT over the Bitcoin network</li>
                  <li>Sending any other token may result in loss of funds</li>
                  <li>Minimum confirmation: 1 network confirmation</li>
                  <li>Processing time: 10-30 minutes after confirmation</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Challenge Type:</span>
                <span className="font-medium">{challengeType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Challenge Amount:</span>
                <span className="font-medium">{challengeAmount}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>{usdtAmount} USDT</span>
              </div>
            </div>
          </div>
          
          {/* Timer */}
          <div className="bg-gray-100 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600 mb-1">Time remaining</p>
            <p className="text-2xl font-bold text-gray-900">{formatTime(timeLeft)}</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-[#FCD535] hover:bg-[#F0C800] text-black font-semibold"
              onClick={handleConfirmPayment}
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              I've Made Payment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BinancePayModal;
