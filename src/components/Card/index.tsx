import React from 'react';
import { CardContainer } from './styles';
import { getTitle, getPlaceholder } from '../../models/steps';

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
  step: IStep;
  list: IStep[];
}

const Card: React.FC<ICardProps> = ({ step, list }: ICardProps) => {
  return (
    <CardContainer>
      <strong>{getTitle(step.type)}</strong>
      <span
        role="textbox"
        contentEditable
        data-placeholder={getPlaceholder(step.type)}
      >
        {step.content}
      </span>
      {list.map(child =>
        child.parent_id === step.id ? (
          <Card key={child.id} step={child} list={list} />
        ) : (
          <div key={step.id} />
        ),
      )}
    </CardContainer>
  );
};

export default Card;
