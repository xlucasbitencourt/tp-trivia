import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {renderWithRouterAndRedux} from './helpers/renderWithRouterAndRedux'
import Feedback from '../pages/Feedback.js';

describe('Testa o componente Feedback', ()=> {
    test('Testa se os elementos são renderizados corretamente', ()=>{
        renderWithRouterAndRedux(<Feedback/>)
        const avatarImg = screen.getByRole('img')
        const userName = screen.getByText('Anonimo')
        const score = screen.getByTestId('header-score')
        const scoreMsg = screen.getByText('Could be better...')
        const totalScore = screen.getByTestId('feedback-total-score')
        const totalCorrectAnswers = screen.getByTestId('feedback-total-question')
        const rankingLink = screen.getByRole('link', {name: /ranking/i})
        const playAgainLink = screen.getByRole('link', {name: /play again/i})
        // --------------------------------------------------------------- //
        expect(avatarImg).toBeInTheDocument()
        expect(userName).toBeInTheDocument()
        expect(score).toBeInTheDocument()
        expect(scoreMsg).toBeInTheDocument()
        expect(totalScore).toBeInTheDocument()
        expect(totalCorrectAnswers).toBeInTheDocument()
        expect(rankingLink).toBeInTheDocument()
        expect(playAgainLink).toBeInTheDocument()
    })
})