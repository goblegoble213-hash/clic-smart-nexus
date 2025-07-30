import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  Brain,
  Users,
  Monitor,
  Mic,
  Camera,
  Thermometer,
  Lightbulb,
  Volume2,
  Activity,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

export const SmartClassroom = () => {
  const [selectedClassroom, setSelectedClassroom] = useState("301");

  const classrooms = [
    {
      id: "301",
      name: "Room 301",
      subject: "React Advanced",
      instructor: "Dr. Sarah Chen",
      students: 24,
      capacity: 30,
      status: "active",
      aiEngagement: 89,
    },
    {
      id: "205",
      name: "Room 205",
      subject: "Machine Learning",
      instructor: "Prof. Michael Kumar",
      students: 18,
      capacity: 25,
      status: "active",
      aiEngagement: 92,
    },
    {
      id: "410",
      name: "Room 410",
      subject: "Data Structures",
      instructor: "Dr. Emily Rodriguez",
      students: 0,
      capacity: 35,
      status: "preparing",
      aiEngagement: 0,
    },
  ];

  const environmentalData = [
    {
      metric: "Temperature",
      value: "22°C",
      status: "optimal",
      icon: Thermometer,
      progress: 75,
    },
    {
      metric: "Lighting",
      value: "Auto",
      status: "optimal",
      icon: Lightbulb,
      progress: 85,
    },
    {
      metric: "Audio",
      value: "Clear",
      status: "good",
      icon: Volume2,
      progress: 90,
    },
    {
      metric: "Air Quality",
      value: "Good",
      status: "optimal",
      icon: Activity,
      progress: 88,
    },
  ];

  const aiInsights = [
    {
      type: "engagement",
      title: "High Engagement Detected",
      description: "Students are highly engaged with the current topic",
      score: 89,
      icon: TrendingUp,
    },
    {
      type: "suggestion",
      title: "Suggest Interactive Exercise",
      description: "Consider adding a hands-on coding exercise",
      score: 76,
      icon: MessageSquare,
    },
    {
      type: "attention",
      title: "Attention Levels Good",
      description: "Most students are actively participating",
      score: 82,
      icon: Brain,
    },
  ];

  const learningProgress = [
    {
      student: "Alice Johnson",
      progress: 95,
      engagement: "high",
      lastActivity: "2 minutes ago",
    },
    {
      student: "Bob Smith",
      progress: 78,
      engagement: "medium",
      lastActivity: "5 minutes ago",
    },
    {
      student: "Carol Davis",
      progress: 87,
      engagement: "high",
      lastActivity: "1 minute ago",
    },
    {
      student: "David Wilson",
      progress: 65,
      engagement: "low",
      lastActivity: "8 minutes ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-success";
      case "preparing":
        return "text-warning";
      case "optimal":
        return "text-success";
      case "good":
        return "text-secondary";
      default:
        return "text-muted-foreground";
    }
  };

  const getEngagementColor = (engagement: string) => {
    switch (engagement) {
      case "high":
        return "text-success";
      case "medium":
        return "text-warning";
      case "low":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Smart Classroom
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered learning environment with intelligent facilitation
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-gradient-accent">
            <Brain className="h-3 w-3 mr-1" />
            AI Facilitator Active
          </Badge>
        </div>
      </div>

      {/* Classroom Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classrooms.map((classroom) => (
          <Card
            key={classroom.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-card-hover ${
              selectedClassroom === classroom.id ? "ring-2 ring-accent" : ""
            }`}
            onClick={() => setSelectedClassroom(classroom.id)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">{classroom.name}</h3>
                <Badge
                  variant="outline"
                  className={getStatusColor(classroom.status)}
                >
                  {classroom.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{classroom.subject}</p>
              <p className="text-sm font-medium mb-3">{classroom.instructor}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{classroom.students}/{classroom.capacity} students</span>
                {classroom.status === "active" && (
                  <span className="text-accent font-medium">
                    {classroom.aiEngagement}% AI engagement
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="environment">Environment</TabsTrigger>
          <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Classroom Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-primary" />
                  Classroom Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-sm text-muted-foreground">Active Students</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-accent/10 to-success/10">
                    <Brain className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="text-2xl font-bold">89%</p>
                    <p className="text-sm text-muted-foreground">AI Engagement</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Session Progress</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Control Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-accent" />
                  AI Facilitator Controls
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-16 flex-col gap-1">
                    <Mic className="h-5 w-5" />
                    <span className="text-xs">Audio Analysis</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col gap-1">
                    <Camera className="h-5 w-5" />
                    <span className="text-xs">Visual Tracking</span>
                  </Button>
                  <Button variant="gradient" className="h-16 flex-col gap-1">
                    <Brain className="h-5 w-5" />
                    <span className="text-xs">AI Suggestions</span>
                  </Button>
                  <Button variant="outline" className="h-16 flex-col gap-1">
                    <MessageSquare className="h-5 w-5" />
                    <span className="text-xs">Q&A Mode</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="environment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Environmental Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {environmentalData.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{item.metric}</p>
                          <p className="text-lg font-bold">{item.value}</p>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className={getStatusColor(item.status)}>
                            {item.status.toUpperCase()}
                          </span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiInsights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-success/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{insight.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {insight.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Confidence</span>
                          <span className="text-sm text-accent">{insight.score}%</span>
                        </div>
                        <Progress value={insight.score} className="h-1 mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Student Progress & Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {learningProgress.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-sm">
                          {student.student.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{student.student}</p>
                        <p className="text-sm text-muted-foreground">
                          Last activity: {student.lastActivity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-right">
                      <div>
                        <p className="text-sm font-medium">{student.progress}% Progress</p>
                        <p className={`text-sm ${getEngagementColor(student.engagement)}`}>
                          {student.engagement} engagement
                        </p>
                      </div>
                      <Progress value={student.progress} className="h-2 w-20" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};