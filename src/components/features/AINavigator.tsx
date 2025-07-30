import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  MessageSquare,
  Search,
  BookOpen,
  Users,
  Calendar,
  Lightbulb,
  Send,
  Mic,
  Camera,
} from "lucide-react";

export const AINavigator = () => {
  const [query, setQuery] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      type: "ai",
      content: "Hello! I'm your AI Navigator. How can I help you learn today?",
      timestamp: "2 minutes ago",
    },
  ]);

  const suggestions = [
    {
      title: "Find Java Resources",
      description: "Get curated learning materials for Java programming",
      icon: BookOpen,
      category: "Learning",
    },
    {
      title: "Schedule Study Group",
      description: "Connect with peers for collaborative learning",
      icon: Users,
      category: "Collaboration",
    },
    {
      title: "Book Lab Session",
      description: "Reserve hands-on lab time for practice",
      icon: Calendar,
      category: "Booking",
    },
    {
      title: "Career Guidance",
      description: "Get personalized career path recommendations",
      icon: Lightbulb,
      category: "Guidance",
    },
  ];

  const recentQueries = [
    "What are the prerequisites for machine learning course?",
    "How to set up development environment for React?",
    "When is the next Python certification exam?",
    "Find teammates for the final project",
  ];

  const handleSendMessage = () => {
    if (!query.trim()) return;

    setChatMessages(prev => [
      ...prev,
      {
        type: "user",
        content: query,
        timestamp: "now",
      },
      {
        type: "ai",
        content: `I understand you're asking about "${query}". Let me help you with that...`,
        timestamp: "now",
      },
    ]);
    setQuery("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
            AI Navigator
          </h1>
          <p className="text-muted-foreground mt-2">
            Your intelligent learning companion powered by advanced AI
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-gradient-secondary">
            <Brain className="h-3 w-3 mr-1" />
            Online
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-secondary animate-pulse" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Chat Messages */}
              <div className="flex-1 p-4 space-y-4 overflow-auto">
                {chatMessages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-gradient-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask me anything about learning, courses, or campus resources..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button variant="ghost" size="icon">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Camera className="h-4 w-4" />
                  </Button>
                  <Button variant="gradient" onClick={handleSendMessage}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Suggestions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Suggestions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 text-left"
                    onClick={() => setQuery(suggestion.title)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{suggestion.title}</p>
                        <p className="text-xs text-muted-foreground">{suggestion.description}</p>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {suggestion.category}
                        </Badge>
                      </div>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {/* Recent Queries */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Search className="h-4 w-4" />
                Recent Queries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentQueries.map((recentQuery, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-2"
                    onClick={() => setQuery(recentQuery)}
                  >
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {recentQuery}
                    </p>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Stats */}
          <Card className="bg-gradient-glass backdrop-blur-md border-white/20">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-secondary mx-auto mb-3 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold">AI Performance</h3>
                <p className="text-sm text-muted-foreground">Response time: 0.3s</p>
                <p className="text-sm text-muted-foreground">Accuracy: 97.8%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};