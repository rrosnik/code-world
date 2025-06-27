import React from 'react';
import { CommandCardProps } from './types';
import {
  CommandCard as StyledCommandCard,
  CardTitle,
  CardCommand,
  CardDescription,
  CardCategory
} from './styled';

const CommandCard: React.FC<CommandCardProps> = ({ command, onClick }) => {
  return (
    <StyledCommandCard
      onClick={() => onClick(command)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(command);
        }
      }}
    >
      <CardTitle>{command.title}</CardTitle>
      <CardCommand>
        <code>{command.command}</code>
      </CardCommand>
      <CardDescription>{command.description}</CardDescription>
      <CardCategory>{command.category}</CardCategory>
    </StyledCommandCard>
  );
};

export default CommandCard;
