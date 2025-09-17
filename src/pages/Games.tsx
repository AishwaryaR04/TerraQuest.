import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameSection from "@/components/GameSection";
import Leaderboard from "@/components/Leaderboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Star, 
  Target, 
  Users,
  Gamepad2,
  Award
} from "lucide-react";

const Games = () => {
  const { user } = useAuth();
  
  // Mock data for games
  const youngExplorerGames = [
    {
      id: "trash-sort",
      title: "Trash Sort Master",
      description: "Can you be the fastest recycling hero? 🌍♻️",
      difficulty: "Easy" as const,
      points: 100,
      completed: true,
      locked: false,
      progress: 100,
      players: 1250
    },
    {
      id: "eco-runner",
      title: "Eco-Runner",
      description: "Jump over plastic, collect green leaves 🌱, and power up with solar boosts!",
      difficulty: "Easy" as const,
      points: 150,
      completed: false,
      locked: false,
      progress: 65,
      players: 980
    },
    {
      id: "animal-rescue",
      title: "Animal Rescue Quest",
      description: "Help the baby turtle reach the ocean 🐢💦 while avoiding plastic waste",
      difficulty: "Easy" as const,
      points: 120,
      completed: false,
      locked: false,
      progress: 0,
      players: 750
    }
  ];

  const teenChampionGames = [
    {
      id: "escape-room",
      title: "Climate Crisis Escape Room",
      description: "The floodwaters are rising! 🌊 Solve the puzzles and escape before it's too late",
      difficulty: "Medium" as const,
      points: 250,
      completed: false,
      locked: false,
      progress: 30,
      players: 650
    },
    {
      id: "city-builder",
      title: "Green City Builder",
      description: "You are the mayor 🏙️, will you choose coal or solar? Bikes or cars?",
      difficulty: "Medium" as const,
      points: 300,
      completed: false,
      locked: false,
      progress: 0,
      players: 890
    },
    {
      id: "carbon-challenge",
      title: "Carbon Footprint Challenge",
      description: "Compete with friends—who can live the greenest life this week? 🏆",
      difficulty: "Medium" as const,
      points: 200,
      completed: false,
      locked: true,
      progress: 0,
      players: 420
    }
  ];

  const futureLeaderGames = [
    {
      id: "eco-adventure",
      title: "Eco-Quest Adventure",
      description: "Travel across continents 🌍, face real environmental issues",
      difficulty: "Hard" as const,
      points: 500,
      completed: false,
      locked: true,
      progress: 0,
      players: 320
    },
    {
      id: "startup-tycoon",
      title: "Sustainable Start-Up Tycoon",
      description: "Build your own green startup 💡♻️—can you balance profit and planet?",
      difficulty: "Hard" as const,
      points: 450,
      completed: false,
      locked: true,
      progress: 0,
      players: 280
    },
    {
      id: "global-negotiator",
      title: "Global Negotiator",
      description: "Be a world leader 🌐, negotiate climate deals with others",
      difficulty: "Hard" as const,
      points: 600,
      completed: false,
      locked: true,
      progress: 0,
      players: 150
    }
  ];

  // Mock leaderboard data
  const leaderboardData = [
    { rank: 1, name: "EcoMaster2024", points: 15420, avatar: "", level: 12, badges: 25 },
    { rank: 2, name: "GreenHero", points: 14890, avatar: "", level: 11, badges: 23 },
    { rank: 3, name: "ClimateChamp", points: 13750, avatar: "", level: 10, badges: 21 },
    { rank: 4, name: "SustainableSam", points: 12980, avatar: "", level: 9, badges: 19 },
    { rank: 5, name: "EcoWarrior", points: 11650, avatar: "", level: 8, badges: 17 },
  ];

  const handlePlayGame = (gameId: string) => {
    console.log(`Playing game: ${gameId}`);
    // Here you would navigate to the actual game or open a game modal
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              EcoQuest Games Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your adventure! Play games designed for your age group and become an eco-hero.
            </p>
          </div>

          {/* User Stats */}
          {user && (
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="bg-pathfinder-bg/50 border-pathfinder/20">
                <CardContent className="p-4 text-center">
                  <Star className="w-8 h-8 text-pathfinder mx-auto mb-2" />
                  <div className="text-2xl font-bold">2,340</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </CardContent>
              </Card>
              <Card className="bg-explorer-bg/50 border-explorer/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 text-explorer mx-auto mb-2" />
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-muted-foreground">Games Completed</div>
                </CardContent>
              </Card>
              <Card className="bg-innovator-bg/50 border-innovator/20">
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-innovator mx-auto mb-2" />
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-muted-foreground">Badges Earned</div>
                </CardContent>
              </Card>
              <Card className="bg-success/10 border-success/20">
                <CardContent className="p-4 text-center">
                  <Target className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold">#142</div>
                  <div className="text-sm text-muted-foreground">Global Rank</div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Games Tabs */}
          <Tabs defaultValue="7-12" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="7-12" className="text-sm">Ages 7-12</TabsTrigger>
              <TabsTrigger value="13-17" className="text-sm">Ages 13-17</TabsTrigger>
              <TabsTrigger value="18-22" className="text-sm">Ages 18-22</TabsTrigger>
            </TabsList>
            
            <TabsContent value="7-12" className="space-y-8">
              <GameSection 
                ageGroup="7-12" 
                games={youngExplorerGames} 
                onPlayGame={handlePlayGame}
              />
            </TabsContent>
            
            <TabsContent value="13-17" className="space-y-8">
              <GameSection 
                ageGroup="13-17" 
                games={teenChampionGames} 
                onPlayGame={handlePlayGame}
              />
            </TabsContent>
            
            <TabsContent value="18-22" className="space-y-8">
              <GameSection 
                ageGroup="18-22" 
                games={futureLeaderGames} 
                onPlayGame={handlePlayGame}
              />
            </TabsContent>
          </Tabs>

          {/* Leaderboard Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Leaderboard 
              entries={leaderboardData}
              title="Top Eco Heroes This Week"
            />
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-primary" />
                  Quick Play
                </CardTitle>
                <CardDescription>
                  Jump into popular games right now
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-pathfinder-bg/20 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Trash Sort Master</h4>
                      <p className="text-sm text-muted-foreground">1,250 players online</p>
                    </div>
                    <Button size="sm" variant="pathfinder">Play</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-explorer-bg/20 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Green City Builder</h4>
                      <p className="text-sm text-muted-foreground">890 players online</p>
                    </div>
                    <Button size="sm" variant="explorer">Play</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-innovator-bg/20 rounded-lg">
                    <div>
                      <h4 className="font-semibold">Eco-Quest Adventure</h4>
                      <p className="text-sm text-muted-foreground">320 players online</p>
                    </div>
                    <Button size="sm" variant="innovator" disabled>
                      Unlock at Level 10
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;