import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Code, Crown, Shield } from "lucide-react";

interface LoginProps {
  onLogin: (persona: string) => void;
}

const personas = [
  {
    id: "developer",
    title: "Developer",
    description: "Focus on technical implementation and coding tasks",
    icon: Code,
  },
  {
    id: "tech-lead",
    title: "Tech Lead",
    description: "Manage technical teams and architecture decisions",
    icon: Users,
  },
  {
    id: "senior-leader",
    title: "Senior Leader",
    description: "Strategic oversight and organizational leadership",
    icon: Crown,
  },
  {
    id: "admin",
    title: "Admin",
    description: "System administration and platform management",
    icon: Shield,
  },
];

export default function Login({ onLogin }: LoginProps) {
  const [selectedPersona, setSelectedPersona] = useState("developer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(selectedPersona);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome to CILC</CardTitle>
          <CardDescription>
            Sign in to access your learning management platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-3">
              <Label>Select your role</Label>
              <RadioGroup
                value={selectedPersona}
                onValueChange={setSelectedPersona}
                className="space-y-3"
              >
                {personas.map((persona) => {
                  const Icon = persona.icon;
                  return (
                    <div key={persona.id} className="flex items-start space-x-3">
                      <RadioGroupItem
                        value={persona.id}
                        id={persona.id}
                        className="mt-1"
                      />
                      <div className="flex items-start space-x-3 flex-1">
                        <Icon className="h-5 w-5 mt-0.5 text-primary" />
                        <div className="space-y-1">
                          <Label
                            htmlFor={persona.id}
                            className="font-medium cursor-pointer"
                          >
                            {persona.title}
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            {persona.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}