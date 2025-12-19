import { ArrowRight } from 'lucide-react';
import { Agent } from '../../types';

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={agent.image}
            alt={agent.name}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-warmGray-100"
            loading="lazy"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-lg text-charcoal">{agent.name}</h3>
          <p className="text-warmGray-500 text-sm">{agent.title}</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-charcoal group-hover:text-white transition-all">
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
