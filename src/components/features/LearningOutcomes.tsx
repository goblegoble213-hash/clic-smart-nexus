import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Zap,
  TrendingUp,
  Award,
  Target,
  BarChart3,
  PieChart as PieChartIcon,
  Users,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
  Download,
  Share,
  Filter,
} from "lucide-react";

export const LearningOutcomes = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [selectedCourse, setSelectedCourse] = useState("all");

  const overallMetrics = [
    {
      title: "Course Completion Rate",
      value: "94.2%",
      change: "+5.8%",
      trend: "up",
      icon: CheckCircle,
      color: "text-success",
    },
    {
      title: "Average Grade",
      value: "87.3%",
      change: "+3.2%",
      trend: "up",
      icon: Award,
      color: "text-primary",
    },
    {
      title: "Skill Acquisition",
      value: "91.7%",
      change: "+7.1%",
      trend: "up",
      icon: Target,
      color: "text-accent",
    },
    {
      title: "Student Satisfaction",
      value: "4.6/5",
      change: "+0.3",
      trend: "up",
      icon: TrendingUp,
      color: "text-warning",
    },
  ];

  const courseOutcomes = [
    {
      course: "React Advanced",
      students: 24,
      avgCompletion: 89,
      avgGrade: 85,
      skillsAcquired: ["Component Design", "State Management", "Performance Optimization"],
      satisfaction: 4.7,
      status: "completed",
    },
    {
      course: "Machine Learning",
      students: 18,
      avgCompletion: 76,
      avgGrade: 82,
      skillsAcquired: ["Algorithm Design", "Data Analysis", "Model Training"],
      satisfaction: 4.5,
      status: "in-progress",
    },
    {
      course: "Cloud Architecture",
      students: 15,
      avgCompletion: 92,
      avgGrade: 88,
      skillsAcquired: ["AWS Services", "Infrastructure Design", "Security"],
      satisfaction: 4.8,
      status: "completed",
    },
    {
      course: "DevOps Fundamentals",
      students: 22,
      avgCompletion: 95,
      avgGrade: 91,
      skillsAcquired: ["CI/CD", "Containerization", "Monitoring"],
      satisfaction: 4.6,
      status: "completed",
    },
  ];

  const learningObjectives = [
    {
      objective: "Master React Component Architecture",
      achieved: 89,
      target: 85,
      status: "exceeded",
      students: 24,
    },
    {
      objective: "Implement State Management Solutions",
      achieved: 76,
      target: 80,
      status: "approaching",
      students: 24,
    },
    {
      objective: "Deploy Production Applications",
      achieved: 92,
      target: 90,
      status: "exceeded",
      students: 24,
    },
    {
      objective: "Code Review and Best Practices",
      achieved: 85,
      target: 85,
      status: "achieved",
      students: 24,
    },
  ];

  const skillsAnalysis = [
    {
      skill: "Frontend Development",
      proficiency: 87,
      improvement: "+12%",
      studentsAssessed: 156,
    },
    {
      skill: "Backend Development",
      proficiency: 82,
      improvement: "+8%",
      studentsAssessed: 134,
    },
    {
      skill: "Database Design",
      proficiency: 79,
      improvement: "+15%",
      studentsAssessed: 128,
    },
    {
      skill: "DevOps & Deployment",
      proficiency: 74,
      improvement: "+18%",
      studentsAssessed: 89,
    },
    {
      skill: "AI/ML Integration",
      proficiency: 68,
      improvement: "+22%",
      studentsAssessed: 67,
    },
  ];

  // Completion Trends Data
  const completionTrendsData = [
    { month: "Jan", completion: 85, target: 80 },
    { month: "Feb", completion: 88, target: 82 },
    { month: "Mar", completion: 91, target: 85 },
    { month: "Apr", completion: 89, target: 87 },
    { month: "May", completion: 93, target: 90 },
    { month: "Jun", completion: 94, target: 92 },
  ];

  // Skills Distribution Data
  const skillsDistributionData = [
    { name: "Frontend Development", value: 28, fill: "hsl(var(--primary))" },
    { name: "Backend Development", value: 24, fill: "hsl(var(--secondary))" },
    { name: "Database Design", value: 18, fill: "hsl(var(--accent))" },
    { name: "DevOps & Deployment", value: 16, fill: "hsl(var(--success))" },
    { name: "AI/ML Integration", value: 14, fill: "hsl(var(--warning))" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "exceeded":
        return "text-success";
      case "achieved":
        return "text-primary";
      case "approaching":
        return "text-warning";
      case "below":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "exceeded":
        return CheckCircle;
      case "achieved":
        return CheckCircle;
      case "approaching":
        return AlertCircle;
      case "below":
        return XCircle;
      default:
        return Target;
    }
  };

  const getCourseStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success";
      case "in-progress":
        return "bg-warning/10 text-warning";
      case "scheduled":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            Learning Outcomes Analytics
          </h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive analysis of learning effectiveness and skill development
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Quarter</SelectItem>
              <SelectItem value="last">Last Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" />
            Export
          </Button>
          <Button variant="gradient">
            <Share className="h-4 w-4 mr-1" />
            Share Report
          </Button>
        </div>
      </div>

      {/* Overall Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overallMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className={`text-sm ${metric.color} flex items-center gap-1`}>
                      <TrendingUp className="h-3 w-3" />
                      {metric.change}
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium">{metric.title}</p>
                <p className="text-xs text-muted-foreground">vs previous period</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Course Analysis</TabsTrigger>
          <TabsTrigger value="objectives">Learning Objectives</TabsTrigger>
          <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Completion Trends */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Completion Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={completionTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis 
                        dataKey="month" 
                        className="text-xs"
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        className="text-xs"
                        tick={{ fontSize: 12 }}
                        domain={[70, 100]}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '6px',
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="completion" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, fill: 'hsl(var(--primary))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="target" 
                        stroke="hsl(var(--muted-foreground))" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ fill: 'hsl(var(--muted-foreground))', strokeWidth: 2, r: 3 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Skills Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5 text-accent" />
                  Skills Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={skillsDistributionData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={40}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {skillsDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value, name) => [`${value}%`, name]}
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '6px',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 space-y-2">
                    {skillsDistributionData.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: skill.fill }}
                          />
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-medium">{skill.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Key Performance Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-success">1,247</p>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">156</p>
                  <p className="text-sm text-muted-foreground">Courses Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">42</p>
                  <p className="text-sm text-muted-foreground">Skills Acquired</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-warning">98.3%</p>
                  <p className="text-sm text-muted-foreground">Retention Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Course Performance Analysis</h3>
            <Select value={selectedCourse} onValueChange={setSelectedCourse}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Courses</SelectItem>
                <SelectItem value="react">React Advanced</SelectItem>
                <SelectItem value="ml">Machine Learning</SelectItem>
                <SelectItem value="cloud">Cloud Architecture</SelectItem>
                <SelectItem value="devops">DevOps Fundamentals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courseOutcomes.map((course, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{course.course}</span>
                    <Badge className={getCourseStatusColor(course.status)}>
                      {course.status}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">{course.students}</p>
                      <p className="text-xs text-muted-foreground">Students</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">{course.avgCompletion}%</p>
                      <p className="text-xs text-muted-foreground">Completion</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-success">{course.avgGrade}%</p>
                      <p className="text-xs text-muted-foreground">Avg Grade</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Skills Acquired:</p>
                    <div className="flex flex-wrap gap-1">
                      {course.skillsAcquired.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Satisfaction:</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${
                              i < Math.floor(course.satisfaction) ? "text-warning" : "text-muted"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-sm font-medium ml-1">{course.satisfaction}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="objectives" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Learning Objectives Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {learningObjectives.map((objective, index) => {
                  const StatusIcon = getStatusIcon(objective.status);
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <StatusIcon className={`h-5 w-5 ${getStatusColor(objective.status)}`} />
                          <div>
                            <p className="font-medium">{objective.objective}</p>
                            <p className="text-sm text-muted-foreground">
                              {objective.students} students assessed
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{objective.achieved}%</p>
                          <p className="text-sm text-muted-foreground">Target: {objective.target}%</p>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={objective.achieved} className="h-3" />
                        <div
                          className="absolute top-0 h-3 w-1 bg-primary/50 rounded"
                          style={{ left: `${objective.target}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0%</span>
                        <span>Target: {objective.target}%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                Skills Proficiency Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillsAnalysis.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{skill.skill}</p>
                        <p className="text-sm text-muted-foreground">
                          {skill.studentsAssessed} students assessed
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{skill.proficiency}%</p>
                        <p className="text-sm text-success">{skill.improvement}</p>
                      </div>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
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