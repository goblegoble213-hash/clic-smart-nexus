import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  Wifi,
  Database,
  Server,
  Zap,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
  Activity,
  Brain,
  Users,
  Thermometer,
  Wind,
  Lightbulb,
  Shield,
  TrendingUp,
  MapPin,
  Monitor,
  Cpu,
  HardDrive,
  Network,
  Power,
  Camera,
  Lock,
  BarChart3,
  Settings,
} from "lucide-react";

export const InfraView = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [activeView, setActiveView] = useState("overview");

  const buildings = [
    { 
      id: 1, 
      name: "CILC Learning Center", 
      floors: 5, 
      status: "Excellent", 
      occupancy: 195,
      capacity: 250,
      utilization: 85,
      temperature: 22,
      airQuality: 95,
      energyUsage: 78,
      systems: ["HVAC", "Security", "Network", "Power"],
      alerts: 0,
      coordinates: { x: 120, y: 80 },
      zones: [
        { name: "Lecture Halls", occupancy: 90, capacity: 100, status: "high" },
        { name: "Labs", occupancy: 45, capacity: 60, status: "medium" },
        { name: "Study Areas", occupancy: 35, capacity: 80, status: "low" },
        { name: "Common Areas", occupancy: 25, capacity: 30, status: "high" }
      ]
    },
    { 
      id: 2, 
      name: "Innovation Hub", 
      floors: 3, 
      status: "Good", 
      occupancy: 165,
      capacity: 180,
      utilization: 92,
      temperature: 23,
      airQuality: 88,
      energyUsage: 95,
      systems: ["HVAC", "Security", "Network", "Power", "Labs"],
      alerts: 1,
      coordinates: { x: 220, y: 120 },
      zones: [
        { name: "Maker Space", occupancy: 28, capacity: 30, status: "high" },
        { name: "Incubators", occupancy: 45, capacity: 50, status: "high" },
        { name: "Meeting Rooms", occupancy: 32, capacity: 40, status: "high" },
        { name: "Co-working", occupancy: 60, capacity: 60, status: "critical" }
      ]
    },
    { 
      id: 3, 
      name: "Student Services", 
      floors: 2, 
      status: "Good", 
      occupancy: 82,
      capacity: 120,
      utilization: 68,
      temperature: 21,
      airQuality: 92,
      energyUsage: 65,
      systems: ["HVAC", "Security", "Network"],
      alerts: 0,
      coordinates: { x: 80, y: 180 },
      zones: [
        { name: "Reception", occupancy: 18, capacity: 20, status: "high" },
        { name: "Counseling", occupancy: 10, capacity: 12, status: "high" },
        { name: "Admin Offices", occupancy: 30, capacity: 40, status: "medium" },
        { name: "Waiting Areas", occupancy: 24, capacity: 48, status: "medium" }
      ]
    },
    { 
      id: 4, 
      name: "Faculty Building", 
      floors: 4, 
      status: "Excellent", 
      occupancy: 110,
      capacity: 200,
      utilization: 55,
      temperature: 22,
      airQuality: 96,
      energyUsage: 52,
      systems: ["HVAC", "Security", "Network", "Power"],
      alerts: 0,
      coordinates: { x: 300, y: 60 },
      zones: [
        { name: "Faculty Offices", occupancy: 48, capacity: 80, status: "medium" },
        { name: "Conference Rooms", occupancy: 18, capacity: 24, status: "high" },
        { name: "Research Labs", occupancy: 20, capacity: 40, status: "low" },
        { name: "Library", occupancy: 24, capacity: 56, status: "low" }
      ]
    }
  ];

  const systemMetrics = [
    { name: "Network Performance", value: 97, status: "Excellent", icon: Network, trend: "+2%", details: "1.8 Gbps avg speed" },
    { name: "Server Load", value: 68, status: "Good", icon: Server, trend: "-5%", details: "68% capacity used" },
    { name: "Database Health", value: 94, status: "Excellent", icon: Database, trend: "+1%", details: "Avg query: 12ms" },
    { name: "AI System Load", value: 42, status: "Good", icon: Brain, trend: "-8%", details: "GPU utilization" },
    { name: "Power Grid", value: 89, status: "Good", icon: Power, trend: "+3%", details: "Smart grid active" },
    { name: "Security Systems", value: 99, status: "Excellent", icon: Shield, trend: "0%", details: "All zones secure" },
    { name: "HVAC Efficiency", value: 91, status: "Excellent", icon: Wind, trend: "+4%", details: "Energy optimized" },
    { name: "IoT Sensors", value: 96, status: "Excellent", icon: Activity, trend: "+1%", details: "1,247 sensors active" }
  ];

  const realtimeAlerts = [
    { 
      id: 1, 
      type: "warning", 
      message: "High occupancy detected in Innovation Hub - Co-working Space", 
      building: "Innovation Hub", 
      time: "2 min ago",
      severity: "medium",
      location: "Floor 2, Zone A"
    },
    { 
      id: 2, 
      type: "info", 
      message: "Predictive maintenance scheduled for HVAC System", 
      building: "CILC Learning Center", 
      time: "15 min ago",
      severity: "low",
      location: "Building Systems"
    },
    { 
      id: 3, 
      type: "success", 
      message: "Energy optimization reduced consumption by 12%", 
      building: "Campus-wide", 
      time: "1 hour ago",
      severity: "low",
      location: "All Buildings"
    },
    { 
      id: 4, 
      type: "critical", 
      message: "Temperature anomaly detected in Server Room", 
      building: "Faculty Building", 
      time: "3 min ago",
      severity: "high",
      location: "Floor 1, Server Room"
    }
  ];

  const environmentalMetrics = [
    { name: "Temperature", value: 22, unit: "°C", status: "optimal", icon: Thermometer },
    { name: "Air Quality", value: 92, unit: "AQI", status: "excellent", icon: Wind },
    { name: "Lighting", value: 350, unit: "lux", status: "good", icon: Lightbulb },
    { name: "Humidity", value: 45, unit: "%", status: "optimal", icon: Activity }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'excellent': return 'text-success bg-success/10';
      case 'good': return 'text-primary bg-primary/10';
      case 'warning': return 'text-warning bg-warning/10';
      case 'critical': return 'text-destructive bg-destructive/10';
      case 'optimal': return 'text-success bg-success/10';
      case 'high': return 'text-destructive bg-destructive/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  const getOccupancyColor = (occupancy, capacity) => {
    const ratio = (occupancy / capacity) * 100;
    if (ratio >= 95) return 'bg-destructive/20 border-destructive text-destructive';
    if (ratio >= 85) return 'bg-warning/20 border-warning text-warning';
    if (ratio >= 60) return 'bg-primary/20 border-primary text-primary';
    return 'bg-success/20 border-success text-success';
  };

  const getStatusIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'warning': return AlertTriangle;
      case 'success': return CheckCircle;
      case 'info': return Activity;
      case 'critical': return AlertTriangle;
      default: return Clock;
    }
  };

  const getUtilizationColor = (value) => {
    if (value >= 90) return 'hsl(var(--destructive))';
    if (value >= 75) return 'hsl(var(--warning))';
    if (value >= 50) return 'hsl(var(--primary))';
    return 'hsl(var(--success))';
  };

  const CampusHeatMap = () => (
    <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 h-80 overflow-hidden border">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <svg width="100%" height="100%" viewBox="0 0 400 250" className="absolute inset-0">
        {/* Campus pathways */}
        <path
          d="M 50 50 Q 200 100 350 50"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.3"
        />
        <path
          d="M 50 200 Q 200 150 350 200"
          stroke="hsl(var(--muted-foreground))"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.3"
        />
        
        {buildings.map((building) => {
          const utilizationColor = getUtilizationColor(building.utilization);
          return (
            <g key={building.id}>
              {/* Building shadow */}
              <rect
                x={building.coordinates.x + 2}
                y={building.coordinates.y + 2}
                width="60"
                height="40"
                fill="rgba(0,0,0,0.1)"
                rx="4"
              />
              {/* Main building */}
              <rect
                x={building.coordinates.x}
                y={building.coordinates.y}
                width="60"
                height="40"
                fill={utilizationColor}
                opacity="0.9"
                rx="4"
                className="cursor-pointer transition-all hover:opacity-100 hover:scale-105"
                onClick={() => setSelectedBuilding(building)}
                stroke="white"
                strokeWidth="2"
              />
              {/* Utilization percentage */}
              <text
                x={building.coordinates.x + 30}
                y={building.coordinates.y + 25}
                textAnchor="middle"
                className="text-xs font-bold fill-white pointer-events-none"
              >
                {building.utilization}%
              </text>
              {/* Building name */}
              <text
                x={building.coordinates.x + 30}
                y={building.coordinates.y - 8}
                textAnchor="middle"
                className="text-xs font-medium fill-foreground pointer-events-none"
              >
                {building.name.split(' ')[0]}
              </text>
              {/* Alert indicator */}
              {building.alerts > 0 && (
                <circle
                  cx={building.coordinates.x + 55}
                  cy={building.coordinates.y + 5}
                  r="4"
                  fill="hsl(var(--destructive))"
                  className="animate-pulse"
                />
              )}
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border shadow-lg">
        <div className="text-xs font-semibold mb-2 text-foreground">Utilization Status</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(var(--success))' }}></div>
            <span>Optimal (0-50%)</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(var(--primary))' }}></div>
            <span>Good (50-75%)</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(var(--warning))' }}></div>
            <span>High (75-90%)</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded" style={{ backgroundColor: 'hsl(var(--destructive))' }}></div>
            <span>Critical (90%+)</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Smart Campus Infrastructure
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered real-time monitoring and predictive analytics for optimal campus operations
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="lg">
            <Monitor className="h-5 w-5 mr-2" />
            Control Center
          </Button>
          <Button variant="gradient" size="lg" className="animate-pulse-glow">
            <Eye className="h-5 w-5 mr-2" />
            Launch Digital Twin
          </Button>
        </div>
      </div>

      <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Campus Overview</TabsTrigger>
          <TabsTrigger value="buildings">Buildings</TabsTrigger>
          <TabsTrigger value="systems">Systems</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Real-time Heat Map */}
          <Card className="group hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Campus Utilization Heat Map
                <Badge variant="secondary" className="ml-auto animate-pulse">Live</Badge>
              </CardTitle>
              <CardDescription>
                Real-time visualization of space utilization across campus buildings with predictive analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CampusHeatMap />
            </CardContent>
          </Card>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {environmentalMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{metric.name}</p>
                        <p className="text-2xl font-bold">{metric.value}{metric.unit}</p>
                        <Badge variant="secondary" className={getStatusColor(metric.status)}>
                          {metric.status}
                        </Badge>
                      </div>
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="buildings" className="space-y-6">
          {/* Building Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildings.map((building) => (
              <Card
                key={building.id}
                className={`cursor-pointer transition-all duration-300 group hover:shadow-card-hover ${
                  selectedBuilding?.id === building.id ? 'ring-2 ring-primary border-primary' : ''
                }`}
                onClick={() => setSelectedBuilding(building)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{building.name}</CardTitle>
                    <div className="flex items-center gap-2">
                      {building.alerts > 0 && (
                        <Badge variant="destructive" className="animate-pulse">
                          {building.alerts}
                        </Badge>
                      )}
                      <Badge className={getStatusColor(building.status)}>
                        {building.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription>
                    {building.floors} floors • {building.systems.length} systems • {building.zones.length} zones
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Occupancy</div>
                      <div className="font-bold text-lg">{building.occupancy}/{building.capacity}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Utilization</div>
                      <div className="font-bold text-lg">{building.utilization}%</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Capacity Usage</span>
                      <span className="font-medium">{building.utilization}%</span>
                    </div>
                    <Progress 
                      value={building.utilization} 
                      className="h-2"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 rounded bg-muted/50">
                      <Thermometer className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-medium">{building.temperature}°C</div>
                    </div>
                    <div className="text-center p-2 rounded bg-muted/50">
                      <Wind className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-medium">{building.airQuality}</div>
                    </div>
                    <div className="text-center p-2 rounded bg-muted/50">
                      <Zap className="h-4 w-4 mx-auto mb-1 text-primary" />
                      <div className="font-medium">{building.energyUsage}%</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {building.systems.map((system, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {system}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Zone Details for Selected Building */}
          {selectedBuilding && (
            <Card className="group hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {selectedBuilding.name} - Zone Analysis
                </CardTitle>
                <CardDescription>
                  Detailed occupancy breakdown by zones and areas with real-time capacity monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedBuilding.zones.map((zone, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${getOccupancyColor(zone.occupancy, zone.capacity)}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{zone.name}</h4>
                        <Badge variant="secondary" className={getStatusColor(zone.status)}>
                          {zone.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Occupancy</span>
                          <span className="font-medium">{zone.occupancy}/{zone.capacity}</span>
                        </div>
                        <Progress 
                          value={(zone.occupancy / zone.capacity) * 100} 
                          className="h-2"
                        />
                        <div className="text-xs text-muted-foreground">
                          {Math.round((zone.occupancy / zone.capacity) * 100)}% utilized
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="systems" className="space-y-6">
          {/* System Metrics */}
          <Card className="group hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-accent" />
                System Performance Dashboard
                <Badge variant="secondary" className="ml-auto">Real-time</Badge>
              </CardTitle>
              <CardDescription>
                Comprehensive monitoring of all campus infrastructure systems with predictive analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {systemMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="space-y-3 p-4 rounded-lg border hover:shadow-md transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{metric.name}</p>
                            <div className="flex items-center gap-2">
                              <p className="text-xl font-bold">{metric.value}%</p>
                              <Badge className={getStatusColor(metric.status)}>
                                {metric.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${metric.trend.startsWith('+') ? 'text-success' : metric.trend.startsWith('-') ? 'text-primary' : 'text-muted-foreground'}`}>
                            {metric.trend}
                          </div>
                          <div className="text-xs text-muted-foreground">24h</div>
                        </div>
                      </div>
                      <Progress 
                        value={metric.value} 
                        className="h-2"
                      />
                      <div className="text-xs text-muted-foreground">
                        {metric.details}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Predictive Analytics */}
          <Card className="group hover:shadow-card-hover transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                AI-Powered Predictive Analytics
              </CardTitle>
              <CardDescription>
                Machine learning insights and recommendations for optimal campus operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Energy Optimization</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Predicted Savings</span>
                      <span className="font-medium text-success">15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>ROI Timeline</span>
                      <span className="font-medium">6 months</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Confidence</span>
                      <span className="font-medium">94%</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Maintenance Prediction</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Next HVAC Service</span>
                      <span className="font-medium">12 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Risk Level</span>
                      <span className="font-medium text-warning">Medium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cost Avoidance</span>
                      <span className="font-medium text-success">$2.4K</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Space Utilization</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Optimization Potential</span>
                      <span className="font-medium text-primary">23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Peak Hours</span>
                      <span className="font-medium">10AM-2PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Efficiency Score</span>
                      <span className="font-medium text-success">87/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Critical Alerts & Digital Twin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Digital Twin Preview */}
        <Card className="group hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Digital Twin Control Center
              <Badge variant="secondary" className="ml-auto">Beta</Badge>
            </CardTitle>
            <CardDescription>
              Immersive 3D visualization with real-time data overlay and predictive modeling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center relative overflow-hidden border">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="text-center space-y-2 relative z-10">
                <div className="relative">
                  <Building2 className="h-12 w-12 mx-auto text-primary animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-ping"></div>
                </div>
                <p className="text-sm font-medium">Interactive 3D Campus Model</p>
                <p className="text-xs text-muted-foreground">Real-time IoT data integration</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center p-2 rounded bg-muted/50">
                <div className="font-medium">1,247</div>
                <div className="text-muted-foreground">IoT Sensors</div>
              </div>
              <div className="text-center p-2 rounded bg-muted/50">
                <div className="font-medium">99.8%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center p-2 rounded bg-muted/50">
                <div className="font-medium">24/7</div>
                <div className="text-muted-foreground">Monitoring</div>
              </div>
            </div>
            <Button className="w-full" variant="gradient">
              <Eye className="h-4 w-4 mr-2" />
              Launch Immersive Experience
            </Button>
          </CardContent>
        </Card>

        {/* Real-time Alerts */}
        <Card className="group hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Intelligent Alert Center
              <Badge variant="secondary" className="ml-auto">{realtimeAlerts.length}</Badge>
            </CardTitle>
            <CardDescription>
              AI-powered monitoring with predictive notifications and automated responses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {realtimeAlerts.map((alert) => {
                const Icon = getStatusIcon(alert.type);
                return (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                    <div className={`p-2 rounded-lg ${getStatusColor(alert.type)} ${alert.severity === 'high' ? 'animate-pulse' : ''}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-medium">{alert.message}</p>
                        <Badge 
                          variant={alert.severity === 'high' ? 'destructive' : alert.severity === 'medium' ? 'secondary' : 'outline'} 
                          className="text-xs"
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.building}</span>
                        <span>•</span>
                        <span>{alert.location}</span>
                        <span>•</span>
                        <span>{alert.time}</span>
                      </div>
                      {alert.severity === 'high' && (
                        <div className="mt-2 flex gap-2">
                          <Button size="sm" variant="outline" className="text-xs">
                            Auto-Resolve
                          </Button>
                          <Button size="sm" variant="outline" className="text-xs">
                            Escalate
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" className="w-full text-sm">
                <Activity className="h-4 w-4 mr-2" />
                View All Alerts & Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};