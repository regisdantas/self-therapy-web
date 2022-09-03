import React from 'react';
import { CardContainer } from './styles';
import { getCardModel } from '../../models/steps';
import { FiTrash2, FiMic } from 'react-icons/fi';

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
  onChangeContent: any;
  speechIf: any;
}

const Card: React.FC<ICardProps> = ({
  step,
  list,
  onNewCard,
  onDeleteCard,
  onChangeContent,
  speechIf,
}: ICardProps) => {
  const cardModel = getCardModel(step.type);
  return (
    <CardContainer color={cardModel.color}>
      <div className="ContentContainer">
        <header>
          <cardModel.icon />
          <strong>{cardModel.title}</strong>
          <FiMic
            onClick={() => {
              speechIf.isListening(step.id)
                ? speechIf.onStopListening(step.id)
                : speechIf.onStartListening(step.id);
            }}
          />
          {step.parent_id !== '00000000-0000-0000-0000-000000000000' ? (
            <FiTrash2 onClick={e => onDeleteCard(step.id)}></FiTrash2>
          ) : (
            <></>
          )}
        </header>

        <span
          role="textbox"
          contentEditable
          data-placeholder={cardModel.placeholder}
          onBlur={e => onChangeContent(step.id, e.currentTarget.innerText)}
        >
          {step.content}
          {/* {speechIf.getTranscript(step.id)} */}
        </span>
        <div className="ActionContainer">
          {cardModel.actions.map((action, index) => (
            <p key={index} onClick={e => onNewCard(step.id, action.type)}>
              <action.icon />
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
            onChangeContent={onChangeContent}
            speechIf={speechIf}
          />
        ) : (
          <div key={step.id} />
        ),
      )}
    </CardContainer>
  );
};

export default Card;
