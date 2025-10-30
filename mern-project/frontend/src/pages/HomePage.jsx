import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList.jsx";
import DateTimeFilter from "../components/DateTimeFilter.jsx";
import TaskListPagination from "../components/TaskListPagination.jsx";
import StatsandFilters from "../components/StatsandFilters.jsx";
import Footer from "../components/Footer.jsx";
import { toast } from "sonner";
import axios from "axios";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/tasks");
      setTaskBuffer(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Ocean Breeze Fade Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(225deg, #B3E5FC 0%, #E0F2F1 25%, #F0F4C3 50%, #FFF8E1 75%, #FFECB3 100%)`,
        }}
      />
      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          <Header />

          <AddTask />

          <StatsandFilters />

          <TaskList filteredTasks={taskBuffer} />

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <DateTimeFilter />

            <TaskListPagination />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
