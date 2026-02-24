import { PLAN_CONFIG } from '@/shared/config/stripe'

export function PlanCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{PLAN_CONFIG.name}</h3>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
          POPULAR
        </span>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">
          ${PLAN_CONFIG.price}
        </span>
        <span className="text-gray-500">/{PLAN_CONFIG.period}</span>
      </div>

      <ul className="space-y-3">
        {PLAN_CONFIG.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg 
              className="w-5 h-5 text-green-500 flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
