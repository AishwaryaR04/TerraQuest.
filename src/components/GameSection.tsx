import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Star,
  Play,
  Lock,
  CheckCircle
} from "lucide-react";

interface Game {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  completed: boolean;
  locked: boolean;
  progress: number;
  players: number;
}

interface GameSectionProps {
  ageGroup: "7-12" | "13-17" | "18-22";
  games: Game[];
  onPlayGame: (gameId: string) => void;
}

const GameSection = ({ ageGroup, games, onPlayGame }: GameSectionProps) => {
  const getAgeGroupTitle = (age: string) => {
    switch (age) {
      case "7-12": return "Young Explorers";
      case "13-17": return "Teen Champions";
      case "18-22": return "Future Leaders";
      default: return "Eco Heroes";
    }
  };

  const getAgeGroupColor = (age: string) => {
    switch (age) {
      case "7-12": return "bg-pathfinder-bg/80 border-pathfinder/20";
      case "13-17": return "bg-explorer-bg/80 border-explorer/20";
      case "18-22": return "bg-innovator-bg/80 border-innovator/20";
      default: return "bg-card";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">
          {getAgeGroupTitle(ageGroup)} (Ages {ageGroup})
        </h3>
        <p className="text-muted-foreground">
          Games designed specifically for your age group
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card 
            key={game.id}
            className={`hover:shadow-strong transition-all duration-300 group ${getAgeGroupColor(ageGroup)} backdrop-blur-sm ${!game.locked ? 'hover:scale-105' : 'opacity-75'}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {game.completed && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {game.locked && <Lock className="w-5 h-5 text-gray-400" />}
                  <Badge className={getDifficultyColor(game.difficulty)}>
                    {game.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{game.players}</span>
                </div>
              </div>
              
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {game.title}
              </CardTitle>
              
              <CardDescription className="text-sm">
                {game.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {game.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{game.progress}%</span>
                  </div>
                  <Progress value={game.progress} className="h-2" />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm font-medium text-primary">
                  <Star className="w-4 h-4" />
                  <span>{game.points} points</span>
                </div>
                
                <Button 
                  variant={game.locked ? "outline" : "default"}
                  size="sm"
                  disabled={game.locked}
                  onClick={() => !game.locked && onPlayGame(game.id)}
                  className="group-hover:scale-105 transition-transform"
                >
                  {game.locked ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Locked
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Play
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GameSection;