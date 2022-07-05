import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithRouterAndRedux} from './renderWithRouterAndRedux.js'
// import Login from '../../pages/Login';
import App from '../../App'

test('Testa se todos os elementos estão na tela', async ()=> {
    const {history} = renderWithRouterAndRedux(<App/>)
    const triviaImg = screen.getByAltText('logo')
    const suaVez = screen.getByText(/sua vez/i)
    const inputNameEl = screen.getByPlaceholderText('Nome')
    const inputEmailEl = screen.getByPlaceholderText('Email')
    const playBtn = screen.getByRole('button', {name: /play/i})
    const settingsBtn = screen.getByRole('link', {name: /settings/i})
    expect(triviaImg).toBeInTheDocument()
    expect(suaVez).toBeInTheDocument()
    expect(inputNameEl).toBeInTheDocument()
    expect(inputEmailEl).toBeInTheDocument()
    expect(playBtn).toBeInTheDocument()
    expect(settingsBtn).toBeInTheDocument()
    expect(playBtn).toHaveAttribute('disabled')
    userEvent.type(inputNameEl, 'Fábio')
    userEvent.type(inputEmailEl, 'fabio@email.com')
    expect(inputNameEl).toHaveValue('Fábio')
    expect(inputEmailEl).toHaveValue('fabio@email.com')
    expect(playBtn).not.toHaveAttribute('disabled')
    await userEvent.click(playBtn)
    // expect(history.location.pathname).toBe('game')
    const spanName = await screen.findByText('Fábio')
    expect(spanName).toBeInTheDocument()
  
})
