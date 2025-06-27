import React, { useState, useMemo } from 'react';
import { CommandGridProps, GitCommand } from './types';
import CommandCard from './CommandCard';
import CommandModal from './CommandModal';
import CategoryFilter from './CategoryFilter';
import {
  CommandGridContainer,
  SearchContainer,
  SearchInput,
  NoResults
} from './styled';

const CommandGrid: React.FC<CommandGridProps> = ({ 
  commands, 
  searchable = true, 
  showCategoryFilter = true 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCommand, setSelectedCommand] = useState<GitCommand | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(commands.map(cmd => cmd.category)));
    return uniqueCategories.sort();
  }, [commands]);

  const filteredCommands = useMemo(() => {
    let filtered = commands;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(command => command.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(command => 
        command.title.toLowerCase().includes(term) ||
        command.command.toLowerCase().includes(term) ||
        command.description.toLowerCase().includes(term) ||
        command.category.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [commands, searchTerm, selectedCategory]);

  const handleCardClick = (command: GitCommand) => {
    setSelectedCommand(command);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommand(null);
  };

  return (
    <div>
      {searchable && (
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search commands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      )}

      {showCategoryFilter && (
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      )}

      <CommandGridContainer>
        {filteredCommands.map((command) => (
          <CommandCard
            key={command.id}
            command={command}
            onClick={handleCardClick}
          />
        ))}
      </CommandGridContainer>

      {filteredCommands.length === 0 && (searchTerm || selectedCategory !== 'All') && (
        <NoResults>
          {searchTerm 
            ? `No commands found matching "${searchTerm}"${selectedCategory !== 'All' ? ` in category "${selectedCategory}"` : ''}`
            : `No commands found in category "${selectedCategory}"`
          }
        </NoResults>
      )}

      <CommandModal
        command={selectedCommand}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CommandGrid;
