import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList.jsx";
import DateTimeFilter from "../components/DateTimeFilter.jsx";
import TaskListPagination from "../components/TaskListPagination.jsx";
import StatsandFilters from "../components/StatsandFilters.jsx";
import Footer from "../components/Footer.jsx";
import { toast } from "sonner";
import api from "@/lib/axios.js";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks();
    
  }, []);


  // logic
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTaskBuffer(res.data.tasks);
      setActiveTaskCount(res.data.activeCount);
      setCompletedTaskCount(res.data.completedCount);
      console.log("Fetched tasks:", res.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks. Please try again later.");
    }
  };

  const handleTaskChange = () => {
    fetchTasks();
  };

  // variables
  const filteredTasks = taskBuffer.filter((task) => {
    switch (filter) {
      case 'active':
        return task.status === 'active';
      case 'completed':
        return task.status === 'completed';
      default:
        return true;
    }
  })

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

          <AddTask handleNewTaskAdded={handleTaskChange} />

          <StatsandFilters 
          activeTasksCount={activeTaskCount} 
          completedTasksCount={completedTaskCount} 
          filter={filter}
          setFilter={setFilter}
          />

          <TaskList 
          filteredTasks={filteredTasks} 
          filter={filter}
          />

          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <DateTimeFilter />

            <TaskListPagination />
          </div>

          <Footer activeTasksCount={activeTaskCount} completedTasksCount={completedTaskCount}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
