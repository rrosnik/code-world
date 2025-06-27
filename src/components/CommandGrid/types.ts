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
