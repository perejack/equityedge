import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import BinancePayModal from "./BinancePayModal";
import { toast } from "sonner";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  challengeType: string;
  challengeAmount: string;
  price: number;
}

const CheckoutModal = ({ 
  isOpen, 
  onClose, 
  challengeType, 
  challengeAmount, 
  price 
}: CheckoutModalProps) => {
  const [formData, setFormData] = useState({
    paymentMethod: "Pay with Card (Rapyd)",
    platform: "MT5",
    country: "",
    phoneNo: "",
    emailId: "",
    firstName: "",
    lastName: "",
    couponCode: "",
    agreeToRefundPolicy: false,
    agreeToTerms: false
  });
  
  const [showBinancePayModal, setShowBinancePayModal] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const applyCoupon = () => {
    // Handle coupon application logic
    console.log("Applying coupon:", formData.couponCode);
    toast.success("Coupon applied successfully!");
  };

  const handlePurchase = () => {
    // Validate form
    if (!formData.agreeToRefundPolicy || !formData.agreeToTerms) {
      toast.error("Please accept all terms and conditions");
      return;
    }
    
    if (!formData.emailId || !formData.firstName || !formData.lastName) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Check payment method and handle accordingly
    if (formData.paymentMethod === "Pay with Crypto (Binance Pay)") {
      setShowBinancePayModal(true);
    } else {
      // Handle other payment methods
      console.log("Processing purchase:", formData);
      toast.success("Redirecting to payment gateway...");
    }
  };

  return (
    <>
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white p-0 gap-0">
        <div className="flex flex-col lg:flex-row h-full min-h-[600px]">
          {/* Left Side - Form */}
          <div className="flex-1 p-4 lg:p-8 space-y-4 lg:space-y-6">
            <DialogHeader>
              <DialogTitle className="text-xl lg:text-2xl font-bold text-gray-900">Step 1</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 lg:space-y-6">
              {/* Payment Method */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Payment Method</Label>
                <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                  <SelectTrigger className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg">
                    <SelectValue />
                    <ChevronDown className="h-4 w-4 text-white bg-green-500 rounded ml-auto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pay with Card (Rapyd)">Pay with Card (Rapyd)</SelectItem>
                    <SelectItem value="Pay with Crypto (Binance Pay)">Pay with Crypto (Binance Pay)</SelectItem>
                    <SelectItem value="Pay with Crypto/Card/Paypal (Paytiko)">Pay with Crypto/Card/Paypal (Paytiko)</SelectItem>
                    <SelectItem value="Pay with Card (Fibonatix)">Pay with Card (Fibonatix)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Challenge Type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Challenge type</Label>
                <Select value={challengeType} onValueChange={(value) => handleInputChange("challengeType", value)}>
                  <SelectTrigger className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg">
                    <SelectValue />
                    <ChevronDown className="h-4 w-4 text-white bg-green-500 rounded ml-auto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Step EE">1 Step EE</SelectItem>
                    <SelectItem value="2 Step EE">2 Step EE</SelectItem>
                    <SelectItem value="1 Step Swift">1 Step Swift</SelectItem>
                    <SelectItem value="2 Step Swift">2 Step Swift</SelectItem>
                    <SelectItem value="Instant">Instant</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Choose Challenge Amount */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Choose Challenge Amount</Label>
                <Select value={challengeAmount} onValueChange={(value) => handleInputChange("challengeAmount", value)}>
                  <SelectTrigger className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg">
                    <SelectValue />
                    <ChevronDown className="h-4 w-4 text-white bg-green-500 rounded ml-auto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2.5K Challenge">2.5K Challenge</SelectItem>
                    <SelectItem value="5K Challenge">5K Challenge</SelectItem>
                    <SelectItem value="10K Challenge">10K Challenge</SelectItem>
                    <SelectItem value="25K Challenge">25K Challenge</SelectItem>
                    <SelectItem value="50K Challenge">50K Challenge</SelectItem>
                    <SelectItem value="100K Challenge">100K Challenge</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Choose Trading Platform */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Choose Trading Platform</Label>
                <Select value={formData.platform} onValueChange={(value) => handleInputChange("platform", value)}>
                  <SelectTrigger className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg">
                    <SelectValue />
                    <ChevronDown className="h-4 w-4 text-white bg-green-500 rounded ml-auto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MT5">MT5</SelectItem>
                    <SelectItem value="Match-Trader">Match-Trader</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Country and Phone Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Country</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg">
                      <SelectValue placeholder="Choose a country" />
                      <ChevronDown className="h-4 w-4 text-white bg-green-500 rounded ml-auto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Phone No.</Label>
                  <Input
                    type="tel"
                    placeholder="Enter Phone No."
                    value={formData.phoneNo}
                    onChange={(e) => handleInputChange("phoneNo", e.target.value)}
                    className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg"
                  />
                </div>
              </div>

              {/* Email and First Name Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Email ID</Label>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    value={formData.emailId}
                    onChange={(e) => handleInputChange("emailId", e.target.value)}
                    className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">First Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="space-y-2 max-w-full lg:max-w-[calc(50%-8px)]">
                <Label className="text-sm font-medium text-gray-700">Last Name</Label>
                <Input
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="h-10 lg:h-12 bg-gray-50 border border-green-400 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="w-full lg:w-80 bg-gray-50 p-4 lg:p-8 space-y-4 lg:space-y-6">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Summary</h2>

            <div className="space-y-4">
              {/* Challenge Type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Challenge Type</Label>
                <div className="p-3 bg-white border border-green-400 rounded-lg text-gray-900">
                  {challengeType}
                </div>
              </div>

              {/* Challenge Amount */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Challenge Amount</Label>
                <div className="p-3 bg-white border border-green-400 rounded-lg text-gray-900">
                  {challengeAmount} Challenge
                </div>
              </div>

              {/* Coupon Code */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Coupon Code</Label>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={formData.couponCode}
                    onChange={(e) => handleInputChange("couponCode", e.target.value)}
                    className="flex-1 h-10 lg:h-12 bg-green-100 border-0 rounded-lg"
                  />
                  <Button 
                    onClick={applyCoupon}
                    className="px-4 lg:px-6 h-10 lg:h-12 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm lg:text-base"
                  >
                    APPLY
                  </Button>
                </div>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Challenge Name</span>
                <span className="text-sm text-gray-900">{challengeAmount} Challenge</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Price</span>
                <span className="text-sm text-gray-900">${price}</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold">
                <span className="text-gray-900">Total Amount</span>
                <span className="text-gray-900">${price}</span>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="refund-policy"
                  checked={formData.agreeToRefundPolicy}
                  onCheckedChange={(checked) => handleInputChange("agreeToRefundPolicy", checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="refund-policy" className="text-sm text-gray-700 leading-5">
                  I declare that I have read and agree with <span className="font-semibold">Cancellation & Refund Policy</span>
                </label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 leading-5">
                  I declare that I have read and agree with <span className="font-semibold">Terms & Conditions</span>
                </label>
              </div>
            </div>

            {/* Error Messages */}
            {!formData.agreeToRefundPolicy && (
              <p className="text-red-500 text-sm">Please accept the Cancellation and Refund Policy</p>
            )}
            {!formData.agreeToTerms && (
              <p className="text-red-500 text-sm">Please accept the Terms and Conditions</p>
            )}

            {/* Buy Now Button */}
            <Button 
              onClick={handlePurchase}
              className="w-full h-10 lg:h-12 bg-green-500 hover:bg-green-600 text-white text-base lg:text-lg font-semibold rounded-lg"
              disabled={!formData.agreeToRefundPolicy || !formData.agreeToTerms}
            >
              Buy Now ${price}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    
    {/* Binance Pay Modal */}
    <BinancePayModal
      isOpen={showBinancePayModal}
      onClose={() => setShowBinancePayModal(false)}
      amount={price}
      challengeType={challengeType}
      challengeAmount={challengeAmount}
    />
    </>
  );
};

export default CheckoutModal;