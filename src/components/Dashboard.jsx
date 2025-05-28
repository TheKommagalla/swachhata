import { useNavigate } from "react-router-dom";
import img1 from './images/driver.png'
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 max-w-3xl mx-auto" style={{width:'87%'}} >
      {/* Driver Info Header */}
      <div className="d-flex items-center gap-4 mb-6 border border-red p-2">
        <img 
          src={img1}
          alt="Driver Avatar"
          className="w-16 h-16 rounded-full border-2 border-gray-300 img-fluid w-25"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold m-auto">Welcome, Ramesh</h2>
          <p className="text-sm text-gray-600 m-auto">Vehicle: TS 08 AB 1234</p>
          <p className="text-sm text-gray-600 m-auto">Today: {new Date().toLocaleDateString()}</p>
          <br/>
          <h5 className="font-semibold text-green-700 mb-1">Today's Route Summary</h5>
            <p className="text-sm  m-auto">4 colonies selected</p>
            <p className="text-sm  m-auto">Estimated Distance: 12.3 km</p>
            <p className="text-sm  m-auto">Start Time: 9:00 AM</p>
        </div>
      </div>

      

      {/* Tool Section */}
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Driver Tools & Options</h3>
      <div className="space-y-3">
        <button
          onClick={() => navigate("/route-setup")}
          className="w-full m-2 bg-blue-600 text-dark px-4 py-2 rounded hover:bg-blue-700 transition "
        >
          🚛 Setup Route
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          ✏️ Edit Driver Details
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          📊 View Route History
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          📈 View Performance Metrics
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          📞 Contact Officials
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          🗺️ View Map
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          📅 Schedule Maintenance
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          🛠️ Report Issues
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          📋 View Notifications
        </button>

        <button
          onClick={() => alert("Coming soon")}
          className="w-full m-2 bg-gray-600 text-dark px-4 py-2 rounded"
        >
          📑 View Documents
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
