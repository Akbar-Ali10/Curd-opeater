


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Books() {
  const [data, setData] = useState([]);
  const [deloding, setdeloding] = useState(null);
  const navigate = useNavigate();

  const student = async () => {
    try {
      const response = await axios.get("https://674347edb7464b1c2a64422b.mockapi.io/student-api");
      setData(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch student data.");
    }
  };

  useEffect(() => {
    student();
  }, []);

  const deleteBookDetails = async (id) => {
    setdeloding(id); 
    try {
      await axios.delete(`https://674347edb7464b1c2a64422b.mockapi.io/student-api/${id}`);
      toast.success("Item deleted successfully.");
      student(); 
    } catch (error) {
      console.error("Error deleting book details:", error);
      toast.error("Failed to delete item. Please try again.");
    } finally {
      setdeloding(null); 
    }
  };

  return (
    <>
      <table border="2px">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Progress</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.Class}</td>
              <td>{item.Rollno}</td>
              <td>{item.Progress}</td>
              <td>
                <button
                  className="Edit"
                  onClick={() => navigate(`/books/edit/${item.id}`)}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  disabled={deloding === item.id}
                  onClick={() => deleteBookDetails(item.id)}
                >
                  {deloding === item.id ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Books;
