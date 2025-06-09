export const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-electric/20 to-lavender/20 dark:from-electric/10 dark:to-lavender/10 rounded-full blur-3xl animate-float"></div>
    <div
      className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-mint/20 to-ocean/20 dark:from-mint/10 dark:to-ocean/10 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "1s" }}
    ></div>
    <div
      className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-sunset/20 to-coral/20 dark:from-sunset/10 dark:to-coral/10 rounded-full blur-3xl animate-float"
      style={{ animationDelay: "2s" }}
    ></div>
  </div>
);
