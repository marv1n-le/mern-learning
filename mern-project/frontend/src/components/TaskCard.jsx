import React from "react";
import TaskEmptyState from "./TaskEmptyState";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const TaskCard = ({ task, index }) => {
  return (
    <Card
      className="p-8 text-center border-0 bg-gradient-card shadow-custom-lg"
    >
      <div className="space-y-3">
        <Circle className="mx-auto size-12 text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {
              filter === 'active' ? 'Chưa có công việc hoạt động nào!' :
              filter === 'completed' ? 'Chưa có công việc đã hoàn thành nào!' :
              'Chưa có công việc nào được thêm vào!'
            }

            <p className="text-sm text-muted-foreground">
              {
                filter === 'all' ? 'Hãy thêm công việc mới để bắt đầu quản lý công việc của bạn.' :
                filter === 'active' ? 'Hãy thêm công việc mới để bắt đầu quản lý công việc của bạn.' :
                'Hãy hoàn thành một số công việc để chúng xuất hiện ở đây.'
              }
            </p>
          </h3>
        </div>
      </div>
    </Card>
  )
};

export default TaskCard;
