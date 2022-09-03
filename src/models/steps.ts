import { IconType } from 'react-icons';
import { FiHeart, FiUser, FiTwitch } from 'react-icons/fi';
import { BiQuestionMark, BiCalendarExclamation } from 'react-icons/bi';
import { HiOutlineLightBulb } from 'react-icons/hi';
export interface IActions {
  name: string;
  type: string;
  icon: IconType;
}
export interface ICardModel {
  title: string;
  icon: IconType;
  color: string;
  placeholder: string;
  actions: IActions[];
}

const newEmotion = {
  name: 'I felt',
  type: 'emotion',
  icon: FiHeart,
};

const newBehavior = {
  name: 'I acted like',
  type: 'behavior',
  icon: FiUser,
};

const newThought = {
  name: 'I thought',
  type: 'thought',
  icon: FiTwitch,
};

const newQuestion = {
  name: `Let's question`,
  type: 'question',
  icon: BiQuestionMark,
};

const EventCardModel: ICardModel = {
  title: 'Event or Situation',
  icon: BiCalendarExclamation,
  color: 'red',
  placeholder:
    'Describe the event or situation that driven you to think and/or feel the way you want to evaluate.',
  actions: [newEmotion, newBehavior, newThought],
};

const EmotionCardModel: ICardModel = {
  title: 'Emotion',
  icon: FiHeart,
  color: 'red',
  placeholder: 'Write and describe an emotion you felt during this event.',
  actions: [newQuestion],
};

const QuestionCardModel: ICardModel = {
  title: 'Questioning Card',
  icon: BiQuestionMark,
  color: 'green',
  placeholder:
    'Select a question and answer to go deep in the reasons and root cause of these feelings and behaviors.',
  actions: [],
};

const ThoughtCardModel: ICardModel = {
  title: 'Automatic Thought',
  icon: FiTwitch,
  color: 'blue',
  placeholder:
    'Write and describe an automatic thought or response you had during the event.',
  actions: [newQuestion],
};

const BehaviorCardModel: ICardModel = {
  title: 'Behavior',
  icon: FiUser,
  color: 'gray',
  placeholder: 'Write and describe a behavior you had during the event.',
  actions: [newQuestion],
};

const CopingCardModel: ICardModel = {
  title: 'Coping Card',
  icon: HiOutlineLightBulb,
  color: 'yellow',
  placeholder:
    'Write here positive thoughts, reflections and strategies to read during an ocasional event similar to this.',
  actions: [],
};

const NotesCardModel: ICardModel = {
  title: 'Notes',
  icon: FiHeart,
  color: 'orange',
  placeholder: 'Add all notes you desire.',
  actions: [],
};

export const getCardModel = (type: string): ICardModel => {
  switch (type) {
    case 'event':
      return EventCardModel;
    case 'emotion':
      return EmotionCardModel;
    case 'question':
      return QuestionCardModel;
    case 'thought':
      return ThoughtCardModel;
    case 'behavior':
      return BehaviorCardModel;
    case 'coping':
      return CopingCardModel;
    default:
      return NotesCardModel;
  }
};
