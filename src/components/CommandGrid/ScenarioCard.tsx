import React from 'react';
import styled from '@emotion/styled';
import { ScenarioCardProps } from './types';

const ScenarioCardContainer = styled.div`
  background: var(--ifm-card-background-color);
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: var(--ifm-color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid var(--ifm-color-primary);
    outline-offset: 2px;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--ifm-color-content);
  flex: 1;
  margin-right: 1rem;
`;

const Difficulty = styled.span<{ difficulty: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  background-color: ${props => {
    switch (props.difficulty) {
      case 'Beginner':
        return '#28a745';
      case 'Intermediate':
        return '#ffc107';
      case 'Advanced':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }};
  color: ${props => props.difficulty === 'Intermediate' ? '#000' : 'white'};
`;

const Metadata = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--ifm-color-content-secondary);
`;

const Category = styled.span`
  background: var(--ifm-color-emphasis-100);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
`;

const Time = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Description = styled.p`
  color: var(--ifm-color-content-secondary);
  line-height: 1.5;
  margin: 0 0 1rem 0;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--ifm-color-emphasis-100);
`;

const StepsCount = styled.div`
  font-size: 0.875rem;
  color: var(--ifm-color-content-secondary);
  font-weight: 500;
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: var(--ifm-color-primary-lightest);
  color: var(--ifm-color-primary-dark);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const MoreTag = styled.span`
  background: var(--ifm-color-emphasis-200);
  color: var(--ifm-color-content-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario, onClick }) => {
  return (
    <ScenarioCardContainer 
      onClick={() => onClick(scenario)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(scenario);
        }
      }}
    >
      <CardHeader>
        <TitleSection>
          <Title>{scenario.title}</Title>
          <Difficulty difficulty={scenario.difficulty}>
            {scenario.difficulty}
          </Difficulty>
        </TitleSection>
        <Metadata>
          <Category>{scenario.category}</Category>
          <Time>⏱️ {scenario.estimatedTime}</Time>
        </Metadata>
      </CardHeader>
      
      <Description>{scenario.description}</Description>
      
      <CardFooter>
        <StepsCount>
          📋 {scenario.steps.length} steps
        </StepsCount>
        <Tags>
          {scenario.tags.slice(0, 3).map((tag, index) => (
            <Tag key={index}>
              {tag}
            </Tag>
          ))}
          {scenario.tags.length > 3 && (
            <MoreTag>+{scenario.tags.length - 3}</MoreTag>
          )}
        </Tags>
      </CardFooter>
    </ScenarioCardContainer>
  );
};

export default ScenarioCard;
