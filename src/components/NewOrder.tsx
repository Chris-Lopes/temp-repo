import { Button } from "./ui/button";
import { Input } from "./ui/input";


export default function NewOrderForm() {
    return (
      <div className="bg-blue-300 p-10 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">NEW ORDER</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Coal Quantity</label>
            <Input placeholder="2500 MT" className="w-full h-12 text-lg" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Coal Grade</label>
            <Input placeholder="A" className="w-full h-12 text-lg" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Destination</label>
            <Input placeholder="ABC-XYZ" className="w-full h-12 text-lg" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">Source</label>
            <Input placeholder="PQR-STU" className="w-full h-12 text-lg" />
          </div>
        </div>
        <Button className="mt-8 bg-blue-700 text-white text-lg h-12 w-full">REQUEST ORDER</Button>
      </div>
    );
  }
  
