import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  Play,
  Pause,
  RotateCcw,
  Users,
  Brain,
  Activity,
  MapPin,
  Clock,
  Zap,
  TrendingUp,
  Eye,
  Settings,
  Monitor,
  Wifi,
} from "lucide-react";

export const DigitalTwin = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState([1]);
  const [selectedScenario, setSelectedScenario] = useState("normal-day");
  const [currentTime, setCurrentTime] = useState("09:00");
  const [activeLearners, setActiveLearners] = useState(245);

  // Simulated learner data
  const learnerDistribution = [
    { zone: "Library", count: 45, capacity: 60, color: "bg-blue-500" },
    { zone: "Classroom A", count: 30, capacity: 35, color: "bg-green-500" },
    { zone: "Classroom B", count: 28, capacity: 35, color: "bg-yellow-500" },
    { zone: "Lab 1", count: 20, capacity: 25, color: "bg-purple-500" },
    { zone: "Lab 2", count: 22, capacity: 25, color: "bg-pink-500" },
    { zone: "Common Area", count: 85, capacity: 120, color: "bg-orange-500" },
    { zone: "Cafeteria", count: 15, capacity: 80, color: "bg-red-500" },
  ];

  const learnerBehaviors = [
    { behavior: "Active Learning", percentage: 65, color: "bg-success" },
    { behavior: "Collaboration", percentage: 25, color: "bg-warning" },
    { behavior: "Break Time", percentage: 10, color: "bg-secondary" },
  ];

  const systemMetrics = [
    { name: "AI Processing Load", value: 78, unit: "%" },
    { name: "Network Utilization", value: 45, unit: "%" },
    { name: "Device Connectivity", value: 98, unit: "%" },
    { name: "Energy Efficiency", value: 85, unit: "%" },
  ];

  const scenarios = [
    { id: "normal-day", name: "Normal Day", description: "Regular learning activities" },
    { id: "peak-hours", name: "Peak Hours", description: "High occupancy simulation" },
    { id: "emergency", name: "Emergency Drill", description: "Emergency evacuation scenario" },
    { id: "hybrid-learning", name: "Hybrid Learning", description: "Mixed online/offline classes" },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const [hours, minutes] = prev.split(':').map(Number);
          const newMinutes = (minutes + simulationSpeed[0]) % 60;
          const newHours = newMinutes < minutes ? (hours + 1) % 24 : hours;
          return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        });
        
        // Simulate learner count changes
        setActiveLearners(prev => prev + Math.floor(Math.random() * 10 - 5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSimulating, simulationSpeed]);

  const handleStartSimulation = () => {
    setIsSimulating(!isSimulating);
  };

  const handleResetSimulation = () => {
    setIsSimulating(false);
    setCurrentTime("09:00");
    setActiveLearners(245);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Digital Twin & Learner Simulation
          </h1>
          <p className="text-muted-foreground mt-2">
            Real-time campus simulation and learner behavior analytics
          </p>
        </div>
        <Badge variant="outline" className="text-primary">
          <Activity className="h-4 w-4 mr-2" />
          {isSimulating ? "Simulation Active" : "Simulation Paused"}
        </Badge>
      </div>

      {/* Simulation Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Simulation Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Scenario</label>
              <Select value={selectedScenario} onValueChange={setSelectedScenario}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {scenarios.map(scenario => (
                    <SelectItem key={scenario.id} value={scenario.id}>
                      {scenario.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Speed: {simulationSpeed[0]}x</label>
              <Slider
                value={simulationSpeed}
                onValueChange={setSimulationSpeed}
                max={5}
                min={0.5}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Simulation Time</label>
              <div className="flex items-center gap-2 p-2 border rounded-md">
                <Clock className="h-4 w-4" />
                <span className="font-mono">{currentTime}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                variant={isSimulating ? "destructive" : "gradient"} 
                onClick={handleStartSimulation}
                className="flex-1"
              >
                {isSimulating ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isSimulating ? "Pause" : "Start"}
              </Button>
              <Button variant="outline" onClick={handleResetSimulation}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 3D Campus View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              3D Campus Environment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center relative overflow-hidden">
              {/* Simulated 3D Campus - This would be replaced with actual 3D rendering */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-pulse"></div>
              
              {/* Learner dots simulation */}
              <div className="absolute inset-4 grid grid-cols-6 gap-2">
                {learnerDistribution.map((zone, index) => (
                  <div key={zone.zone} className="relative">
                    <div className={`h-16 ${zone.color} rounded-lg opacity-70 flex items-center justify-center text-white text-xs font-bold`}>
                      {zone.zone}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-background border rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {zone.count}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">Active Learners: {activeLearners}</span>
                </div>
              </div>
              
              <div className="text-center">
                <Eye className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">Interactive 3D Campus Model</p>
                <p className="text-sm text-muted-foreground">Real-time learner tracking and space utilization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Metrics */}
        <div className="space-y-6">
          {/* Learner Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Zone Occupancy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {learnerDistribution.slice(0, 4).map(zone => (
                <div key={zone.zone}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{zone.zone}</span>
                    <span>{zone.count}/{zone.capacity}</span>
                  </div>
                  <Progress value={(zone.count / zone.capacity) * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {systemMetrics.map(metric => (
                <div key={metric.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{metric.name}</span>
                    <span>{metric.value}{metric.unit}</span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learner Behavior Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Learner Behavior Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {learnerBehaviors.map(behavior => (
              <div key={behavior.behavior}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{behavior.behavior}</span>
                  <span>{behavior.percentage}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${behavior.color}`}
                    style={{ width: `${behavior.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              AI Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-success" />
                <span className="font-medium text-success">Optimal Learning Environment</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Current conditions show 85% engagement rate with balanced space utilization.
              </p>
            </div>
            
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-4 w-4 text-warning" />
                <span className="font-medium text-warning">Peak Hours Approaching</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Library capacity will reach 90% in the next 30 minutes.
              </p>
            </div>
            
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-primary" />
                <span className="font-medium text-primary">Learning Pattern Detected</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Collaborative sessions show 25% higher retention rates.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};