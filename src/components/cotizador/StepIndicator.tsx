'use client'

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: { label: string }[];
}

export default function StepIndicator({ currentStep, totalSteps, steps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
        <div
          className="bg-gradient-to-r from-gray-900 to-blue-600 h-1 rounded-full transition-all duration-500"
          style={{ width: `${((currentStep) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step info */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-[0.2em] text-gray-500">
          PASO {currentStep} DE {totalSteps}
        </span>
        <span className="text-[11px] font-medium tracking-[0.2em] text-blue-600">
          {steps[currentStep - 1]?.label}
        </span>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-3">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i + 1 < currentStep
                ? 'bg-blue-600 w-4'
                : i + 1 === currentStep
                ? 'bg-gray-900 w-6'
                : 'bg-gray-300 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
