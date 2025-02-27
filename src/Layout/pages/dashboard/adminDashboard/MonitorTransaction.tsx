import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";

interface UserTransaction {
    date: string | number | Date;
    _id: string;
    senderId: { _id: string; name: string }; 
    receiverId: { _id: string; name: string }; 
    amount: number;
    status: string;
    transactionDate: string; 
    createdAt: string;
    updatedAt: string;
    data: string
  }
  
  
  interface CashinTransaction {
    _id: string;
    agentId?: string; 
    email: string;
    amount: number;
    status?: string;
    date: string
  }
  

  interface TransactionsResponse {
    userSendMony: UserTransaction[];
    cashintransaction: CashinTransaction[];
  }
const MonitorTransaction: React.FC = () => {
    const api = useAxios();
    const [transactions, setTransactions] = useState<TransactionsResponse>({ userSendMony: [], cashintransaction: [] });
    
            useEffect(() => {
                const fetchRequests = async () => {
                  try {
                    const res = await api.get(`/money/transaction`);
                    setTransactions(res.data);
                  } catch (error) {
                    console.error("Error fetching cash-in requests:", error);
                  }
                };
                fetchRequests();
              }, []);

    return (
          <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>

      {/* User Send Money Table */}
      <h3 className="text-lg font-medium mb-2">User Send Money Transactions</h3>
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Index</th>
            <th className="border p-2">Sender</th>
            <th className="border p-2">Receiver</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.userSendMony.map((txn, index) => (
            <tr key={txn._id} className="hover:bg-gray-100">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{txn.senderId.name}</td>
              <td className="border p-2">{txn.receiverId.name}</td>
              <td className="border p-2">{txn.amount}</td>
              <td className="border p-2">{new Date(txn.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cash-in Transactions Table */}
      <h3 className="text-lg font-medium mb-2">Cash-in Transactions</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Index</th>
            <th className="border p-2">Agent</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.cashintransaction.map((txn, index) => (
            <tr key={txn._id} className="hover:bg-gray-100">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{txn.agentId || "Admin"}</td>
              <td className="border p-2">{txn.email}</td>
              <td className="border p-2">{txn.amount}</td>
              <td className="border p-2">{new Date(txn.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MonitorTransaction;