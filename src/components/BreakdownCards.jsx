import { Lightbulb, BrainCircuit, Gauge, BadgeCheck } from "lucide-react";

export default function BreakdownCards({ breakdown }) {
  if (!breakdown) return null;

  const items = [
    {
      label: "Rule Skill Score",
      value: breakdown.rule_skill_score,
      max: 30,
      icon: BadgeCheck,
      color: "text-blue-600",
    },
    {
      label: "Experience Score",
      value: breakdown.rule_experience_score,
      max: 10,
      icon: Gauge,
      color: "text-green-600",
    },
    {
      label: "Semantic Score",
      value: breakdown.semantic_score,
      max: 30,
      icon: BrainCircuit,
      color: "text-purple-600",
    },
    {
      label: "LLM Score",
      value: breakdown.llm_score,
      max: 30,
      icon: Lightbulb,
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center"
          >
            <Icon className={`w-10 h-10 mb-3 ${item.color}`} />
            <h3 className="text-lg font-bold text-gray-800">{item.label}</h3>

            <p className="mt-2 text-2xl font-extrabold text-gray-900">
              {item.value}
              <span className="text-gray-500 text-lg"> / {item.max}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
