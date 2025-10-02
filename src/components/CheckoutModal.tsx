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

    // All payment methods now redirect to Binance Pay
    setShowBinancePayModal(true);
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
                    <SelectContent className="max-h-[300px] overflow-y-auto">
                      <SelectItem value="AF">Afghanistan</SelectItem>
                      <SelectItem value="AL">Albania</SelectItem>
                      <SelectItem value="DZ">Algeria</SelectItem>
                      <SelectItem value="AD">Andorra</SelectItem>
                      <SelectItem value="AO">Angola</SelectItem>
                      <SelectItem value="AG">Antigua and Barbuda</SelectItem>
                      <SelectItem value="AR">Argentina</SelectItem>
                      <SelectItem value="AM">Armenia</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                      <SelectItem value="AT">Austria</SelectItem>
                      <SelectItem value="AZ">Azerbaijan</SelectItem>
                      <SelectItem value="BS">Bahamas</SelectItem>
                      <SelectItem value="BH">Bahrain</SelectItem>
                      <SelectItem value="BD">Bangladesh</SelectItem>
                      <SelectItem value="BB">Barbados</SelectItem>
                      <SelectItem value="BY">Belarus</SelectItem>
                      <SelectItem value="BE">Belgium</SelectItem>
                      <SelectItem value="BZ">Belize</SelectItem>
                      <SelectItem value="BJ">Benin</SelectItem>
                      <SelectItem value="BT">Bhutan</SelectItem>
                      <SelectItem value="BO">Bolivia</SelectItem>
                      <SelectItem value="BA">Bosnia and Herzegovina</SelectItem>
                      <SelectItem value="BW">Botswana</SelectItem>
                      <SelectItem value="BR">Brazil</SelectItem>
                      <SelectItem value="BN">Brunei</SelectItem>
                      <SelectItem value="BG">Bulgaria</SelectItem>
                      <SelectItem value="BF">Burkina Faso</SelectItem>
                      <SelectItem value="BI">Burundi</SelectItem>
                      <SelectItem value="CV">Cabo Verde</SelectItem>
                      <SelectItem value="KH">Cambodia</SelectItem>
                      <SelectItem value="CM">Cameroon</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="CF">Central African Republic</SelectItem>
                      <SelectItem value="TD">Chad</SelectItem>
                      <SelectItem value="CL">Chile</SelectItem>
                      <SelectItem value="CN">China</SelectItem>
                      <SelectItem value="CO">Colombia</SelectItem>
                      <SelectItem value="KM">Comoros</SelectItem>
                      <SelectItem value="CG">Congo</SelectItem>
                      <SelectItem value="CR">Costa Rica</SelectItem>
                      <SelectItem value="HR">Croatia</SelectItem>
                      <SelectItem value="CU">Cuba</SelectItem>
                      <SelectItem value="CY">Cyprus</SelectItem>
                      <SelectItem value="CZ">Czech Republic</SelectItem>
                      <SelectItem value="DK">Denmark</SelectItem>
                      <SelectItem value="DJ">Djibouti</SelectItem>
                      <SelectItem value="DM">Dominica</SelectItem>
                      <SelectItem value="DO">Dominican Republic</SelectItem>
                      <SelectItem value="EC">Ecuador</SelectItem>
                      <SelectItem value="EG">Egypt</SelectItem>
                      <SelectItem value="SV">El Salvador</SelectItem>
                      <SelectItem value="GQ">Equatorial Guinea</SelectItem>
                      <SelectItem value="ER">Eritrea</SelectItem>
                      <SelectItem value="EE">Estonia</SelectItem>
                      <SelectItem value="SZ">Eswatini</SelectItem>
                      <SelectItem value="ET">Ethiopia</SelectItem>
                      <SelectItem value="FJ">Fiji</SelectItem>
                      <SelectItem value="FI">Finland</SelectItem>
                      <SelectItem value="FR">France</SelectItem>
                      <SelectItem value="GA">Gabon</SelectItem>
                      <SelectItem value="GM">Gambia</SelectItem>
                      <SelectItem value="GE">Georgia</SelectItem>
                      <SelectItem value="DE">Germany</SelectItem>
                      <SelectItem value="GH">Ghana</SelectItem>
                      <SelectItem value="GR">Greece</SelectItem>
                      <SelectItem value="GD">Grenada</SelectItem>
                      <SelectItem value="GT">Guatemala</SelectItem>
                      <SelectItem value="GN">Guinea</SelectItem>
                      <SelectItem value="GW">Guinea-Bissau</SelectItem>
                      <SelectItem value="GY">Guyana</SelectItem>
                      <SelectItem value="HT">Haiti</SelectItem>
                      <SelectItem value="HN">Honduras</SelectItem>
                      <SelectItem value="HU">Hungary</SelectItem>
                      <SelectItem value="IS">Iceland</SelectItem>
                      <SelectItem value="IN">India</SelectItem>
                      <SelectItem value="ID">Indonesia</SelectItem>
                      <SelectItem value="IR">Iran</SelectItem>
                      <SelectItem value="IQ">Iraq</SelectItem>
                      <SelectItem value="IE">Ireland</SelectItem>
                      <SelectItem value="IL">Israel</SelectItem>
                      <SelectItem value="IT">Italy</SelectItem>
                      <SelectItem value="JM">Jamaica</SelectItem>
                      <SelectItem value="JP">Japan</SelectItem>
                      <SelectItem value="JO">Jordan</SelectItem>
                      <SelectItem value="KZ">Kazakhstan</SelectItem>
                      <SelectItem value="KE">Kenya</SelectItem>
                      <SelectItem value="KI">Kiribati</SelectItem>
                      <SelectItem value="KP">Korea (North)</SelectItem>
                      <SelectItem value="KR">Korea (South)</SelectItem>
                      <SelectItem value="KW">Kuwait</SelectItem>
                      <SelectItem value="KG">Kyrgyzstan</SelectItem>
                      <SelectItem value="LA">Laos</SelectItem>
                      <SelectItem value="LV">Latvia</SelectItem>
                      <SelectItem value="LB">Lebanon</SelectItem>
                      <SelectItem value="LS">Lesotho</SelectItem>
                      <SelectItem value="LR">Liberia</SelectItem>
                      <SelectItem value="LY">Libya</SelectItem>
                      <SelectItem value="LI">Liechtenstein</SelectItem>
                      <SelectItem value="LT">Lithuania</SelectItem>
                      <SelectItem value="LU">Luxembourg</SelectItem>
                      <SelectItem value="MG">Madagascar</SelectItem>
                      <SelectItem value="MW">Malawi</SelectItem>
                      <SelectItem value="MY">Malaysia</SelectItem>
                      <SelectItem value="MV">Maldives</SelectItem>
                      <SelectItem value="ML">Mali</SelectItem>
                      <SelectItem value="MT">Malta</SelectItem>
                      <SelectItem value="MH">Marshall Islands</SelectItem>
                      <SelectItem value="MR">Mauritania</SelectItem>
                      <SelectItem value="MU">Mauritius</SelectItem>
                      <SelectItem value="MX">Mexico</SelectItem>
                      <SelectItem value="FM">Micronesia</SelectItem>
                      <SelectItem value="MD">Moldova</SelectItem>
                      <SelectItem value="MC">Monaco</SelectItem>
                      <SelectItem value="MN">Mongolia</SelectItem>
                      <SelectItem value="ME">Montenegro</SelectItem>
                      <SelectItem value="MA">Morocco</SelectItem>
                      <SelectItem value="MZ">Mozambique</SelectItem>
                      <SelectItem value="MM">Myanmar</SelectItem>
                      <SelectItem value="NA">Namibia</SelectItem>
                      <SelectItem value="NR">Nauru</SelectItem>
                      <SelectItem value="NP">Nepal</SelectItem>
                      <SelectItem value="NL">Netherlands</SelectItem>
                      <SelectItem value="NZ">New Zealand</SelectItem>
                      <SelectItem value="NI">Nicaragua</SelectItem>
                      <SelectItem value="NE">Niger</SelectItem>
                      <SelectItem value="NG">Nigeria</SelectItem>
                      <SelectItem value="MK">North Macedonia</SelectItem>
                      <SelectItem value="NO">Norway</SelectItem>
                      <SelectItem value="OM">Oman</SelectItem>
                      <SelectItem value="PK">Pakistan</SelectItem>
                      <SelectItem value="PW">Palau</SelectItem>
                      <SelectItem value="PS">Palestine</SelectItem>
                      <SelectItem value="PA">Panama</SelectItem>
                      <SelectItem value="PG">Papua New Guinea</SelectItem>
                      <SelectItem value="PY">Paraguay</SelectItem>
                      <SelectItem value="PE">Peru</SelectItem>
                      <SelectItem value="PH">Philippines</SelectItem>
                      <SelectItem value="PL">Poland</SelectItem>
                      <SelectItem value="PT">Portugal</SelectItem>
                      <SelectItem value="QA">Qatar</SelectItem>
                      <SelectItem value="RO">Romania</SelectItem>
                      <SelectItem value="RU">Russia</SelectItem>
                      <SelectItem value="RW">Rwanda</SelectItem>
                      <SelectItem value="KN">Saint Kitts and Nevis</SelectItem>
                      <SelectItem value="LC">Saint Lucia</SelectItem>
                      <SelectItem value="VC">Saint Vincent and the Grenadines</SelectItem>
                      <SelectItem value="WS">Samoa</SelectItem>
                      <SelectItem value="SM">San Marino</SelectItem>
                      <SelectItem value="ST">Sao Tome and Principe</SelectItem>
                      <SelectItem value="SA">Saudi Arabia</SelectItem>
                      <SelectItem value="SN">Senegal</SelectItem>
                      <SelectItem value="RS">Serbia</SelectItem>
                      <SelectItem value="SC">Seychelles</SelectItem>
                      <SelectItem value="SL">Sierra Leone</SelectItem>
                      <SelectItem value="SG">Singapore</SelectItem>
                      <SelectItem value="SK">Slovakia</SelectItem>
                      <SelectItem value="SI">Slovenia</SelectItem>
                      <SelectItem value="SB">Solomon Islands</SelectItem>
                      <SelectItem value="SO">Somalia</SelectItem>
                      <SelectItem value="ZA">South Africa</SelectItem>
                      <SelectItem value="SS">South Sudan</SelectItem>
                      <SelectItem value="ES">Spain</SelectItem>
                      <SelectItem value="LK">Sri Lanka</SelectItem>
                      <SelectItem value="SD">Sudan</SelectItem>
                      <SelectItem value="SR">Suriname</SelectItem>
                      <SelectItem value="SE">Sweden</SelectItem>
                      <SelectItem value="CH">Switzerland</SelectItem>
                      <SelectItem value="SY">Syria</SelectItem>
                      <SelectItem value="TW">Taiwan</SelectItem>
                      <SelectItem value="TJ">Tajikistan</SelectItem>
                      <SelectItem value="TZ">Tanzania</SelectItem>
                      <SelectItem value="TH">Thailand</SelectItem>
                      <SelectItem value="TL">Timor-Leste</SelectItem>
                      <SelectItem value="TG">Togo</SelectItem>
                      <SelectItem value="TO">Tonga</SelectItem>
                      <SelectItem value="TT">Trinidad and Tobago</SelectItem>
                      <SelectItem value="TN">Tunisia</SelectItem>
                      <SelectItem value="TR">Turkey</SelectItem>
                      <SelectItem value="TM">Turkmenistan</SelectItem>
                      <SelectItem value="TV">Tuvalu</SelectItem>
                      <SelectItem value="UG">Uganda</SelectItem>
                      <SelectItem value="UA">Ukraine</SelectItem>
                      <SelectItem value="AE">United Arab Emirates</SelectItem>
                      <SelectItem value="GB">United Kingdom</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UY">Uruguay</SelectItem>
                      <SelectItem value="UZ">Uzbekistan</SelectItem>
                      <SelectItem value="VU">Vanuatu</SelectItem>
                      <SelectItem value="VA">Vatican City</SelectItem>
                      <SelectItem value="VE">Venezuela</SelectItem>
                      <SelectItem value="VN">Vietnam</SelectItem>
                      <SelectItem value="YE">Yemen</SelectItem>
                      <SelectItem value="ZM">Zambia</SelectItem>
                      <SelectItem value="ZW">Zimbabwe</SelectItem>
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