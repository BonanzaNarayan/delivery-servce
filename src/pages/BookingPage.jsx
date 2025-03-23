import { useState } from 'react';
import { 
  FaWhatsapp, 
  FaBox, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaInfoCircle,
  FaShieldAlt,
  FaMoneyBillWave,
  FaClock,
  FaExclamationTriangle
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';
import { motion } from 'framer-motion';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    receiverName: '',
    receiverPhone: '',
    pickupAddress: '',
    deliveryAddress: '',
    itemName: '',
    itemType: 'Document',
    itemWeight: '',
    itemValue: '',
    specialInstructions: '',
    pickupDate: '',
    deliveryDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const today = new Date().toISOString().split('T')[0];
    
    if ((name === 'pickupDate' || name === 'deliveryDate') && value < today) {
      alert('Please select a present or future date.');
      e.target.value = '';
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculatePrice = () => {
    const base = 0;
    const weight = parseFloat(formData.itemWeight) || 0;
    return (base + (weight * 1.5)).toFixed(2);
  };

  const generateWhatsAppMessage = () => {
    const message = `📦 *New Delivery Request* 📦
    
*Sender Information:*
🟢 Name: ${formData.senderName}
📞 Phone: ${formData.senderPhone}
📍 Pickup Address: ${formData.pickupAddress}

*Receiver Information:*
🟢 Name: ${formData.receiverName}
📞 Phone: ${formData.receiverPhone}
📍 Delivery Address: ${formData.deliveryAddress}

*Package Details:*
📦 Item: ${formData.itemName}
📌 Type: ${formData.itemType}
⚖️ Weight: ${formData.itemWeight} kg
💎 Value: GHC${formData.itemValue || '0'}
📝 Instructions: ${formData.specialInstructions || 'None'}

*Schedule:*
📅 Pickup Date: ${formData.pickupDate}
📅 Delivery Date: ${formData.deliveryDate}

Estimated Cost: GHC${calculatePrice()}

Please confirm this shipment request.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '233554435925';
    window.open(`https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`, '_blank');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            {/* Service Highlights */}
            <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-orange-50 rounded-lg">
                <FaShieldAlt className="text-orange-600 mx-auto text-2xl mb-2" />
                <p className="text-sm font-medium">Fully Insured Shipments</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <FaClock className="text-orange-600 mx-auto text-2xl mb-2" />
                <p className="text-sm font-medium">24/7 Support</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <FaMoneyBillWave className="text-orange-600 mx-auto text-2xl mb-2" />
                <p className="text-sm font-medium">Price Match Guarantee</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <FaBox className="text-orange-600 mx-auto text-2xl mb-2" />
                <p className="text-sm font-medium">Real-time Tracking</p>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FaBox className="text-orange-500" /> New Delivery Booking
            </h1>

            {/* Information Section */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg flex gap-3">
              <FaInfoCircle className="text-blue-600 text-xl mt-1" />
              <div>
                <p className="font-medium text-blue-800 mb-1">Important Information</p>
                <p className="text-sm text-blue-700">
                  Complete all required fields (*) and our team will contact you 
                  within 15 minutes to confirm details and schedule pickup.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white">
              {/* Sender Information */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" /> Sender Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="senderName"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="senderPhone"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Pickup Address *</label>
                    <textarea
                      name="pickupAddress"
                      required
                      rows="2"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Receiver Information */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" /> Receiver Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="receiverName"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="receiverPhone"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Delivery Address *</label>
                    <textarea
                      name="deliveryAddress"
                      required
                      rows="2"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaBox className="text-orange-500" /> Package Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Item Name *</label>
                    <input
                      type="text"
                      name="itemName"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Item Type *</label>
                    <select
                      name="itemType"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    >
                      <option>Document</option>
                      <option>Parcel</option>
                      <option>Electronics</option>
                      <option>Fragile</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Weight (kg) *</label>
                    <input
                      type="number"
                      name="itemWeight"
                      required
                      min="0.1"
                      step="0.1"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Item(s) Value ($)</label>
                    <input
                      type="number"
                      name="itemValue"
                      min="0"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Special Instructions</label>
                    <textarea
                      name="specialInstructions"
                      rows="2"
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Price Calculator */}
                <div className="mt-4 p-4 bg-orange-50 rounded-lg flex items-center gap-3">
                  <FaMoneyBillWave className="text-orange-600 text-xl" />
                  <div>
                    <p className="text-sm font-medium">
                      Estimated Cost: <span className="text-lg">GHC{calculatePrice()}</span>
                      <span className="text-gray-500 ml-2">(Base $5 + ${formData.itemWeight || 0}kg × $1.50/kg)</span>
                    </p>
                  </div>
                </div>

                {/* Prohibited Items */}
                <div className="mt-4 p-4 bg-red-50 rounded-lg flex gap-3">
                  <FaExclamationTriangle className="text-red-600 text-xl mt-1" />
                  <div>
                    <p className="font-medium text-red-800 mb-1">Prohibited Items:</p>
                    <ul className="list-disc list-inside text-sm text-red-700">
                      <li>Flammable materials</li>
                      <li>Perishable goods</li>
                      <li>Illegal substances</li>
                      <li>Weapons or ammunition</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="border-l-4 border-orange-500 pl-4">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FaCalendarAlt className="text-orange-500" /> Schedule
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Pickup Date *</label>
                    <input
                      type="date"
                      name="pickupDate"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Delivery Date *</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="mt-4 p-4 bg-green-50 rounded-lg flex gap-3">
                  <FaClock className="text-green-600 text-xl mt-1" />
                  <div>
                    <p className="font-medium text-green-800 mb-1">Delivery Options:</p>
                    <ul className="text-sm text-green-700">
                      <li>Standard (3-5 days) - Base Rate</li>
                      <li>Express (Next Day) +50%</li>
                      <li>Same-Day (Metro Areas) +100%</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form Submission */}
              <div className="mt-8 border-t pt-6">
                <div className="mb-6 p-4 bg-purple-50 rounded-lg flex gap-3">
                  <FaInfoCircle className="text-purple-600 text-xl mt-1" />
                  <div>
                    <p className="text-sm text-purple-700">
                      After submission, you'll receive via WhatsApp:
                    </p>
                    <ul className="list-disc list-inside mt-1">
                      <li>Pickup time window</li>
                      <li>Driver contact information</li>
                      <li>Payment confirmation</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="reset"
                    className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Clear Form
                    </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" /> Send via WhatsApp
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SocialFloat />
      <Footer />
    </>
  );
};

export default BookingPage;