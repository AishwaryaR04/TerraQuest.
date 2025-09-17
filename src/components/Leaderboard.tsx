import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Crown } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  avatar?: string;
  level: number;
  badges: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentUserId?: string;
  title?: string;
}

const Leaderboard = ({ entries, currentUserId, title = "Global Leaderboard" }: LeaderboardProps) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2: return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3: return <Medal className="w-5 h-5 text-amber-600" />;
      default: return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2: return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3: return "bg-gradient-to-r from-amber-400 to-amber-600";
      default: return "bg-gradient-to-r from-primary/10 to-primary/20";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-102 ${
              entry.rank <= 3 
                ? `${getRankColor(entry.rank)} text-white shadow-lg` 
                : "bg-card hover:bg-accent/50"
            }`}
          >
            <div className="flex items-center justify-center w-8">
              {getRankIcon(entry.rank)}
            </div>

            <Avatar className="w-10 h-10">
              <AvatarImage src={entry.avatar} alt={entry.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {entry.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className={`font-semibold truncate ${entry.rank <= 3 ? 'text-white' : 'text-foreground'}`}>
                  {entry.name}
                </h4>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${entry.rank <= 3 ? 'bg-white/20 text-white' : ''}`}
                >
                  Level {entry.level}
                </Badge>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className={`text-sm font-medium ${entry.rank <= 3 ? 'text-white/90' : 'text-primary'}`}>
                  {entry.points.toLocaleString()} points
                </span>
                <div className="flex items-center gap-1">
                  <Award className={`w-3 h-3 ${entry.rank <= 3 ? 'text-white/80' : 'text-muted-foreground'}`} />
                  <span className={`text-xs ${entry.rank <= 3 ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {entry.badges} badges
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Leaderboard;