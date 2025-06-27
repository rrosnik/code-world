import styled from '@emotion/styled';

// Command Grid Styles
export const CommandGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 2px solid var(--ifm-color-emphasis-300);
  border-radius: 0.5rem;
  font-size: 1rem;
  background: var(--ifm-background-color);
  color: var(--ifm-font-color-base);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--ifm-color-primary);
  }
`;

export const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--ifm-color-emphasis-600);
  font-style: italic;
`;

// Category Filter Styles
export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
`;

export const FilterLabel = styled.span`
  font-weight: 600;
  color: var(--ifm-color-emphasis-800);
  margin-right: 0.5rem;
`;

export const CategoryButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-100)'};
  color: ${props => props.isActive ? 'white' : 'var(--ifm-color-emphasis-700)'};
  border: 1px solid ${props => props.isActive ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-300)'};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: ${props => props.isActive ? 'var(--ifm-color-primary-dark)' : 'var(--ifm-color-emphasis-200)'};
    border-color: ${props => props.isActive ? 'var(--ifm-color-primary-dark)' : 'var(--ifm-color-emphasis-400)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--ifm-color-primary-lighter);
  }
`;

// Command Card Styles
export const CommandCard = styled.div`
  background: var(--ifm-card-background-color);
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--ifm-color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--ifm-color-primary);
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  [data-theme='dark'] & {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--ifm-color-primary);
  margin-top: 0;
`;

export const CardCommand = styled.div`
  font-family: var(--ifm-font-family-monospace);
  background: var(--ifm-code-background);
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  border: 1px solid var(--ifm-color-emphasis-200);

  code {
    background: none;
    padding: 0;
    border: none;
    color: inherit;
  }
`;

export const CardDescription = styled.p`
  color: var(--ifm-color-emphasis-700);
  line-height: 1.5;
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
`;

export const CardCategory = styled.span`
  display: inline-block;
  background: var(--ifm-color-primary-lightest);
  color: var(--ifm-color-primary-dark);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(200, 200, 200, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  [data-theme='dark'] & {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const ModalContent = styled.div`
  background: var(--ifm-background-color);
  border-radius: 1rem;
  padding: 2rem;
  max-width: 700px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  [data-theme='dark'] & {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    margin: 0.5rem;
    padding: 1.5rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--ifm-color-emphasis-200);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ifm-color-primary);
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--ifm-color-emphasis-600);
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--ifm-color-emphasis-900);
    background: var(--ifm-color-emphasis-100);
  }

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

export const ModalCommand = styled.div`
  font-family: var(--ifm-font-family-monospace);
  background: var(--ifm-code-background);
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--ifm-color-emphasis-200);
  position: relative;

  code {
    background: none;
    padding: 0;
    border: none;
    color: inherit;
  }
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: var(--ifm-color-primary);
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--ifm-color-primary-dark);
  }
`;

export const ModalDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--ifm-color-emphasis-800);
`;

export const ModalSection = styled.div`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--ifm-color-emphasis-900);
  margin-top: 0;
`;

export const ExamplesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ExampleItem = styled.li`
  background: var(--ifm-color-emphasis-100);
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--ifm-font-family-monospace);
  font-size: 0.9rem;
  border-left: 3px solid var(--ifm-color-primary);

  code {
    background: none;
    padding: 0;
    border: none;
    color: inherit;
  }
`;

export const OptionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const OptionItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--ifm-color-emphasis-200);
  font-family: var(--ifm-font-family-monospace);
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }

  code {
    background: none;
    padding: 0;
    border: none;
    color: inherit;
  }
`;
