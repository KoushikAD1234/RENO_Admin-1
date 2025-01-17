import { useState, useEffect } from "react";
import attachment from "./attachment.png";

const InputField = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch internal notes
    const fetchInternalNotes = async () => {
      // Replace this with your actual API call to fetch internal notes
      // Dummy data for demonstration purposes
      const data = [
        {
          senderName: 'Micheal',
          senderRole: 'Admin',
          note: "This is the first internal note.",
          file: null,
          dateAdded: "19-02-2023",
          timeAdded: '04:56'
        },
        {
          senderName: 'Alex',
          senderRole: 'User',
          note: "This is the second internal note with an attached file.",
          file: "https://www.africau.edu/images/default/sample.pdf",
          dateAdded: "19-02-2023",
          timeAdded: '04:56'
        },
        {
          senderName: 'Micheal',
          senderRole: 'Admin',
          note: "This is the third internal note.",
          file: null,
          dateAdded: "19-02-2023",
          timeAdded: '04:56'
        },
        {
          senderName: 'Alex',
          senderRole: 'User',
          note: "This is the fourth internal note Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quo impedit provident error tenetur eum iusto blanditiis harum earum soluta, itaque nam molestiae quasi aperiam corrupti, voluptate esse labore saepe!.",
          file: null,
          dateAdded: "19-02-2023",
          timeAdded: '04:56'
        },
        {
          senderName: 'Micheal',
          senderRole: 'Admin',
          note: "This is the fifth internal note.",
          file: null,
          dateAdded: "19-02-2023",
          timeAdded: '04:56'
        },
      ];

      setLogs(data);
    };

    fetchInternalNotes();
  }, []);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSendClick = () => {
    // Handle sending the message and file
    console.log("Message:", message);
    console.log("File:", file);

    // Clear the input fields after sending
    setMessage("");
    setFile(null);
  };

  return (
    <div className="p-2 flex flex-col space-y-4 ">
      <div className="flex flex-col space-y-4">
        {logs.map((log, index) => (
          <div key={index} className="bg-[#EEEEEE] border p-4 rounded">
            <div className="flex justify-between">
              <div className="font-bold">Internal Note</div>
              <div>
                {log.dateAdded}&ensp;{log.timeAdded}
              </div>
            </div>
            <div className="flex-between">
              <div className="mt-2">{log.note}</div>
            </div>
            <div className="flex-between flex">
              {log.file && (
                <div className="mt-4">
                  <div className="font-bold">Attached File:</div>
                  <embed
                    src={log.file}
                    alt="Attached File"
                    className="mt-2 max-w-xs"
                  />
                </div>
              )}
              <div className="rounded-full self-end ms-auto mt-2 bg-white shadow px-4 py-2 w-fit flex"> {log.senderName} <div className="bg-red-500 text-sm text-white px-2 ms-1 self-start rounded-full">{log.senderRole}</div></div>
            </div>
          </div>
        ))}
      </div>
      <div className="border flex space-x-6">
        <input
          type="text"
          placeholder="Write an internal note..."
          value={message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-l"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-white px-4 py-4 rounded-none">
          <img className="w-6 h-6" src={attachment} alt="attachment" />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleSendClick}
          className="hover:bg-lime-600 bg-[#8FC743] text-white px-8 py-4">
          Send
        </button>
      </div>
    </div>
  );
};

export default InputField;
