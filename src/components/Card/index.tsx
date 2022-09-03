import React from 'react';
import { CardContainer } from './styles';
import {
  getTitle,
  getPlaceholder,
  getActions,
  getColor,
} from '../../models/steps';

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
  onNewCard: any;
  onDeleteCard: any;
}

const Card: React.FC<ICardProps> = ({
  step,
  list,
  onNewCard,
  onDeleteCard,
}: ICardProps) => {
  const actions = getActions(step.type);
  return (
    <CardContainer color={getColor(step.type)}>
      <div className="ContentContainer">
        <strong>{getTitle(step.type)}</strong>
        <span
          role="textbox"
          contentEditable
          data-placeholder={getPlaceholder(step.type)}
        ></span>
        <div className="ActionContainer">
          {actions.map((action, index) => (
            <p
              key={index}
              onClick={e => {
                onNewCard(step.id, action.type);
              }}
            >
              {action.name}
            </p>
          ))}
        </div>
      </div>

      {list.map(child =>
        child.parent_id === step.id ? (
          <Card
            key={child.id}
            step={child}
            list={list}
            onNewCard={onNewCard}
            onDeleteCard={onDeleteCard}
          />
        ) : (
          <div key={step.id} />
        ),
      )}
    </CardContainer>
  );
};

export default Card;
