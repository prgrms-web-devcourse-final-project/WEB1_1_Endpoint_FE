interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div className="h-full bg-black transition-all" style={{ width: `${progress}%` }} />
    </div>
  );
}
