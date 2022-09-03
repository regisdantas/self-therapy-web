export const getPlaceholder = (type: string): string => {
  switch (type) {
    case 'event':
      return 'Describe the event or situation that driven you to think and/or feel the way you want to evaluate.';
    case 'emotion':
      return 'Write and describe an emotion you felt during this event.';
    case 'question':
      return 'Select a question and answer to go deep in the reasons and root cause of these feelings and behaviors.';
    case 'thought':
      return 'Write and describe an automatic thought or response you had during the event.';
    case 'behavior':
      return 'Write and describe a behavior you had during the event..';
    case 'coping':
      return 'Write here positive thoughts, reflections and strategies to read during an ocasional event similar to this.';
    default:
      return 'Add all notes you desire.';
  }
};

export const getTitle = (type: string): string => {
  switch (type) {
    case 'event':
      return 'Event or Situation';
    case 'emotion':
      return 'Emotion';
    case 'question':
      return 'Questioning Card';
    case 'thought':
      return 'Automatic Thought';
    case 'behavior':
      return 'Behavior';
    case 'coping':
      return 'Coping Card';
    default:
      return 'Notes';
  }
};
export interface IActions {
  name: string;
  type: string;
}

const newEmotion = {
  name: 'I felt',
  type: 'emotion',
};

const newBehavior = {
  name: 'I acted like',
  type: 'behavior',
};

const newThought = {
  name: 'I thought',
  type: 'thought',
};

const newQuestion = {
  name: `Let's question`,
  type: 'question',
};

export const getActions = (type: string): IActions[] => {
  switch (type) {
    case 'event':
      return [newEmotion, newBehavior, newThought];
    case 'emotion':
      return [newQuestion];
    case 'question':
      return [];
    case 'thought':
      return [newQuestion];
    case 'behavior':
      return [newQuestion];
    case 'coping':
      return [];
    default:
      return [];
  }
};

export const getColor = (type: string): string => {
  switch (type) {
    case 'event':
      return '#ff0000';
    case 'emotion':
      return '#ff0000';
    case 'question':
      return '#00ff00';
    case 'thought':
      return '#0000ff';
    case 'behavior':
      return '#777777';
    case 'coping':
      return '#ff0000';
    default:
      return '#ff0000';
  }
};
