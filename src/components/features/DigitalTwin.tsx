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
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Target,
  BookOpen,
  Award,
  Lightbulb,
  BarChart3,
  Zap,
  Clock,
  Eye,
  Settings,
  UserCheck,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

export const DigitalTwin = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisSpeed, setAnalysisSpeed] = useState([1]);
  const [selectedCohort, setSelectedCohort] = useState("batch-2024");
  const [selectedSkillDomain, setSelectedSkillDomain] = useState("all");
  const [totalLearners, setTotalLearners] = useState(245);
  const [selectedLearner, setSelectedLearner] = useState("LP001");

  // Learning analytics data
  const skillGaps = [
    { skill: "JavaScript", gap: 35, priority: "High", learners: 86, color: "bg-red-500" },
    { skill: "React", gap: 28, priority: "High", learners: 68, color: "bg-orange-500" },
    { skill: "Node.js", gap: 22, priority: "Medium", learners: 54, color: "bg-yellow-500" },
    { skill: "Database Design", gap: 18, priority: "Medium", learners: 44, color: "bg-blue-500" },
    { skill: "DevOps", gap: 42, priority: "Low", learners: 103, color: "bg-purple-500" },
    { skill: "System Design", gap: 38, priority: "High", learners: 93, color: "bg-pink-500" },
  ];

  const readinessLevels = [
    { level: "Ready for Industry", percentage: 25, count: 61, color: "bg-success" },
    { level: "Nearly Ready", percentage: 45, count: 110, color: "bg-warning" },
    { level: "Needs Support", percentage: 30, count: 74, color: "bg-destructive" },
  ];

  const learnerProfiles = [
    { 
      id: "LP001", 
      name: "Alex Kumar", 
      currentRole: "Junior Developer",
      readiness: 85, 
      riskLevel: "Low", 
      strongSkills: ["JavaScript", "React"], 
      weakSkills: ["DevOps", "Testing"],
      predictedCompletion: "2 weeks",
      deploymentReadiness: 85,
      learningVelocity: "Fast",
      simulationData: {
        futureLearning: ["Advanced React", "System Design", "Leadership"],
        careerPath: "Senior Developer → Tech Lead",
        potentialRoles: ["Frontend Architect", "Team Lead"]
      }
    },
    { 
      id: "LP002", 
      name: "Sarah Chen",
      currentRole: "Backend Developer",
      readiness: 62, 
      riskLevel: "Medium", 
      strongSkills: ["Database", "SQL"], 
      weakSkills: ["Frontend", "React"],
      predictedCompletion: "6 weeks",
      deploymentReadiness: 62,
      learningVelocity: "Moderate",
      simulationData: {
        futureLearning: ["Full Stack Development", "React Fundamentals", "API Design"],
        careerPath: "Backend Developer → Full Stack Developer",
        potentialRoles: ["API Developer", "Database Architect"]
      }
    },
    { 
      id: "LP003", 
      name: "David Patel",
      currentRole: "Graduate Trainee",
      readiness: 45, 
      riskLevel: "High", 
      strongSkills: ["Theory"], 
      weakSkills: ["Practical", "Coding"],
      predictedCompletion: "10 weeks",
      deploymentReadiness: 45,
      learningVelocity: "Slow",
      simulationData: {
        futureLearning: ["Coding Bootcamp", "Practical Projects", "Mentoring"],
        careerPath: "Trainee → Junior Developer",
        potentialRoles: ["QA Engineer", "Junior Developer"]
      }
    },
    {
      id: "LP004",
      name: "Priya Sharma",
      currentRole: "UI/UX Developer",
      readiness: 78,
      riskLevel: "Low",
      strongSkills: ["React", "Design Systems"],
      weakSkills: ["Backend", "Databases"],
      predictedCompletion: "3 weeks",
      deploymentReadiness: 78,
      learningVelocity: "Fast",
      simulationData: {
        futureLearning: ["Full Stack Skills", "Node.js", "MongoDB"],
        careerPath: "UI Developer → Full Stack Developer",
        potentialRoles: ["Frontend Architect", "Product Developer"]
      }
    }
  ];

  const competencyMetrics = [
    { name: "Technical Skills", current: 68, target: 85, unit: "%" },
    { name: "Problem Solving", current: 72, target: 80, unit: "%" },
    { name: "Collaboration", current: 78, target: 85, unit: "%" },
    { name: "Communication", current: 65, target: 75, unit: "%" },
  ];

  const cohorts = [
    { id: "batch-2024", name: "Batch 2024 Q1", learners: 245 },
    { id: "batch-2023", name: "Batch 2023 Q4", learners: 198 },
    { id: "advanced-track", name: "Advanced Track", learners: 87 },
    { id: "foundation", name: "Foundation Program", learners: 156 },
  ];

  const skillDomains = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend Development" },
    { id: "fullstack", name: "Full Stack" },
    { id: "devops", name: "DevOps & Cloud" },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnalyzing) {
      interval = setInterval(() => {
        // Simulate real-time learning analytics updates
        setTotalLearners(prev => prev + Math.floor(Math.random() * 6 - 3));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing, analysisSpeed]);

  const handleStartAnalysis = () => {
    setIsAnalyzing(!isAnalyzing);
  };

  const handleResetAnalysis = () => {
    setIsAnalyzing(false);
    setTotalLearners(245);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Learning Digital Twin
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-powered learning analytics, skill gap analysis, and readiness prediction
          </p>
        </div>
        <Badge variant="outline" className="text-primary">
          <Activity className="h-4 w-4 mr-2" />
          {isAnalyzing ? "Live Analysis" : "Analysis Paused"}
        </Badge>
      </div>

      {/* Analysis Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Learning Analytics Controls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Cohort</label>
              <Select value={selectedCohort} onValueChange={setSelectedCohort}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cohorts.map(cohort => (
                    <SelectItem key={cohort.id} value={cohort.id}>
                      {cohort.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Skill Domain</label>
              <Select value={selectedSkillDomain} onValueChange={setSelectedSkillDomain}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {skillDomains.map(domain => (
                    <SelectItem key={domain.id} value={domain.id}>
                      {domain.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Analysis Speed: {analysisSpeed[0]}x</label>
              <Slider
                value={analysisSpeed}
                onValueChange={setAnalysisSpeed}
                max={5}
                min={0.5}
                step={0.5}
                className="w-full"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                variant={isAnalyzing ? "destructive" : "gradient"} 
                onClick={handleStartAnalysis}
                className="flex-1"
              >
                {isAnalyzing ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isAnalyzing ? "Pause" : "Start"} Analysis
              </Button>
              <Button variant="outline" onClick={handleResetAnalysis}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Virtual Learner Twin Simulation */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="h-5 w-5" />
            Virtual Learner Twin Simulation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Learner Selection */}
            <Card className="border-dashed">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Select Learner</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {learnerProfiles.map(learner => (
                  <div 
                    key={learner.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      selectedLearner === learner.id ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : ''
                    }`}
                    onClick={() => setSelectedLearner(learner.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{learner.name}</h4>
                      <Badge variant={learner.riskLevel === "High" ? "destructive" : learner.riskLevel === "Medium" ? "outline" : "secondary"}>
                        {learner.riskLevel}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-3 w-3" />
                      {learner.currentRole}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Current State Analysis */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Current State</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(() => {
                  const learner = learnerProfiles.find(l => l.id === selectedLearner);
                  if (!learner) return null;
                  
                  return (
                    <>
                      <div className="text-center pb-4 border-b">
                        <h3 className="font-semibold text-lg">{learner.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {learner.currentRole}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Deployment Readiness</span>
                            <span>{learner.deploymentReadiness}%</span>
                          </div>
                          <Progress value={learner.deploymentReadiness} className="h-2" />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Skill Gaps</label>
                          <div className="space-y-2">
                            {learner.weakSkills.map(skill => (
                              <div key={skill} className="flex items-center justify-between p-2 bg-destructive/5 border border-destructive/20 rounded">
                                <span className="text-sm">{skill}</span>
                                <Badge variant="destructive" className="text-xs">Gap</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Strong Skills</label>
                          <div className="space-y-2">
                            {learner.strongSkills.map(skill => (
                              <div key={skill} className="flex items-center justify-between p-2 bg-success/5 border border-success/20 rounded">
                                <span className="text-sm">{skill}</span>
                                <Badge variant="secondary" className="text-xs">Strong</Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-2 border-t">
                          <div className="flex items-center justify-between text-sm">
                            <span>Learning Velocity</span>
                            <Badge variant={learner.learningVelocity === "Fast" ? "default" : learner.learningVelocity === "Moderate" ? "outline" : "destructive"}>
                              {learner.learningVelocity}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </CardContent>
            </Card>

            {/* Future Learning Simulation */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Future Simulation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(() => {
                  const learner = learnerProfiles.find(l => l.id === selectedLearner);
                  if (!learner) return null;
                  
                  return (
                    <>
                      <div>
                        <label className="text-sm font-medium mb-2 block flex items-center gap-1">
                          <GraduationCap className="h-3 w-3" />
                          Predicted Learning Path
                        </label>
                        <div className="space-y-2">
                          {learner.simulationData.futureLearning.map((item, index) => (
                            <div key={item} className="flex items-center gap-2 p-2 bg-primary/5 border border-primary/20 rounded">
                              <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </div>
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Career Progression</label>
                        <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                          <p className="text-sm text-center font-medium">{learner.simulationData.careerPath}</p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Potential Roles</label>
                        <div className="space-y-2">
                          {learner.simulationData.potentialRoles.map(role => (
                            <div key={role} className="flex items-center gap-2 p-2 bg-secondary/5 border border-secondary/20 rounded">
                              <Target className="h-3 w-3 text-secondary" />
                              <span className="text-sm">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground mb-2">Estimated completion</p>
                          <Badge variant="outline" className="text-sm">
                            <Clock className="h-3 w-3 mr-1" />
                            {learner.predictedCompletion}
                          </Badge>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Skill Gap Analysis */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Skill Gap Analysis & Predictive Readiness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center relative overflow-hidden">
              {/* Skill gaps visualization */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] animate-pulse"></div>
              
              {/* Skill gap matrix */}
              <div className="absolute inset-4 grid grid-cols-3 gap-3">
                {skillGaps.map((skill, index) => (
                  <div key={skill.skill} className="relative">
                    <div className={`h-20 ${skill.color} rounded-lg opacity-80 flex flex-col items-center justify-center text-white text-xs font-bold p-2`}>
                      <span className="text-center">{skill.skill}</span>
                      <span className="text-2xl">{skill.gap}%</span>
                      <span className="text-xs opacity-80">{skill.learners} learners</span>
                    </div>
                    <Badge 
                      variant={skill.priority === "High" ? "destructive" : skill.priority === "Medium" ? "outline" : "secondary"}
                      className="absolute -top-2 -right-2 text-xs"
                    >
                      {skill.priority}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">Total Learners: {totalLearners}</span>
                </div>
              </div>
              
              <div className="text-center">
                <Brain className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-lg font-semibold">AI-Powered Skill Gap Matrix</p>
                <p className="text-sm text-muted-foreground">Real-time competency tracking and prediction</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Analytics */}
        <div className="space-y-6">
          {/* Readiness Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Industry Readiness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {readinessLevels.map(level => (
                <div key={level.level}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{level.level}</span>
                    <span>{level.count} ({level.percentage}%)</span>
                  </div>
                  <Progress value={level.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Competency Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Competency Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {competencyMetrics.map(metric => (
                <div key={metric.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{metric.name}</span>
                    <span>{metric.current}% / {metric.target}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={(metric.current / metric.target) * 100} className="h-2" />
                    <div 
                      className="absolute top-0 w-0.5 h-2 bg-primary"
                      style={{ left: `${(metric.target / 100) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Learner Profiles & AI Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              At-Risk Learner Identification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {learnerProfiles.map(learner => (
              <div key={learner.id} className="p-3 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium">{learner.name}</h4>
                    <p className="text-sm text-muted-foreground">{learner.id}</p>
                  </div>
                  <Badge 
                    variant={learner.riskLevel === "High" ? "destructive" : learner.riskLevel === "Medium" ? "outline" : "secondary"}
                  >
                    {learner.riskLevel} Risk
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Readiness Score</span>
                    <span>{learner.readiness}%</span>
                  </div>
                  <Progress value={learner.readiness} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Strong: {learner.strongSkills.join(", ")}
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3 text-warning" />
                      Needs work: {learner.weakSkills.join(", ")}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <Clock className="h-3 w-3" />
                    <span>Predicted completion: {learner.predictedCompletion}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              AI-Powered Learning Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-success" />
                <span className="font-medium text-success">Skill Improvement Opportunity</span>
              </div>
              <p className="text-sm text-muted-foreground">
                85% of learners with JavaScript gaps show rapid improvement with hands-on projects.
              </p>
            </div>
            
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <span className="font-medium text-warning">Early Intervention Needed</span>
              </div>
              <p className="text-sm text-muted-foreground">
                12 learners at high risk - recommend additional mentoring sessions.
              </p>
            </div>
            
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-4 w-4 text-primary" />
                <span className="font-medium text-primary">Predictive Analytics</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Current cohort shows 78% industry readiness probability by course end.
              </p>
            </div>

            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-4 w-4 text-blue-500" />
                <span className="font-medium text-blue-500">Adaptive Learning Path</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI recommends personalized React modules for 68 learners with frontend gaps.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};