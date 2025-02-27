import  { useState } from "react";
import Swal from "sweetalert2";

interface ApproveModalProps {
    requestId: any;  
    onClose: () => void;  
    onApprove: (requestId: string, pin: unknown) => void;  
  }

const ApproveModal: React.FC<ApproveModalProps> = ({ requestId, onClose, onApprove }) => {
  const [pin, setPin] = useState("");

  const handlePinChange = (e: any) => setPin(e.target.value);

  const handleApprove = () => {
    
    if (pin.length === 5) {
    
      onApprove(requestId, pin);
      onClose();  
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid PIN",
        text: "PIN must be exactly 5 digits.",
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-96">
        <h2 className="text-xl mb-4">Approve Cash-in Request</h2>
        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
          Enter Your PIN:
        </label>
        <input
          id="pin"
          type="text"
          value={pin}
          onChange={handlePinChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          maxLength={5}
        />
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            onClick={handleApprove}
          >
            Approve
          </button>
          <button
            className="ml-2 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApproveModal;
