import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Booklist() {
    const [formdata, setformdata] = useState({ Name: "", Class: "", Rollno: "", Progress: "" });
    const [isSubmitting, setisSubmitting] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log(formdata, "formdata");

    const fetchBookDetails = async () => {
        try {
            const response = await axios.get(`https://674347edb7464b1c2a64422b.mockapi.io/student-api/${id}`);
            setformdata(response.data);
        } catch (error) {
            console.error("Error fetching book details:", error);
            toast.error("Failed to fetch book details.");
        }
    };

    const handlechange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setisSubmitting(true);

        try {
            if (id) {
                await axios.put(`https://674347edb7464b1c2a64422b.mockapi.io/student-api/${id}`, formdata);
                toast.success("Student updated successfully!");
            } else {
                await axios.post(`https://674347edb7464b1c2a64422b.mockapi.io/student-api`, formdata);
                toast.success("Student added successfully!");
            }
            setformdata({ Name: "", Class: "", Rollno: "", Progress: "" });
            navigate("/books");
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to add/update student. Please try again.");
        } finally {
            setisSubmitting(false);
        }
    };


    useEffect(() => {
        if (id) {
            fetchBookDetails();
        }
    }, [id]);

    return (
        <div className="Formlist">
            <Link className="cheak-list" to="/books">Check List</Link>
            <div className="container1">
                <h2 className="student">Student</h2>
                <form onSubmit={handlesubmit} className="form-1">
                    <label className="label-1">Name:</label>
                    <input
                        type="text"
                        name="Name"
                        value={formdata.Name}
                        onChange={handlechange}
                        className="input-1"
                        required
                    />

                    <label className="label-2">Class:</label>
                    <input
                        type="text"
                        name="Class"
                        value={formdata.Class}
                        onChange={handlechange}
                        className="input-2"
                        required
                    />

                    <label className="label-3">RollNo:</label>
                    <input
                        type="text"
                        name="Rollno"
                        value={formdata.Rollno}
                        onChange={handlechange}
                        className="input-3"
                        required
                    />

                    <label className="label-4">Progress:</label>
                    <input
                        type="text"
                        name="Progress"
                        value={formdata.Progress}
                        onChange={handlechange}
                        className="input-4"
                        required
                    />

                    <button type="submit" className="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Loading..." : id ? "Update" : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Booklist;
