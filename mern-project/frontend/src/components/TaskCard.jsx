import React from "react";
import TaskEmptyState from "./TaskEmptyState";
import { Card } from "./ui/card";
import { Calendar, CheckCircle, Circle, SquarePen, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TaskCard = ({ task, index }) => {
  let isEditing = false;

  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card border-0 shadow-custom-lg hover:shadow-custom-lg transition-all duration-200 animation-fade-in group"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "shrink-0 size-8 rounded-full transition-all duration-200",
            task.status === "completed"
              ? "text-success hover:text-success/80"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          {task.status === "completed" ? (
            <CheckCircle className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <Input
              placeholder="Cần phải làm gì ?"
              className="flex-1 h-12 text-base border-border/50 focus:border-primary/50 focus:ring-primary/20"
            />
          ) : (
            <p
              className={cn(
                "text-base transition-all duration-200",
                task.status === "completed"
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              )}
            >
              {task.title}
            </p>
          )}
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleString()}
            </span>
            {task.completedAt && (
              <>
                <span className="text-xs text-muted-foreground"> - </span>
                <Calendar className="size-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(task.completedAt).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 transition-colors size-8 text-muted-foreground hover:text-info"
          >
            <SquarePen className="size-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 transition-colors size-8 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
