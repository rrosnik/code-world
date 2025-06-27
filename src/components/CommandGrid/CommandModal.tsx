import React, { useEffect } from 'react';
import { CommandModalProps } from './types';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalCommand,
  CopyButton,
  ModalDescription,
  ModalSection,
  SectionTitle,
  ExamplesList,
  ExampleItem,
  OptionsList,
  OptionItem
} from './styled';

const CommandModal: React.FC<CommandModalProps> = ({ command, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!isOpen || !command) return null;

  return (
    <ModalOverlay
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <ModalContent>
        <ModalHeader>
          <ModalTitle>{command.title}</ModalTitle>
          <CloseButton 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </CloseButton>
        </ModalHeader>

        <ModalCommand>
          <code>{command.command}</code>
          <CopyButton 
            onClick={() => copyToClipboard(command.command)}
            title="Copy command"
          >
            Copy
          </CopyButton>
        </ModalCommand>

        <ModalDescription>
          {command.description}
        </ModalDescription>

        {command.examples && command.examples.length > 0 && (
          <ModalSection>
            <SectionTitle>Examples</SectionTitle>
            <ExamplesList>
              {command.examples.map((example, index) => (
                <ExampleItem key={index}>
                  <code>{example}</code>
                </ExampleItem>
              ))}
            </ExamplesList>
          </ModalSection>
        )}

        {command.options && command.options.length > 0 && (
          <ModalSection>
            <SectionTitle>Common Options</SectionTitle>
            <OptionsList>
              {command.options.map((option, index) => (
                <OptionItem key={index}>
                  <code>{option}</code>
                </OptionItem>
              ))}
            </OptionsList>
          </ModalSection>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CommandModal;
