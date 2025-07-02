export interface GitCommand {
  id: string;
  title: string;
  command: string;
  description: string;
  category: string;
  examples?: string[];
  options?: string[];
}

export interface CommandCardProps {
  command: GitCommand;
  onClick: (command: GitCommand) => void;
}

export interface CommandModalProps {
  command: GitCommand | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface CommandGridProps {
  commands: GitCommand[];
  searchable?: boolean;
  showCategoryFilter?: boolean;
}

export interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface ScenarioStep {
  stepNumber: number;
  title: string;
  command: string;
  description: string;
  explanation: string;
}

export interface GitScenario {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  steps: ScenarioStep[];
  prerequisites: string[];
  warnings: string[];
  relatedCommands: string[];
  tags: string[];
}

export interface ScenarioCardProps {
  scenario: GitScenario;
  onClick: (scenario: GitScenario) => void;
}

export interface ScenarioModalProps {
  scenario: GitScenario | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface ScenarioGridProps {
  scenarios: GitScenario[];
  searchable?: boolean;
  showCategoryFilter?: boolean;
}
