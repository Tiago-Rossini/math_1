import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perguntaAtual = 0;
  score = 0;
  correct = false;
  showAnswer = false;

  quiz = [
    {
      question: 'Se uma pizza é dividida em 8 pedaços e eu como 3 pedaços, quantos pedaços ainda restam?',
      options: ['10', '8', '5', '4'],
      answer: 2,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',

    },

    {

      question: 'Se você tem uma caixa com 24 figurinhas e coloca 6 figurinhas em cada saquinho, quantos saquinhos você vai precisar?',
      options: ['6', '4', '10', '5'],
      answer: 1,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se um pacote de lápis contém 12 lápis e você tem 3 desses pacotes, quantos lápis você tem ao todo?',
      options: ['60', '36', '10', '20'],
      answer: 1,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se uma turma tem 25 alunos e 14 deles foram para uma excursão, quantos alunos ainda estão na sala de aula?',
      options: ['25', '9', '15', '11'],
      answer: 3,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se você tem 36 bolinhas e coloca mais 4 no saco, quantas bolinhas você tem ao todo?',
      options: ['40', '30', '65', '10'],
      answer: 0,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se um pacote de balas tem 50 balas e você ganha mais 20, quantas balas tem no total?',
      options: ['90', '120', '70', '40'],
      answer: 2,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se há 50 chocolates e você deseja colocá-los em caixas com 5 chocolates em cada uma, quantas caixas você precisará?',
      options: ['40', '15', '20', '10'],
      answer: 3,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se João tem 30 bolinhas e dá metade delas para sua amiga Maria, com quantas bolinhas João ficará?',
      options: ['2', '40', '5', '15'],
      answer: 3,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se um aquário tem 40 peixes e 20 deles são peixes coloridos, quantos peixes não são coloridos?',
      options: ['20', '40', '15', '30'],
      answer: 0,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    },

    {

      question: 'Se você tem 80 livros e decide colocar 40 deles em cada prateleira, quantas prateleiras você precisará?',
      options: ['1', '2', '5', '10'],
      answer: 1,
      feedbackCorrect: 'Parabéns!',
      feedbackIncorrect: 'Ops! Você errou, vá para a próxima questão',


    }

  ];

  answer(option: number) {
    if (this.showAnswer) {
      return; // Impede que o usuário responda novamente
    }

    if (option === this.quiz[this. perguntaAtual].answer) {
      this.score++;
      this.correct = true;
    } else {
      this.correct = false;
    }
    this.showAnswer = true;
  }

  nextQuestion() {
    this.perguntaAtual ++;
    this.showAnswer = false;
  }
}
