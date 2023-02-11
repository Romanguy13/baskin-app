import { CssVarsProvider } from '@mui/joy/styles';
import {render, screen, waitFor, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {graphql} from 'msw'
import {setupServer} from 'msw/node'
import 'whatwg-fetch'
import '../matchMedia';


import Signin from '../../../pages/signin'

const handlers = [
  graphql.query('login', async (req, res, ctx) => {
    const json = await req.json()
    if (json.query.indexOf('molly_member') >= 0) {
      return res(
        ctx.data({
          login: {
            "username": "molly_member",
            "accessToken": "whatever"
          }
        }),
      )
    } else {
      return res(
        ctx.errors ([ {
          "message": "Unexpected error."
        }]),
      )
    }
  })
]

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

jest.mock('next/router', ()=> ({push: jest.fn()}))

const renderView = async () => {
  render(
    <CssVarsProvider>
      <Signin />
    </CssVarsProvider>
  );
};

test('Sucess', async () => {
  renderView()
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  const username = screen.getByPlaceholderText('Enter your username');
  await userEvent.type(username, 'molly_member')
  const passwd = screen.getByPlaceholderText('•••••••');
  await userEvent.type(passwd, 'mollymember')
  fireEvent.click(screen.getByLabelText('signin'))
  await waitFor(() => {
    expect(localStorage.getItem('user')).not.toBe(null)
  });
});

test('Fail', async () => {
  renderView()
  let alerted = false
  window.alert = () => {
    alerted = true
  }
  const username = screen.getByPlaceholderText('Enter your username');
  await userEvent.type(username, 'molly_memb')
  const passwd = screen.getByPlaceholderText('•••••••');
  await userEvent.type(passwd, 'mollymember')
  fireEvent.click(screen.getByLabelText('signin'))
  await waitFor(() => {
    expect(alerted).toBe(true)
  })
  expect(localStorage.getItem('user')).toBe(null)
});
