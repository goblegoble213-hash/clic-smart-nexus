import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Cpu,
  Database,
  Globe,
  Monitor,
  Server,
  Wifi,
  Zap,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";

export const InfraView = () => {
  const [selectedBuilding, setSelectedBuilding] = useState("main");

  const buildings = [
    {
      id: "main",
      name: "Chennai CILC Innovation Center",
      floors: 5,
      classrooms: 24,
      status: "optimal",
      utilization: 87,
    },
    {
      id: "tech",
      name: "Tech Hub",
      floors: 3,
      classrooms: 18,
      status: "good",
      utilization: 72,
    },
    {
      id: "innovation",
      name: "Innovation Center",
      floors: 2,
      classrooms: 12,
      status: "maintenance",
      utilization: 45,
    },
  ];

  const systemMetrics = [
    {
      name: "Network Performance",
      value: 98,
      status: "optimal",
      icon: Wifi,
      details: "1.2 Gbps average speed",
    },
    {
      name: "Server Load",
      value: 34,
      status: "good",
      icon: Server,
      details: "34% of capacity used",
    },
    {
      name: "Database Health",
      value: 92,
      status: "optimal",
      icon: Database,
      details: "All queries under 50ms",
    },
    {
      name: "AI Processing",
      value: 67,
      status: "good",
      icon: Cpu,
      details: "67% GPU utilization",
    },
  ];

  const realtimeAlerts = [
    {
      type: "warning",
      message: "Classroom 305 AC unit requires maintenance",
      time: "5 minutes ago",
      building: "Chennai CILC Innovation Center",
    },
    {
      type: "info",
      message: "Network upgrade completed in Tech Hub",
      time: "1 hour ago",
      building: "Tech Hub",
    },
    {
      type: "success",
      message: "All smart boards updated successfully",
      time: "2 hours ago",
      building: "Innovation Center",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "text-success";
      case "good":
        return "text-secondary";
      case "maintenance":
        return "text-warning";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "warning":
        return AlertTriangle;
      case "success":
        return CheckCircle;
      default:
        return Activity;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Infrastructure View
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time monitoring of campus infrastructure and digital twin
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-gradient-accent">
            <Activity className="h-3 w-3 mr-1" />
            Live Monitoring
          </Badge>
        </div>
      </div>

      {/* Building Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {buildings.map((building) => (
          <Card
            key={building.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-card-hover ${
              selectedBuilding === building.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedBuilding(building.id)}
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  {building.name}
                </span>
                <Badge
                  variant="outline"
                  className={getStatusColor(building.status)}
                >
                  {building.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Floors: {building.floors}</span>
                  <span>Classrooms: {building.classrooms}</span>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Utilization</span>
                    <span>{building.utilization}%</span>
                  </div>
                  <Progress value={building.utilization} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* System Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-primary" />
            System Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{metric.name}</p>
                      <p className="text-xs text-muted-foreground">{metric.details}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className={getStatusColor(metric.status)}>
                        {metric.status.toUpperCase()}
                      </span>
                      <span className="font-medium">{metric.value}%</span>
                    </div>
                    <Progress value={metric.value} className="h-2" />
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Digital Twin Visualization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-accent" />
              Digital Twin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg border-2 border-dashed border-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary-foreground animate-pulse" />
                </div>
                <p className="text-sm font-medium">3D Campus Model</p>
                <p className="text-xs text-muted-foreground">Interactive digital twin visualization</p>
                <Button variant="gradient" size="sm">
                  <Zap className="h-4 w-4 mr-1" />
                  Launch 3D View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Real-time Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {realtimeAlerts.map((alert, index) => {
                const Icon = getStatusIcon(alert.type);
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        alert.type === "warning"
                          ? "bg-warning/10"
                          : alert.type === "success"
                          ? "bg-success/10"
                          : "bg-primary/10"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 ${
                          alert.type === "warning"
                            ? "text-warning"
                            : alert.type === "success"
                            ? "text-success"
                            : "text-primary"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {alert.building}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {alert.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};