import Modal from 'react-modal'
import { Container, TransactionsTypeContainer, RadioBox } from './styled';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Image from 'next/image';
import { useState } from 'react';

interface NewTransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [type, setType] = useState('deposit');

  return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

      <button 
      type='button' 
      onClick={onRequestClose}
      className="react-modal-close"
      
      >
        <Image src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input 
        placeholder='Titulo'
        />

        <input 
        type="number" 
        placeholder='Valor'
        />

        <TransactionsTypeContainer>

          <RadioBox 
          type='button'
          onClick={() => {setType('deposit'); }}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <Image src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type='button'
          onClick={() => setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"
          >
            <Image src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionsTypeContainer>

        <input 
        placeholder='Categoria'
        />

        <button type='submit'>
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}