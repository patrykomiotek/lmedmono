import { AxiosError } from 'axios';

type OperationResult<T> =
  | {
      success: true;
      data: T | null;
    }
  | {
      success: false;
      error: string;
      details?: string;
    };

// Actions (frontend)
// Queries / Commands (business logic)

type LoginInput = {
  email: string;
  password: string;
};

// orchestration
export const loginAction = ({ email, password }: LoginInput) => {
  return loginCommand({ email, password });
};

// logic
export const loginCommand = ({
  email,
  password,
}: LoginInput): OperationResult<{ publicId: string }> => {
  try {
    // axios.post('https://login.com', { email, password })

    // eslint-disable-next-line no-constant-condition
    if (true) {
      return { success: true, data: { publicId: '12345678 ' } };
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      // error.code 401 | error.message 20345
      return { success: false, error: 'Auth error' };
    }

    return { success: false, error: 'Auth error' };
  }
};
