import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Users,
  MapPin,
  Search,
  Filter,
  User,
  Monitor,
  Wifi,
  Volume2,
  Star,
  Eye,
  Brain,
} from "lucide-react";

export const SeatPlanner = () => {
  const [selectedRoom, setSelectedRoom] = useState("301");
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const classrooms = [
    { id: "301", name: "Room 301", capacity: 30, occupied: 24 },
    { id: "205", name: "Room 205", capacity: 25, occupied: 18 },
    { id: "410", name: "Room 410", capacity: 35, occupied: 0 },
  ];

  const students = [
    {
      id: "1",
      name: "Alice Johnson",
      course: "React Advanced",
      learningStyle: "Visual",
      preferredSeat: "front",
      specialNeeds: "None",
      collaborationStyle: "Group",
      techLevel: "Advanced",
      seatAssigned: "A1",
    },
    {
      id: "2",
      name: "Bob Smith",
      course: "React Advanced",
      learningStyle: "Kinesthetic",
      preferredSeat: "middle",
      specialNeeds: "Audio assistance",
      collaborationStyle: "Pair",
      techLevel: "Intermediate",
      seatAssigned: "B3",
    },
    {
      id: "3",
      name: "Carol Davis",
      course: "React Advanced",
      learningStyle: "Auditory",
      preferredSeat: "front",
      specialNeeds: "None",
      collaborationStyle: "Individual",
      techLevel: "Advanced",
      seatAssigned: "A2",
    },
    {
      id: "4",
      name: "David Wilson",
      course: "React Advanced",
      learningStyle: "Visual",
      preferredSeat: "back",
      specialNeeds: "None",
      collaborationStyle: "Group",
      techLevel: "Beginner",
      seatAssigned: "C5",
    },
  ];

  // Generate seat layout for visualization
  const generateSeatLayout = () => {
    const rows = ["A", "B", "C", "D", "E"];
    const cols = 6;
    const seats = [];

    for (let row of rows) {
      for (let col = 1; col <= cols; col++) {
        const seatId = `${row}${col}`;
        const student = students.find(s => s.seatAssigned === seatId);
        seats.push({
          id: seatId,
          row,
          col,
          occupied: !!student,
          student: student || null,
        });
      }
    }
    return seats;
  };

  const seats = generateSeatLayout();

  const getLearningStyleColor = (style: string) => {
    switch (style) {
      case "Visual":
        return "bg-primary/20 border-primary";
      case "Auditory":
        return "bg-secondary/20 border-secondary";
      case "Kinesthetic":
        return "bg-accent/20 border-accent";
      default:
        return "bg-muted/20 border-muted";
    }
  };

  const getTechLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-success";
      case "Intermediate":
        return "text-warning";
      case "Beginner":
        return "text-primary";
      default:
        return "text-muted-foreground";
    }
  };

  const getCollaborationColor = (style: string) => {
    switch (style) {
      case "Group":
        return "bg-accent/10 text-accent";
      case "Pair":
        return "bg-secondary/10 text-secondary";
      case "Individual":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  const aiRecommendations = [
    {
      type: "optimal",
      title: "Optimal Seating Detected",
      description: "Current arrangement maximizes learning efficiency by 23%",
      icon: Star,
    },
    {
      type: "collaboration",
      title: "Group Formation Suggested",
      description: "Alice and Carol could benefit from proximity for peer learning",
      icon: Users,
    },
    {
      type: "accessibility",
      title: "Audio Setup Optimized",
      description: "Bob's seat positioned for optimal audio assistance coverage",
      icon: Volume2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent">
            Smart Seat Planner
          </h1>
          <p className="text-muted-foreground mt-2">
            AI-optimized seating with student profiles and color-coded insights
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={selectedRoom} onValueChange={setSelectedRoom}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {classrooms.map((room) => (
                <SelectItem key={room.id} value={room.id}>
                  {room.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="gradient">
            <Brain className="h-4 w-4 mr-1" />
            AI Optimize
          </Button>
        </div>
      </div>

      {/* Room Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-semibold">Room {selectedRoom}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>{classrooms.find(r => r.id === selectedRoom)?.occupied || 0} / {classrooms.find(r => r.id === selectedRoom)?.capacity || 0} students</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-gradient-primary text-primary-foreground">
                <Monitor className="h-3 w-3 mr-1" />
                Smart Board
              </Badge>
              <Badge variant="outline" className="bg-gradient-secondary text-secondary-foreground">
                <Wifi className="h-3 w-3 mr-1" />
                High-Speed WiFi
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Seat Layout */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Classroom Layout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Front of classroom */}
                <div className="text-center">
                  <div className="w-full h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold">
                    Smart Board / Instructor Area
                  </div>
                </div>

                {/* Seat Grid */}
                <div className="space-y-3">
                  {["A", "B", "C", "D", "E"].map((row) => (
                    <div key={row} className="flex items-center gap-2">
                      <span className="w-6 text-center font-semibold text-muted-foreground">
                        {row}
                      </span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6].map((col) => {
                          const seatId = `${row}${col}`;
                          const seat = seats.find(s => s.id === seatId);
                          const isSelected = selectedSeat === seatId;

                          return (
                            <button
                              key={seatId}
                              onClick={() => setSelectedSeat(isSelected ? null : seatId)}
                              className={`
                                w-12 h-12 rounded-lg border-2 transition-all duration-200 flex items-center justify-center text-xs font-semibold
                                ${seat?.occupied 
                                  ? `${getLearningStyleColor(seat.student?.learningStyle || "")} hover:scale-105`
                                  : "bg-muted/50 border-muted hover:bg-muted"
                                }
                                ${isSelected ? "ring-2 ring-primary ring-offset-2" : ""}
                              `}
                            >
                              {seat?.occupied ? (
                                <User className="h-4 w-4" />
                              ) : (
                                seatId
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-primary/20 border border-primary"></div>
                    <span className="text-sm">Visual Learner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-secondary/20 border border-secondary"></div>
                    <span className="text-sm">Auditory Learner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-accent/20 border border-accent"></div>
                    <span className="text-sm">Kinesthetic Learner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-muted/50 border border-muted"></div>
                    <span className="text-sm">Available</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Student Search */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-accent" />
                Student Search
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Input
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="space-y-2">
                {students
                  .filter(student => 
                    student.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((student) => (
                    <div
                      key={student.id}
                      className="p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">{student.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {student.seatAssigned}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Learning:</span>
                          <span>{student.learningStyle}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tech Level:</span>
                          <span className={getTechLevelColor(student.techLevel)}>
                            {student.techLevel}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Collaboration:</span>
                          <Badge variant="outline" className={`text-xs ${getCollaborationColor(student.collaborationStyle)}`}>
                            {student.collaborationStyle}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Seat Info */}
          {selectedSeat && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Seat {selectedSeat}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {(() => {
                  const seat = seats.find(s => s.id === selectedSeat);
                  const student = seat?.student;
                  
                  return student ? (
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-2 flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold">
                            {student.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <p className="font-semibold">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.course}</p>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Learning Style:</span>
                          <span className="font-medium">{student.learningStyle}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Preferred Area:</span>
                          <span className="font-medium">{student.preferredSeat}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tech Level:</span>
                          <span className={`font-medium ${getTechLevelColor(student.techLevel)}`}>
                            {student.techLevel}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Special Needs:</span>
                          <span className="font-medium">{student.specialNeeds}</span>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="w-full">
                        Reassign Seat
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <div className="w-12 h-12 rounded-full bg-muted mx-auto mb-2 flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground">Seat available</p>
                      <Button variant="gradient" size="sm" className="mt-3">
                        Assign Student
                      </Button>
                    </div>
                  );
                })()}
              </CardContent>
            </Card>
          )}

          {/* AI Recommendations */}
          <Card className="bg-gradient-glass backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-accent" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {aiRecommendations.map((rec, index) => {
                const Icon = rec.icon;
                return (
                  <div key={index} className="p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                    <div className="flex items-start gap-2">
                      <Icon className="h-4 w-4 text-accent mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{rec.title}</p>
                        <p className="text-xs text-muted-foreground">{rec.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};