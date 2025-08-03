import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CalendarDays, Clock, Globe, MapPin, Users, Video, Plus, ChevronLeft, ChevronRight } from "lucide-react";

export const GlobalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 0, 15)); // January 15, 2025
  const [viewMode, setViewMode] = useState("week");

  // Fetch sessions from backend
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch sessions from backend API
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:4000/api/sessions")
      .then(res => res.json())
      .then(data => {
        setSessions(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch session data");
        setLoading(false);
      });
  }, []);

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

  // Filter sessions based on current view
  const getFilteredSessions = useMemo(() => {
    const currentDateStr = currentDate.toISOString().split('T')[0];
    
    if (viewMode === "week") {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      return sessions.filter(session => {
        const sessionDate = new Date(session.date);
        return sessionDate >= startOfWeek && sessionDate <= endOfWeek;
      });
    } else if (viewMode === "month") {
      return sessions.filter(session => {
        const sessionDate = new Date(session.date);
        return sessionDate.getMonth() === currentDate.getMonth() && 
               sessionDate.getFullYear() === currentDate.getFullYear();
      });
    } else {
      return sessions.filter(session => session.date === currentDateStr);
    }
  }, [currentDate, viewMode]);

  // Navigation helpers
  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (viewMode === "week") {
      newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    } else if (viewMode === "month") {
      newDate.setMonth(currentDate.getMonth() + (direction === 'next' ? 1 : -1));
    } else {
      newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
    }
    setCurrentDate(newDate);
  };

  // Format date range for display
  const getDateRangeDisplay = () => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    
    if (viewMode === "week") {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return `${startOfWeek.toLocaleDateString('en-US', options)} - ${endOfWeek.toLocaleDateString('en-US', options)}`;
    } else if (viewMode === "month") {
      return currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    } else {
      return currentDate.toLocaleDateString('en-US', options);
    }
  };

  // Generate calendar grid for month view
  const generateMonthCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      const dayDate = new Date(current);
      const isCurrentMonth = dayDate.getMonth() === month;
      const dateStr = dayDate.toISOString().split('T')[0];
      const daySessions = sessions.filter(session => session.date === dateStr);
      
      days.push({
        date: dayDate,
        isCurrentMonth,
        sessions: daySessions
      });
      
      current.setDate(current.getDate() + 1);
    }
    
    return days;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-warning to-accent bg-clip-text text-transparent">
            Global Session Calendar 2025
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

      {/* View Mode Toggle and Navigation */}
      <div className="flex items-center justify-between">
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
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => navigateDate('prev')}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium text-sm min-w-[200px] text-center">
              {getDateRangeDisplay()}
            </span>
            <Button variant="outline" size="sm" onClick={() => navigateDate('next')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date(2025, 0, 15))}>
            Today
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Calendar/Sessions */}
        <div className="lg:col-span-2 space-y-6">
          {viewMode === "month" ? (
            /* Month View Calendar Grid */
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-warning" />
                  {currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="p-3 text-center font-medium text-sm text-muted-foreground">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {generateMonthCalendar().map((day, index) => (
                    <div
                      key={index}
                      className={`p-2 min-h-[100px] border rounded-lg ${
                        day.isCurrentMonth ? 'bg-background' : 'bg-muted/30'
                      } ${
                        day.date.toDateString() === currentDate.toDateString() 
                          ? 'ring-2 ring-primary' 
                          : ''
                      }`}
                    >
                      <div className={`text-sm font-medium mb-1 ${
                        day.isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {day.date.getDate()}
                      </div>
                      <div className="space-y-1">
                        {day.sessions.slice(0, 3).map(session => (
                          <div
                            key={session.id}
                            className={`text-xs p-1 rounded truncate ${getTypeColor(session.type)}`}
                            title={`${session.title} - ${session.time}`}
                          >
                            {session.title}
                          </div>
                        ))}
                        {day.sessions.length > 3 && (
                          <div className="text-xs text-muted-foreground">
                            +{day.sessions.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Week/Day View Sessions List */
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-warning" />
                  {viewMode === "week" ? "Week's Sessions" : "Today's Sessions"} - {getDateRangeDisplay()}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {getFilteredSessions.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No sessions scheduled for this {viewMode}</p>
                  </div>
                ) : (
                  getFilteredSessions.map((session) => (
                    <div
                      key={session.id}
                      className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">{session.title}</h3>
                            {viewMode === "week" && (
                              <Badge variant="outline" className="text-xs">
                                {new Date(session.date).toLocaleDateString('en-US', { 
                                  weekday: 'short', 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </Badge>
                            )}
                          </div>
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
                  ))
                )}
              </CardContent>
            </Card>
          )}
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
                    <p className="text-2xl font-bold text-primary">{getFilteredSessions.length}</p>
                    <p className="text-xs text-muted-foreground">This {viewMode}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">
                      {sessions.length > 0 ? Math.round((sessions.reduce((sum, s) => sum + s.attendees, 0) / sessions.reduce((sum, s) => sum + s.maxAttendees, 0)) * 100) : 0}%
                    </p>
                    <p className="text-xs text-muted-foreground">Avg Attendance</p>
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