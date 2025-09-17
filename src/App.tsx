@@ .. @@
import Index from "./pages/Index";
import Auth from "./pages/Auth";
+import Games from "./pages/Games";
+import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
@@ .. @@
          <Routes>
             <Route path="/" element={<Index />} />
             <Route path="/auth" element={<Auth />} />
+            <Route path="/games" element={<Games />} />
+            <Route path="/dashboard" element={<Dashboard />} />
             {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
             <Route path="*" element={<NotFound />} />
           </Routes>