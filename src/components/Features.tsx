import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Target,
  Leaf,
  Recycle,
  TreePine,
  Waves,
  Building,
  Lightbulb,
  Globe
} from "lucide-react";

const Features = () => {
  const ageGroups = [
    {
      title: "Young Explorers (Ages 7-12)",
      description: "Fun and simple games that teach environmental basics",
      color: "bg-pathfinder-bg/80 border-pathfinder/20",
      games: [
        {
          name: "Trash Sort Master",
          description: "Can you be the fastest recycling hero? 🌍♻️",
          icon: Recycle,
          difficulty: "Easy"
        },
        {
          name: "Eco-Runner",
          description: "Jump over plastic, collect green leaves 🌱, and power up with solar boosts!",
          icon: TreePine,
          difficulty: "Easy"
        },
        {
          name: "Animal Rescue Quest",
          description: "Help the baby turtle reach the ocean 🐢💦 while avoiding plastic waste",
          icon: Waves,
          difficulty: "Easy"
        }
      ]
    },
    {
      title: "Teen Champions (Ages 13-17)",
      description: "Challenging and competitive environmental games",
      color: "bg-explorer-bg/80 border-explorer/20",
      games: [
        {
          name: "Climate Crisis Escape Room",
          description: "The floodwaters are rising! 🌊 Solve the puzzles and escape before it's too late",
          icon: Waves,
          difficulty: "Medium"
        },
        {
          name: "Green City Builder",
          description: "You are the mayor 🏙️, will you choose coal or solar? Bikes or cars? Build the most sustainable city!",
          icon: Building,
          difficulty: "Medium"
        },
        {
          name: "Carbon Footprint Challenge",
          description: "Compete with friends—who can live the greenest life this week? 🏆",
          icon: Target,
          difficulty: "Medium"
        }
      ]
    },
    {
      title: "Future Leaders (Ages 18-22)",
      description: "Critical-thinking and impactful environmental experiences",
      color: "bg-innovator-bg/80 border-innovator/20",
      games: [
        {
          name: "Eco-Quest Adventure",
          description: "Travel across continents 🌍, face real environmental issues, and see the consequences of your choices",
          icon: Globe,
          difficulty: "Hard"
        },
        {
          name: "Sustainable Start-Up Tycoon",
          description: "Build your own green startup 💡♻️—can you balance profit and planet?",
          icon: Lightbulb,
          difficulty: "Hard"
        },
        {
          name: "Global Negotiator",
          description: "Be a world leader 🌐, negotiate climate deals with others—will your country thrive or suffer?",
          icon: Users,
          difficulty: "Hard"
        }
      ]
    }
  ];

  const gamificationFeatures = [
    {
      icon: Gamepad2,
      title: "Interactive Games",
      description: "Age-appropriate games that make learning environmental science fun and engaging.",
      badge: "Play",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Trophy,
      title: "Badges & Achievements",
      description: "Unlock special badges and achievements as you complete challenges and learn new concepts.",
      badge: "Achieve",
      color: "bg-yellow-500/10 text-yellow-600",
    },
    {
      icon: Target,
      title: "Challenges & Quizzes",
      description: "Test your knowledge with interactive quizzes and take on exciting environmental challenges.",
      badge: "Challenge",
      color: "bg-orange-500/10 text-orange-600",
    },
    {
      icon: Users,
      title: "Leaderboards",
      description: "Compete with friends and classmates on global and local leaderboards.",
      badge: "Compete",
      color: "bg-purple-500/10 text-purple-600",
    },
  ];

  const stats = [
    { number: "100+", label: "Interactive Games", icon: Gamepad2 },
    { number: "50+", label: "Achievement Badges", icon: Trophy },
    { number: "15K+", label: "Active Students", icon: Users },
    { number: "500+", label: "Schools & Colleges", icon: Building },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="games" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Age-Wise Gaming 
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Adventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover games designed specifically for your age group. From simple sorting games 
            to complex environmental simulations - there's something for everyone!
          </p>
        </div>

        {/* Age Groups Games */}
        <div className="space-y-12 mb-20">
          {ageGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">{group.title}</h3>
                <p className="text-muted-foreground text-lg">{group.description}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {group.games.map((game, gameIndex) => (
                  <Card 
                    key={gameIndex}
                    className={`p-6 hover:shadow-strong transition-all duration-300 group ${group.color} backdrop-blur-sm hover:scale-105`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-lg bg-white/20 group-hover:scale-110 transition-transform duration-300">
                          <game.icon className="w-8 h-8 text-primary" />
                        </div>
                        <Badge className={getDifficultyColor(game.difficulty)}>
                          {game.difficulty}
                        </Badge>
                      </div>
                      
                      <h4 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {game.name}
                      </h4>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {game.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      >
                        Play Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gamification Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Gamification Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamificationFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-strong transition-all duration-300 group border-border/50 bg-card/80 backdrop-blur-sm hover:scale-105"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <h4 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Join Our Growing EcoQuest Community
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
            onClick={() => window.location.href = '/auth'}
          >
            Start Your EcoQuest Today 🌱
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;