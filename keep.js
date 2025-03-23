import { useState } from 'react';
import { FaWhatsapp, FaBox, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';

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
    // Update form data to not select prvious date
    if (e.target.name === 'pickupDate' || e.target.name === 'deliveryDate') {
      const today = new Date().toISOString().split('T')[0];
      if (e.target.value < today) {
            alert('Please select a present or future date.');
            // Clear the input field
            e.target.value = '';
        }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
💎 Value: $${formData.itemValue}
📝 Instructions: ${formData.specialInstructions || 'None'}

*Schedule:*
📅 Pickup Date: ${formData.pickupDate}
📅 Delivery Date: ${formData.deliveryDate}

Please confirm this shipment request.`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = '233554435925'; // Replace with your company's WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaBox className="text-orange-500" /> New Delivery Booking
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Declared Value ($)</label>
                  <input
                    type="number"
                    name="itemValue"
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
            </div>

            <div className="flex justify-end gap-4">
              <input
                type="reset"
                value="Clear Form"
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                onClick={() => setFormData({})}
              />
                
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center gap-2"
              >
                <FaWhatsapp className="text-xl" /> Send via WhatsApp
              </button>
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