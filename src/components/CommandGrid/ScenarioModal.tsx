import React from 'react';
import styled from '@emotion/styled';
import { ScenarioModalProps } from './types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: var(--ifm-background-color);
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 0;
    max-height: 100vh;
    border-radius: 0;
  }
`;

const ModalHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid var(--ifm-color-emphasis-200);
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--ifm-color-content);
  flex: 1;
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Difficulty = styled.span<{ difficulty: string }>`
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
  gap: 1rem;
  font-size: 1rem;
  color: var(--ifm-color-content-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Category = styled.span`
  background: var(--ifm-color-emphasis-100);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
`;

const Time = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  color: var(--ifm-color-content-secondary);
  transition: all 0.2s ease;

  &:hover {
    background: var(--ifm-color-emphasis-100);
    color: var(--ifm-color-content);
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--ifm-color-content-secondary);
  margin: 0 0 2rem 0;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--ifm-color-content);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
`;

const WarningList = styled.ul`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 6px;
  padding: 1rem;
  margin: 0;
  list-style: none;
  padding-left: 1rem;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;

    &::before {
      content: "⚠️";
      position: absolute;
      left: 0;
    }
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Step = styled.div`
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--ifm-color-emphasis-50);
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StepNumber = styled.span`
  background: var(--ifm-color-primary);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const StepTitle = styled.h4`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--ifm-color-content);
`;

const Command = styled.div`
  background: var(--ifm-color-emphasis-100);
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem 0;
  position: relative;
  font-family: var(--ifm-font-family-monospace);

  code {
    background: none;
    padding: 0;
    border: none;
    font-size: 1rem;
    color: var(--ifm-color-content);
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--ifm-color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s ease;

  &:hover {
    background: var(--ifm-color-primary-dark);
  }
`;

const StepDescription = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
  color: var(--ifm-color-content-secondary);
`;

const StepExplanation = styled.div`
  background: var(--ifm-color-primary-lightest);
  border-left: 4px solid var(--ifm-color-primary);
  padding: 1rem;
  border-radius: 0 6px 6px 0;
  line-height: 1.5;
`;

const RelatedCommands = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const RelatedCommand = styled.code`
  background: var(--ifm-color-emphasis-100);
  border: 1px solid var(--ifm-color-emphasis-200);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: var(--ifm-font-family-monospace);
  font-size: 0.875rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: var(--ifm-color-primary-lightest);
  color: var(--ifm-color-primary-dark);
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ScenarioModal: React.FC<ScenarioModalProps> = ({ scenario, isOpen, onClose }) => {
  if (!isOpen || !scenario) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
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
          <CloseButton 
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <Description>{scenario.description}</Description>

          {scenario.prerequisites.length > 0 && (
            <Section>
              <SectionTitle>📚 Prerequisites</SectionTitle>
              <List>
                {scenario.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </List>
            </Section>
          )}

          {scenario.warnings.length > 0 && (
            <Section>
              <SectionTitle>⚠️ Important Warnings</SectionTitle>
              <WarningList>
                {scenario.warnings.map((warning, index) => (
                  <li key={index}>{warning}</li>
                ))}
              </WarningList>
            </Section>
          )}

          <Section>
            <SectionTitle>📋 Step-by-Step Guide</SectionTitle>
            <Steps>
              {scenario.steps.map((step) => (
                <Step key={step.stepNumber}>
                  <StepHeader>
                    <StepNumber>{step.stepNumber}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                  </StepHeader>
                  
                  <Command>
                    <code>{step.command}</code>
                    <CopyButton 
                      onClick={() => navigator.clipboard.writeText(step.command)}
                      title="Copy command"
                    >
                      📋
                    </CopyButton>
                  </Command>
                  
                  <StepDescription>{step.description}</StepDescription>
                  <StepExplanation>
                    <strong>💡 Explanation:</strong> {step.explanation}
                  </StepExplanation>
                </Step>
              ))}
            </Steps>
          </Section>

          <Section>
            <SectionTitle>🔗 Related Commands</SectionTitle>
            <RelatedCommands>
              {scenario.relatedCommands.map((command, index) => (
                <RelatedCommand key={index}>
                  {command}
                </RelatedCommand>
              ))}
            </RelatedCommands>
          </Section>

          <Section>
            <SectionTitle>🏷️ Tags</SectionTitle>
            <Tags>
              {scenario.tags.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          </Section>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ScenarioModal;
