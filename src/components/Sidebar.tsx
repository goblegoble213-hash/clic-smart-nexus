import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Brain,
  Building2,
  Calendar,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  Target,
  Users,
  Zap,
} from "lucide-react";

interface SidebarProps {
  activeFeature: string;
  setActiveFeature: (feature: string) => void;
}

export const Sidebar = ({ activeFeature, setActiveFeature }: SidebarProps) => {
  const menuItems = [
    {
      id: "overview",
      label: "Dashboard",
      icon: LayoutDashboard,
      gradient: "from-primary to-secondary",
    },
    {
      id: "ai-navigator",
      label: "AI Navigator",
      icon: Brain,
      gradient: "from-secondary to-accent",
    },
    {
      id: "infra-view",
      label: "Infrastructure View",
      icon: Building2,
      gradient: "from-primary to-accent",
    },
    {
      id: "smart-classroom",
      label: "Smart Classroom",
      icon: GraduationCap,
      gradient: "from-accent to-success",
    },
    {
      id: "calendar",
      label: "Global Calendar",
      icon: Calendar,
      gradient: "from-warning to-accent",
    },
    {
      id: "learning-plan",
      label: "Learning Plans",
      icon: Target,
      gradient: "from-success to-secondary",
    },
    {
      id: "seat-planner",
      label: "Seat Planner",
      icon: Users,
      gradient: "from-secondary to-warning",
    },
    {
      id: "outcomes",
      label: "Learning Outcomes",
      icon: Zap,
      gradient: "from-primary to-success",
    },
  ];

  return (
    <div className="w-80 bg-card border-r border-border">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CLIC
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Cognizant Immersive Learning Center
          </p>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeFeature === item.id;

            return (
              <Button
                key={item.id}
                variant={isActive ? "gradient" : "ghost"}
                className={`w-full justify-start h-12 group relative overflow-hidden ${
                  isActive ? "shadow-lg" : ""
                }`}
                onClick={() => setActiveFeature(item.id)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <Icon className="h-5 w-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {isActive && (
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            );
          })}
        </div>

        <Card className="mt-8 p-4 bg-gradient-glass backdrop-blur-md border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <Brain className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">AI Assistant</p>
              <p className="text-xs text-muted-foreground">Always here to help</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};