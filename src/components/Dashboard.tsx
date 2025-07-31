import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { AINavigator } from "./features/AINavigator";
import { InfraView } from "./features/InfraView";
import { DigitalTwin } from "./features/DigitalTwin";
import { SmartClassroom } from "./features/SmartClassroom";
import { GlobalCalendar } from "./features/GlobalCalendar";
import { LearningPlan } from "./features/LearningPlan";
import { SeatPlanner } from "./features/SeatPlanner";
import { LearningOutcomes } from "./features/LearningOutcomes";
import { DashboardOverview } from "./features/DashboardOverview";

export const Dashboard = () => {
  const [activeFeature, setActiveFeature] = useState("overview");

  const renderActiveFeature = () => {
    switch (activeFeature) {
      case "overview":
        return <DashboardOverview />;
      case "ai-navigator":
        return <AINavigator />;
      case "infra-view":
        return <InfraView />;
      case "digital-twin":
        return <DigitalTwin />;
      case "smart-classroom":
        return <SmartClassroom />;
      case "calendar":
        return <GlobalCalendar />;
      case "learning-plan":
        return <LearningPlan />;
      case "seat-planner":
        return <SeatPlanner />;
      case "outcomes":
        return <LearningOutcomes />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6">
          {renderActiveFeature()}
        </div>
      </main>
    </div>
  );
};