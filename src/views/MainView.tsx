import { GradientCard } from "@/shared/components/cards/gradient-card";

const MainView = () => {
  return (
    <div className="p-16">
      <h1 className="section-title">Components</h1>
      <div className="flex">
        <div className="flex-col items-center justify-center">
          <p className="text-neutral-400">Gradient card</p>
          <GradientCard className="flex items-center justify-center w-48 h-48">
            Gradient card preview
          </GradientCard>
        </div>
      </div>
    </div>
  );
};

export default MainView;
