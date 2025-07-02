import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { ScenarioGridProps, GitScenario } from './types';
import ScenarioCard from './ScenarioCard';
import ScenarioModal from './ScenarioModal';
import CategoryFilter from './CategoryFilter';

const ScenarioGridContainer = styled.div`
  width: 100%;
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--ifm-background-color);
  color: var(--ifm-color-content);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--ifm-color-primary);
  }

  &::placeholder {
    color: var(--ifm-color-content-secondary);
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const DifficultyFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const FilterLabel = styled.label`
  font-weight: 500;
  color: var(--ifm-color-content);
  font-size: 0.875rem;
`;

const DifficultySelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 6px;
  background: var(--ifm-background-color);
  color: var(--ifm-color-content);
  font-size: 0.875rem;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--ifm-color-primary);
  }

  @media (max-width: 768px) {
    flex: 1;
    margin-left: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem 2rem;
  color: var(--ifm-color-content-secondary);

  p {
    margin: 0.5rem 0;
    font-size: 1.125rem;

    &:first-child {
      font-weight: 600;
      color: var(--ifm-color-content);
    }
  }
`;

const ScenarioGrid: React.FC<ScenarioGridProps> = ({ 
  scenarios, 
  searchable = true, 
  showCategoryFilter = true 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedScenario, setSelectedScenario] = useState<GitScenario | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(scenarios.map(scenario => scenario.category)));
    return uniqueCategories.sort();
  }, [scenarios]);

  const difficulties = useMemo(() => {
    const uniqueDifficulties = Array.from(new Set(scenarios.map(scenario => scenario.difficulty)));
    return uniqueDifficulties.sort();
  }, [scenarios]);

  const filteredScenarios = useMemo(() => {
    let filtered = scenarios;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(scenario => scenario.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(scenario => scenario.difficulty === selectedDifficulty);
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(scenario => 
        scenario.title.toLowerCase().includes(term) ||
        scenario.description.toLowerCase().includes(term) ||
        scenario.category.toLowerCase().includes(term) ||
        scenario.tags.some(tag => tag.toLowerCase().includes(term)) ||
        scenario.steps.some(step => 
          step.title.toLowerCase().includes(term) ||
          step.description.toLowerCase().includes(term) ||
          step.command.toLowerCase().includes(term)
        )
      );
    }

    return filtered;
  }, [scenarios, searchTerm, selectedCategory, selectedDifficulty]);

  const handleScenarioClick = (scenario: GitScenario) => {
    setSelectedScenario(scenario);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedScenario(null);
  };

  return (
    <ScenarioGridContainer>
      {(searchable || showCategoryFilter) && (
        <FiltersContainer>
          {searchable && (
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search scenarios, commands, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>
          )}
          
          {showCategoryFilter && (
            <FilterRow>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
              
              <DifficultyFilter>
                <FilterLabel htmlFor="difficulty-select">
                  Difficulty:
                </FilterLabel>
                <DifficultySelect
                  id="difficulty-select"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  title="Filter by difficulty level"
                >
                  <option value="All">All Levels</option>
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </DifficultySelect>
              </DifficultyFilter>
            </FilterRow>
          )}
        </FiltersContainer>
      )}

      <Grid>
        {filteredScenarios.length === 0 ? (
          <NoResults>
            <p>No scenarios found matching your criteria.</p>
            <p>Try adjusting your search terms or filters.</p>
          </NoResults>
        ) : (
          filteredScenarios.map(scenario => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              onClick={handleScenarioClick}
            />
          ))
        )}
      </Grid>

      <ScenarioModal
        scenario={selectedScenario}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </ScenarioGridContainer>
  );
};

export default ScenarioGrid;
