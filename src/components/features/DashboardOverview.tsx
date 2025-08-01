import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  Building2,
  Calendar,
  GraduationCap,
  TrendingUp,
  Users,
  Zap,
  Activity,
} from "lucide-react";

export const DashboardOverview = () => {
  const stats = [
    {
      title: "Active Sessions",
      value: "24",
      change: "+12%",
      icon: Activity,
      color: "text-success",
    },
    {
      title: "Students Online",
      value: "50,000",
      change: "+8%",
      icon: Users,
      color: "text-secondary",
    },
    {
      title: "AI Interactions",
      value: "3,891",
      change: "+23%",
      icon: Brain,
      color: "text-primary",
    },
    {
      title: "Completion Rate",
      value: "94.2%",
      change: "+5.8%",
      icon: TrendingUp,
      color: "text-accent",
    },
  ];

  const recentActivities = [
    {
      type: "ai-session",
      title: "AI Navigator helped 45 students find resources",
      time: "2 minutes ago",
      icon: Brain,
    },
    {
      type: "classroom",
      title: "Smart Classroom AI-facilitated Java session completed",
      time: "15 minutes ago",
      icon: GraduationCap,
    },
    {
      type: "calendar",
      title: "New global session scheduled: React Advanced",
      time: "1 hour ago",
      icon: Calendar,
    },
    {
      type: "outcomes",
      title: "Learning outcome analysis completed for Q1",
      time: "2 hours ago",
      icon: Zap,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Smart Campus Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome to CILC - Your AI-powered learning environment
          </p>
        </div>
        <Button variant="gradient" size="lg" className="animate-pulse-glow">
          <Brain className="h-5 w-5" />
          Start AI Session
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="relative overflow-hidden group hover:shadow-card-hover transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-sm ${stat.color} flex items-center gap-1 mt-1`}>
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campus Overview */}
        <Card className="group hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Campus Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Classroom Utilization</span>
                <span className="text-sm font-medium">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Infrastructure Health</span>
                <span className="text-sm font-medium text-success">Excellent</span>
              </div>
              <Progress value={96} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">AI System Load</span>
                <span className="text-sm font-medium">42%</span>
              </div>
              <Progress value={42} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="group hover:shadow-card-hover transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-accent" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="group hover:shadow-card-hover transition-all duration-300">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Brain className="h-6 w-6" />
              <span className="text-xs">AI Navigator</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xs">Smart Class</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-xs">Schedule</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Zap className="h-6 w-6" />
              <span className="text-xs">Outcomes</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};