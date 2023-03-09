import { render } from '@testing-library/react';
import Favicon from '../../../components/Favicon';
import '../matchMedia';

const renderView = async () => {
  render(<Favicon />);
};

jest.mock('@mui/joy', () => ({
  useColorScheme: () => ({ systemMode: undefined }),
}));

test('Renders', async () => {
  renderView();
});
