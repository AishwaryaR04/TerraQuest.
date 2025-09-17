@@ .. @@
             <div className="flex items-center gap-3 mb-6">
               <img 
                 src={vayuMascot} 
-                alt="Vayu - ClimaQuest mascot" 
+                alt="Vayu - EcoQuest mascot" 
                 className="w-16 h-16 animate-bounce"
               />
               <div>
-                <h2 className="text-lg font-medium text-muted-foreground">Meet Vayu, Your Climate Guide</h2>
+                <h2 className="text-lg font-medium text-muted-foreground">Meet Vayu, Your Eco Guide</h2>
               </div>
             </div>
 
             <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
               <span className="bg-gradient-hero bg-clip-text text-transparent">
-                ClimaQuest
+                EcoQuest
               </span>
             </h1>
             
-            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
-              Embark on an exciting journey to learn about climate change, earn eco-points, 
-              and become a champion for our planet's future.
+            <div className="space-y-4">
+              <div className="text-2xl lg:text-3xl font-bold text-primary">
+                Gamified education for a sustainable future
+              </div>
+              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
+                Play interactive games, learn environmental science, and become an eco-hero while having fun!
+              </p>
+            </div>
 
             <div className="flex flex-col sm:flex-row gap-4">
               {user ? (
                 <Button variant="hero" size="lg" className="text-lg px-8 py-6">
-                  Continue Your Quest
+                  Continue Your EcoQuest 🌱
                 </Button>
               ) : (
                 <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
-                  <Link to="/auth">Start Your Quest</Link>
+                  <Link to="/auth">Start Your EcoQuest 🌱</Link>
                 </Button>
               )}
               <Button variant="outline" size="lg" className="text-lg px-8 py-6">
@@ .. @@
             <div className="flex items-center gap-6 pt-4">
               <div className="flex items-center gap-2">
                 <Users className="w-5 h-5 text-primary" />
-                <span className="text-sm text-muted-foreground">10K+ Young Climate Heroes</span>
+                <span className="text-sm text-muted-foreground">10K+ Eco Heroes</span>
               </div>
               <div className="flex items-center gap-2">
                 <Trophy className="w-5 h-5 text-primary" />
@@ .. @@
           {/* Feature Cards */}
           <div className="grid grid-cols-1 gap-6">
-            <Card className="p-6 bg-pathfinder-bg/80 backdrop-blur-sm border-pathfinder/20 hover:shadow-strong transition-all duration-300">
+            <Card className="p-6 bg-pathfinder-bg/80 backdrop-blur-sm border-pathfinder/20 hover:shadow-strong transition-all duration-300 hover:scale-105">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-gradient-pathfinder rounded-lg">
                   <Leaf className="w-6 h-6 text-foreground" />
                 </div>
                 <div>
-                  <h3 className="font-semibold text-lg">Pathfinder (Ages 8-12)</h3>
-                  <p className="text-muted-foreground">Discover nature's secrets through fun games and colorful adventures!</p>
+                  <h3 className="font-semibold text-lg">Young Explorers (Ages 7-12)</h3>
+                  <p className="text-muted-foreground">Fun games like Trash Sort Master and Eco-Runner!</p>
                 </div>
               </div>
             </Card>
 
-            <Card className="p-6 bg-explorer-bg/80 backdrop-blur-sm border-explorer/20 hover:shadow-strong transition-all duration-300">
+            <Card className="p-6 bg-explorer-bg/80 backdrop-blur-sm border-explorer/20 hover:shadow-strong transition-all duration-300 hover:scale-105">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-gradient-explorer rounded-lg">
                   <Zap className="w-6 h-6 text-primary-foreground" />
                 </div>
                 <div>
-                  <h3 className="font-semibold text-lg">Explorer (Ages 13-17)</h3>
-                  <p className="text-muted-foreground">Dive deeper into climate science with interactive challenges!</p>
+                  <h3 className="font-semibold text-lg">Teen Champions (Ages 13-17)</h3>
+                  <p className="text-muted-foreground">Climate Crisis Escape Room and Green City Builder!</p>
                 </div>
               </div>
             </Card>
 
-            <Card className="p-6 bg-innovator-bg/80 backdrop-blur-sm border-innovator/20 hover:shadow-strong transition-all duration-300">
+            <Card className="p-6 bg-innovator-bg/80 backdrop-blur-sm border-innovator/20 hover:shadow-strong transition-all duration-300 hover:scale-105">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-gradient-innovator rounded-lg">
                   <Trophy className="w-6 h-6 text-primary-foreground" />
                 </div>
                 <div>
-                  <h3 className="font-semibold text-lg">Innovator (Ages 18+)</h3>
-                  <p className="text-muted-foreground">Lead climate action projects and analyze real environmental data!</p>
+                  <h3 className="font-semibold text-lg">Future Leaders (Ages 18-22)</h3>
+                  <p className="text-muted-foreground">Sustainable Start-Up Tycoon and Global Negotiator!</p>
                 </div>
               </div>
             </Card>