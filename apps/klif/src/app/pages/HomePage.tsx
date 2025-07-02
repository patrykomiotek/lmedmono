import { logger } from '../../logger/logger';
import { Counter } from '../features/registration/Counter';

export const HomePage = () => {
  const handleClick = () => {
    logger.info('Hello!');

    try {
      throw new Error('Hello!');
    } catch (err) {
      logger.error({ err }, 'Oh no!');
    }
  };

  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <p>hello from home?</p>
      <button onClick={handleClick}>Click me</button>
      <Counter />
    </div>
  );
};
