import React from 'react';
import { X, Check } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const plans = [
  {
    name: 'Professional',
    price: 49,
    gumroadId: 'your_gumroad_product_id',
    features: [
      'Advanced Brush Engine',
      'AI-Powered Effects',
      'Real-time Collaboration',
      'Cloud Storage (100GB)',
      'Priority Support'
    ]
  },
  {
    name: 'Enterprise',
    price: 99,
    gumroadId: 'your_gumroad_product_id_enterprise',
    features: [
      'Everything in Professional',
      'Custom Brush Development',
      'API Access',
      'Unlimited Cloud Storage',
      'Dedicated Support Manager'
    ]
  }
];

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  if (!isOpen) return null;

  const handlePurchase = (gumroadId: string) => {
    // Initialize Gumroad overlay
    if (typeof window !== 'undefined' && (window as any).GumroadOverlay) {
      (window as any).GumroadOverlay.show(gumroadId);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-4xl w-full p-6 overflow-hidden">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
          
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            Choose Your Plan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
              >
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 dark:text-gray-300">
                      <Check className="h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handlePurchase(plan.gumroadId)}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}