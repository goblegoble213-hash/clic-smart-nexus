import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CalendarDays, Clock, Globe, MapPin, Users, Video, Plus } from "lucide-react";

export const GlobalCalendar = () => {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [viewMode, setViewMode] = useState("week");

  const sessions = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Dr. Sarah Chen",
      time: "09:00 - 11:00",
      timezone: "IST",
      location: "Room 301 / Virtual",
      attendees: 24,
      maxAttendees: 30,
      type: "hybrid",
      status: "confirmed",
      difficulty: "Advanced",
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Prof. Michael Kumar",
      time: "14:00 - 16:00",
      timezone: "EST",
      location: "Virtual Only",
      attendees: 45,
      maxAttendees: 50,
      type: "virtual",
      status: "confirmed",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      title: "Cloud Architecture Workshop",
      instructor: "Dr. Emily Rodriguez",
      time: "18:00 - 20:00",
      timezone: "PST",
      location: "Lab 205",
      attendees: 18,
      maxAttendees: 20,
      type: "in-person",
      status: "waitlist",
      difficulty: "Advanced",
    },
    {
      id: 4,
      title: "AI Ethics Discussion",
      instructor: "Prof. James Wilson",
      time: "10:30 - 12:00",
      timezone: "GMT",
      location: "Virtual Only",
      attendees: 67,
      maxAttendees: 100,
      type: "virtual",
      status: "confirmed",
      difficulty: "Beginner",
    },
  ];

  const upcomingEvents = [
    {
      date: "Tomorrow",
      title: "DevOps Masterclass",
      time: "15:00 IST",
      participants: 32,
    },
    {
      date: "Jan 17",
      title: "Frontend Performance Optimization",
      time: "10:00 EST",
      participants: 28,
    },
    {
      date: "Jan 19",
      title: "Database Design Patterns",
      time: "14:00 PST",
      participants: 41,
    },
  ];

  const timezones = [
    { code: "IST", name: "India Standard Time", time: "14:30" },
    { code: "EST", name: "Eastern Standard Time", time: "04:00" },
    { code: "PST", name: "Pacific Standard Time", time: "01:00" },
    { code: "GMT", name: "Greenwich Mean Time", time: "09:00" },
    { code: "JST", name: "Japan Standard Time", time: "18:00" },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "virtual":
        return "bg-secondary text-secondary-foreground";
      case "in-person":
        return "bg-primary text-primary-foreground";
      case "hybrid":
        return "bg-gradient-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-success";
      case "waitlist":
        return "text-warning";
      case "cancelled":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-success/10 text-success";
      case "Intermediate":
        return "bg-warning/10 text-warning";
      case "Advanced":
        return "bg-destructive/10 text-destructive";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
            Global Session Calendar
          </h1>
          <p className="text-muted-foreground mt-2">
            Worldwide learning sessions across multiple time zones
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Globe className="h-4 w-4 mr-1" />
            All Zones
          </Button>
          <Button variant="gradient">
            <Plus className="h-4 w-4 mr-1" />
            Schedule Session
          </Button>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant={viewMode === "day" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("day")}
        >
          Day
        </Button>
        <Button
          variant={viewMode === "week" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("week")}
        >
          Week
        </Button>
        <Button
          variant={viewMode === "month" ? "default" : "outline"}
          size="sm"
          onClick={() => setViewMode("month")}
        >
          Month
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Calendar/Sessions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-warning" />
                Today's Sessions - January 15, 2024
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{session.title}</h3>
                      <p className="text-sm text-muted-foreground">{session.instructor}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getDifficultyColor(session.difficulty)}>
                        {session.difficulty}
                      </Badge>
                      <Badge className={getTypeColor(session.type)}>
                        {session.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{session.time} {session.timezone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {session.type === "virtual" ? (
                        <Video className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="truncate">{session.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{session.attendees}/{session.maxAttendees}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${getStatusColor(session.status)}`}>
                        {session.status.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex -space-x-1">
                      {[...Array(Math.min(session.attendees, 5))].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-xs text-primary-foreground"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                      {session.attendees > 5 && (
                        <div className="w-6 h-6 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs">
                          +{session.attendees - 5}
                        </div>
                      )}
                    </div>
                    <Button
                      variant={session.status === "waitlist" ? "outline" : "gradient"}
                      size="sm"
                    >
                      {session.status === "waitlist" ? "Join Waitlist" : "Join Session"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* World Clock */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                Global Time Zones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {timezones.map((timezone, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">{timezone.code}</p>
                    <p className="text-xs text-muted-foreground">{timezone.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{timezone.time}</p>
                    <p className="text-xs text-muted-foreground">Jan 15</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg bg-gradient-glass backdrop-blur-sm border border-white/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm">{event.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{event.time}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {event.date}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {event.participants} participants
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-gradient-glass backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-warning to-accent mx-auto flex items-center justify-center">
                  <CalendarDays className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold">Session Stats</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-2xl font-bold text-primary">127</p>
                    <p className="text-xs text-muted-foreground">This Week</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">89%</p>
                    <p className="text-xs text-muted-foreground">Attendance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};