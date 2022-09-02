import React from 'react';
import { CardContainer } from './styles';

interface IStep {
  id: string;
  user_id: string;
  project_id: string;
  parent_id: string;
  type: string;
  content: string;
  createdAt: string;
  upgatedAt: string;
}

interface ICardProps {
  id: string;
  title: string;
  content: string;
  steps: IStep[];
}

const Card: React.FC<ICardProps> = ({
  id,
  title,
  content,
  steps,
}: ICardProps) => {
  return (
    <CardContainer>
      <strong>{title}</strong>
      <p>{content}</p>
      {steps.map(step =>
        step.parent_id === id ? (
          <Card
            key={step.id}
            id={step.id}
            title={step.type}
            content={step.content}
            steps={steps}
          />
        ) : (
          <></>
        ),
      )}
    </CardContainer>
  );
};

export default Card;
