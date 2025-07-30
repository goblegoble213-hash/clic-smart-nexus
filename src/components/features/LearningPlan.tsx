import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Target,
  Brain,
  BookOpen,
  Clock,
  Star,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  Users,
  Award,
  Calendar,
  Zap,
} from "lucide-react";

export const LearningPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("fullstack");

  const learningPlans = [
    {
      id: "fullstack",
      title: "Full Stack Developer",
      description: "Complete journey to become a full-stack developer",
      progress: 67,
      duration: "12 weeks",
      difficulty: "Intermediate",
      modules: 8,
      completed: 5,
      aiRecommended: true,
    },
    {
      id: "ml",
      title: "Machine Learning Engineer",
      description: "Master ML algorithms and AI implementation",
      progress: 34,
      duration: "16 weeks",
      difficulty: "Advanced",
      modules: 12,
      completed: 4,
      aiRecommended: false,
    },
    {
      id: "devops",
      title: "DevOps Specialist",
      description: "Learn cloud infrastructure and automation",
      progress: 89,
      duration: "10 weeks",
      difficulty: "Advanced",
      modules: 6,
      completed: 5,
      aiRecommended: true,
    },
  ];

  const currentModules = [
    {
      id: 1,
      title: "React Advanced Patterns",
      status: "completed",
      progress: 100,
      duration: "3 hours",
      aiInsights: "Excellent performance in component composition",
    },
    {
      id: 2,
      title: "State Management with Redux",
      status: "in-progress",
      progress: 78,
      duration: "4 hours",
      aiInsights: "Recommended: Focus on async actions and middleware",
    },
    {
      id: 3,
      title: "Node.js & Express Backend",
      status: "next",
      progress: 0,
      duration: "5 hours",
      aiInsights: "Pre-requisite: Complete async JavaScript concepts",
    },
    {
      id: 4,
      title: "Database Design & MongoDB",
      status: "locked",
      progress: 0,
      duration: "4 hours",
      aiInsights: "Unlocks after Node.js completion",
    },
  ];

  const aiRecommendations = [
    {
      type: "skill-gap",
      title: "Strengthen TypeScript Skills",
      description: "Based on your recent projects, improving TypeScript would boost your productivity",
      priority: "high",
      estimatedTime: "2 weeks",
    },
    {
      type: "career-path",
      title: "Consider Cloud Certifications",
      description: "AWS or Azure certifications align with your current learning path",
      priority: "medium",
      estimatedTime: "4 weeks",
    },
    {
      type: "learning-style",
      title: "Add More Hands-on Projects",
      description: "Your learning pattern shows better retention with practical exercises",
      priority: "medium",
      estimatedTime: "Ongoing",
    },
  ];

  const studyStats = [
    {
      metric: "Study Streak",
      value: "23 days",
      icon: Star,
      color: "text-warning",
    },
    {
      metric: "Hours This Week",
      value: "12.5h",
      icon: Clock,
      color: "text-primary",
    },
    {
      metric: "Modules Completed",
      value: "47",
      icon: CheckCircle,
      color: "text-success",
    },
    {
      metric: "Certificates Earned",
      value: "3",
      icon: Award,
      color: "text-accent",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-success";
      case "in-progress":
        return "text-primary";
      case "next":
        return "text-warning";
      case "locked":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return CheckCircle;
      case "in-progress":
        return PlayCircle;
      case "next":
        return Clock;
      case "locked":
        return Target;
      default:
        return Target;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-warning/10 text-warning";
      case "low":
        return "bg-success/10 text-success";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-success to-secondary bg-clip-text text-transparent">
            Personalized Learning Plans
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-curated learning paths tailored to your goals and progress
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-gradient-accent">
            <Brain className="h-3 w-3 mr-1" />
            AI Optimized
          </Badge>
        </div>
      </div>

      {/* Learning Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {learningPlans.map((plan) => (
          <Card
            key={plan.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-card-hover ${
              selectedPlan === plan.id ? "ring-2 ring-success" : ""
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                </div>
                {plan.aiRecommended && (
                  <Badge variant="secondary" className="bg-gradient-secondary">
                    <Brain className="h-3 w-3 mr-1" />
                    AI
                  </Badge>
                )}
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{plan.progress}%</span>
                </div>
                <Progress value={plan.progress} className="h-2" />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="ml-1 font-medium">{plan.duration}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Modules:</span>
                    <span className="ml-1 font-medium">{plan.completed}/{plan.modules}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Study Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {studyStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto mb-3 flex items-center justify-center">
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.metric}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="modules" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="modules">Current Modules</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
          <TabsTrigger value="progress">Progress Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="modules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Full Stack Developer - Current Modules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentModules.map((module) => {
                const StatusIcon = getStatusIcon(module.status);
                return (
                  <div
                    key={module.id}
                    className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                          <StatusIcon className={`h-4 w-4 ${getStatusColor(module.status)}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{module.title}</h3>
                          <p className="text-sm text-muted-foreground">{module.duration}</p>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={getStatusColor(module.status)}
                      >
                        {module.status.replace("-", " ")}
                      </Badge>
                    </div>
                    
                    {module.progress > 0 && (
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Brain className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">AI Insight:</span>
                      <span>{module.aiInsights}</span>
                    </div>
                    
                    <div className="mt-3 flex justify-end">
                      <Button
                        variant={module.status === "completed" ? "outline" : "gradient"}
                        size="sm"
                        disabled={module.status === "locked"}
                      >
                        {module.status === "completed"
                          ? "Review"
                          : module.status === "in-progress"
                          ? "Continue"
                          : module.status === "next"
                          ? "Start"
                          : "Locked"
                        }
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="space-y-4">
            {aiRecommendations.map((recommendation, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-accent/10 to-success/10">
                        <Zap className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{recommendation.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {recommendation.description}
                        </p>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(recommendation.priority)}>
                      {recommendation.priority} priority
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Estimated time: {recommendation.estimatedTime}</span>
                    </div>
                    <Button variant="gradient" size="sm">
                      Add to Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Learning Velocity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">+127%</p>
                    <p className="text-sm text-muted-foreground">Improvement over last month</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Modules per week</span>
                      <span className="font-medium">2.3</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average session time</span>
                      <span className="font-medium">45 minutes</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Retention rate</span>
                      <span className="font-medium text-success">94%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Peer Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">Top 15%</p>
                    <p className="text-sm text-muted-foreground">Among peers in your track</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Speed vs average</span>
                      <span className="font-medium text-success">+23%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Quality score</span>
                      <span className="font-medium">89/100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Consistency</span>
                      <span className="font-medium text-success">Excellent</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};